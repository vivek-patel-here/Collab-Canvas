"use client";

import { useRef, useEffect, useContext } from "react";
import { Group, Path, Transformer } from "react-konva";
import {useCanvas} from "@/context/canvasContext";

function PathElement({ shapeProps, isSelected, onSelect, onChange }: any) {
  const groupRef = useRef<any>(null);
  const transformerRef = useRef<any>(null);
  const { commit, Action_Type } = useCanvas();

  useEffect(() => {
    if (!isSelected) return;
    if (!groupRef.current || !transformerRef.current) return;

    transformerRef.current.nodes([groupRef.current]);
    transformerRef.current.getLayer()?.batchDraw();
  }, [
    isSelected,
    shapeProps.x,
    shapeProps.y,
    shapeProps.width,
    shapeProps.height,
    shapeProps.rotation,
  ]);

  return (
    <>
      <Group
        ref={groupRef}
        x={shapeProps.x}
        y={shapeProps.y}
        rotation={shapeProps.rotation}
        draggable={isSelected}
        onClick={(e) => {
          e.cancelBubble = true;
          onSelect();
        }}
        onDragEnd={(e) => {
          const before = { ...shapeProps };
          const after = {
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y(),
          };
          onChange(after);
          commit({ type: Action_Type.UPDATE, before, after });
        }}
        onTransformEnd={() => {
          const node = groupRef.current;
          if (!node) return;

          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          // bake scale
          node.scaleX(1);
          node.scaleY(1);

          const before = { ...shapeProps };
          const after = {
            ...shapeProps,
            width: Math.max(20, shapeProps.width * scaleX),
            height: Math.max(20, shapeProps.height * scaleY),
            rotation: node.rotation(),
          };

          onChange(after);
          commit({ type: Action_Type.UPDATE, before, after });
        }}
      >
        <Path
          data={shapeProps.d}
          fill={shapeProps.fill ?? undefined}
          stroke={shapeProps.stroke}
          strokeWidth={shapeProps.strokeWidth}
          hitStrokeWidth={20}
          listening
          scaleX={shapeProps.width / 80}
          scaleY={shapeProps.height / 80}
        />
      </Group>

      {isSelected && (
        <Transformer
          ref={transformerRef}
          rotateEnabled
          flipEnabled={false}
          anchorSize={8}
          anchorCornerRadius={6}
          anchorFill="#fff"
          anchorStroke="#3b82f6"
          borderStroke="#3b82f6"
          enabledAnchors={[
            "top-left",
            "top-right",
            "bottom-left",
            "bottom-right",
            "middle-left",
            "middle-right",
            "top-center",
            "bottom-center",
          ]}
          boundBoxFunc={(oldBox, newBox) => {
            if (newBox.width < 20 || newBox.height < 20) return oldBox;
            return newBox;
          }}
        />
      )}
    </>
  );
}

export default PathElement;
