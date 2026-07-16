"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedTypographyProps {
  text: string;
  className?: string;
  delay?: number;
  as?: React.ElementType;
}

export const AnimatedTypography = ({
  text,
  className,
  delay = 0,
  as: Component = "h2",
}: AnimatedTypographyProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: delay },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 40,
    },
  };

  const words = text.split(" ");
  
  // Need to cast to any to allow dynamic component with Framer Motion
  const MotionComponent = motion(Component as any);

  return (
    <MotionComponent
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={cn("flex flex-wrap", className)}
    >
      {words.map((word, index) => (
        <motion.span variants={child} className="mr-[0.25em]" key={index}>
          {word}
        </motion.span>
      ))}
    </MotionComponent>
  );
};
