"use client"
import {createContext,useContext} from "react";

export const CanvasStore = createContext<any>({});

export const useCanvas = ()=>{
    return useContext(CanvasStore);
}