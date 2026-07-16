"use client";
import { useRef, useState, MouseEvent } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export const MagneticButton = ({
  children,
  className,
  ...props
}: HTMLMotionProps<"button">) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 350, damping: 25, mass: 0.5 }}
      className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-full border border-primary/30 bg-primary/10 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-primary/20 hover:border-primary/50",
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children as React.ReactNode}</span>
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary to-blue-600 opacity-0 transition-opacity duration-300 hover:opacity-20" />
    </motion.button>
  );
};
