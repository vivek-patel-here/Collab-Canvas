"use client"
import { useContext } from 'react'
import { Tools } from './MiscelleneousTool';
import { HandGrab, Pencil, Eraser, Minus, CaseSensitive, Image, Grid, Redo, Undo, X } from 'lucide-react';
import {useCanvas} from '@/context/canvasContext';

function BottomToolBox() {
    const {removeElement,canUndo,canRedo, handleImgUpload, undo, redo, selectedId, selectedTool, setSelectedTool ,setGridEnable ,strokeColor,stokeWidth,setStrokeWidth} = useCanvas();
     const toolbar = [
            { id: 1, icon: Pencil, text: "pencil", func: () => setSelectedTool("pencil") },
            { id: 2, icon: Eraser, text: "eraser", func: () => setSelectedTool("eraser") },
            { id: 3, icon: Minus, text: "line", func: () => setSelectedTool("line") },
            { id: 4, icon: CaseSensitive, text: "text", func: () => setSelectedTool("text") },
        ]

    return (
        <>
            <div className=" w-fit h-12 -translate-1/2 flex items-center cursor-default justify-around gap-3 bg-white  border border-neutral-200 text-neutral-800 p-2 bottom-15 left-1/2 rounded-lg shadow-lg z-50 absolute">
                {(selectedTool ==="pencil" || selectedTool === "line") && <div className="flex flex-col w-fit h-full justify-between items-center">
                    <input type="color" className="h-8 w-12" onChange={(e)=>strokeColor.current=e.target.value}/>
                </div>}

                {(selectedTool ==="pencil" || selectedTool ==="eraser" || selectedTool === "line") && <div className="flex flex-col  h-full items-center justify-between">
                    <input type="range" className="flex-1 w-20" min={1} max={40} defaultValue={2} onChange={(e)=>setStrokeWidth(e.target.value)} value={stokeWidth}/>
                </div>}

                <div className='w-fit h-full flex items-center justify-center gap-2'>
                    <Tools Icon={Undo} onClick={undo} className={canUndo ? "text-black" : "text-neutral-300"}/>
                    <Tools Icon={Redo} onClick={redo} className={canRedo ? "text-black" : "text-neutral-300"} />
                    <Tools Icon={X} className={selectedId ? "text-red-700" : "text-neutral-300"} strokeWidth={2} onClick={removeElement}/>
                </div>

            </div>

            <div className="absolute bottom-1 -translate-1/2 left-1/2 z-50 shadow-lg bg-white border border-neutral-200 text-neutral-800 p-2 h-12 w-2/8 rounded-lg flex items-center justify-around">
                <Tools Icon={HandGrab} onClick={()=>setSelectedTool("grab-hand")} className={selectedTool === "grab-hand"?"bg-neutral-100":""}/>
                {toolbar.map((tool_icon: any, k: any) => {
                    return <Tools Icon={tool_icon.icon} key={tool_icon.id} onClick={tool_icon.func} className={selectedTool===tool_icon.text?"bg-neutral-100":""}/>
                })}
                <input type="file" id="a4t-9f7-2p0-Img-up" className="hidden" onChange={handleImgUpload} />
                <label htmlFor="a4t-9f7-2p0-Img-up"><Tools Icon={Image} className={selectedTool==="image" ? "bg-neutral-100" :""}/></label>
                <Tools  Icon={Grid} onClick={()=>setGridEnable((prev:boolean)=>!prev)} />
            </div>
        </>
    )
}

export default BottomToolBox