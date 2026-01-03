"use client";
import { Image } from "react-konva";
import { useEffect, useRef, useState } from "react";
import { useCanvas } from "@/context/canvasContext";
import CanvasTransformer from "./Transformer";

function CanvasImage({ imgProps, isSelected, onSelect, onChange }: any) {
  const imgRef = useRef<any>(null);
  const tfRef = useRef<any>(null);
  const [imageObj, setImageObj] = useState<HTMLImageElement | null>(null);
  const { commit, Action_Type } = useCanvas();


  useEffect(() => {
    const img = new window.Image();
    img.src = imgProps.src;
    img.onload = () => setImageObj(img);
  }, [imgProps.src]);
  

  useEffect(() => {
    if (isSelected && tfRef.current && imgRef.current) {
      tfRef.current.nodes([imgRef.current]);
      tfRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  if (!imageObj) return null;

  return (
    <>
      <Image
        ref={imgRef}
        image={imageObj}
        {...imgProps}
        draggable={isSelected}
        onMouseDown={e => (e.cancelBubble = true)}
        onClick={e => {
          e.cancelBubble = true;
          onSelect();
        }}
        onDragEnd={e => {
          const before = { ...imgProps };
          const after = {
            ...imgProps,
            x: e.target.x(),
            y: e.target.y(),
          };
          onChange(after);
          commit({ type: Action_Type.UPDATE, before, after });
        }}
        onTransformEnd={() => {
          const node = imgRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();
          node.scaleX(1);
          node.scaleY(1);

          const before = { ...imgProps };
          const after = {
            ...imgProps,
            x: node.x(),
            y: node.y(),
            rotation: node.rotation(),
            width: Math.max(20, node.width() * scaleX),
            height: Math.max(20, node.height() * scaleY),
          };

          onChange(after);
          commit({ type: Action_Type.UPDATE, before, after });
        }}
      />

      {isSelected && <CanvasTransformer ref={tfRef} />}
    </>
  );
}

export default CanvasImage;
