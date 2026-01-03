"use client"
import { useStore } from '@/context/globalContext';
import { HomeIcon, Palette, Settings,Video } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Link from 'next/link';
import { supabaseClient } from '@/app/supabase.config';
import { useRouter } from 'next/navigation';
import { GlowingEffect } from "@/components/ui/glowing-effect";




function NavItem({ Icon, size, label }: { Icon: any, size: number, label: string }) {
  return <Tooltip >
    <TooltipTrigger><Icon size={size} /></TooltipTrigger>
    <TooltipContent>
      <p>{label}</p>
    </TooltipContent>
  </Tooltip>
}


function Navbar() {
  const router = useRouter();
  const { user }= useStore()
  const navlinks = [{
    Icon: HomeIcon,
    size: 16,
    label: "Home",
    state: 1,
    href: "/"
  }, {
    Icon: Video,
    size: 16,
    label: "Meeting",
    state: 1,
    href: "/meet"
  }, {
    Icon: Palette,
    size: 16,
    label: "Canvas",
    state: 1,
    href: "/canvas"
  }, {
    Icon: Settings,
    size: 16,
    label: "Setting",
    state: 1,
    href: "/setting"
  }]


  const logouthandler = async () => {
    const { error } = await supabaseClient.auth.signOut();
    if (error) return alert("Unable to Logout !");
    return router.push("/")
  }

  return (
    <nav className='flex items-center  justify-center h-15 px-3 w-90 border  absolute top-15 rounded-full z-10 left-1/2 -translate-1/2 bg-neutral-950 '>
      <GlowingEffect
        blur={0}
          borderWidth={2}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
      />
      <ul className='flex gap-10 items-center h-full  justify-center w-full '>
        {
          navlinks.map((item, id) => {
            return <li className='cursor-pointer' key={id}>
              <Link href={item.href}>
                <NavItem Icon={item.Icon} size={item.size} label={item.label} />
              </Link>
            </li>
          })
        }
       {user ? <button className='cursor-pointer text-[12px]  bg-white text-black py-1 rounded-full px-3' onClick={logouthandler}>Logout</button>:
        <button className='cursor-pointer text-[12px] font-bold bg-white text-black py-1 rounded-full px-3' onClick={()=>router.push("/auth")}>Login</button>}
      </ul>
    </nav>
  )
}

export default Navbar