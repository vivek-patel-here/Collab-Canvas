import { useCanvas } from "@/context/canvasContext";
import { Circle ,Layer} from "react-konva";


export function GridLayer({
  stageRef,
  spacing = 40,
  dotRadius = 1.5,
}: {
  stageRef: any;
  spacing?: number;
  dotRadius?: number;
}) {
  if (!stageRef.current) return null;

  const stage = stageRef.current;
  const scale = stage.scaleX();
  const pos = stage.position();

  const width = stage.width() / scale;
  const height = stage.height() / scale;

  const startX = Math.floor(-pos.x / scale / spacing) * spacing;
  const startY = Math.floor(-pos.y / scale / spacing) * spacing;

  const dots = [];
  const {gridColor} = useCanvas();

  for (let x = startX; x < startX + width + spacing; x += spacing) {
    for (let y = startY; y < startY + height + spacing; y += spacing) {
      dots.push(
        <Circle
          key={`${x}-${y}`}
          x={x}
          y={y}
          radius={dotRadius}
          fill={gridColor}
        />
      );
    }
  }

  return <Layer listening={false}>{dots}</Layer>;
}