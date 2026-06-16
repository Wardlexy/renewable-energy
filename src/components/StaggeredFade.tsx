import type React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '../lib/utils';

type StaggeredFadeProps = {
  text: string;
  className?: string;
  style?: React.CSSProperties;
};

export function StaggeredFade({ text, className, style }: StaggeredFadeProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <motion.h1
      ref={ref}
      className={cn(
        'text-xl text-center sm:text-4xl font-bold md:text-6xl md:leading-[4rem]',
        className,
      )}
      style={style}
      aria-label={text}
    >
      {Array.from(text).map((character, index) => (
        <motion.span
          key={`${character}-${index}`}
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: index * 0.03, duration: 0.3 }}
        >
          {character}
        </motion.span>
      ))}
    </motion.h1>
  );
}
