import React from 'react';
import { SparklingDot } from './SparklingDot';

export function CircleAnimation() {
  return (
    <>
      {/* Sparkling dots positioned around the circle */}
      {Array.from({ length: 12 }).map((_, i) => (
        <SparklingDot
          key={i}
          rotate={`${i * 30}deg`}
          delay={`${i * 0.25}s`}
          scale={i % 2 === 0 ? '1.5' : '1'}
        />
      ))}
    </>
  );
}