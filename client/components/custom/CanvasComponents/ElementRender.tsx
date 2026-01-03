import { Line, Path } from "react-konva";
import { useContext } from "react";
import {useCanvas} from "@/context/canvasContext";
import TextElement from "./TextElement";
import ImageElement from "./ImageElement";
import PathElement from "./PathElement";

export function ElementRenderer({ el, idx }: any) {
  const { selectedId, setSelectedId, setElements, elements, setSelectedTool } = useCanvas();
  const onChangeHandler = (newAttrs: any) => {
    const updated = elements.slice();
    updated[idx] = newAttrs;
    setElements(updated);
  };


  return (
    <>

      {el.type === "path" && (
        <PathElement key={el.id} shapeProps={el}
          isSelected={el.id === selectedId}
          onSelect={() => {
            setSelectedTool("grab-hand");
            setSelectedId(el.id)
          }}
          onChange={onChangeHandler} />
      )}

      {el.type === "text" && (
        <TextElement
          key={el.id}
          shapeProps={el}
          isSelected={el.id === selectedId}
          onSelect={() => {
            setSelectedTool("grab-hand");
            setSelectedId(el.id)
          }}
          onChange={onChangeHandler}
        />
      )}


      {el.type === "image" && (
        <ImageElement
          key={el.id}
          imgProps={el}
          isSelected={el.id === selectedId}
          onSelect={() => {
            setSelectedTool("grab-hand");
            setSelectedId(el.id)
          }}
          onChange={onChangeHandler}
        />
      )}



      {el.type === "freehand" && (
        <Line
          key={el.id}
          points={el.points}
          stroke={el.stroke}
          strokeWidth={el.strokeWidth}
          lineCap="round"
          lineJoin="round"
          tension={0.5}
          globalCompositeOperation={el.composite}
        />
      )}
    </>
  );
}
