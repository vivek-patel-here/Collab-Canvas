"use client";

/**
 * @author: @kokonut-labs
 * @description: Slide Text Button with animated vertical text transition
 * @version: 1.0.0
 * @date: 2025-11-02
 * @license: MIT
 * @website: https://kokonutui.com
 * @github: https://github.com/kokonut-labs/kokonutui
 */

import { motion } from "motion/react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface SlideTextButtonProps
  extends React.HTMLAttributes<HTMLDivElement> {
  text?: string;
  hoverText?: string;
  className?: string;
  onClick?:any;
  variant?: "default" | "ghost";
}

export default function SlideTextButton({
  text = "Browse Components",
  hoverText,
  className,
  onClick,
  variant = "default",
  ...props
}: SlideTextButtonProps) {
  const slideText = hoverText ?? text;
  const variantStyles ="bg-white text-black hover:bg-black/90 hover:text-white";

  return (
    <motion.div
      animate={{ x: 0, opacity: 1, transition: { duration: 0.2 } }}
      className="relative"
      initial={{ x: 200, opacity: 0 }}
   
    >
      <div onClick={onClick} className={cn("group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-lg px-8 font-medium text-md tracking-tighter transition-all duration-300 md:min-w-56",variantStyles,className)} {...props}>
        <span className="group-hover:-translate-y-full w-fit relative inline-block transition-transform duration-300 ease-in-out">
          <span className="flex items-center gap-2 w-fit opacity-100 transition-opacity duration-300 group-hover:opacity-0">
            <span className="font-medium w-fit">{text}</span>
          </span>
          <span className="absolute top-full left-0 w-fit flex items-center gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="font-medium w-fit">{slideText}</span>
          </span>
        </span>
      </div>
    </motion.div>
  );
}
