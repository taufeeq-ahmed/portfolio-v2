"use client";
import { useEffect, useRef } from "react";
import {
  motion,
  stagger,
  useAnimate,
  useScroll,
  useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // Adjust to match when the element enters the viewport
  });

  const springProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
  });

  const startAnimation = () => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  };

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      if (value >= 0.1) {
        startAnimation();
        unsubscribe();
      }
    });

    return unsubscribe;
  }, [scope.current, scrollYProgress]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="text-black opacity-0 text-lg sm:text-4xl "
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)} ref={containerRef}>
      <div className="mt-4 p-4 md:p-0">
        <div className=" dark:text-white text-black text-2xl tracking-wide leading-1 sm:leading-loose">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
