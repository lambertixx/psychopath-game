export interface Character {
  id: number
  name: string
  image: string
  description: string
  diagnosis: string
}

export const commonCharacters: Character[] = [
  {
    id: 1,
    name: "Ed Gein",
    image: "/ed-gein",
    diagnosis: "Esquizofrenia Paranoide",
    description:
      "Assassino americano que inspirou filmes como “O Massacre da Serra Elétrica”. Desenterrava cadáveres e usava partes do corpo para fazer objetos.",
  },
  {
    id: 2,
    name: "Aileen Wuornos",
    image: "/aileen-wuornos",
    diagnosis: "Transtorno de Personalidade Borderline",
    description:
      "Assassina em série americana. Matou homens enquanto trabalhava como prostituta, com comportamento cruel, antissocial e impulsivo.",
  },
  {
    id: 3,
    name: "Pablo Escobar",
    image: "/pablo-escobar",
    diagnosis: "Transtorno de Personalidade Narcisista",
    description:
      "Chefe do cartel de Medellín, buscava fama e poder, agia com frieza e justificava seus atos como “justiça social”.",
  },
  {
    id: 4,
    name: "Christopher Scarver",
    image: "/christopher-scarver",
    diagnosis: "Esquizofrenia Paranoide",
    description:
      "Matou Jeffrey Dahmer na prisão, justificando o ato como “missão divina” contra o mal.",
  },
  {
    id: 5,
    name: "Marilyn Monroe",
    image: "/marilyn-monroe",
    diagnosis: "Transtorno de Personalidade Borderline",
    description:
      "Relações intensas e instáveis, vazio emocional, sofria com depressão, solidão e abuso de substâncias.",
  },
  {
    id: 6,
    name: "Brian Wilson",
    image: "/brian-wilson",
    diagnosis: "Transtorno Esquizoafetivo",
    description:
      "Músico dos Beach Boys, teve alucinações auditivas e paranoia, isolou-se por longos períodos.",
  },
  {
    id: 7,
    name: "Howard Hughes",
    image: "/howard-hughes",
    diagnosis: "Transtorno Obsessivo-Compulsivo Grave",
    description:
      "Empresário que se isolou, mania de limpeza extrema, fobias e rotinas rígidas.",
  },
  {
    id: 8,
    name: "Jack Ruby",
    image: "/jack-ruby",
    diagnosis: "Transtorno de Personalidade Narcisista",
    description:
      "Assassinou Lee Harvey Oswald buscando reconhecimento público e se considerava herói.",
  },
  {
    id: 9,
    name: "Mark Chapman",
    image: "/mark-chapman",
    diagnosis: "Esquizofrenia Paranoide",
    description:
      "Assassino de John Lennon, dizia ouvir vozes e apresentava ideias delirantes.",
  },
  {
    id: 10,
    name: "Charles Manson",
    image: "/charles-manson",
    diagnosis: "Transtorno de Personalidade Narcisista",
    description:
      "Líder da Família Manson, manipulava seguidores para cometer assassinatos por ele.",
  },
  {
    id: 11,
    name: "Jack Torrance",
    image: "/jack-torrance",
    diagnosis: "Transtorno Psicótico",
    description:
      "Protagonista de O Iluminado: alucinações, paranoia e perda de contato com a realidade.",
  },
  {
    id: 12,
    name: "Coringa",
    image: "/coringa",
    diagnosis: "Borderline, Esquizotípico e Psicótico",
    description:
      "Vilão da DC com instabilidade emocional, excêntrico e episódios psicóticos.",
  },
  {
    id: 13,
    name: "Tyler Durden",
    image: "/tyler-durden",
    diagnosis: "Transtorno Dissociativo de Identidade e Sociopatia",
    description:
      "Personagem de Clube da Luta: manipulador, anárquico e sem empatia.",
  },
  {
    id: 14,
    name: "Arya Stark",
    image: "/arya-stark",
    diagnosis: "Transtorno de Personalidade Borderline",
    description:
      "De Game of Thrones: frieza emocional, impulsividade e busca obsessiva por vingança.",
  },
  {
    id: 15,
    name: "Tommy Shelby",
    image: "/tommy-shelby",
    diagnosis: "TEPT e Tuberculoma",
    description:
      "Protagonista de Peaky Blinders: sofre com PTSD, flashbacks e apatia emocional.",
  },
  {
    id: 16,
    name: "Sherlock Holmes",
    image: "/sherlock-holmes",
    diagnosis: "TOC e Altas Habilidades Cognitivas",
    description:
      "Obsessivo e metódico, socialmente limitado mas extremamente inteligente.",
  },
  {
    id: 17,
    name: "Dr. House",
    image: "/dr-house",
    diagnosis: "Transtorno de Personalidade Narcisista e Vício",
    description:
      "Egocêntrico, arrogante e dependente de analgésicos, com moralidade complexa.",
  },
  {
    id: 18,
    name: "Martha Scott",
    image: "/martha-scott",
    diagnosis: "TOC, Borderline e Síndrome de Clérambault",
    description:
      "Personagem de Bebê Rena, com erotomania e comportamento impulsivo.",
  },
  {
    id: 19,
    name: "Thanos",
    image: "/thanos",
    diagnosis: "Transtorno de Personalidade Narcisista e Megalomania",
    description:
      "Vilão dos Vingadores: delírios de grandeza e missão genocida.",
  },
  {
    id: 20,
    name: "Nina Sayers",
    image: "/nina-sayers",
    diagnosis: "Transtorno Psicótico",
    description:
      "Protagonista de Cisne Negro: alucinações e colapso mental sob pressão.",
  },
  {
    id: 21,
    name: "Susanna Kaysen",
    image: "/susanna-kaysen",
    diagnosis: "Transtorno Borderline",
    description:
      "Protagonista de Garota, Interrompida: instabilidade emocional e impulsividade.",
  },
  {
    id: 22,
    name: "Rainha Má",
    image: "/rainha-ma",
    diagnosis: "Transtorno de Personalidade Narcisista",
    description: "Vilã de Branca de Neve: egocêntrica, invejosa e cruel.",
  },
  {
    id: 23,
    name: "Norman Bates",
    image: "/norman-bates",
    diagnosis: "Transtorno Psicótico e Dissociativo",
    description:
      "Assassino de Psicose: convive com a identidade da mãe e delírios.",
  },
  {
    id: 24,
    name: "Kevin Wendell Crumb",
    image: "/kevin-wendell-crumb",
    diagnosis: "Transtorno Dissociativo de Identidade",
    description:
      "Personagem de Fragmentado: múltiplas personalidades, incluindo a “Fera”.",
  },
  {
    id: 25,
    name: "Amy Dunne",
    image: "/amy-dunne",
    diagnosis: "Transtornos Narcisista e Borderline",
    description:
      "Protagonista de Garota Exemplar: manipuladora e imprevisível.",
  },
  {
    id: 26,
    name: "BoJack Horseman",
    image: "/bojack-horseman",
    diagnosis: "Borderline, Depressão Maior e Abuso de Substâncias",
    description:
      "Antierói animado: autodestrutivo, depressivo e com vínculos instáveis.",
  },
  {
    id: 27,
    name: "Joe Goldberg",
    image: "/joe-goldberg",
    diagnosis: "Borderline, TOC e Erotomania",
    description:
      "De You: obcecado, persegue e manipula sob justificativas românticas.",
  },
  {
    id: 28,
    name: "Walter White",
    image: "/walter-white",
    diagnosis: "Transtorno de Personalidade Narcisista",
    description:
      "De Breaking Bad: manipulador e obcecado por controle e reconhecimento.",
  },
  {
    id: 29,
    name: "Dexter Morgan",
    image: "/dexter-morgan",
    diagnosis: "Transtorno Psicótico",
    description:
      "De Dexter: assassino serial com “código moral” e dissociação emocional.",
  },
  {
    id: 30,
    name: "Loki",
    image: "/loki",
    diagnosis: "Transtornos Narcisista e Borderline",
    description: "Vilão da Marvel: manipulador, busca poder e validação.",
  },
  {
    id: 31,
    name: "Batman",
    image: "/batman",
    diagnosis: "TEPT",
    description:
      "Herói da DC traumatizado pela morte dos pais, obsessivo e isolado.",
  },
  {
    id: 32,
    name: "Rainha de Copas",
    image: "/rainha-de-copas",
    diagnosis: "Transtorno de Personalidade Narcisista",
    description:
      "De Alice no País das Maravilhas: tirânica e vaidosa, reações explosivas.",
  },
  {
    id: 33,
    name: "Light Yagami",
    image: "/light-yagami",
    diagnosis: "Transtornos Narcisista e Megalomania",
    description:
      "De Death Note: quer ser “deus” num mundo novo, justifica assassinatos.",
  },
  {
    id: 34,
    name: "Harley Quinn",
    image: "/harley-quinn",
    diagnosis: "Transtorno Psicótico e Borderline",
    description:
      "De DC: impulsiva, instável e dependente emocionalmente do Coringa.",
  },
  {
    id: 35,
    name: "Jack Sparrow",
    image: "/jack-sparrow",
    diagnosis: "Alcoolismo Crônico e Transtorno Histriônico",
    description:
      "De Piratas do Caribe: excêntrico, teatral e dependente do álcool.",
  },
  {
    id: 36,
    name: "Pearl",
    image: "/pearl",
    diagnosis: "Transtorno Borderline ou Histriônico",
    description:
      "De Pearl/X: busca reconhecimento, impulsiva e emocionalmente explosiva.",
  },
  {
    id: 37,
    name: "Carrie White",
    image: "/carrie-white",
    diagnosis: "Esquizoafetivo e Psicose Breve",
    description:
      "De Carrie: vítima de bullying com alucinações e explosão violenta.",
  },
  {
    id: 38,
    name: "Cersei Lannister",
    image: "/cersei-lannister",
    diagnosis: "Narcisista com Traços Paranoides",
    description: "De GoT: manipuladora, vingativa e desconfiada de todos.",
  },
  {
    id: 39,
    name: "Steve Jobs",
    image: "/steve-jobs",
    diagnosis: "Transtorno Obsessivo-Compulsivo",
    description:
      "Perfeccionista extremo, obsessivo com detalhes e controle total.",
  },
]

export const psychopathsToRotate: Character[] = [
  {
    id: 1001,
    name: "Eric Cartman",
    image: "/eric-cartman",
    diagnosis: "Psicopata",
    description: "Personagem de South Park: cruel, manipulador e sem remorso.",
  },
  {
    id: 1002,
    name: "Patrick Bateman",
    image: "/patrick-bateman",
    diagnosis: "Psicopata",
    description:
      "Protagonista de American Psycho: executivo narcisista e violento.",
  },
  {
    id: 1003,
    name: "Lord Voldemort",
    image: "/lord-voldemort",
    diagnosis: "Psicopata",
    description: "Vilão de Harry Potter: frio, megalomaníaco e sem empatia.",
  },
  {
    id: 1004,
    name: "Hannibal Lecter",
    image: "/hannibal-lecter",
    diagnosis: "Psicopata",
    description:
      "De O Silêncio dos Inocentes: brilhante, manipulador e canibal.",
  },
  {
    id: 1005,
    name: "Anton Chigurh",
    image: "/anton-chigurh",
    diagnosis: "Psicopata",
    description:
      "De Onde os Fracos Não Têm Vez: implacável, sem remorso e metódico.",
  },
  {
    id: 1006,
    name: "Ted Bundy",
    image: "/ted-bundy",
    diagnosis: "Psicopata",
    description: "Serial killer real: carismático, manipulador e violento.",
  },
  {
    id: 1007,
    name: "Darth Vader",
    image: "/darth-vader",
    diagnosis: "Psicopata",
    description:
      "De Star Wars: implacável, obedece ao lado sombrio e sem piedade.",
  },
  {
    id: 1008,
    name: "Marla Grayson",
    image: "/marla-grayson",
    diagnosis: "Psicopata",
    description:
      "Protagonista de Eu Me Importo: manipuladora e sem escrúpulos.",
  },
]
