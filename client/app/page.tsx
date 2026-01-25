"use client"
import Navbar from '@/components/custom/navbar';
import Hero from '@/components/custom/hero';
import Feature from '@/components/custom/feature';
import Usage from '@/components/custom/Usage';
import Feedback from '@/components/custom/feedback';
import Stats from '@/components/custom/Stat';
import FAQ from '@/components/custom/FAQ';
import Seperator from '@/components/custom/Seperator';

function Home() {

  return (
    <div className='min-h-screen w-screen bg-black text-white relative'>
     <Navbar/>
     <Hero/>
     <Seperator/>
     <Feature/>
     <Seperator/>
     <Usage/>
     <Seperator/>
     <Feedback/>
     <Seperator/>
     <Stats/>
     <Seperator/>

     <FAQ/>
    </div>
  )
}

export default Home