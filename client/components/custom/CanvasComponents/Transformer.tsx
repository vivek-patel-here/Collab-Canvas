import React from 'react'
import { Transformer } from 'react-konva'

function CanvasTransformer({ref}:any) {
  return (
   <Transformer
          ref={ref}
          rotateEnabled
          anchorSize={8}
          anchorCornerRadius={10} 
          anchorFill="#ffffff"
          anchorStroke="#3b82f6"
          anchorStrokeWidth={1}
          borderStroke="#3b82f6"
          enabledAnchors={["top-left",
            "top-right",
            "bottom-left",
            "bottom-right",
            "middle-left",
            "middle-right",
            "top-center",
            "bottom-center",]}
          boundBoxFunc={(oldBox: any, newBox: any) => {
            if (newBox?.width < 20 || newBox?.height < 20) return oldBox;
            return newBox;
          }}

        />
  )
}

export default CanvasTransformer