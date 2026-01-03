"use client"
import React, { useState } from 'react'
import { supabaseClient } from '@/app/supabase.config'
import { useRouter } from 'next/navigation';
import SlideTextButton from '@/components/kokonutui/slide-text-button';
import { EyeClosed, Eye } from 'lucide-react';
import { cn } from '@/lib/utils';

function Auth() {
  const router = useRouter();
  const [mail, setMail] = useState("");
  const [pswd, setPswd] = useState("");
  const [pg, setPg] = useState(true); //T->Login | F->Signup
  const [visible, setVisible] = useState(false);

  const handleSignUp = async () => {
    if (!mail || !pswd) return alert("Both feilds are required!")
    const { data, error } = await supabaseClient.auth.signUp({
      email: mail,
      password: pswd,
      options: {
        emailRedirectTo: process.env.NEXT_PUBLIC_SUPABASE_REDIRECT_URL
      }
    })

    if (error) return console.error(error);
    else router.push('/auth/check-email');
  }

  const handleLogin = async () => {
    if (!mail || !pswd) return alert("Both feilds are required!")
    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email: mail,
      password: pswd,
    })
    if (error) return alert("Wrong or Invalid Credentials");
    else router.push("/")
  }

  const handleformSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!pg) handleSignUp();
    else handleLogin();
    setMail("");
    setPswd("");
  }

  const handlegoogleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const { error } = await supabaseClient.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: process.env.NEXT_PUBLIC_SUPABASE_REDIRECT_URL
      }
    })
  }


  return (
    <div className={cn(
    "w-screen h-screen flex items-center justify-center bg-black text-white transition-all duration-700",
    !pg && "flex-row-reverse"
  )}>
      <div className={cn('flex-1 h-full bg-cover ' , pg ? "bg-[url('/login.jpeg')] bg-right":"bg-[url('/signup.jpg')] bg-center")}>
      </div>
      <div className="w-130 h-full flex items-center justify-center s">
        <div className='w-fit h-fit border py-5 px-5 rounded-xl bg-white/5 backdrop-blur-sm'>

          <form onSubmit={handleformSubmit}>
            <h1 className='text-3xl mb-3 font-semibold text-neutral-200'>{pg ? "Login" : "Signup"} to Collab Canvas</h1>
            <p className='text-xs text-neutral-500 mb-5'>All feilds are required<span className='text-orange-600 text-sm'>*</span></p>
            <div className='h-20 w-100 flex flex-col '>
              <label htmlFor="node-1-email" className=' text-sm mb-2'>Email</label>
              <input id='node-1-email' type='email' placeholder='Enter your email' className='text-sm w-full border border-neutral-500 outline-0  h-10 px-1 rounded' value={mail} onChange={(e)=>{setMail(e.target.value)}}/>
            </div>

            <div className='h-fit w-100 '>
              <label htmlFor="node-2-password" className=' text-sm mb-2'>Password</label>
              <div className='flex items-center justify-between w-full border border-neutral-500 h-10 px-1 mt-1 rounded'>
                <input type={visible ? "text" : "password"} id='node-2-password' placeholder='Enter your password' className='flex-1 text-sm outline-0 h-full' value={pswd} onChange={(e)=>setPswd(e.target.value)} />
                <span>
                  {!visible ? <EyeClosed size={20} onClick={() => setVisible(true)} /> : <Eye size={20} onClick={() => setVisible(false)} />}
                </span>
              </div>
             {pg && <p className='text-blue-500 text-sm hover:underline cursor-pointer text-end w-100 h-6 my-1'>Forgot password?</p>}
            </div>

            <button className=' cursor-pointer text-black bg-white  w-100 h-10 my-5 rounded hover:bg-neutral-200'>{pg? "Login" : "Signup"}</button>
          </form>
          <p className='w-96 text-neutral-500 text-center my-5 text-sm'>{pg ? "Don't":"Already"} have an account? <span onClick={()=>{
            setPg((prev)=>!prev)
          }} className='font-semibold hover:underline cursor-pointer text-neutral-200 hover:text-white'> {pg ? " Register" : " Login"}</span></p>
          <p className='text-xs mb-3'>Continue with</p>
          <SlideTextButton onClick={handlegoogleLogin} className='border borde-white' text='Google' hoverText='Google' />
        </div>
      </div>
    </div>
  )
}

export default Auth


