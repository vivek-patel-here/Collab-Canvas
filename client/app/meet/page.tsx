"use client"
import Navbar from '@/components/custom/navbar'
import { Copy, CheckCheck } from 'lucide-react'
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Record from '@/components/custom/record';
import { useStore } from '@/context/globalContext';
import Loader from '@/components/kokonutui/loader';
import { useRouter } from 'next/navigation';

function Meeting() {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [copy, setCopy] = useState(false);
  const [joinCode, setJoinCode] = useState("");
  const { accessToken ,notifyAlert,url} = useStore();

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
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
      setCode(parsedResp.code);
    } catch (err) {
      console.error(err);
    }
  }

  const joinMeet = async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    try{
      const resp = await fetch(`${url}/meeting/join/${joinCode}`,{
        method :"POST",
        headers:{
          "content-type" :"application/json",
          "authorization" :`Bearer ${accessToken}`
        }
      });

      const parsedResp = await resp.json();
      if(!resp.ok) return notifyAlert("Invalid meeting Code");
      router.push(`/meet/join/${joinCode}`);

    }catch(err){
      console.error(err);
    }
  }

  return (
    <div className='bg-black min-h-screen w-screen relative text-white'>
      <Navbar />
      <div className='h-60 w-full flex flex-col items-center pt-30 '>
        <h1 className='text-5xl font-semibold mb-5'>Collab Canvas — <span className='bg-white/5 px-2 py-1  rounded-xl'>Meetings</span></h1>
        <p className=' text-neutral-400 font-semibold'>Design. Discuss. Build — Together. In Real Time.</p>
      </div>

      <div className='w-full h-fit flex '>

        <div className=' h-50 flex-1 px-10'>
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
                  {!copy ? <Copy size={15} onClick={copyCode} /> : <CheckCheck size={18} className='text-emerald-500' />}
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
            <button className='text-white cursor-pointer'>Join</button>
          </form>
        </div>
      </div>


      <div className='w-screen h-fit flex flex-col items-center gap-10'>
        <p className='text-3xl font-bold '>Previous Meetings Record</p>
        <Record />

      </div>

    </div>
  )
}

export default Meeting





