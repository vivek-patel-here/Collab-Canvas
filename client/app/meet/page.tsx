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
import { motion } from "motion/react";

export default function Meeting() {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [copy, setCopy] = useState(false);
  const [joinCode, setJoinCode] = useState("");
  const { accessToken, notifyAlert,user, url, fetchAllUserMeeting, meetList } = useStore();
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

  const createMeet = async () => {
    if(user===null || accessToken===null) {
      router.push("/auth");
      return notifyAlert("Please Login first to start new meeting.");
    }
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
    if(user===null || accessToken===null) {
      router.push("/auth");
      return notifyAlert("Please Login first to start new meeting.");
    }
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
    } finally {
      setWait(false);
    }
  }

  const deleteMeetInfo = async (id: string, setWait: any) => {
    try {
      setWait(true);
      const response = await fetch(`${url}/meeting/destroy/${id}`, {
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
    <div className='bg-black text-white min-h-screen w-screen relative flex flex-col items-center gap-6 '>
      <Navbar />
      <div className='h-60 w-9/10 flex flex-col items-start pt-30 '>
        <motion.h1 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.1 }} className='text-5xl mb-3'>Meeting workspace</motion.h1>
        <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.2 }} className=' text-neutral-400 text-sm font-light'>Create, join, and manage real-time collaboration.</motion.p>
      </div>

      <div className='w-9/10 h-64  flex items-between justify-between gap-10'>

        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.3 }} className=' h-full border border-white/10 backdrop-blur-2xl flex flex-row-reverse items-center justify-between flex-1 px-10 bg-white/5 rounded-2xl'>
          <div className='h-full w-1/2 flex flex-col items-start justify-evenly'>
            <h1 className='text-3xl tracking-wider w-full  text-start' >Create a new Session</h1>
            <p className="w-80 text-sm text-neutral-400">
              Start a real-time collaborative workspace. Share the meeting code to invite others instantly.
            </p>
            <Dialog>
              <DialogTrigger><div className='border border-neutral-500 w-80  bg-white text-black cursor-pointer px-3 py-2 rounded' onClick={createMeet}>Create meeting</div></DialogTrigger>
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
          <div className='h-full w-1/2 bg-[url(/meet.gif)] bg-contain bg-no-repeat bg-center opacity-50' />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.3 }} className=' h-full w-fit px-10 border border-white/10 bg-white/5 flex flex-col justify-evenly backdrop-blur-2xl rounded-2xl'>
          <h1 className='text-3xl tracking-wider w-full '>Join a Meeting</h1>

          <p className="w-80 text-sm text-neutral-400">
            Enter a meeting code to join an active session and start collaborating immediately.
          </p>
          <form className='flex w-100 items-center justify-between' onSubmit={joinMeet}>
            <input className='border w-80 p-2 rounded text-sm' placeholder='Enter the meeting Code' value={joinCode} onChange={(e) => setJoinCode(e.target.value)} />
            {!wait ? <button className='text-white cursor-pointer text-sm bg-white/5 border border-white/5 p-2 rounded'>Join</button> : <Loader2 className='animate-spin' />}
          </form>
        </motion.div>

      </div>


      <div className='w-9/10 h-fit flex flex-col items-center'>
        <motion.h3 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.4 }} className='text-2xl font-light w-full '>Recent meetings</motion.h3>
        <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.5 }} className='w-full mt-2 mb-5 text-neutral-500 text-xs'> You can join any active meeting below.<span className='text-orange-600'>*</span> </motion.p>

        {meetList.length > 0 ?
          (meetList.map((meet: any, idx: number) => {
            return <MeetInfoCard key={meet.id} meet={meet} deleteMeetInfo={deleteMeetInfo} />
          })) :
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.5 }} className="h-fit w-full">
            <div className="flex  w-96 flex-col  justify-between rounded-xl border border-white/10 bg-white/5 px-6 py-5">
              <p className="text-white font-medium">
                No previous meetings
              </p>
              <p className="text-sm text-neutral-400">
                Start one now and collaborate in real time.
              </p>
            </div>
          </motion.div>
        }
      </div>

    </div>
  )
}

const MeetInfoCard = ({ meet, deleteMeetInfo }: any) => {
  const router = useRouter();
  const [copy, setCopy] = useState(false);
  const [wait, setWait] = useState(false);
  const { url,user, accessToken, notifyAlert } = useStore();
  const [join, setJoin] = useState(false);
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


  const joinMeet = async () => {
    if(user===null || accessToken===null) {
      router.push("/auth");
      return notifyAlert("Please Login first to start new meeting.");
    }
    setJoin(true);
    try {
      const resp = await fetch(`${url}/meeting/join/${meet.code}`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "authorization": `Bearer ${accessToken}`
        }
      });

      const parsedResp = await resp.json();
      if (!resp.ok) return notifyAlert("Invalid meeting Code");
      router.push(`/meet/join/${meet.code}`);

    } catch (err) {
      console.error(err);
    } finally {
      setJoin(false);
    }
  }

  return <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.5 }}  className="group flex items-center justify-between my-2 gap-6 w-full rounded-2xl 
                bg-white/6 hover:bg-white/9 
                border border-white/8 
                px-6 py-4 transition">

    {/* LEFT: Code + Meta */}
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-3">
        {/* Status dot */}
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />

        {/* Meeting Code */}
        <p className="text-lg font-semibold tracking-wider">
          {meet.code}
        </p>
      </div>

      {/* Date */}
      <p className="text-sm text-white/50">
        Created {formatDate(meet.createdAt)}
      </p>
    </div>

    {/* RIGHT: Actions */}
    <div className="flex items-center gap-10">

      {/* Join (Primary CTA) */}
      {!join ? <button className="px-4 cursor-pointer py-1.5 rounded-lg bg-white text-black text-sm font-medium hover:bg-white/90 transition" onClick={() => joinMeet()}>
        Join
      </button> : <Loader2 className='animate-spin' />}

      {/* Copy Code */}
      <button
        onClick={() => copyCode(meet.code)}
        className="flex items-center gap-2 text-sm text-white/70 
                 hover:text-white transition cursor-pointer"
      >
        {!copy ? (
          <>
            <Copy size={14} />
            {"Copy"}
          </>
        ) : (
          <>
            <CheckCheck size={16} className="text-emerald-400" />
            Copied
          </>
        )}
      </button>

      {/* Delete (Subtle, appears on hover) */}
      <button
        onClick={() => deleteMeetInfo(meet.id, setWait)}
        className="text-red-400 hover:text-red-500 transition cursor-pointer"
      >
        {!wait ? (<span className='text-sm  flex items-center justify-center gap-1'>

          <Trash size={16} /> {" Delete"} </span>
        ) : (
          <LoaderCircle size={16} className="animate-spin" />
        )}
      </button>
    </div>
  </motion.div>

}








