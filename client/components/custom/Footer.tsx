"use client"
import React from 'react'
import Seperator from './Seperator'


function Footer() {
  return (
    <>
    <Seperator/>
    <div className='w-full h-20 flex justify-between px-10 bg-black items-center' id='contact_detail'>
        <p>&copy; Collab Canvas. All rights reserved.</p>
        <div className='flex text-xs gap-4'>
            <p>Privacy Policy</p>
            <p>Terms of service</p>
            <p>Cookie Setting</p>
        </div>
    </div>
    </>

  )
}

export default Footer