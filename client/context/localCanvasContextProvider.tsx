"use client"
import { useState, useRef, useEffect } from "react";
import { CanvasElement, ImageElement, FreehandElement, TextElement, PathElement } from "@/components/custom/CanvasComponents/types";
import { CanvasStore } from "./canvasContext";
type actions =
    | { type: "ADD"; element: CanvasElement }
    | { type: "REMOVE"; element: CanvasElement }
    | { type: "UPDATE"; before: CanvasElement; after: CanvasElement };


export function LocalCanvasContexProvider({ children }: { children: React.ReactNode }) {
    const stageRef = useRef<any | null>(null);
    const [gridEnable, setGridEnable] = useState<boolean>(true);
    const isDrawing = useRef<boolean>(false);
    const isPanning = useRef<boolean>(false);
    const lastMousePos = useRef<{ x: number, y: number } | null>(null);
    const [strokeWidth, setStrokeWidth] = useState<number>(2);
    const strokeColor = useRef<string>("black");
    const [elements, setElements] = useState<CanvasElement[]>([]);
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [scale, setScale] = useState(1);
    const [preview, setPreview] = useState<number[]>([]);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [canvasSize, setCanvasSize] = useState<{ height: any, width: any }>({ height: 0, width: 0 })
    const undoStack = useRef<actions[]>([]);
    const redoStack = useRef<actions[]>([]);
    const [selectedTool, setSelectedTool] = useState<string>("grab-hand");
    const opacityRef = useRef<number>(1);
    const [canvasColor, setCanvasColor] = useState("#f0f0f0");
    const [canRedo, setCanRedo] = useState<boolean>(false);
    const [canUndo, setCanUndo] = useState<boolean>(false);
    const [gridColor, setGridColor] = useState("#d1d5db");
    const [toolboxColor, setToolboxColor] = useState("#ffffff");
    const [iconcolor, setIconColor] = useState("#000000");
    const isMeetingOn = false;

    const sync_Undo_Redo_State = () => {
        setCanRedo(redoStack.current.length > 0);
        setCanUndo(undoStack.current.length > 0);
    }

    const commit = (action: actions) => {
        undoStack.current.push(action);
        redoStack.current = [];
        sync_Undo_Redo_State();
    }

    enum Action_Type {
        ADD = "ADD",
        REMOVE = "REMOVE",
        UPDATE = "UPDATE"
    }

    const undo = () => {
        const action = undoStack.current.pop();
        if (!action) return;
        redoStack.current.push(action);
        setElements(prev => {
            switch (action.type) {
                case "ADD":
                    return prev.filter(el => el.id !== action.element.id);

                case "REMOVE":
                    return [...prev, action.element];

                case "UPDATE":
                    return prev.map(el =>
                        el.id === action.before.id ? action.before : el
                    );
            }
        });
        sync_Undo_Redo_State();
    };

    const redo = () => {
        const action = redoStack.current.pop();
        if (!action) return;
        undoStack.current.push(action);
        setElements(prev => {
            switch (action.type) {
                case "ADD":
                    return [...prev, action.element];

                case "REMOVE":
                    return prev.filter((el: any) => el.id !== action.element.id);

                case "UPDATE":
                    return prev.map((el: any) =>
                        el.id === action.after.id ? action.after : el
                    );
            }
        });
        sync_Undo_Redo_State();
    };

    const handleImgUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();

        reader.onload = (e) => {
            const base64String = reader.result as string;
            const img = new window.Image();
            img.src = base64String;

            img.onload = () => {
                const scale = Math.min(800 / img.width, 800 / img.height, 1);
                const newImgObj: ImageElement = {
                    id: crypto.randomUUID(),
                    x: 100,
                    y: 100,
                    type: "image",
                    width: img.width * scale,
                    height: img.height * scale,
                    rotation: 0,
                    src: base64String
                };

                setElements(prev => [...prev, newImgObj]);
                commit({
                    type: Action_Type.ADD,
                    element: newImgObj,
                });
            };
        }

        reader.readAsDataURL(file);
    }

    //to find relative coordinates
    function getRelativePointerPosition(node: any) {
        const transform = node.getAbsoluteTransform().copy();
        transform.invert();

        const pos = node.getStage().getPointerPosition();
        return transform.point(pos);
    }

    //zoom-in / zoom-out
    const handleWheel = (e: any) => {
        e.evt.preventDefault();

        const stage = stageRef.current;
        if (!stage) return;

        const scaleBy = 1.05;

        // 🔒 Safe zoom limits (tuned for whiteboard UX)
        const MIN_SCALE = 0.20; // 15%
        const MAX_SCALE = 2;  // 200%

        const oldScale = scale;
        const pointer = stage.getPointerPosition();
        if (!pointer) return;

        // Mouse position in world coords
        const mousePointTo = {
            x: (pointer.x - position.x) / oldScale,
            y: (pointer.y - position.y) / oldScale,
        };

        // Calculate new scale
        let newScale =
            e.evt.deltaY > 0 ? oldScale / scaleBy : oldScale * scaleBy;

        newScale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, newScale));

        // New position to keep zoom centered
        let newPos = {
            x: pointer.x - mousePointTo.x * newScale,
            y: pointer.y - mousePointTo.y * newScale,
        };

        /**
         * Dynamic bounds logic
         * Allow panning slightly outside viewport
         * but prevent getting lost
         */
        const viewportWidth = stage.width();
        const viewportHeight = stage.height();

        const padding = 300 * newScale; // soft infinite feel

        const minX = -viewportWidth * newScale + padding;
        const maxX = viewportWidth - padding;

        const minY = -viewportHeight * newScale + padding;
        const maxY = viewportHeight - padding;

        newPos.x = Math.min(maxX, Math.max(minX, newPos.x));
        newPos.y = Math.min(maxY, Math.max(minY, newPos.y));

        setScale(newScale);
        setPosition(newPos);
    };

    const handleMouseDown = (e: any) => {
        const pt = getRelativePointerPosition(e.target.getStage());


        if (selectedTool === "grab-hand" && e.target === e.target.getStage()) {
            isPanning.current = true;
            lastMousePos.current = {
                x: e.evt.clientX,
                y: e.evt.clientY
            }
        }

        if (selectedTool === "pencil" || selectedTool === "eraser") {
            isDrawing.current = true;
            const newElem: FreehandElement = {
                type: "freehand",
                id: crypto.randomUUID(),
                x: pt.x,
                y: pt.y,
                height: 1,
                width: 1,
                rotation: 0,
                tool: selectedTool === "pencil" ? "pencil" : "eraser",
                points: [pt.x, pt.y],
                stroke: strokeColor.current,
                strokeWidth: strokeWidth,
                composite: selectedTool === "pencil" ? "source-over" : "destination-out",
                opacity: opacityRef.current
            }
            setElements((prev: any) => {
                return [...prev, newElem]
            })

        }

        if (selectedTool === "line") {
            isDrawing.current = true;
            const newLine: FreehandElement = {
                type: "freehand",
                id: crypto.randomUUID(),
                x: pt.x,
                y: pt.y,
                height: 1,
                width: 1,
                rotation: 0,
                tool: "line",
                points: [pt.x, pt.y],
                stroke: strokeColor.current,
                strokeWidth: strokeWidth,
                composite: "source-over",
                opacity: opacityRef.current
            }

            setElements(prev => [...prev, newLine]);
            setPreview((prev) => [pt.x, pt.y]);
        }

        if (selectedTool === "text") {
            const newTextElem: TextElement = {
                id: crypto.randomUUID(),
                x: pt.x,
                y: pt.y,
                width: 200,
                height: 50,
                rotation: 0,
                type: "text",
                text: "Double click to edit",
                fontSize: 20,
                fill: "#000",
            }

            setElements(prev => [...prev, newTextElem]);
            commit({
                type: Action_Type.ADD,
                element: newTextElem
            })
            setSelectedTool("grab-hand");
        }

        if (e.target === e.target.getStage()) {
            setSelectedId(null);
        }

    }

    const handleMouseMove = (e: any) => {
        const point = getRelativePointerPosition(e.target.getStage());
        if (selectedTool === "grab-hand" && isPanning.current && e.target === e.target.getStage() && lastMousePos.current) {
            const dx = e.evt.clientX - lastMousePos.current.x;
            const dy = e.evt.clientY - lastMousePos.current.y;

            setPosition(prev => {
                return {
                    x: prev.x + dx,
                    y: prev.y + dy
                }
            })
            return lastMousePos.current = {
                x: e.evt.clientX,
                y: e.evt.clientY,
            };
        }


        if ((selectedTool === "pencil" || selectedTool === "eraser") && isDrawing.current) {
            setElements((prev: any) => {
                const lastLine = prev[prev.length - 1];
                const newLastLine = {
                    ...lastLine,
                    points: lastLine.points.concat([point.x, point.y]),
                };
                return [...prev.slice(0, -1), newLastLine];
            })
        }

        if (selectedTool === "line" && isDrawing.current) {
            setPreview(prev => [prev[0], prev[1], point.x, point.y]);
        }

    }

    const handleMouseUp = (e: any) => {
        const point = getRelativePointerPosition(e.target.getStage());
        if (isPanning.current && e.target === e.target.getStage()) {
            isPanning.current = false;
            lastMousePos.current = null;
            return;
        }

        if ((selectedTool === "pencil" || selectedTool === "eraser") && isDrawing.current) {
            isDrawing.current = false;
            const newElem = elements[elements.length - 1];
            commit({
                type: Action_Type.ADD,
                element: newElem,
            })
        }

        if (selectedTool === "line" && isDrawing.current) {
            isDrawing.current = false;
            const lastnode: any = elements[elements.length - 1];
            const updatedNode = { ...lastnode, points: lastnode.points.concat([point.x, point.y]) };
            setElements((prev: any) => {
                return [...prev.slice(0, -1), updatedNode];
            })
            setPreview([]);
            commit({
                type: Action_Type.ADD,
                element: updatedNode
            })


        }
        // if(selectedTool === "text"){
        //     setSelectedTool("grab-hand");
        // }
    }

    const handleKey = (e: KeyboardEvent) => {

        if ((e.ctrlKey || e.metaKey) && e.key === "z") {
            e.preventDefault();
            undo();
        }

        if ((e.ctrlKey || e.metaKey) && (e.key === "y" || (e.shiftKey && e.key === "Z"))) {
            e.preventDefault();
            redo();
        }

        if (e.key === "Delete" && selectedId) {
            setElements((prev: CanvasElement[]) => {
                const elements = prev.find((t: any) => t.id === selectedId);
                if (!elements) return prev;

                commit({
                    type: Action_Type.REMOVE,
                    element: elements,
                });

                return prev.filter((t: any) => t.id !== selectedId);
            });

            setSelectedId(null);
        }
    };

    const removeElement = () => {
        const elem = elements.find(el => el.id === selectedId);
        if (!elem) return;

        commit({
            type: "REMOVE",
            element: elem,
        });

        setElements(prev => prev.filter(el => el.id !== selectedId));
        setSelectedId(null);
    }

    const addShape = (path: string) => {
        setSelectedTool("grab-hand");
        const newShape: PathElement = {
            id: crypto.randomUUID(),
            x: stageRef.current.width() / 2,
            y: stageRef.current.height() / 2,
            width: 60,
            height: 60,
            rotation: 0,
            type: "path",
            d: path,
            fill: "transparent",
            stroke: "black",
            strokeWidth: 2,
        };

        setElements(prev => [...prev, newShape]);

        commit({
            type: Action_Type.ADD,
            element: newShape
        });
    };

    useEffect(() => {
        const stopPan = () => {
            if (isPanning.current) {
                isPanning.current = false;
                lastMousePos.current = null;
            }
        };

        window.addEventListener("mouseup", stopPan);
        window.addEventListener("mouseleave", stopPan);
        return () => {
            window.removeEventListener("mouseup", stopPan);
            window.removeEventListener("mouseleave", stopPan);

        };


    }, []);

    const canDraw = true;

    return <CanvasStore.Provider value={{ stageRef,iconcolor, setIconColor, toolboxColor, setToolboxColor, gridColor, setGridColor, isMeetingOn, canDraw, addShape, removeElement, canUndo, canRedo, canvasColor, setCanvasColor, strokeColor, isPanning, position, preview, setPreview, handleKey, handleWheel, scale, setScale, handleMouseDown, handleMouseMove, handleMouseUp, gridEnable, setGridEnable, selectedTool, setSelectedTool, strokeWidth, setStrokeWidth, isDrawing, Action_Type, canvasSize, setCanvasSize, elements, setElements, selectedId, setSelectedId, commit, undo, redo, handleImgUpload }}>
        {children}
    </CanvasStore.Provider>
}

