"use client"
import {useCanvas} from '@/context/canvasContext';
import React, { useContext } from 'react';
import { Layer, Line } from 'react-konva';

function Preview() {
  const { preview,strokeWidth } = useCanvas();
  return (
    <Layer listening={false}>
      {preview && (
        <Line
          points={preview}
          stroke="#e0e0e0"
          strokeWidth={3}
          dash={[10, 6]}
        />
      )}
    </Layer>
  )
}

export default Preview