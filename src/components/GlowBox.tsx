'use client';

import { cn } from '@/utils/cn';
import { motion } from 'motion/react';

export default function GlowBox({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={cn(
        'rounded-2xl shadow-2xl border-[1px] border-gray-500',
        className
      )}
      initial={{ boxShadow: '0px 0px 20px rgba(255, 0, 255, 0.3)' }}
      animate={{
        boxShadow: [
          '0px 0px 10px rgba(255, 0, 255, 0.3)', // Purple
          '0px 0px 10px rgba(0, 255, 255, 0.3)', // Cyan
          '0px 0px 10px rgba(255, 165, 0, 0.3)', // Orange
          '0px 0px 10px rgba(255, 0, 255, 0.3)', // Back to Purple
        ],
      }}
      whileHover={{
        boxShadow: '0px 0px 15px rgba(255, 255, 255, 0.5)',
        transition: { duration: 0.2 },
      }}
      transition={{
        repeat: Infinity, // Infinite loop
        duration: 5, // Slow color transition
        ease: 'linear',
      }}
    >
      {children}
    </motion.div>
  );
}
