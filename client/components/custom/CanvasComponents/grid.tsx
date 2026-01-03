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

  for (let x = startX; x < startX + width + spacing; x += spacing) {
    for (let y = startY; y < startY + height + spacing; y += spacing) {
      dots.push(
        <Circle
          key={`${x}-${y}`}
          x={x}
          y={y}
          radius={dotRadius}
          fill="#d1d5db"
        />
      );
    }
  }

  return <Layer listening={false}>{dots}</Layer>;
}