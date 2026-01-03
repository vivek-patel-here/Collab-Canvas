"use client"
import {  useEffect } from "react";
import { useRouter } from "next/navigation"; 

export default  function CheckEmail() {
  const router=useRouter();
  useEffect(()=>{
    setTimeout(()=>{
      router.push("/");
    },10000)
  },[])
  return (
   <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-black  to-neutral-950 px-4">
  <div className="w-full max-w-md rounded-2xl border border-neutral-800 bg-white/5 p-8 text-center shadow-xl backdrop-blur">
  <h1 className="mb-2 text-2xl font-semibold tracking-tight text-white">Collab Canvas</h1>
    <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l9 6 9-6m-18 8h18V8H3v8z"
        />
      </svg>
    </div>

    <h1 className="mb-2 text-md font-semibold tracking-tight text-white">
      Check your email
    </h1>

    <p className="text-sm leading-relaxed text-neutral-400">
      We’ve sent a verification link to your email address.
      <br />
      Click the link to activate your account.
    </p>

    <p className="mt-6 text-xs text-neutral-500">
      Didn’t receive the email? Check your spam folder or try again.
    </p>
  </div>
</div>

  );
}
