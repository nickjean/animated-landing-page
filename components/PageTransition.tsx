'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

// Animation variants
const fadeVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const slideVariants = {
  initial: { x: '100%', opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: '-100%', opacity: 0 },
};

const slideDownVariants = {
  initial: { y: '-100%', opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: '100%', opacity: 0 },
};

const scaleVariants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 1.2, opacity: 0 },
};

const combinedVariants = {
  initial: { x: '100%', scale: 0.8, opacity: 0 },
  animate: { x: 0, scale: 1, opacity: 1 },
  exit: { x: '-100%', scale: 0.8, opacity: 0 },
};

// Select animation based on route (for variety)
const getAnimationVariants = (pathname: string) => {
  const animations = [
    fadeVariants,
    slideVariants,
    slideDownVariants,
    scaleVariants,
    combinedVariants,
  ];
  
  // Use pathname to consistently select animation per route
  const hash = pathname.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return animations[hash % animations.length];
};

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const variants = getAnimationVariants(pathname);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
        transition={{
          duration: 0.4,
          ease: [0.4, 0, 0.2, 1],
        }}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

