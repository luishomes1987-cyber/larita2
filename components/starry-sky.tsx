"use client"

import { useEffect, useState } from "react"

interface BackgroundStar {
  id: number
  x: number
  y: number
  size: number
  delay: number
  duration: number
}

export function StarrySky() {
  const [stars, setStars] = useState<BackgroundStar[]>([])

  useEffect(() => {
    const generatedStars: BackgroundStar[] = []
    
    for (let i = 0; i < 200; i++) {
      generatedStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2.5 + 0.5,
        delay: Math.random() * 4,
        duration: Math.random() * 3 + 2,
      })
    }

    setStars(generatedStars)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Deep space gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d1a] via-[#1a1033] to-[#2d1652]" />
      
      {/* Nebula effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,_rgba(180,120,200,0.12)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_70%,_rgba(255,150,180,0.08)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_20%_80%,_rgba(120,100,200,0.1)_0%,_transparent_50%)]" />
      
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
            boxShadow: star.size > 1.5 ? '0 0 4px rgba(255,255,255,0.5)' : 'none',
          }}
        />
      ))}

      {/* Shooting stars */}
      <div className="shooting-star shooting-star-1" />
      <div className="shooting-star shooting-star-2" />

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.3);
          }
        }

        .shooting-star {
          position: absolute;
          width: 3px;
          height: 3px;
          background: white;
          border-radius: 50%;
          box-shadow: 0 0 6px 2px rgba(255,255,255,0.6);
        }

        .shooting-star::before {
          content: '';
          position: absolute;
          top: 50%;
          right: 100%;
          width: 80px;
          height: 1.5px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.8));
          transform: translateY(-50%);
        }

        .shooting-star-1 {
          top: 15%;
          left: -5%;
          animation: shoot 10s linear infinite;
          animation-delay: 2s;
        }

        .shooting-star-2 {
          top: 35%;
          left: -5%;
          animation: shoot 12s linear infinite;
          animation-delay: 7s;
        }

        @keyframes shoot {
          0% {
            transform: translateX(0) translateY(0);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          40% {
            opacity: 1;
          }
          50% {
            transform: translateX(110vw) translateY(30vh);
            opacity: 0;
          }
          100% {
            transform: translateX(110vw) translateY(30vh);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}
