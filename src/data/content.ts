export type ProcedureCategory = 'facial' | 'corporal' | 'longevidade' | 'rituais'

export type Procedure = {
  slug: string
  category: ProcedureCategory
  categoryLabel: string
  eyebrow: string
  title: string
  summary: string
  description: string
  duration: string
  image: string
  imageAlt: string
  details: string[]
}

export const procedures: Procedure[] = [
  {
    slug: 'harmonizacao-bioestimulacao',
    category: 'facial',
    categoryLabel: 'Facial',
    eyebrow: 'Harmonia facial',
    title: 'Harmonização & Bioestimulação',
    summary: 'Um plano individual para valorizar contornos e preservar a expressão natural.',
    description:
      'A avaliação considera proporções, qualidade da pele e objetivos pessoais. O protocolo é definido por profissional habilitado, com foco em sutileza e acompanhamento.',
    duration: 'Definida em avaliação',
    image: '/images/facial-care.webp',
    imageAlt: 'Profissional realiza cuidado facial em uma sala de estética acolhedora',
    details: ['Avaliação facial individual', 'Plano de tratamento sob medida', 'Acompanhamento da evolução'],
  },
  {
    slug: 'laser-remodelamento',
    category: 'corporal',
    categoryLabel: 'Corporal',
    eyebrow: 'Tecnologia médica',
    title: 'Laser & Remodelamento Corporal',
    summary: 'Tecnologias selecionadas de acordo com a anatomia, a indicação e o seu tempo.',
    description:
      'Cada indicação começa com uma consulta. A equipe avalia objetivos, histórico e características individuais antes de recomendar qualquer tecnologia ou sequência de sessões.',
    duration: 'Definida em avaliação',
    image: '/images/laser-consultation.webp',
    imageAlt: 'Especialista conversa com paciente em sala de tecnologia estética',
    details: ['Consulta de indicação', 'Tecnologia escolhida para cada caso', 'Orientações de cuidado individualizadas'],
  },
  {
    slug: 'longevidade-cutanea',
    category: 'longevidade',
    categoryLabel: 'Longevidade',
    eyebrow: 'Longevidade cutânea',
    title: 'Lifting Não Cirúrgico & Pele',
    summary: 'Uma abordagem gradual para a vitalidade da pele, respeitando seu ritmo.',
    description:
      'O cuidado com a longevidade cutânea combina observação clínica, planejamento e revisão periódica. A proposta é apoiar a saúde e a aparência da pele sem apagar a identidade de cada pessoa.',
    duration: 'Definida em avaliação',
    image: '/images/longevity.webp',
    imageAlt: 'Especialista examina a pele de uma paciente em ambiente privativo',
    details: ['Diagnóstico de pele', 'Planejamento progressivo', 'Reavaliação ao longo do cuidado'],
  },
  {
    slug: 'rituais-descompressao',
    category: 'rituais',
    categoryLabel: 'Rituais',
    eyebrow: 'Pausa restauradora',
    title: 'Spas & Rituais de Descompressão',
    summary: 'Tempo reservado para desacelerar em um espaço de silêncio e acolhimento.',
    description:
      'Os rituais complementam a visita com uma experiência de bem-estar privativa. A seleção das práticas considera as orientações da equipe e as preferências de cada paciente.',
    duration: 'Conforme o ritual',
    image: '/images/spa-ritual.webp',
    imageAlt: 'Suíte de bem-estar com banheira de pedra, toalhas e luz natural',
    details: ['Ambiente reservado', 'Ritual alinhado às suas preferências', 'Acolhimento antes e depois da visita'],
  },
]

export const gallery = [
  {
    title: 'Suíte privativa',
    subtitle: 'Um primeiro encontro sem pressa',
    image: '/images/vip-suite.webp',
    alt: 'Sala privativa com mobiliário claro e luz natural',
  },
  {
    title: 'Precisão clínica',
    subtitle: 'Tecnologia em um ambiente sereno',
    image: '/images/laser-consultation.webp',
    alt: 'Consulta em sala equipada para tratamentos estéticos',
  },
  {
    title: 'Tempo para respirar',
    subtitle: 'Rituais e recuperação em privacidade',
    image: '/images/spa-ritual.webp',
    alt: 'Suíte de spa com banheira de pedra e vegetação',
  },
  {
    title: 'Cuidado em cada detalhe',
    subtitle: 'Hospitalidade que acompanha a visita',
    image: '/images/recovery-suite.webp',
    alt: 'Paciente em roupão relaxa em lounge iluminado naturalmente',
  },
]

export const experiencePillars = [
  {
    title: 'Discrição',
    text: 'Uma experiência pensada para preservar seu tempo e sua privacidade, da recepção ao encerramento da visita.',
  },
  {
    title: 'Naturalidade',
    text: 'Planos individuais que respeitam seus traços, sua história e o resultado que faz sentido para você.',
  },
  {
    title: 'Atenção sem pressa',
    text: 'A consulta começa pela escuta. Cada escolha é explicada com clareza antes de qualquer procedimento.',
  },
]
