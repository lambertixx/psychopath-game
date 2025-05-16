"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import confetti from "canvas-confetti"
import { characterData, diagnoses } from "./data"
import Loading from "./loading"

export function Game() {
  const [cards, setCards] = useState<Array<any>>([])
  const [flippedCards, setFlippedCards] = useState<number[]>([])
  const [gameOver, setGameOver] = useState<boolean>(false)
  const [gameWon, setGameWon] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [psychopathId, setPsychopathId] = useState<number | null>(null)
  const [attempts, setAttempts] = useState<number>(0)

  // Initialize game
  useEffect(() => {
    initializeGame()
  }, [])

  const initializeGame = () => {
    setLoading(true)
    // Shuffle characters
    const shuffledCharacters = [...characterData].sort(
      () => Math.random() - 0.5
    )

    // Randomly select one character to be the psychopath
    const psychopathIndex = Math.floor(
      Math.random() * shuffledCharacters.length
    )
    const psychopathCharacterId = shuffledCharacters[psychopathIndex].id
    setPsychopathId(psychopathCharacterId)

    // Assign diagnoses to characters
    const shuffledDiagnoses = [...diagnoses].sort(() => Math.random() - 0.5)

    const cardsWithDiagnoses = shuffledCharacters.map((character, index) => {
      return {
        ...character,
        diagnosis:
          index === psychopathIndex
            ? "Psicopata"
            : shuffledDiagnoses[index % shuffledDiagnoses.length],
      }
    })

    setCards(cardsWithDiagnoses)
    setFlippedCards([])
    setGameOver(false)
    setGameWon(false)
    setAttempts(0)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }

  const handleCardClick = (id: number) => {
    if (flippedCards.includes(id) || gameOver) return

    setFlippedCards([...flippedCards, id])
    setAttempts(attempts + 1)

    // Check if clicked card is the psychopath
    if (id === psychopathId) {
      setGameWon(true)
      setGameOver(true)
      triggerConfetti()
    }
  }

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    })
  }

  const restartGame = () => {
    initializeGame()
  }

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center"
      >
        <h1 className="text-4xl font-bold text-white mb-2">
          Identifique o Psicopata
        </h1>
        <p className="text-slate-300 mb-4">
          Gire a carta para revelar o diagnóstico. Ache o personagem
          diagnosticado com psicopatia para ganhar!
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
              key={card.id}
              id={card.id}
              name={card.name}
              image={card.image}
              diagnosis={card.diagnosis}
              isFlipped={flippedCards.includes(card.id)}
              isPsychopath={card.id === psychopathId}
              onClick={() => handleCardClick(card.id)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
