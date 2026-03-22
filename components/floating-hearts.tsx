"use client"

import { useEffect, useState } from "react"

interface FloatingHeart {
  id: number
  x: number
  delay: number
  duration: number
  size: number
  type: 'heart' | 'sparkle'
}

export function FloatingHearts() {
  const [elements, setElements] = useState<FloatingHeart[]>([])

  useEffect(() => {
    const generated: FloatingHeart[] = []
    
    // Hearts
    for (let i = 0; i < 12; i++) {
      generated.push({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 15,
        duration: 15 + Math.random() * 10,
        size: 10 + Math.random() * 8,
        type: 'heart',
      })
    }
    
    // Sparkles
    for (let i = 12; i < 20; i++) {
      generated.push({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 12,
        duration: 12 + Math.random() * 8,
        size: 6 + Math.random() * 6,
        type: 'sparkle',
      })
    }
    
    setElements(generated)
  }, [])

  return (
    <div className="fixed inset-0 z-5 pointer-events-none overflow-hidden">
      {elements.map((el) => (
        <div
          key={el.id}
          className="absolute"
          style={{
            left: `${el.x}%`,
            bottom: "-30px",
            fontSize: `${el.size}px`,
            animation: `floatUp ${el.duration}s ease-in-out ${el.delay}s infinite`,
            color: el.type === 'heart' ? 'rgba(255,182,193,0.25)' : 'rgba(255,255,255,0.2)',
          }}
        >
          {el.type === 'heart' ? (
            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          ) : (
            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5z"/>
            </svg>
          )}
        </div>
      ))}

      <style jsx>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg) scale(0.5);
            opacity: 0;
          }
          10% {
            opacity: 1;
            transform: translateY(-10vh) translateX(10px) rotate(10deg) scale(1);
          }
          50% {
            transform: translateY(-50vh) translateX(-10px) rotate(-10deg) scale(1);
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(5px) rotate(15deg) scale(0.8);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}
