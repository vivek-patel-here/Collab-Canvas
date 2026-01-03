"use client"
import { Text } from "react-konva";
import { useEffect, useRef, useContext } from "react";
import CanvasTransformer from "./Transformer";
import {useCanvas} from '@/context/canvasContext';


export default function TextElement({
  shapeProps,
  isSelected,
  onSelect,
  onChange,
}: any) {
  const shapeRef = useRef<any>(null);
  const trRef = useRef<any>(null);
  const { commit, Action_Type }  = useCanvas();

  useEffect(() => {
    if (isSelected && trRef.current && shapeRef.current) {
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);



  return (
    <>
      <Text
        ref={shapeRef}
        {...shapeProps}
        draggable={isSelected}

        onMouseDown={e => e.cancelBubble = true}

        onClick={(e) => {
          e.cancelBubble = true;
          onSelect();
        }}

        onDragStart={e => {
          e.cancelBubble = true;
        }}

        onDragEnd={(e) => {
          e.cancelBubble = true;
          const before = { ...shapeProps };
          const after = {
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y(),
          };
          onChange(after);
          commit({
            type: Action_Type.UPDATE,
            before, after,
          })
        }}

        onTransformEnd={(e) => {
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          node.scaleX(1);
          node.scaleY(1);
          const before = { ...shapeProps };
          const after = {
            ...shapeProps,
            x: node.x(),
            y: node.y(),
            rotation: node.rotation(),
            width: Math.max(20, node.width() * scaleX),
            height: Math.max(20, node.height() * scaleY),
            fontSize: Math.max(20, node.fontSize() * scaleY),
          };

          onChange(after);
          commit({
            type: Action_Type.UPDATE,
            before, after,
          })
        }}



        onDblClick={() => {
          const textPosition = shapeRef.current.absolutePosition();
          const textarea = document.createElement("textarea");

          textarea.value = shapeProps.text;
          textarea.style.position = "absolute";
          textarea.style.top = textPosition.y + "px";
          textarea.style.left = textPosition.x + "px";
          textarea.style.fontSize = shapeProps.fontSize + "px";
          textarea.style.outline = "none";
          textarea.style.border = "1px solid gray";
          textarea.style.borderRadius = "5px";
          textarea.style.color = "black";
          textarea.style.backgroundColor = "white";

          document.body.appendChild(textarea);
          textarea.focus();
          const before = { ...shapeProps };
          textarea.onblur = () => {
            const after = { ...shapeProps, text: textarea.value }
            onChange(after);
            commit({
              type: Action_Type.UPDATE,
               before, after ,
            });

            document.body.removeChild(textarea);
          };
        }}
      />

      {isSelected && (
        <CanvasTransformer ref={trRef} />
      )}
    </>
  );
}
