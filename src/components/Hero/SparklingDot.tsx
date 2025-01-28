import React from 'react';

interface SparklingDotProps {
  delay: string;
  rotate: string;
  scale?: string;
}

export function SparklingDot({ delay, rotate, scale = '1' }: SparklingDotProps) {
  return (
    <div
      className="absolute w-2 h-2 rounded-full bg-white"
      style={{
        transform: `rotate(${rotate}) translateX(12rem) scale(${scale})`,
        animation: `sparkle 3s infinite ${delay}`,
        opacity: 0,
      }}
    />
  );
}