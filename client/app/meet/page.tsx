"use client"
import Navbar from '@/components/custom/navbar'
import { Copy, CheckCheck, Trash, LoaderCircle, Loader2 } from 'lucide-react'
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useStore } from '@/context/globalContext';
import Loader from '@/components/kokonutui/loader';
import { useRouter } from 'next/navigation';

function Meeting() {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [copy, setCopy] = useState(false);
  const [joinCode, setJoinCode] = useState("");
  const { accessToken, notifyAlert, url, fetchAllUserMeeting, meetList } = useStore();
  const [wait,setWait] = useState(false);

  const copyCode = async (txt: string) => {
    try {
      await navigator.clipboard.writeText(txt);
      setCopy(true);
      setTimeout(() => {
        setCopy(false);
      }, 1000)
    } catch (err) {
      console.error(err);
    }
  }

  const createMeet = async () => {
    try {
      const resp = await fetch(`${url}/meeting/new`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "authorization": `Bearer ${accessToken}`
        }
      });

      const parsedResp = await resp.json();
      await fetchAllUserMeeting();
      setCode(parsedResp.code);
    } catch (err) {
      console.error(err);
    }
  }

  const joinMeet = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setWait(true);
    try {
      const resp = await fetch(`${url}/meeting/join/${joinCode}`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "authorization": `Bearer ${accessToken}`
        }
      });

      const parsedResp = await resp.json();
      if (!resp.ok) return notifyAlert("Invalid meeting Code");
      router.push(`/meet/join/${joinCode}`);

    } catch (err) {
      console.error(err);
    }finally{
      setWait(false);
    }
  }

  const deleteMeetInfo = async (id: string, setWait: any) => {
    try {
      setWait(true);
      const response = await fetch(`${url}/meeting/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          "authorization": `Bearer ${accessToken}`
        }
      })
      if (!response.ok) return notifyAlert("Unable to delete this meeting.")

      const parsedResp = await response.json()
      fetchAllUserMeeting();
    } catch (err) {
      console.log("Error ", err);
    } finally {
      setWait(false);
    }
  }

  return (
    <div className='bg-black min-h-screen w-screen relative flex flex-col items-center '>
      <Navbar />
      <div className='h-60 w-8/10 flex flex-col items-start pt-30 '>
        <h1 className='text-5xl font-semibold mb-5'>Collab Canvas — <span className='bg-white/5 px-2 py-1  rounded-xl'>Meetings</span></h1>
        <p className=' text-neutral-400 font-semibold'>Design. Discuss. Build — Together. In Real Time.</p>
      </div>

      <div className='w-8/10 h-fit flex items-between'>

        <div className=' h-50 flex-1 px-10 '>
          <h1 className='text-3xl w-full my-10' >Create a new Meeting</h1>
          <Dialog>
            <DialogTrigger><div className='border border-neutral-500 bg-white text-black cursor-pointer px-3 py-2 rounded' onClick={createMeet}>Create a new Meeting</div></DialogTrigger>
            <DialogContent>
              {code ? <><DialogHeader>
                <DialogTitle>Meeting Room Created. Here's your joining info</DialogTitle>
                <DialogDescription>
                  Share this with the participants you wish to invite to the meeting.
                  We recommend saving it for future reference.
                  Enter the meeting code below to join the session.
                </DialogDescription>
              </DialogHeader>
                <div className='w-full flex items-center justify-between'>
                  <input type="text" className='border py-1 px-2 w-100' readOnly value={code} />
                  {!copy ? <Copy size={15} onClick={() => copyCode(code)} /> : <CheckCheck size={18} className='text-emerald-500' />}
                </div></> : <>
                <DialogTitle>Creating your meeting...</DialogTitle>
                <Loader title='Creating your meeting...' subtitle='Please wait while we create a meeting for you' />
              </>
              }
            </DialogContent>
          </Dialog>

        </div>

        <div className=' h-50 flex-1 px-10'>
          <h1 className='text-3xl w-full my-10'>Join a Meeting</h1>
          <form className='flex w-100 items-center justify-between' onSubmit={joinMeet}>
            <input className='border w-80 py-3 px-2' placeholder='Enter the meeting Code' value={joinCode} onChange={(e) => setJoinCode(e.target.value)} />
           {!wait? <button className='text-white cursor-pointer'>Join</button>:<Loader2 className='animate-spin'/>}
          </form>
        </div>

      </div>


      <div className='w-screen h-fit flex flex-col items-center'>
        <h3 className='text-3xl font-bold w-8/10 my-2'>Previous Meetings Record</h3>
        <p className='w-8/10 text-xs'>You can join any of the below meeting all are active.<span className='text-orange-600'>*</span> </p>

        {
          meetList.map((meet: any) => {
            return <MeetInfoCard key={meet.id} meet={meet} deleteMeetInfo={deleteMeetInfo} />
          })
        }
      </div>

    </div>
  )
}

export default Meeting

const MeetInfoCard = ({ meet, deleteMeetInfo }: any) => {
  const [copy, setCopy] = useState(false);
  const [wait, setWait] = useState(false);
  const copyCode = async (txt: string) => {
    try {
      await navigator.clipboard.writeText(txt);
      setCopy(true);
      setTimeout(() => {
        setCopy(false);
      }, 1000)
    } catch (err) {
      console.error(err);
    }
  }

  const formatDate = (date: string) => {
    const newdate = new Date(date);
    const formatted = newdate.toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    return formatted;

  }

  return <div className='flex my-5 items-center justify-between w-8/10'>
    <p>Code : {meet.code}</p>
    <p>{formatDate(meet.createdAt)}</p>
    <li className='text-blue-500 list-disk'>{"Active"}</li>
    <button onClick={() => copyCode(meet.code)} className='cursor-pointer flex items-center gap-2' >
      Copy Code {!copy ? <Copy size={15} onClick={() => copyCode(meet.code)} /> : <CheckCheck size={18} className='text-emerald-500' />}
    </button>
    <button onClick={() => deleteMeetInfo(meet.id, setWait)} className='cursor-pointer'>
      {!wait ? <Trash className='text-red-500' size={16} /> : <LoaderCircle size={16} className='animate-spin' />}
    </button>
  </div>
}








