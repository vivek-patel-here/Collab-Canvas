"use client"
import React, { useContext, useEffect, useState } from 'react';
import { Shapes, MonitorSmartphone, Upload, SwatchBook, ChevronLeft, Save, List } from "lucide-react";
import { HexColorPicker } from "react-colorful";
import { cn } from '@/lib/utils';
import { systemDesignComponents } from "./wireframeIcons"
import { useCanvas } from '@/context/canvasContext';
import shapeIcon from "./shapesIcon";
import Emoji_Icon from "./emoji_Icon";
import diagrams_Icon from './FlowchartAndDiagramIcon';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useStore } from '@/context/globalContext';




function Sidebar_Toolbox() {
  const [open, setOpen] = useState(false);
  const [heading, setHeading] = useState("Shape");
  const [heading2, setHeading2] = useState("Emoji");
  const [selected, setSelected] = useState(1);
  const [search, setSearch] = useState("");
  const {setCanvasColor, addShape, elements ,setToolboxColor,setGridColor ,toolboxColor ,iconcolor,setIconColor} = useCanvas();
  const [title, setTitle] = useState("");
  const { url, accessToken, notifyAlert } = useStore();
  const [filter, setFilter] = useState(systemDesignComponents);
  const [activeTheme,setActivetheme] = useState("Default");

  useEffect(() => {
    setFilter(systemDesignComponents.filter((icon: { icon: any, keywords: string }) => {
      return icon.keywords.toLowerCase().includes(search.toLowerCase());
    }))
  }, [search])

const themeArray = [
  // 🍁 Autumn
  {
    name: "Autumn",
    canvasColor: "#FFF3E6",
    toolboxColor: "#FF8C42",
    gridColor: "#E6B089",
    iconColor: "#2B1A0F" // deep brown
  },

  // 🌱 Spring
  {
    name: "Spring",
    canvasColor: "#F1FAF4",
    toolboxColor: "#6BCF9B",
    gridColor: "#A8DCC0",
    iconColor: "#1F3D2B" // dark green
  },

  // 🌊 Summer
  {
    name: "Summer",
    canvasColor: "#F0FAFF",
    toolboxColor: "#4FB6E5",
    gridColor: "#9ED6F0",
    iconColor: "#0F2A44" // navy blue
  },

  // ❄️ Winter
  {
    name: "Winter",
    canvasColor: "#F5F7FA",
    toolboxColor: "#CBD5E1",
    gridColor: "#C7CED8",
    iconColor: "#1F2937" // slate gray
  },

  // 🌅 Sunset
  {
    name: "Sunset",
    canvasColor: "#FFF1EB",
    toolboxColor: "#FF6F61",
    gridColor: "#F4B2A8",
    iconColor: "#3B0D0A" // deep wine
  },

  // 🌲 Forest
  {
    name: "Forest",
    canvasColor: "#F4FBF6",
    toolboxColor: "#2F7D5A",
    gridColor: "#9BC9B2",
    iconColor: "#ECFDF5" // soft mint (light icon on dark toolbox)
  },

  // 🌊 Ocean
  {
    name: "Ocean",
    canvasColor: "#EAF7F6",
    toolboxColor: "#1CA7A6",
    gridColor: "#8ED6D5",
    iconColor: "#ECFEFF" // icy cyan
  },

  // 🌾 Desert
  {
    name: "Desert",
    canvasColor: "#FFF6E5",
    toolboxColor: "#D97745",
    gridColor: "#E4B68F",
    iconColor: "#2A1608" // dark sand brown
  },

  // 🌸 Blossom
  {
    name: "Blossom",
    canvasColor: "#FFF1F5",
    toolboxColor: "#E85D75",
    gridColor: "#F1A5B5",
    iconColor: "#3A0A18" // deep rose
  }
  , {
    name: "Aurora",
    canvasColor: "#F4F7FB",
    toolboxColor: "#5B5FEF",
    gridColor: "#C6C8F4",
    iconColor: "#EEF2FF" // soft lavender white
  },

  // 🌋 Lava — Charcoal + Red
  {
    name: "Lava",
    canvasColor: "#FAF5F5",
    toolboxColor: "#9B1C1C",
    gridColor: "#E3B4B4",
    iconColor: "#FFF5F5" // warm white
  },

  // 🌾 Olive — Muted green + earth
  {
    name: "Olive",
    canvasColor: "#F7F9F4",
    toolboxColor: "#6B7F4E",
    gridColor: "#C9D3B8",
    iconColor: "#1F2D16" // deep olive
  },

  // 🌙 Night Sky — Indigo + Slate
  {
    name: "Night Sky",
    canvasColor: "#EEF1F8",
    toolboxColor: "#435B80",
    gridColor: "#B8C0D9",
    iconColor: "#E0E7FF" // pale indigo
  },

  // 🧊 Glacier — Ice blue + steel
  {
    name: "Glacier",
    canvasColor: "#F1F8FB",
    toolboxColor: "#3A6EA5",
    gridColor: "#BFD7EA",
    iconColor: "#F8FBFF" // crisp white
  },

  // 🍇 Grape — Soft violet + wine
  {
    name: "Grape",
    canvasColor: "#F8F4FB",
    toolboxColor: "#6D3A7C",
    gridColor: "#D6C0DD",
    iconColor: "#FDF4FF" // light lavender
  },
   // ☀️ Solar — Bright Yellow Energy
  {
    name: "Solar",
    canvasColor: "#FFFBEA",
    toolboxColor: "#FACC15",
    gridColor: "#E8D98C",
    iconColor: "#3A2A00" // dark amber
  },

  // 🧊 Ice — Clean Cyan / White
  {
    name: "Ice",
    canvasColor: "#F0FCFF",
    toolboxColor: "#67E8F9",
    gridColor: "#BEEAF2",
    iconColor: "#083344" // deep cyan navy
  },

  // 🌸 Sakura — Soft Pink, Strong Contrast
  {
    name: "Sakura",
    canvasColor: "#FFF5F7",
    toolboxColor: "#FB7185",
    gridColor: "#F3B4C0",
    iconColor: "#3F0D1B" // dark rose
  },

  // 🟣 Neon Violet — Creative, Bold
  {
    name: "Neon Violet",
    canvasColor: "#F7F5FF",
    toolboxColor: "#8B5CF6",
    gridColor: "#C7BDF4",
    iconColor: "#1E103F" // deep violet
  },

  // 🌿 Mint — Fresh & Crisp
  {
    name: "Mint",
    canvasColor: "#F0FDF9",
    toolboxColor: "#34D399",
    gridColor: "#A7E6CF",
    iconColor: "#064E3B" // dark teal green
  },

  // 🔥 Flame — Orange / Red Punch
  {
    name: "Flame",
    canvasColor: "#FFF7ED",
    toolboxColor: "#F97316",
    gridColor: "#F0C29C",
    iconColor: "#3B1400" // deep burnt brown
  },
   // 🍋 Citrus — Fresh Yellow + Green
  {
    name: "Citrus",
    canvasColor: "#FFFEF2",
    toolboxColor: "#A3E635",
    gridColor: "#D9F0A3",
    iconColor: "#1A2E05" // deep olive
  },

  // 🧁 Lavender — Soft Purple Calm
  {
    name: "Lavender",
    canvasColor: "#F9F7FF",
    toolboxColor: "#C4B5FD",
    gridColor: "#DDD6FE",
    iconColor: "#2E1065" // deep indigo
  },

  // 🧊 Arctic — White + Cool Blue
  {
    name: "Arctic",
    canvasColor: "#F8FAFC",
    toolboxColor: "#60A5FA",
    gridColor: "#C7DBF7",
    iconColor: "#0A2540" // steel blue
  },

  // 🌺 Hibiscus — Pink + Magenta
  {
    name: "Hibiscus",
    canvasColor: "#FFF5F9",
    toolboxColor: "#EC4899",
    gridColor: "#F3B6CF",
    iconColor: "#4A0A23" // deep berry
  },

  // 🟠 Apricot — Soft Orange Cream
  {
    name: "Apricot",
    canvasColor: "#FFF8F1",
    toolboxColor: "#FB923C",
    gridColor: "#F4C9A6",
    iconColor: "#3B1D06" // warm brown
  },

  // 🌊 Lagoon — Turquoise + Aqua
  {
    name: "Lagoon",
    canvasColor: "#F0FDFA",
    toolboxColor: "#2DD4BF",
    gridColor: "#9EE7DB",
    iconColor: "#042F2E" // deep teal
  }
];

  const selectShapes = (id: any) => {
    if (open && selected === id) {
      setOpen(false);
      return;
    }
    setOpen(true);
    setSelected(id);
    setHeading("Shapes");
    setHeading2("Emoji");
  }

  const selectWireframe = (id: any) => {
    if (open && selected === id) {
      setOpen(false);
      return;
    }
    setOpen(true);
    setSelected(id);
    setHeading("Diagrams");
    setHeading2("Wireframe");
  }

  const selectTheme = (id: any) => {
    if (open && selected === id) {
      setOpen(false);
      return;
    }
    setOpen(true);
    setSelected(id);
    setHeading("Board Theme");
    setHeading2("");
  }

  const selectOption = (id: any) => {
    if (open && selected === id) {
      setOpen(false);
      return;
    }
    setOpen(true);
    setSelected(id);
    setHeading("Export canvas to");
    setHeading2("");
  }


  const icons = [
    { id: 1, icon: Shapes, text: "Shapes", func: selectShapes },
    { id: 2, icon: MonitorSmartphone, text: "Wireframe", func: selectWireframe },
    { id: 3, icon: SwatchBook, text: "Themes", func: selectTheme },
  ]


  const saveCanvas = async () => {
    if (title.trim() === "") return alert("Please enter a title for your canvas.");
    const response = await fetch(`${url}/canvas/save`, {
      method: 'POST',
      headers: {
        "content-type": "application/json",
        "authorization": `Bearer ${accessToken}`
      }, body: JSON.stringify({
        title,
        elements
      })
    })

    const parsedResp = await response.json();
    if (!response.ok) {
      console.error(parsedResp);
      notifyAlert(parsedResp.message);
    }

    notifyAlert("Canvas saved!");
  }

  return (
    <div className='flex h-2/3 w-fit items-center justify-center gap-2 text-black absolute z-50 top-1/2 left-2 -translate-y-1/2' >
      <div className=' flex flex-col items-center gap-10 pt-10 rounded  h-full w-15 border border-neutral-100 ' style={{backgroundColor:toolboxColor}}>
        {icons.map((Ic, id) => {
          return <div className='w-full h-fit flex flex-col items-center  justify-center cursor-pointer' key={id} onClick={() => Ic.func(Ic.id)}>
            <Ic.icon size={20} stroke={"#000000"} strokeWidth={1} className={cn(' h-10 w-10 rounded-full p-2', Ic.id === selected && open && 'bg-neutral-100')} />
            <p className='text-[9px]'>{Ic.text}</p>
          </div>
        })}

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <div className='w-full h-fit flex flex-col items-center  justify-center cursor-pointer' onClick={() => setOpen(false)}>
              <Save size={20} strokeWidth={1} stroke='#000000' className={cn(' h-10 w-10 rounded-full p-2')} style={{color:iconcolor}}/>
              <p className='text-[9px]'>Save</p>
            </div>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Save your canvas</AlertDialogTitle>
              <AlertDialogDescription className='flex flex-col gap-2'>
                <span>This will store the current state of your canvas. Add a title to your canvas below.</span>
                <input type="Title" placeholder='Canvas title' value={title} onChange={(e) => setTitle(e.target.value)} className=' w-40 h-10 pl-2 outline-0 border border-neutral-500 rounded' />
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={saveCanvas}>Save</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <div className='w-full h-fit flex flex-col items-center  justify-center cursor-pointer' onClick={() => selectOption(4)} >
          <List size={20} strokeWidth={1} stroke={"#000000"} className={cn('text-neutral-500 h-10 w-10 rounded-full p-2', selected === 4 && open && 'bg-neutral-100')} />
          <p className='text-[9px]'>More</p>
        </div>

      </div>

      {open && <div className={cn('h-full w-70 border border-neutral-100 rounded  relative ', '')} style={{backgroundColor:toolboxColor}}>
        <ChevronLeft strokeWidth={0.5} stroke={"#000000"} className='absolute translate-x-1/2 cursor-pointer rounded hover:bg-neutral-50 right-0 top-5 border h-10 w-5 border-neutral-100 ' style={{backgroundColor:toolboxColor}}  onClick={() => setOpen(false)} />
        <h1 className='w-full h-10  flex items-center pl-3 text-sm font-semibold ' style={{color:iconcolor}}>{heading}</h1>
        {(selected === 1 || selected === 2) && <>
          <div className='w-full h-2/5 min-h-20 grid grid-cols-4 gap-y-3 place-items-center p-1  '>

            {selected === 1 && shapeIcon.map((Sp, idx) => {
              return <Sp.icon onClick={() => addShape(Sp.path)} size={20} strokeWidth={4} key={idx} className='cursor-pointer' stroke={"#000000"} />
            })}


            {
              selected === 2 && diagrams_Icon.map((Sp, id) => {
                return <Sp.icon stroke={"#000000"} onClick={() => addShape(Sp.path)} size={20} strokeWidth={4} key={id} className='cursor-pointer ' />
              })
            }


          </div>
          <h1 className='w-full h-10  flex items-center pl-3 text-sm font-semibold ' style={{color:iconcolor}}>{heading2}</h1>
          <div className={cn('w-full h-2/5 min-h-20 grid place-items-center p-1 overflow-y-scroll ', selected === 1 && open && "grid-cols-4 gap-y-4 ")}>
            {selected === 1 && Emoji_Icon.map((Emoji, id) => {
              return <Emoji.icon stroke={"#000000"} onClick={() => addShape(Emoji.path)} size={20} strokeWidth={4} key={id} className='cursor-pointer' />
            })}

            {selected === 2 &&
              <div className='w-full h-full flex flex-col items-center p-2 gap-2'>
                <input type="text" value={search} onChange={(e) => { setSearch(e.target.value) }} placeholder='Search components (Server, Client, Load Balancer…)' className='border border-neutral-300 text-[10px] w-9/10 h-7 rounded outline-0 px-2' />
                <div className='w-full grid grid-cols-4 gap-y-4  h-full items-start justify-items-center'>
                  {
                    filter.slice(0, 20).map((Icon, idx) => {
                      return <Icon.icon stroke={"#000"} onClick={() => addShape(Icon.path)} size={20} strokeWidth={4} key={idx} className='cursor-pointer' />
                    })
                  }
                </div>
              </div>}
          </div></>}

        {
          selected === 3 && <>
            <div className="w-full flex items-center flex-col justify-center">
              <p className='w-9/10 mb-5 text-xs ' style={{color:iconcolor}}>Change how your canvas looks and feels</p>

              <div className='grid grid-cols-3 gap-2'>
                {themeArray.map((clr: any, idx: any) => {
                  return <div key={idx} className='flex flex-col items-center cursor-pointer w-20 h-10 justify-center' onClick={()=>{
                    setCanvasColor(clr.canvasColor);
                    setToolboxColor(clr.toolboxColor);
                    setGridColor(clr.gridColor);
                    setActivetheme(clr.name);
                  }}>
                    <div className={cn('h-6 w-6 flex rounded-full overflow-hidden relative  border-neutral-700',activeTheme===clr.name ? "scale-125 border " :"border-0")}>
                      <div className={`h-6 w-3`} style={{backgroundColor:clr.canvasColor}} ></div>
                      <div className={`h-6 w-3`} style={{backgroundColor:clr.gridColor}} ></div>
                      <div className='h-3 w-3 rounded-full absolute top-1/2 left-1/2 -translate-1/2' style={{backgroundColor:clr.toolboxColor}}></div>
                    </div>
                    <p className='text-[10px]'>{clr.name}</p>
                  </div>
                })}

              </div>
            </div>
            <div className='w-full h-10 my-2  flex items-center justify-center'>
              <button className='text-sm cursor-pointer w-8/10  p-2 rounded bg-neutral-700 text-white' onClick={() => {
                setCanvasColor("#f1f1f1")
                setToolboxColor("#ffffff")
                setGridColor("#d1d5db")
                setIconColor("#000000")
                setActivetheme("Default")
                }}>Use default theme</button>
            </div>
          </>
        }

      </div>}

    </div>
  )
}

export default Sidebar_Toolbox;