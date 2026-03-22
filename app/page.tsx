"use client"

import { useState } from "react"
import { StarrySky } from "@/components/starry-sky"
import { ClickableStars } from "@/components/clickable-stars"
import { LoveCounter } from "@/components/love-counter"
import { StarModal } from "@/components/star-modal"
import { LoveLetter } from "@/components/love-letter"
import { FloatingHearts } from "@/components/floating-hearts"
import { Heart, Sparkles } from "lucide-react"

export default function Home() {
  const [selectedStar, setSelectedStar] = useState<number | null>(null)
  const [showLetter, setShowLetter] = useState(false)

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <StarrySky />

      {/* Floating Hearts */}
      <FloatingHearts />

      {/* Clickable Stars */}
      <ClickableStars onStarClick={setSelectedStar} />

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-12">

        {/* Decorative top sparkle */}
        <Sparkles className="w-8 h-8 text-pink-300/60 mb-6 animate-pulse" />

        {/* Main Title */}
        <h1 className="text-center mb-4 font-serif text-3xl font-bold tracking-wide text-white md:text-5xl lg:text-6xl animate-fade-in">
          <span className="text-balance bg-gradient-to-r from-pink-200 via-white to-pink-200 bg-clip-text text-transparent">
            Em um mundo com tanta coisa...
          </span>
        </h1>

        <h2 className="text-center mb-8 font-serif text-2xl font-medium text-pink-200/90 md:text-3xl lg:text-4xl animate-fade-in">
          encontrei-te a ti a minha princesa Favorita.
        </h2>

        {/* Heart divider */}
        <div className="flex items-center gap-3 mb-10">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-pink-300/50" />
          <Heart className="w-5 h-5 fill-pink-400 text-pink-400" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-pink-300/50" />
        </div>

        {/* Subtitle */}
        <p className="text-center mb-12 text-lg text-pink-100/70 md:text-xl max-w-md animate-fade-in-delay">
          E desde esse dia, cada momento contigo é mágico
        </p>

        {/* Love Counter */}
        <LoveCounter startDate={new Date("2025-12-15T00:00:00")} />

        {/* Special Button */}
        <button
          onClick={() => setShowLetter(true)}
          className="group mt-14 flex items-center gap-3 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 px-8 py-4 text-lg font-medium text-pink-100 backdrop-blur-sm border border-pink-300/20 transition-all duration-500 hover:scale-105 hover:from-pink-500/30 hover:to-purple-500/30 hover:border-pink-300/40 hover:shadow-[0_0_30px_rgba(255,182,193,0.3)] md:text-xl"
        >
          <Heart className="w-5 h-5 fill-pink-300 text-pink-300 group-hover:scale-110 transition-transform" />
          <span>Uma carta para ti</span>
          <Sparkles className="w-4 h-4 text-pink-300 opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>

        {/* Instructions */}
        <p className="mt-10 text-sm text-pink-200/50 flex items-center gap-2">
          <Sparkles className="w-4 h-4" />
          <span>Clica nas estrelas para descobrir surpresas</span>
          <Sparkles className="w-4 h-4" />
        </p>
      </div>

      {/* Star Modal */}
      {selectedStar !== null && (
        <StarModal
          starIndex={selectedStar}
          onClose={() => setSelectedStar(null)}
        />
      )}

      {/* Love Letter Modal */}
      {showLetter && (
        <LoveLetter onClose={() => setShowLetter(false)} />
      )}
    </main>
  )
}
