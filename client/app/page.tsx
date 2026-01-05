"use client"
import Navbar from '@/components/custom/navbar';
import Hero from '@/components/custom/hero';
import Feature from '@/components/custom/feature';
import Usage from '@/components/custom/Usage';
import Feedback from '@/components/custom/feedback';
import Stats from '@/components/custom/Stat';
import CTA from '@/components/custom/CTA';
import FAQ from '@/components/custom/FAQ';

function Home() {

  return (
    <div className='min-h-screen w-screen bg-black text-white relative'>
     <Navbar/>
     <Hero/>
     <Feature/>
     <Usage/>
     <Feedback/>
     <Stats/>
     <CTA/>
     <FAQ/>
    </div>
  )
}

export default Home