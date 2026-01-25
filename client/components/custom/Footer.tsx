"use client"
import React from 'react'
import Seperator from './Seperator'
import { Linkedin,Mail,Github , Phone } from 'lucide-react'


function Footer() {
  return (
    <>
    <Seperator/>
   <footer className="w-full border-t border-white/10 bg-black px-10 py-8 text-white/70" id='contact_detail'>
  <div className="mx-auto max-w-7xl flex flex-col gap-6">

    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">


      <div>
        <h2 className="text-white text-lg font-semibold">
          Collab Canvas
        </h2>
        <p className="text-xs my-1 text-white/50">
          Design. Discuss. Build — together in real time.
        </p>
      </div>


      <div className="flex items-center gap-3 text-sm">
        <a
          href="https://www.linkedin.com/in/vivek-patel2004/"
          target="_blank"
          className="hover:text-white transition flex items-center gap-1"
        >
          <Linkedin size={15}/> LinkedIn
        </a>

        <li className='list-disc mx-5'/>

        <a
          href="https://github.com/vivek-patel-here/Collab-Canvas"
          target="_blank"
          className="hover:text-white transition flex items-center gap-1"
        >
          <Github size={15}/> GitHub
        </a>
        <li className='list-disc mx-5'/>

        <a
          href="mailto:vivek.patel.1057@gmail.com"
          className="hover:text-white transition flex items-center gap-1"
        >
          <Mail size={15}/> Email
        </a>
        <li className='list-disc mx-5'/>

        <a
          href="tel:+918595818416"
          className="hover:text-white transition flex items-center gap-1"
        >
          <Phone size={15}/>
          +91 85958 18416
        </a>
      </div>
    </div>

    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-white/50">

      <p>&copy; 2026 Collab Canvas. All rights reserved.</p>

      <div className="flex gap-4">
        <button className="hover:text-white transition">
          Privacy Policy
        </button>
        <button className="hover:text-white transition">
          Terms of Service
        </button>
        <button className="hover:text-white transition">
          Cookie Settings
        </button>
      </div>
    </div>
  </div>
</footer>

    </>

  )
}

export default Footer