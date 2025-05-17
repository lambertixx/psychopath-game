"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface CardProps {
  id: number
  name: string
  image: string
  diagnosis: string
  isFlipped: boolean
  onClick: () => void
  description: string
  isPsychopath: boolean
}

export function Card({
  id,
  name,
  image,
  onClick,
  diagnosis,
  isFlipped,
  description,
  isPsychopath,
}: CardProps) {
  return (
    <div
      className="perspective-1000 h-48 sm:h-56 md:h-64 w-full cursor-pointer"
      onClick={onClick}
    >
      <motion.div
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{
          duration: 0.6,
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        className={cn(
          "relative w-full h-full preserve-3d shadow-xl rounded-xl",
          isFlipped && isPsychopath ? "shadow-red-500/50" : ""
        )}
      >
        {/* Front of card - Now shows character photo and name */}
        <div className="absolute w-full h-full backface-hidden rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 border-2 border-slate-600 flex flex-col items-center justify-center p-4">
          <div className="w-16 h-16 sm:w-20 sm:h-20 relative rounded-full overflow-hidden bg-slate-600 border-2 border-slate-400 mb-3">
            <Image
              src={image || "/placeholder.svg"}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-white font-bold text-lg text-center">{name}</h3>
          <p className="text-slate-300 text-sm mt-1 text-center">
            {description}
          </p>
        </div>

        {/* Back of card - Now shows only the diagnosis */}
        <div
          className={cn(
            "absolute w-full h-full backface-hidden rounded-xl rotateY-180 p-4 flex flex-col items-center justify-center",
            isPsychopath
              ? "bg-gradient-to-br from-red-900 to-red-700 border-2 border-red-500"
              : "bg-gradient-to-br from-slate-800 to-slate-700 border-2 border-slate-500"
          )}
        >
          <div
            className={cn(
              "text-center px-4 py-3 rounded-lg text-xl font-bold w-full flex items-center justify-center min-h-[100px]",
              isPsychopath
                ? "bg-red-800 text-white"
                : "bg-slate-600 text-slate-200"
            )}
          >
            {diagnosis}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
