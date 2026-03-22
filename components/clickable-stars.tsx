"use client"

import { Star } from "lucide-react"

interface ClickableStarsProps {
  onStarClick: (index: number) => void
}

const starPositions = [
  { x: 8, y: 12 },
  { x: 88, y: 8 },
  { x: 5, y: 55 },
  { x: 92, y: 50 },
  { x: 12, y: 88 },
  { x: 85, y: 85 },
  { x: 50, y: 5 },
  { x: 48, y: 92 },
]

export function ClickableStars({ onStarClick }: ClickableStarsProps) {
  return (
    <div className="fixed inset-0 z-20 pointer-events-none">
      {starPositions.map((pos, index) => (
        <button
          key={index}
          onClick={() => onStarClick(index)}
          className="absolute pointer-events-auto group cursor-pointer"
          style={{
            left: `${pos.x}%`,
            top: `${pos.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
          aria-label={`Estrela especial ${index + 1}`}
        >
          {/* Outer glow */}
          <div className="absolute inset-0 -m-4 rounded-full bg-pink-400/20 blur-xl scale-0 group-hover:scale-100 transition-transform duration-500" />
          
          {/* Pulsing ring */}
          <div className="absolute inset-0 -m-3 rounded-full border border-pink-300/30 animate-ping" style={{ animationDuration: '2s' }} />
          
          {/* Star icon */}
          <Star 
            className="w-6 h-6 md:w-8 md:h-8 fill-pink-200 text-pink-100 drop-shadow-[0_0_8px_rgba(255,182,193,0.8)] group-hover:fill-pink-100 group-hover:scale-125 group-hover:drop-shadow-[0_0_16px_rgba(255,182,193,1)] transition-all duration-300"
            style={{
              animation: `starFloat ${3 + index * 0.3}s ease-in-out infinite`,
            }}
          />
          
          <style jsx>{`
            @keyframes starFloat {
              0%, 100% {
                transform: translateY(0) rotate(0deg);
              }
              50% {
                transform: translateY(-4px) rotate(5deg);
              }
            }
          `}</style>
        </button>
      ))}
    </div>
  )
}
