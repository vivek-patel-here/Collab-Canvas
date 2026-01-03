"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabaseClient } from "@/app/supabase.config";


export default function VerifyPage() {
    const router = useRouter();
    useEffect(() => {
        const hashParams = new URLSearchParams(window.location.hash.substring(1));
        const access_token: string = hashParams.get("access_token") ?? "";
        const refresh_token: string = hashParams.get("refresh_token") ?? "";
        supabaseClient.auth.setSession({
            access_token,
            refresh_token,
        }).then(() => {
            router.push("/");
        })
    }, [])
    return (<div className="flex min-h-screen items-center justify-center bg-linear-to-br from-black to-neutral-950 px-4">
  <div className="w-full max-w-md rounded-2xl border border-neutral-800 bg-white/10 p-8 text-center shadow-xl backdrop-blur">
    <h1 className="mb-2 text-2xl font-semibold tracking-tight text-white">
      Collab Canvas
    </h1>
    <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-blue-500/10">
      <svg
        className="h-7 w-7 animate-spin text-blue-400"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        />
      </svg>
    </div>

    <h1 className="mb-2 text-md font-semibold tracking-tight text-white">
      Verifying your email
    </h1>

    <p className="text-sm text-neutral-400">
      Please wait while we confirm your email address.
    </p>

    <p className="mt-6 text-xs text-neutral-500">
      This usually takes just a few seconds.
    </p>

  </div>
</div>)
}
