"use client"

import { useEffect } from "react"
import { X, Heart, Sparkles } from "lucide-react"

interface LoveLetterProps {
  onClose: () => void
}

export function LoveLetter({ onClose }: LoveLetterProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [onClose])

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
        className="relative max-h-[85vh] w-full max-w-md overflow-y-auto rounded-3xl bg-gradient-to-b from-[#2a1845] to-[#1a1030] p-8 shadow-2xl shadow-pink-500/10 border border-pink-300/10 animate-in zoom-in-95 slide-in-from-bottom-4 duration-500"
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

        {/* Header */}
        <div className="flex flex-col items-center mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-pink-300/60" />
            <Heart className="w-10 h-10 fill-pink-400 text-pink-400 drop-shadow-[0_0_15px_rgba(255,182,193,0.5)]" />
            <Sparkles className="w-5 h-5 text-pink-300/60" />
          </div>
        </div>

        {/* Letter Content */}
        <div className="space-y-5 text-center">
          <h2 className="font-serif text-2xl font-bold text-pink-200">
            Minha Princesa,
          </h2>

          <div className="space-y-4 text-pink-100/80 leading-relaxed text-[15px]">
            <p>
              Escrevo-te isto para que saibas o quão especial és para mim.
              Desde o dia em que te conheci, algo mudou dentro de mim, meu amorzinho.
              Fiquei mais calmo e comecei a cuidar de alguém que amo tanto… tu.
            </p>

            <p>
              Ninguém se compara a ti, muito menos te consegue substituir.
              Ainda me lembro de como era tímido contigo no início, quase nem falava,
              era tudo difícil… mas, com o tempo, tudo foi ficando mais fácil.
              Na verdade, a ideia era só “fechar aquele 4 e par”, nunca imaginei
              que me iria apegar tanto a ti, meu amor.
            </p>

            <p>
              Quero que saibas que te amo muito, mesmo muito.
              Tivemos um tempo “separados”, mas acredito que isso fez bem aos dois —
              pelo menos a mim, ajudou-me a perceber onde errava contigo.
              E agora que voltámos, sinto que estamos muito melhor.
              Quase nem temos problemas, e quando temos, resolvemos sempre.
            </p>

            <p>
              Vou guardar para sempre tantas memórias contigo…
              a tua risada que parece um motor sem óleo,
              o nervosismo que senti ao pedir-te em namoro e ao dar-te flores,
              o nosso primeiro beijo, todos os momentos bons e até os maus.
            </p>

            <p>
              E quero viver muitos mais contigo, porque o fim não combina connosco,
              meu amorzinho. Quero que saibas que vou estar sempre aqui para ti,
              para te apoiar em tudo. Mesmo quando estiveres errada, vou estar ao teu lado.
            </p>

            <p>
              Porque és tu… e sempre serás tu.
            </p>

            <div className="pt-4">
              <p className="font-serif text-xl text-pink-300">
                Amo-te hoje, amanha e para sempre.
              </p>
            </div>
          </div>

          {/* Signature */}
          <div className="pt-4 border-t border-pink-300/10">
            <p className="text-sm text-pink-200/50 mb-1">Amo te muito meu amorzinho</p>
            <p className="font-serif text-lg text-pink-300">O teu amor</p>
            <Heart className="w-5 h-5 mx-auto mt-2 fill-pink-400 text-pink-400" />
          </div>
        </div>
      </div>
    </div>
  )
}
