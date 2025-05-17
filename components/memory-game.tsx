"use client"

import Loading from "./loading"
import { motion } from "framer-motion"
import confetti from "canvas-confetti"
import { Sparkles } from "lucide-react"
import { Card } from "@/components/card"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { commonCharacters, psychopathsToRotate } from "./data"

export function Game() {
  const [cards, setCards] = useState<Array<any>>([])
  const [attempts, setAttempts] = useState<number>(0)
  const [gameWon, setGameWon] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [gameOver, setGameOver] = useState<boolean>(false)
  const [flippedCards, setFlippedCards] = useState<number[]>([])
  const [psychopathId, setPsychopathId] = useState<number | null>(null)

  const tpasUrl =
    "https://www.msdmanuals.com/pt/profissional/transtornos-psiquiátricos/transtornos-de-personalidade/transtorno-de-personalidade-antissocial-tpas"

  useEffect(() => {
    initializeGame()
  }, [])

  const initializeGame = () => {
    setLoading(true)

    // 1) Sorteia UM psicopata dentre os 5 possíveis
    const chosenPsychopath =
      psychopathsToRotate[
        Math.floor(Math.random() * psychopathsToRotate.length)
      ]
    setPsychopathId(chosenPsychopath.id)

    // 2) Pega 15 personagens “normais” aleatórios
    const innocents = [...commonCharacters]
      .sort(() => Math.random() - 0.5)
      .slice(0, 15)

    // 3) Junta tudo e embaralha
    const deck = [...innocents, chosenPsychopath].sort(
      () => Math.random() - 0.5
    )

    setCards(deck)
    setFlippedCards([])
    setGameOver(false)
    setGameWon(false)
    setAttempts(0)

    // 4) Desliga o loading após 1.5s
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }

  const handleCardClick = (id: number) => {
    if (flippedCards.includes(id) || gameOver) return

    setFlippedCards((prev) => [...prev, id])
    setAttempts((prev) => prev + 1)

    if (id === psychopathId) {
      setGameWon(true)
      setGameOver(true)
      triggerConfetti()
    }
  }

  const triggerConfetti = () => {
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } })
  }

  const restartGame = () => initializeGame()

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center"
      >
        <h1 className="text-4xl font-bold text-white mb-2">
          Quem é o verdadeiro psicopata?
        </h1>
        <p className="text-slate-300 mb-4">
          Você acha que consegue identificar o verdadeiro ''psicopata''?
          Analise, compare e use seu raciocínio diagnóstico para encontrar o
          único personagem cuja hipótese diagnóstica é:{" "}
          <a
            href={tpasUrl}
            target="_blank"
            className="font-bold text-white underline"
          >
            Transtorno de Personalidade Antissocial
          </a>
          . <br />
          Acerte e mostre que você domina a arte do diagnóstico! <br />
          Erre... e talvez seja você o próximo alvo 👀
        </p>
        <div className="flex justify-center items-center gap-4">
          <div className="bg-slate-700 px-4 py-2 rounded-lg">
            <p className="text-white">Tentativas: {attempts}</p>
          </div>
          <Button
            onClick={restartGame}
            variant="outline"
            className="bg-slate-700 hover:bg-slate-600 text-white border-slate-600"
          >
            Reiniciar
          </Button>
        </div>
      </motion.div>

      {gameOver && gameWon && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="bg-green-600 text-white p-6 rounded-lg mb-8 text-center w-full max-w-md"
        >
          <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
            <Sparkles className="h-6 w-6" />
            Venceu!
            <Sparkles className="h-6 w-6" />
          </h2>
          <p className="mt-2">
            Você encontrou o psicopata em {attempts} tentativas!
          </p>
          <Button
            onClick={restartGame}
            className="mt-4 bg-white text-green-700 hover:bg-slate-100"
          >
            Jogar novamente
          </Button>
        </motion.div>
      )}

      {loading ? (
        <div
          style={{ height: "calc(100vh - 198px)" }}
          className="flex items-center justify-center"
        >
          <Loading />
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
          {cards.map((card) => (
            <Card
              id={card.id}
              key={card.id}
              name={card.name}
              image={card.image}
              diagnosis={card.diagnosis}
              description={card.description}
              isPsychopath={card.id === psychopathId}
              onClick={() => handleCardClick(card.id)}
              isFlipped={flippedCards.includes(card.id)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
