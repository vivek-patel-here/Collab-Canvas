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
  const { canvasColor, setCanvasColor, addShape, elements } = useCanvas();
  const [title, setTitle] = useState("");
  const { url, accessToken, notifyAlert } = useStore();

  //******    Diagram here   *********
  const [filter, setFilter] = useState(systemDesignComponents);

  useEffect(() => {
    setFilter(systemDesignComponents.filter((icon: { icon: any, keywords: string }) => {
      return icon.keywords.toLowerCase().includes(search.toLowerCase());
    }))
  }, [search])

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
    setHeading("Change Board Theme");
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
    <div className='flex h-2/3 w-fit items-center justify-center gap-2 text-black absolute z-50 top-1/2 left-2 -translate-y-1/2'>
      <div className=' flex flex-col items-center gap-10 pt-10 rounded  h-full w-15 border border-neutral-100 bg-white'>
        {icons.map((Ic, id) => {
          return <div className='w-full h-fit flex flex-col items-center  justify-center cursor-pointer' key={id} onClick={() => Ic.func(Ic.id)}>
            <Ic.icon size={20} strokeWidth={1} className={cn('text-neutral-500 h-10 w-10 rounded-full p-2', Ic.id === selected && open && 'bg-neutral-100')} />
            <p className='text-[9px]'>{Ic.text}</p>
          </div>
        })}

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <div className='w-full h-fit flex flex-col items-center  justify-center cursor-pointer' onClick={() => setOpen(false)}>
              <Save size={20} strokeWidth={1} className={cn('text-neutral-500 h-10 w-10 rounded-full p-2')} />
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

        <div className='w-full h-fit flex flex-col items-center  justify-center cursor-pointer' onClick={()=>selectOption(4)} >
          <List size={20} strokeWidth={1} className={cn('text-neutral-500 h-10 w-10 rounded-full p-2',  selected===4 && open && 'bg-neutral-100')} />
          <p className='text-[9px]'>More</p>
        </div>

      </div>

      {open && <div className={cn('h-full w-70 border border-neutral-100 rounded  bg-white relative ', '')}>
        <ChevronLeft strokeWidth={0.5} className='absolute translate-x-1/2 cursor-pointer rounded hover:bg-neutral-50 right-0 top-5 border h-10 w-5 border-neutral-100 bg-white' onClick={() => setOpen(false)} />
        <h1 className='w-full h-10  flex items-center pl-5 text-sm font-semibold text-neutral-600'>{heading}</h1>
        {(selected === 1 || selected === 2) && <>
          <div className='w-full h-2/5 min-h-20 grid grid-cols-4 gap-y-3 place-items-center p-1  '>

            {selected === 1 && shapeIcon.map((Sp, idx) => {
              return <Sp.icon onClick={() => addShape(Sp.path)} size={20} strokeWidth={4} key={idx} className='cursor-pointer' stroke='black' />
            })}


            {
              selected === 2 && diagrams_Icon.map((Sp, id) => {
                return <Sp.icon onClick={() => addShape(Sp.path)} size={20} strokeWidth={4} key={id} className='cursor-pointer text-neutral-500' />
              })
            }


          </div>
          <h1 className='w-full h-10  flex items-center pl-5 text-sm font-semibold text-neutral-600'>{heading2}</h1>
          <div className={cn('w-full h-2/5 min-h-20 grid place-items-center p-1 overflow-y-scroll ', selected === 1 && open && "grid-cols-4 gap-y-4 ")}>
            {selected === 1 && Emoji_Icon.map((Emoji, id) => {
              return <Emoji.icon onClick={() => addShape(Emoji.path)} size={20} strokeWidth={4} key={id} className='cursor-pointer' />
            })}

            {selected === 2 &&
              <div className='w-full h-full flex flex-col items-center p-2 gap-2'>
                <input type="text" value={search} onChange={(e) => { setSearch(e.target.value) }} placeholder='Search components (Server, Client, Load Balancer…)' className='border border-neutral-300 text-[10px] w-9/10 h-7 rounded outline-0 px-2' />
                <div className='w-full grid grid-cols-4 gap-y-4  h-full items-start justify-items-center'>
                  {
                    filter.slice(0, 20).map((Icon, idx) => {
                      return <Icon.icon onClick={() => addShape(Icon.path)} size={20} strokeWidth={4} key={idx} className='cursor-pointer text-neutral-500' />
                    })
                  }
                </div>
              </div>}
          </div></>}

        {
          selected === 3 && <>
            <div className="w-full space-y-2 flex items-center justify-center">
              <HexColorPicker color={canvasColor} onChange={setCanvasColor} />
              <input
                value={canvasColor}
                onChange={(e) => setCanvasColor(e.target.value)}
                className="w-0 hidden border border-black px-2 py-1 rounded"
              />
            </div>
            <div className='w-full h-20 flex items-center justify-center'>
              <button className='text-sm cursor-pointer  p-2 rounded bg-neutral-700 text-white' onClick={() => setCanvasColor("#f1f1f1")}>Set Default Color</button>
            </div>
          </>
        }

      </div>}

    </div>
  )
}

export default Sidebar_Toolbox;