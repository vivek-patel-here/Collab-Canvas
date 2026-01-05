import React from 'react'

function Footer() {
  return (
    <div className='w-full h-30 flex justify-between px-10 items-center'>
        <p>&copy; Collab Canvas. All rights reserved.</p>
        <div className='flex text-xs gap-4'>
            <p>Privacy Policy</p>
            <p>Terms of service</p>
            <p>Cookie Setting</p>
        </div>
    </div>
  )
}

export default Footer