export type ElementType = "path" | "text" | "image" |"freehand";

export interface BaseElement {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
}

export interface PathElement extends BaseElement {
  type: "path";
  d: string;       
  fill: string|null;
  stroke: string;
  strokeWidth: number;
}

export interface TextElement extends BaseElement {
  type: "text";
  text: string;
  fontSize: number;
  fill: string;
}

export interface ImageElement extends BaseElement {
  type: "image";
  src: string;
}

export interface FreehandElement extends BaseElement{
  type: "freehand";
  tool: "pencil" | "eraser" | "line";
  points: number[]; 
  stroke: string;
  strokeWidth: number;
  composite: "source-over" | "destination-out";
  opacity?: number;
};

export type CanvasElement =
  | PathElement
  | TextElement
  | ImageElement
  | FreehandElement;
