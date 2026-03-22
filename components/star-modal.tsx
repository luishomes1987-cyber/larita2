"use client"

import { useEffect, useState } from "react"
import { X, Heart, Star } from "lucide-react"
import Image from "next/image"

interface StarModalProps {
  starIndex: number
  onClose: () => void
}

const starMessages = [
  {
    message: "O teu sorriso ilumina mais que qualquer estrela",
    image: "/images/foto1.png",
  },
  {
    message: "Es a coisa mais bonita que me aconteceu",
    image: "/images/foto2.png",
  },
  {
    message: "Amo cada detalhe teu, cada momento contigo",
    image: "/images/foto3.png",
  },
  {
    message: "Contigo tudo faz sentido",
    image: "/images/foto4.png",
  },
  {
    message: "Es a minha pessoa favorita no universo inteiro",
    image: "/images/foto5.png",
  },
  {
    message: "Cada dia contigo e uma nova aventura",
    image: "/images/foto6.png",
  },
  {
    message: "O meu coracao escolheu-te a ti",
    image: "/images/foto7.png",
  },
  {
    message: "Es o meu presente mais precioso",
    image: "/images/foto8.png",
  },
]

export function StarModal({ starIndex, onClose }: StarModalProps) {
  const starData = starMessages[starIndex] || starMessages[0]
  const [imageError, setImageError] = useState(false)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [onClose])

  // Reset error state when starIndex changes
  useEffect(() => {
    setImageError(false)
  }, [starIndex])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#0d0d1a]/90 backdrop-blur-md animate-in fade-in duration-300" />

      {/* Modal */}
      <div
        className="relative w-full max-w-sm rounded-3xl bg-gradient-to-b from-[#2a1845] to-[#1a1030] p-6 shadow-2xl shadow-pink-500/10 border border-pink-300/10 animate-in zoom-in-95 slide-in-from-bottom-4 duration-500"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/20 via-purple-500/10 to-pink-500/20 rounded-3xl blur-xl -z-10" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-pink-200/60 transition-all hover:bg-pink-500/10 hover:text-pink-200"
          aria-label="Fechar"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Star decoration */}
        <div className="flex justify-center mb-4">
          <Star className="w-8 h-8 fill-pink-300 text-pink-300 drop-shadow-[0_0_10px_rgba(255,182,193,0.6)]" />
        </div>

        {/* Image */}
        <div className="mb-5 overflow-hidden rounded-2xl aspect-square bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-300/10 relative">
          {!imageError ? (
            <Image
              src={starData.image}
              alt="Foto especial"
              fill
              className="object-cover"
              onError={() => setImageError(true)}
              sizes="(max-width: 768px) 100vw, 384px"
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-center p-6">
                <Heart className="w-12 h-12 mx-auto mb-3 text-pink-300/40 fill-pink-300/20" />
                <p className="text-sm text-pink-200/50">
                  Adiciona uma foto em
                </p>
                <code className="text-xs text-pink-300/70 mt-1 block">{starData.image}</code>
              </div>
            </div>
          )}
        </div>

        {/* Message */}
        <p className="text-center font-serif text-xl font-medium text-pink-100 leading-relaxed">
          &ldquo;{starData.message}&rdquo;
        </p>

        {/* Decorative hearts */}
        <div className="mt-5 flex justify-center gap-2">
          <Heart className="w-4 h-4 fill-pink-400/60 text-pink-400/60 animate-pulse" />
          <Heart className="w-4 h-4 fill-pink-400/60 text-pink-400/60 animate-pulse" style={{ animationDelay: '0.2s' }} />
          <Heart className="w-4 h-4 fill-pink-400/60 text-pink-400/60 animate-pulse" style={{ animationDelay: '0.4s' }} />
        </div>
      </div>
    </div>
  )
}
