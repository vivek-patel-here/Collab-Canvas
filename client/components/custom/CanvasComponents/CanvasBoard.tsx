"use client";

import { Stage, Layer } from "react-konva";
import { useEffect } from "react";
import { useCanvas } from "@/context/canvasContext";
import { ElementRenderer } from "./ElementRender";
import { GridLayer } from "./grid";
import BottomToolBox from "./BottomToolBox";
import Sidebar_Toolbox from "./Sidebar_Toolbox";
import PreviewLayer from "./preview";
import { cn } from "@/lib/utils";

export default function CanvasBoard() {
  const { handleMouseDown, isPanning,canvasColor ,handleMouseMove,position, handleMouseUp, stageRef, scale, elements, canvasSize, setCanvasSize, handleKey, gridEnable, handleWheel,canDraw } = useCanvas();

  useEffect(() => {
    setCanvasSize({
      height: window.innerHeight,
      width: window.innerWidth,
    })

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className={cn("w-screen h-screen relative ", isPanning.current && "cursor-grab active:cursor-grabbing")}>
      <Stage
        width={canvasSize.width}
        height={canvasSize.height}
        x={position.x}
        y={position.y}
        scaleX={scale}
        scaleY={scale}
        ref={stageRef}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseUp}
        style={{ background: `${canvasColor}` }}
        >

        {/* Grid Layer */}
        {gridEnable && <GridLayer stageRef={stageRef} />}

        {/* Actual Shape Layer */}
        <Layer>
          {elements.map((el: any,idx:number) => (
            <ElementRenderer key={el.id} el={el} idx={idx}/>
          ))}
        </Layer>

        {/* Preview Layer */}
        <PreviewLayer />

      </Stage>
      {canDraw &&
        <>
        <Sidebar_Toolbox />
      <BottomToolBox />
      </>
      }
    </div>
  );
}
