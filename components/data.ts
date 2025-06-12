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
    image: "/ed-gein.webp",
    diagnosis: "Esquizofrenia Paranoide ou perversão extrema sem empatia?",
    description:
      "Assassino americano que inspirou filmes como “O Massacre da Serra Elétrica”. Desenterrava cadáveres e usava partes do corpo para fazer objetos.",
  },
  {
    id: 2,
    name: "Aileen Wuornos",
    image: "/aileen-wuornos.jpg",
    diagnosis:
      "Transtorno de Personalidade Borderline ou crueldade impulsiva mascarada de trauma?",
    description:
      "Assassina em série americana. Matou homens enquanto trabalhava como prostituta, com comportamento cruel, antissocial e impulsivo.",
  },
  {
    id: 3,
    name: "Pablo Escobar",
    image: "/pablo-escobar.jpg",
    diagnosis:
      "Transtorno de Personalidade Narcisista ou ambição violenta travestida de justiça social?",
    description:
      "Chefe do cartel de Medellín, buscava fama e poder, agia com frieza e justificava seus atos como “justiça social”.",
  },
  {
    id: 4,
    name: "Christopher Scarver",
    image: "/christopher-scarver.jpg",
    diagnosis:
      "Esquizofrenia Paranoide ou reação simbólica de um homem negro diante da impunidade racial?",
    description:
      "Matou Jeffrey Dahmer na prisão, justificando o ato como “missão divina” contra o mal.",
  },
  {
    id: 5,
    name: "Marilyn Monroe",
    image: "/marilyn-monroe.webp",
    diagnosis:
      "Transtorno Borderline ou sofrimento legítimo de uma mulher atravessada por traumas, pressões e solidão?",
    description:
      "Relações intensas e instáveis, vazio emocional, sofria com depressão, solidão e abuso de substâncias.",
  },
  {
    id: 6,
    name: "Brian Wilson",
    image: "/brian-wilson.webp",
    diagnosis:
      "Transtorno Esquizoafetivo ou expressão de uma sensibilidade extrema em um contexto de pressão artística, isolamento e falta de suporte à saúde mental?",
    description:
      "Músico dos Beach Boys, teve alucinações auditivas e paranoia, isolou-se por longos períodos.",
  },
  {
    id: 7,
    name: "Howard Hughes",
    image: "/howard-hughes.avif",
    diagnosis:
      "TOC grave ou colapso psíquico de um gênio consumido por perfeccionismo?",
    description:
      "Empresário que se isolou, mania de limpeza extrema, fobias e rotinas rígidas.",
  },
  {
    id: 8,
    name: "Jack Ruby",
    image: "/jack-ruby.jpg",
    diagnosis:
      "Transtorno de Personalidade Narcisista ou um ato desesperado de protagonismo de um homem comum que buscava relevância histórica?",
    description:
      "Assassinou Lee Harvey Oswald buscando reconhecimento público e se considerava herói.",
  },
  {
    id: 9,
    name: "Mark Chapman",
    image: "/mark-chapman.jpg",
    diagnosis:
      "Esquizofrenia paranoide ou a trágica tentativa de um sujeito invisível de se tornar inesquecível por meio da violência simbólica?",
    description:
      "Assassino de John Lennon, dizia ouvir vozes e apresentava ideias delirantes.",
  },
  {
    id: 10,
    name: "Charles Manson",
    image: "/charles-manson.jpg",
    diagnosis:
      "Transtorno de personalidade narcisista ou líder de um culto criminoso moldado pela manipulação?",
    description:
      "Líder da Família Manson, manipulava seguidores para cometer assassinatos por ele.",
  },
  {
    id: 11,
    name: "Jack Torrance",
    image: "/jack-torrance.webp",
    diagnosis:
      "Transtorno psicótico ou retrato da deterioração mental pelo isolamento, alcoolismo e pressões da masculinidade?",
    description:
      "Protagonista de O Iluminado: alucinações, paranoia e perda de contato com a realidade.",
  },
  {
    id: 12,
    name: "Coringa",
    image: "/coringa.webp",
    diagnosis:
      "Quadro psicótico com traços borderline e esquizotípicos ou um vilão produto de uma exclusão social que foi idealizado pela sua insanidade?",
    description:
      "Vilão da DC com instabilidade emocional, excêntrico e episódios psicóticos.",
  },
  {
    id: 13,
    name: "Tyler Durden",
    image: "/tyler-durden.webp",
    diagnosis:
      "Transtorno Dissociativo de Identidade ou uma crítica radical à alienação e fantasia de uma libertação violenta?",
    description:
      "Personagem de Clube da Luta: manipulador, anárquico e sem empatia.",
  },
  {
    id: 14,
    name: "Arya Stark",
    image: "/arya-stark.webp",
    diagnosis:
      "Transtorno de Personalidade Borderline ou uma resposta extrema de sobrevivência diante de traumas precoces, perda familiar e um contexto de guerra brutal?",
    description:
      "De Game of Thrones: frieza emocional, impulsividade e busca obsessiva por vingança.",
  },
  {
    id: 15,
    name: "Tommy Shelby",
    image: "/tommy-shelby.webp",
    diagnosis:
      "TEPT e alucinações por tuberculoma ou criminoso que usa o trauma como escudo?",
    description:
      "Protagonista de Peaky Blinders: sofre com PTSD, flashbacks e apatia emocional.",
  },
  {
    id: 16,
    name: "Sherlock Holmes",
    image: "/sherlock-holmes.webp",
    diagnosis: "TOC ou apenas genialidade metódica que desafia normas sociais?",
    description:
      "Obsessivo e metódico, socialmente limitado mas extremamente inteligente.",
  },
  {
    id: 17,
    name: "Dr. House",
    image: "/dr-house.webp",
    diagnosis:
      "Transtorno de personalidade narcisista ou um escudo cínico para lidar com a dor e o vício?",
    description:
      "Egocêntrico, arrogante e dependente de analgésicos, com moralidade complexa.",
  },
  {
    id: 18,
    name: "Martha Scott",
    image: "/martha-scott.webp",
    diagnosis:
      "TOC, Borderline, Síndrome de Clérambault ou perseguição disfarçada de romantismo?",
    description:
      "Personagem de Bebê Rena, com erotomania e comportamento impulsivo.",
  },
  {
    id: 19,
    name: "Thanos",
    image: "/thanos.jpg",
    diagnosis:
      "Transtorno narcisista  ou a encarnação ficcional do autoritarismo travestido de racionalidade e justiça?",
    description:
      "Vilão dos Vingadores: delírios de grandeza e missão genocida.",
  },
  {
    id: 20,
    name: "Nina Sayers",
    image: "/nina-sayers.webp",
    diagnosis: "Transtorno psicótico agudo ou metáfora da busca por perfeição?",
    description:
      "Protagonista de Cisne Negro: alucinações e colapso mental sob pressão.",
  },
  {
    id: 21,
    name: "Susanna Kaysen",
    image: "/susanna-kaysen.png",
    diagnosis:
      "Transtorno de personalidade borderline ou jovem diagnosticada por desafiar normas sociais e de gênero em plena década de 60?",
    description:
      "Protagonista de Garota, Interrompida: instabilidade emocional e impulsividade.",
  },
  {
    id: 22,
    name: "Rainha Má",
    image: "/rainha-ma.jpg",
    diagnosis:
      "Transtorno narcisista ou pura maldade moldada pelo culto à beleza?",
    description: "Vilã de Branca de Neve: egocêntrica, invejosa e cruel.",
  },
  {
    id: 23,
    name: "Norman Bates",
    image: "/norman-bates.jpg",
    diagnosis:
      "Transtorno psicótico dissociativo ou perversão violenta escondida sob a máscara da loucura?",
    description:
      "Assassino de Psicose: convive com a identidade da mãe e delírios.",
  },
  {
    id: 24,
    name: "Kevin Wendell Crumb",
    image: "/kevin-wendell-crumb.jpeg",
    diagnosis:
      "Transtorno dissociativo de identidade ou caricatura estigmatizante do sofrimento psíquico como espetáculo monstruoso?",
    description:
      "Personagem de Fragmentado: múltiplas personalidades, incluindo a “Fera”.",
  },
  {
    id: 25,
    name: "Amy Dunne",
    image: "/amy-dunne.jpg",
    diagnosis:
      "Borderline e Transtorno de personalidade narcisista ou uma pessoa manipuladora sob o verniz da genialidade?",
    description:
      "Protagonista de Garota Exemplar: manipuladora e imprevisível.",
  },
  {
    id: 26,
    name: "BoJack Horseman",
    image: "/bojack-horseman.jpg",
    diagnosis:
      "Transtorno afetivo com traços borderline ou a perpetuação do privilégio em um sujeito autodestrutivo e egoísta?",
    description:
      "Antierói animado: autodestrutivo, depressivo e com vínculos instáveis.",
  },
  {
    id: 27,
    name: "Joe Goldberg",
    image: "/joe-goldberg.webp",
    diagnosis:
      "Erotomania com traços obsessivos ou apenas um um stalker que se disfarça de vítima?",
    description:
      "De You: obcecado, persegue e manipula sob justificativas românticas.",
  },
  {
    id: 28,
    name: "Walter White",
    image: "/walter-white.jpg",
    diagnosis: "Transtorno narcisista ou simplesmente um homem ganancioso?",
    description:
      "De Breaking Bad: manipulador e obcecado por controle e reconhecimento.",
  },
  {
    id: 29,
    name: "Dexter Morgan",
    image: "/dexter-morgan.jpeg",
    diagnosis:
      "Transtorno psicótico ou racionalização de uma pulsão homicida em forma de justiça seletiva?",
    description:
      "De Dexter: assassino serial com “código moral” e dissociação emocional.",
  },
  {
    id: 30,
    name: "Loki",
    image: "/loki.webp",
    diagnosis:
      "Transtorno Narcisista e Borderline ou apenas mais um agente do caos disfarçado com carisma e uma história cativante?",
    description: "Vilão da Marvel: manipulador, busca poder e validação.",
  },
  {
    id: 31,
    name: "Batman",
    image: "/batman.webp",
    diagnosis:
      "Transtorno de estresse pós-traumático ou obsessão vigilante mascarada de justiçal?",
    description:
      "Herói da DC traumatizado pela morte dos pais, obsessivo e isolado.",
  },
  {
    id: 32,
    name: "Rainha de Copas",
    image: "/rainha-de-copas.jpg",
    diagnosis:
      "Transtorno de personalidade Narcisista ou caricatura pura do autoritarismo sem disfarces?",
    description:
      "De Alice no País das Maravilhas: tirânica e vaidosa, reações explosivas.",
  },
  {
    id: 33,
    name: "Light Yagami",
    image: "/light-yagami.jpg",
    diagnosis:
      "Transtorno narcisista e Megalomania ou alguém que utiliza da justiça como desculpa para poder absoluto?",
    description:
      "De Death Note: quer ser “deus” num mundo novo, justifica assassinatos.",
  },
  {
    id: 34,
    name: "Harley Quinn",
    image: "/harley-quinn.jpg",
    diagnosis:
      "Transtorno psicótico e borderline ou glamourização perigosa da insanidade em nome do amor?",
    description:
      "De DC: impulsiva, instável e dependente emocionalmente do Coringa.",
  },
  {
    id: 35,
    name: "Jack Sparrow",
    image: "/jack-sparrow.jpg",
    diagnosis:
      "Transtorno histriônico com alcoolismo ou um dependente de substâncias que utiliza do charme como disfarce?",
    description:
      "De Piratas do Caribe: excêntrico, teatral e dependente do álcool.",
  },
  {
    id: 36,
    name: "Pearl",
    image: "/pearl.png",
    diagnosis:
      "Transtorno de personalidade borderline ou violência disfarçada de carência?",
    description:
      "De Pearl/X: busca reconhecimento, impulsiva e emocionalmente explosiva.",
  },
  {
    id: 37,
    name: "Carrie White",
    image: "/carrie-white.webp",
    diagnosis:
      "Transtorno esquizoafetivo ou metáfora brutal do acúmulo de humilhação, abuso e repressão religiosa?",
    description:
      "De Carrie: vítima de bullying com alucinações e explosão violenta.",
  },
  {
    id: 38,
    name: "Cersei Lannister",
    image: "/cersei-lannister.jpeg",
    diagnosis:
      "Transtorno narcisista com traços paranoides ou só alguém com uma frieza implacável justificada por ambição?",
    description: "De GoT: manipuladora, vingativa e desconfiada de todos.",
  },
  {
    id: 39,
    name: "Steve Jobs",
    image: "/steve-jobs.jpg",
    diagnosis:
      "Transtorno obsessivo-compulsivo ou perfeccionismo desumanizante romantizado como genialidade visionária?",
    description:
      "Perfeccionista extremo, obsessivo com detalhes e controle total.",
  },
]

export const psychopathsToRotate: Character[] = [
  {
    id: 1002,
    name: "Patrick Bateman",
    image: "/patrick-bateman.webp",
    diagnosis: "Psicopata… Será mesmo?",
    description:
      "Protagonista de American Psycho: executivo narcisista e violento.",
  },
  {
    id: 1003,
    name: "Lord Voldemort",
    image: "/lord-voldemort.webp",
    diagnosis: "Psicopata… Será mesmo?",
    description: "Vilão de Harry Potter: frio, megalomaníaco e sem empatia.",
  },
  {
    id: 1004,
    name: "Hannibal Lecter",
    image: "/hannibal-lecter.webp",
    diagnosis: "Psicopata… Será mesmo?",
    description:
      "De O Silêncio dos Inocentes: brilhante, manipulador e canibal.",
  },
  {
    id: 1005,
    name: "Anton Chigurh",
    image: "/anton-chigurh.jpg",
    diagnosis: "Psicopata… Será mesmo?",
    description:
      "De Onde os Fracos Não Têm Vez: implacável, sem remorso e metódico.",
  },
  {
    id: 1006,
    name: "Ted Bundy",
    image: "/ted-bundy.jpg",
    diagnosis: "Psicopata… Será mesmo?",
    description: "Serial killer real: carismático, manipulador e violento.",
  },
  {
    id: 1007,
    name: "Darth Vader",
    image: "/darth-vader.jpg",
    diagnosis: "Psicopata… Será mesmo?",
    description:
      "De Star Wars: implacável, obedece ao lado sombrio e sem piedade.",
  },
  {
    id: 1008,
    name: "Marla Grayson",
    image: "/marla-grayson.jpg",
    diagnosis: "Psicopata… Será mesmo?",
    description:
      "Protagonista de Eu Me Importo: manipuladora e sem escrúpulos.",
  },
]
