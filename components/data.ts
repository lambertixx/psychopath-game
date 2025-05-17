export interface Character {
  id: number
  name: string
  image: string
  description: string
  diagnosis: string
}

export const characterData: Character[] = [
  {
    id: 1,
    name: "Alex",
    image: "/placeholder.svg?text=Alex",
    description: "Investigador frio e calculista.",
    diagnosis: "Transtorno de Ansiedade",
  },
  {
    id: 2,
    name: "Blake",
    image: "/placeholder.svg?text=Blake",
    description: "Extrovertido e impulsivo.",
    diagnosis: "Transtorno Obsessivo-Compulsivo",
  },
  {
    id: 3,
    name: "Casey",
    image: "/placeholder.svg?text=Casey",
    description: "Paciente e detalhista.",
    diagnosis: "Depressão",
  },
  {
    id: 4,
    name: "Dana",
    image: "/placeholder.svg?text=Dana",
    description: "Ansiosa em situações sociais.",
    diagnosis: "Transtorno de Ansiedade",
  },
  {
    id: 5,
    name: "Ellis",
    image: "/placeholder.svg?text=Ellis",
    description: "Tende a alternar entre euforia e tristeza.",
    diagnosis: "Transtorno Bipolar",
  },
  {
    id: 6,
    name: "Frankie",
    image: "/placeholder.svg?text=Frankie",
    description: "Hiperativo e disperso.",
    diagnosis: "TDAH",
  },
  {
    id: 7,
    name: "Gray",
    image: "/placeholder.svg?text=Gray",
    description: "Tem pensamentos intrusivos frequentes.",
    diagnosis: "TEPT",
  },
  {
    id: 8,
    name: "Harper",
    image: "/placeholder.svg?text=Harper",
    description: "Desconfiado e reservado.",
    diagnosis: "Transtorno de Personalidade Paranóide",
  },
  {
    id: 9,
    name: "Indigo",
    image: "/placeholder.svg?text=Indigo",
    description: "Gosta de atenção e dramatiza emoções.",
    diagnosis: "Transtorno de Personalidade Histriônica",
  },
  {
    id: 10,
    name: "Jamie",
    image: "/placeholder.svg?text=Jamie",
    description: "Dificuldade em manter relacionamentos.",
    diagnosis: "Transtorno de Personalidade Dependente",
  },
  {
    id: 11,
    name: "Kelly",
    image: "/placeholder.svg?text=Kelly",
    description: "Busca isolamento e tem afeto restrito.",
    diagnosis: "Transtorno de Personalidade Esquizoide",
  },
  {
    id: 12,
    name: "Logan",
    image: "/placeholder.svg?text=Logan",
    description: "Impulsivo e desrespeita regras sociais.",
    diagnosis: "Transtorno de Personalidade Antissocial",
  },
  {
    id: 13,
    name: "Morgan",
    image: "/placeholder.svg?text=Morgan",
    description: "Orgulhoso, necessita de muita admiração.",
    diagnosis: "Transtorno de Personalidade Narcisista",
  },
  {
    id: 14,
    name: "Nicky",
    image: "/placeholder.svg?text=Nicky",
    description: "Inseguro e evita críticas a todo custo.",
    diagnosis: "Transtorno de Personalidade Evitativa",
  },
  {
    id: 15,
    name: "Parker",
    image: "/placeholder.svg?text=Parker",
    description: "Forte apego a figuras de autoridade.",
    diagnosis: "Transtorno de Personalidade Dependente",
  },
]

export const possiblePsychopaths: Character[] = [
  {
    id: 101,
    name: "Dr. Hannibal",
    image: "/placeholder.svg?text=Hannibal",
    description: "Mente brilhante, mas sem empatia.",
    diagnosis: "Psicopata",
  },
  {
    id: 102,
    name: "Srta. Crimson",
    image: "/placeholder.svg?text=Crimson",
    description: "Fria e manipuladora, sempre um passo à frente.",
    diagnosis: "Psicopata",
  },
  {
    id: 103,
    name: "Capitão Black",
    image: "/placeholder.svg?text=Black",
    description: "Charme letal, esconde intenções sombrias.",
    diagnosis: "Psicopata",
  },
  {
    id: 104,
    name: "Agente Frost",
    image: "/placeholder.svg?text=Frost",
    description: "Calculista e silencioso, atormenta sua vítima.",
    diagnosis: "Psicopata",
  },
  {
    id: 105,
    name: "Madame Rouge",
    image: "/placeholder.svg?text=Rouge",
    description: "Sedutora e impiedosa, faz qualquer um de marionete.",
    diagnosis: "Psicopata",
  },
]
