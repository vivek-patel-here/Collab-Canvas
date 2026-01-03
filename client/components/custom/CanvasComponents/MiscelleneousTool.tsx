"use client"
import { cn } from '@/lib/utils'

export function Tools({Icon,onClick,className,strokeWidth=1}:{Icon:any,onClick?:any,className?:string,strokeWidth?:number}) {
    return <Icon size={22}
        strokeWidth={strokeWidth}
        className={cn("cursor-pointer w-7 h-7 p-1 rounded-full hover:bg-neutral-100",className)}
        onClick={onClick}
    />
}
