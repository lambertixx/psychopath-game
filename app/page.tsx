import { Game } from "@/components/memory-game"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-r from-red-950 via-red-900 to-red-950">
      <Game />
    </main>
  )
}
