import React from 'react'
import Navbar from '@/components/custom/navbar';
import CanvasBoard from '@/components/custom/CanvasComponents/CanvasBoard';
import { LocalCanvasContexProvider } from '@/context/localCanvasContextProvider';

function Canvas() {
  return (
    <div className='bg-white min-h-screen w-screen relative text-white'>
      <LocalCanvasContexProvider>
        <Navbar />
        <CanvasBoard />
      </LocalCanvasContexProvider>

    </div>
  )
}

export default Canvas;