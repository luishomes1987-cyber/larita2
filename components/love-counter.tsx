"use client"

import { useState, useEffect } from "react"
import { Heart } from "lucide-react"

interface LoveCounterProps {
  startDate: Date
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function LoveCounter({ startDate }: LoveCounterProps) {
  const [timeElapsed, setTimeElapsed] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date()
      const diff = now.getTime() - startDate.getTime()

      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)

      setTimeElapsed({ days, hours, minutes, seconds })
    }

    calculateTime()
    const interval = setInterval(calculateTime, 1000)

    return () => clearInterval(interval)
  }, [startDate])

  const timeUnits = [
    { value: timeElapsed.days, label: "Dias" },
    { value: timeElapsed.hours, label: "Horas" },
    { value: timeElapsed.minutes, label: "Min" },
    { value: timeElapsed.seconds, label: "Seg" },
  ]

  return (
    <div className="flex flex-col items-center gap-5">
      {/* Label */}
      <div className="flex items-center gap-2">
        <Heart className="w-4 h-4 fill-pink-400 text-pink-400" />
        <p className="text-sm uppercase tracking-[0.2em] text-pink-200/70">
          Juntos ha
        </p>
        <Heart className="w-4 h-4 fill-pink-400 text-pink-400" />
      </div>
      
      {/* Counter boxes */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-4">
        {timeUnits.map((unit, index) => (
          <div
            key={unit.label}
            className="flex flex-col items-center rounded-2xl bg-gradient-to-b from-white/10 to-white/5 px-4 py-4 backdrop-blur-sm border border-pink-300/10 min-w-[70px] md:min-w-[85px] transition-all duration-300 hover:border-pink-300/30 hover:from-white/15"
            style={{
              animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
            }}
          >
            <span className="font-serif text-3xl font-bold text-white md:text-4xl tabular-nums">
              {String(unit.value).padStart(2, "0")}
            </span>
            <span className="mt-1 text-xs uppercase tracking-wider text-pink-200/60">
              {unit.label}
            </span>
          </div>
        ))}
      </div>

      {/* Subtitle */}
      <p className="text-pink-200/50 text-sm mt-2">
        ...e a contar
      </p>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
