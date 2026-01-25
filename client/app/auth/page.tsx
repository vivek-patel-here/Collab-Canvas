"use client"
import React, { useEffect, useState } from 'react'
import { supabaseClient } from '@/app/supabase.config'
import { useRouter } from 'next/navigation';
import { EyeClosed, Eye, Loader } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useStore } from '@/context/globalContext';
import { motion } from "motion/react"


function Auth() {
  const router = useRouter();
  const [mail, setMail] = useState("");
  const [pswd, setPswd] = useState("");
  const [pg, setPg] = useState(true); //T->Login | F->Signup
  const [visible, setVisible] = useState(false);
  const { notifyAlert, user, accessToken} = useStore();
  const [wait, setWait] = useState(false);

  const handleSignUp = async () => {
    if (wait) return;
    if (!mail || !pswd) return alert("Both feilds are required!")
    const { data, error } = await supabaseClient.auth.signUp({
      email: mail,
      password: pswd,
      options: {
        emailRedirectTo: process.env.NEXT_PUBLIC_SUPABASE_REDIRECT_URL
      }
    })

    if (error) {
      notifyAlert("Unable to sign up! Try again.")
      return console.error(error);
    }

    router.push('/auth/check-email');
  }

  const handleLogin = async () => {
    if (wait) return;
    if (!mail || !pswd) return alert("Both feilds are required!")
    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email: mail,
      password: pswd,
    })
    if (error) {
      console.error(error);
      return notifyAlert("Wrong or Invalid Credentials");
    }
    router.push("/")
  }

  const handleformSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (wait) return;
    setWait(true);
    if (!pg) await handleSignUp();
    else await handleLogin();
    setMail("");
    setPswd("");
    setWait(false);
  }

  const handlegoogleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const { error } = await supabaseClient.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: process.env.NEXT_PUBLIC_SUPABASE_REDIRECT_URL
      }
    })

    if (error) return notifyAlert("Google login failed ! Try again.")
  }

  useEffect(() => {
    if (user !== null && accessToken!==null) router.push('/');
  }, [user ,accessToken])


  return (
    <div className={cn(
      "w-screen h-screen flex items-center justify-center bg-white text-black transition-all duration-700",
      !pg && "flex-row-reverse"
    )}>
      <div className={cn('flex-1 h-full bg-cover grid place-items-center', pg ? "bg-[url('/_.jpeg')] bg-right" : "bg-[url('/signup.jpeg')] bg-center")} >
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className='w-9/10 h-9/10  bg-black/15 rounded-xl backdrop-blur text-white text-[100px]/tight font-extralight flex flex-col items-center justify-center'>
          <motion.h1 initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className='w-8/10'>{!pg ? "Let's Get" : "Welcome "}</motion.h1>
          <motion.h1 initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className='w-8/10'>{!pg ? "Started !" : "back !"}</motion.h1>

        </motion.div>
      </div>
      <div className="w-1/2 h-full flex items-center justify-center s">
        <div className='w-8/10 h-fit border py-5 px-5 rounded-xl bg-white/5 backdrop-blur-sm'>

          <form onSubmit={handleformSubmit}>
            <motion.h1 initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className='text-5xl mb-3 font-semibold text-black/80'>{pg ? "Login" : "Signup"} to Collab Canvas</motion.h1>
            <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1 }} className='text-xs text-neutral-500 mb-5'>All feilds are required<span className='text-orange-600 text-sm'>*</span></motion.p>
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.2 }} className='h-20 w-full max-w-100 flex flex-col '>
              <label htmlFor="node-1-email" className=' text-sm mb-2'>Email</label>
              <input id='node-1-email' type='email' placeholder='Enter your email' className='text-sm w-full border border-neutral-100 outline-0  h-10 px-2 rounded' value={mail} onChange={(e) => { setMail(e.target.value) }} />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.3 }} className='h-fit w-full max-w-100'>
              <label htmlFor="node-2-password" className=' text-sm mb-2'>Password</label>
              <div className='flex items-center justify-between w-full border border-neutral-100 h-10 pl-2 pr-1 mt-1 rounded'>
                <input type={visible ? "text" : "password"} id='node-2-password' placeholder='Enter your password' className='flex-1 text-sm outline-0 h-full' value={pswd} onChange={(e) => setPswd(e.target.value)} />
                <span className='cursor-pointer'>
                  {!visible ? <EyeClosed size={16} onClick={() => setVisible(true)} /> : <Eye size={16} onClick={() => setVisible(false)} />}
                </span>
              </div>
              {pg && <p className='text-blue-500 text-sm  cursor-pointer flex items-center justify-end text-end w-full h-8 mt-2'><span className='hover:underline'>Forgot password?</span></p>}
            </motion.div>

            <motion.button initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.3 }} type='submit' className=' cursor-pointer text-sm  text-white w-full max-w-100 h-10 my-3 rounded-md bg-black flex items-center justify-center '>{!wait ? (pg ? "Login" : "Signup") : <Loader size={18} className='animate-spin' />}</motion.button>
          </form>

          <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.4 }} className='text-xs mb-3'>Or continue with</motion.p>
          <motion.button initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.4 }} onClick={handlegoogleLogin} className='border font-bold text-center text-sm borde-white w-50 h-10 rounded-md  hover:bg-black/10 cursor-pointer bg-black/5 text-black transition-colors duration-300'>
            Google
          </motion.button>

          <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.4 }} className='w-full text-neutral-500 text-start mt-5 text-sm'>{pg ? "Don't" : "Already"} have an account ? <span onClick={() => {
            setPg((prev) => !prev)
          }} className='font-semibold hover:underline cursor-pointer text-neutral-500 hover:text-black/70'> {pg ? " Signup" : " Login"}</span></motion.p>
        </div>
      </div>
    </div>
  )
}

export default Auth


