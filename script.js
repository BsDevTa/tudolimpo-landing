const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".primary-nav");
const navLinks = document.querySelectorAll(".primary-nav a");
const serviceCards = document.querySelectorAll(".service-card");
const serviceButtons = document.querySelectorAll(".service-card__button");
const heroWhatsAppButton = document.querySelector("#hero-whatsapp");

// ==================================================
// CENTRAL DE IMAGENS DA LANDING PAGE
// ALTERE AQUI OS ARQUIVOS E TEXTOS ALTERNATIVOS
// NÃO ALTERE OS CAMINHOS EM OUTROS ARQUIVOS
// UTILIZE SEMPRE A CENTRAL TUDOLIMPO_IMAGES
// ==================================================
const TUDOLIMPO_IMAGES = {
  hero: {
    // TROQUE A IMAGEM DO HERO AQUI
    main: {
      src: "assets/images/hero/hero.png",
      alt: "Profissional realizando serviço de limpeza",
      width: 940,
      height: 760,
      decorative: false
    }
  },
  finalCta: {
    // TROQUE A IMAGEM DO CTA FINAL AQUI
    logo: {
      src: "assets/images/brand/logo-cta-enviada.png",
      alt: "",
      width: 2960,
      height: 2819,
      decorative: true
    },
    supervisor: {
      src: "assets/images/backgrounds/final-cta-supervisor.png",
      alt: "",
      width: 1023,
      height: 1537,
      decorative: true
    }
  },
  services: {
    // TROQUE AS IMAGENS DOS SERVIÇOS AQUI
    residential: {
      src: "assets/images/services/Residencial.png",
      alt: "Serviço de limpeza residencial",
      width: 1200,
      height: 900,
      decorative: false
    },
    business: {
      src: "assets/images/services/Escritorio.png",
      alt: "Serviço de limpeza empresarial",
      width: 1200,
      height: 900,
      decorative: false
    },
    condominium: {
      src: "assets/images/services/Condominial.png",
      alt: "Serviço de limpeza em condomínio",
      width: 1200,
      height: 900,
      decorative: false
    },
    postConstruction: {
      src: "assets/images/services/PosObra.png",
      alt: "Serviço de limpeza pós-obra",
      width: 1200,
      height: 900,
      decorative: false
    }
  },
  beforeAfter: [
    // TROQUE AS IMAGENS DE ANTES E DEPOIS AQUI
{
  id: 1,
  full: {
    src: "assets/images/before-after/banheiros-sanitarios.png",
    alt: "Antes e depois de limpeza de banheiros e sanitários",
    width: 1536,
    height: 1024,
    decorative: false
  }
},

{
  id: 2,
  full: {
    src: "assets/images/before-after/residencial.png",
    alt: "Antes e depois de limpeza de residencial",
    width: 1536,
    height: 1024,
    decorative: false
  }
},

{
  id: 3,
  full: {
    src: "assets/images/before-after/Contabilidade.png",
    alt: "Antes e depois de limpeza de contabilidade",
    width: 1536,
    height: 1024,
    decorative: false
  }
},

{
  id: 4,
  full: {
    src: "assets/images/before-after/Casas.png",
    alt: "Antes e depois de limpeza de casas",
    width: 1536,
    height: 1024,
    decorative: false
  }
},

{
  id: 5,
  full: {
    src: "assets/images/before-after/Apartamento.png",
    alt: "Antes e depois de limpeza de apartamentos",
    width: 1536,
    height: 1024,
    decorative: false
  }
},
  ],
  testimonials: [
    // Fotos fictícias geradas para representar clientes nos depoimentos.
    { id: 1, src: "assets/images/testimonials/cliente-1.png", alt: "Foto fictícia de Mariana Santos", width: 418, height: 418, optional: true, decorative: false },
    { id: 2, src: "assets/images/testimonials/cliente-2.png", alt: "Foto fictícia de Roberto Almeida", width: 418, height: 418, optional: true, decorative: false },
    { id: 3, src: "assets/images/testimonials/cliente-3.png", alt: "Foto fictícia de Cláudia Menezes", width: 418, height: 418, optional: true, decorative: false },
    { id: 4, src: "assets/images/testimonials/cliente-5.png", alt: "Foto fictícia de Fernanda Lima", width: 418, height: 418, optional: true, decorative: false },
    { id: 5, src: "assets/images/testimonials/cliente-4.png", alt: "Foto fictícia de André Carvalho", width: 418, height: 418, optional: true, decorative: false },
    { id: 6, src: "assets/images/testimonials/cliente-7.png", alt: "Foto fictícia de Patrícia Rocha", width: 418, height: 418, optional: true, decorative: false },
    { id: 7, src: "assets/images/testimonials/cliente-6.png", alt: "Foto fictícia de Lucas Martins", width: 418, height: 418, optional: true, decorative: false },
    { id: 8, src: "assets/images/testimonials/cliente-9.png", alt: "Foto fictícia de Daniela Reis", width: 418, height: 418, optional: true, decorative: false },
    { id: 9, src: "assets/images/testimonials/cliente-8.png", alt: "Foto fictícia de Eduardo Nascimento", width: 418, height: 418, optional: true, decorative: false }
  ]
};

// ALTERE AQUI O COMPORTAMENTO PADRÃO DAS IMAGENS
const TUDOLIMPO_IMAGE_CONFIG = {
  defaultFallback: "assets/images/placeholders/image-placeholder.svg",
  enableFallback: true,
  showDevelopmentWarnings: true
};

// NO WORDPRESS, DEFINA TUDOLIMPO_ASSET_BASE_PATH
// COM O CAMINHO DO TEMA OU PLUGIN.
const TUDOLIMPO_CACHE_VERSION = "20260729201322";

function resolveAssetPath(relativePath) {
  const basePath = window.TUDOLIMPO_ASSET_BASE_PATH || "";

  if (!relativePath) {
    return "";
  }

  if (
    relativePath.startsWith("http://") ||
    relativePath.startsWith("https://") ||
    relativePath.startsWith("data:")
  ) {
    return relativePath;
  }

  const separator = relativePath.includes("?") ? "&" : "?";
  return `${basePath}${relativePath}${separator}v=${TUDOLIMPO_CACHE_VERSION}`;
}

const TUDOLIMPO_CONFIG = {
  // ALTERE AQUI O NÚMERO DO WHATSAPP
  whatsappNumber: "5571988221221",
  // ALTERE AQUI OS TEXTOS DA SEÇÃO
  texts: {
    title: "Monte sua limpeza",
    subtitle: "Escolha os serviços, acompanhe sua pontuação e envie seu orçamento pelo WhatsApp.",
    support: "Quanto mais detalhes você informar, mais preciso será seu orçamento.",
    dateLabel: "Data desejada",
    dateHelp: "A data será confirmada posteriormente pelo atendimento."
  },
  stepTitles: {
    ambiente: "Tipo de ambiente",
    comodos: "Quantidade de cômodos",
    adicionais: "Serviços adicionais",
    periodicidade: "Periodicidade",
    data: "Data"
  },
  // ALTERE AQUI OS PONTOS
  pointsPerSelection: {
    ambiente: 20,
    comodos: 10,
    adicional: 15,
    periodicidade: 20,
    data: 5
  },
  // ALTERE AQUI OS AMBIENTES
  ambientes: [
    { label: "Casa", icon: "CA" },
    { label: "Apartamento", icon: "AP" },
    { label: "Condomínio", icon: "CO" },
    { label: "Escritório", icon: "ES" },
    { label: "Empresa", icon: "EM" },
    { label: "Pós-obra", icon: "PO" }
  ],
  comodos: [
    { label: "Até 1 cômodo", icon: "1" },
    { label: "Até 2 cômodos", icon: "2" },
    { label: "Até 3 cômodos", icon: "3" },
    { label: "Acima de 4 cômodos", icon: "4+" }
  ],
  // ALTERE AQUI OS SERVIÇOS ADICIONAIS
  adicionais: [
    { label: "Não no momento", icon: "NO", none: true },
    { label: "Diarista", icon: "DI" },
    { label: "SPA dos Pés", icon: "SP" },
    { label: "SPA Terapêutico", icon: "ST" },
    { label: "Massoterapeuta", icon: "MT" },
    { label: "Limpeza de Pele", icon: "LP" },
    { label: "Jardineiro(a)", icon: "JA" },
    { label: "Piscineiro(a)", icon: "PI" },
    { label: "Lavador(a) de estofados e sofás", icon: "LE" },
    { label: "Eletricista residencial e comercial", icon: "ER" },
    { label: "Encanador / Bombeiro hidráulico", icon: "EH" },
    { label: "Pintor(a) de parede", icon: "PP" },
    { label: "Pedreiro(a)", icon: "PE" },
    { label: "Azulejista", icon: "AZ" },
    { label: "Carpinteiro(a)", icon: "CA" },
    { label: "Marceneiro(a)", icon: "MA" },
    { label: "Montador(a) de móveis", icon: "MM" },
    { label: "Serralheiro(a)", icon: "SE" },
    { label: "Soldador(a)", icon: "SO" },
    { label: "Vidraceiro(a)", icon: "VI" },
    { label: "Chaveiro(a)", icon: "CH" },
    { label: "Instalador(a) e reparador(a) de ar-condicionado", icon: "AR" },
    { label: "Técnico(a) de manutenção de eletrodomésticos", icon: "TE" },
    { label: "Técnico(a) de manutenção de computadores", icon: "TC" },
    { label: "Lavador(a) e polidor(a) de veículos", icon: "LV" },
    { label: "Mecânico(a) de veículos", icon: "MV" },
    { label: "Mecânico(a) de motocicletas", icon: "MO" },
    { label: "Borracheiro(a)", icon: "BO" },
    { label: "Motoboy", icon: "MB" },
    { label: "Motorista independente", icon: "MI" },
    { label: "Carregador(a) de malas", icon: "CM" },
    { label: "Arrumador(a)", icon: "AR" },
    { label: "Coletor(a) de entulhos e resíduos", icon: "CE" },
    { label: "Cabeleireiro(a)", icon: "CB" },
    { label: "Barbeiro(a)", icon: "BA" },
    { label: "Manicure/Pedicure", icon: "MP" },
    { label: "Maquiador(a)", icon: "MQ" },
    { label: "Esteticista", icon: "ES" },
    { label: "Costureiro(a)", icon: "CO" },
    { label: "Fotógrafo(a)", icon: "FO" },
    { label: "Filmador(a)", icon: "FI" },
    { label: "Editor(a) de vídeo", icon: "EV" },
    { label: "Cantor(a)/Músico(a)", icon: "CM" },
    { label: "Técnico(a) de sonorização e iluminação", icon: "TS" },
    { label: "Animador(a) de festas", icon: "AF" },
    { label: "Confeiteiro(a)", icon: "CF" },
    { label: "Salgadeiro(a)", icon: "SA" },
    { label: "Auxiliar de Cozinha", icon: "AC" },
    { label: "Panfleteiro(a)", icon: "PA" },
    { label: "Adestrador(a) de animais", icon: "AA" },
    { label: "Esteticista de animais domésticos", icon: "EA" },
    { label: "Estofador(a)", icon: "EF" }
  ],
  periodicidades: [
    { label: "1x na semana", icon: "1X" },
    { label: "2x na semana", icon: "2X" },
    { label: "3x na semana", icon: "3X" },
    { label: "Avulso", icon: "AV" }
  ]
};

// ALTERE AQUI AS ETAPAS DA SEÇÃO “COMO FUNCIONA”
const TUDOLIMPO_HOW_IT_WORKS = [
  {
    step: 1,
    title: "Escolha seu serviço",
    description: "Selecione o tipo de limpeza ideal para sua residência, empresa, condomínio ou obra.",
    icon: "home"
  },
  {
    step: 2,
    title: "Monte sua limpeza",
    description: "Informe os detalhes do ambiente, a periodicidade e os serviços adicionais.",
    icon: "settings"
  },
  {
    step: 3,
    title: "Receba seu orçamento",
    description: "Envie sua solicitação pelo WhatsApp e receba um atendimento rápido e personalizado.",
    icon: "whatsapp"
  },
  {
    step: 4,
    title: "Agende",
    description: "Escolha a melhor data e confirme todos os detalhes com nossa equipe.",
    icon: "calendar"
  },
  {
    step: 5,
    title: "Aproveite seu ambiente",
    description: "Nossos profissionais cuidam de tudo para você aproveitar um ambiente limpo e organizado.",
    icon: "sparkles"
  }
];

// ALTERE AQUI OS CONTEÚDOS DA SEÇÃO “POR QUE ESCOLHER”
const TUDOLIMPO_DIFFERENTIALS = {
  badge: "Cuidado em cada detalhe",
  title: "Por que escolher a TudoLimpo?",
  description:
    "Unimos profissionais selecionados, acompanhamento especializado e atendimento humanizado para oferecer uma experiência segura, eficiente e personalizada.",
  featured: {
    icon: "psychology",
    title: "Acompanhamento profissional",
    description:
      "Nossa equipe é cuidadosamente selecionada e acompanhada por um Psicólogo de Empresas, contribuindo para um atendimento mais seguro, humano e responsável."
  },
  items: [
    {
      icon: "shield",
      title: "Mais segurança e confiança",
      description:
        "Critérios de seleção e acompanhamento que proporcionam maior tranquilidade durante o atendimento."
    },
    {
      icon: "users",
      title: "Profissionais selecionados",
      description:
        "Cada profissional passa por uma análise cuidadosa antes de fazer parte da equipe."
    },
    {
      icon: "heart",
      title: "Atendimento humanizado",
      description:
        "Entendemos as necessidades de cada cliente e valorizamos uma relação próxima e respeitosa."
    },
    {
      icon: "settings",
      title: "Serviço personalizado",
      description:
        "O atendimento é configurado de acordo com o ambiente, a frequência e as necessidades do cliente."
    }
  ],
  stats: [
    {
      value: "100%",
      label: "Atendimento personalizado"
    },
    {
      value: "5 min",
      label: "Tempo estimado de resposta"
    },
    {
      value: "4+",
      label: "Tipos de ambientes atendidos"
    }
  ],
  cta: {
    text: "Pronto para ter um ambiente mais limpo, organizado e bem cuidado?",
    button: "Monte sua limpeza",
    target: "#monte-sua-limpeza"
  }
};

// ALTERE AQUI OS ITENS DO CARROSSEL ANTES E DEPOIS
const TUDOLIMPO_BEFORE_AFTER = [
  {
    id: 1,
    service: "Limpeza em banheiros e sanitários",
    title: "Banheiros e sanitários",
    description: "Higiene, saúde e bem-estar todos os dias."
  },
  {
    id: 2,
    service: "Limpeza residencial",
    title: "Residencial",
    description: "Ambientes residenciais limpos, seguros e agradáveis."
  },
  {
    id: 3,
    service: "Limpeza empresarial",
    title: "Contabilidade",
    description: "Ambientes profissionais organizados e bem cuidados."
  },
  {
    id: 4,
    service: "Limpeza de casas",
    title: "Casas",
    description: "Cuidado completo para casas e áreas de convivência."
  },
  {
    id: 5,
    service: "Limpeza de apartamentos",
    title: "Apartamentos",
    description: "Limpeza prática e eficiente para apartamentos."
  }
];

// ALTERE AQUI O COMPORTAMENTO DO CARROSSEL
const TUDOLIMPO_CAROUSEL_CONFIG = {
  autoplay: true,
  autoplayDelay: 2000,
  loop: true,
  swipeThreshold: 50
};

// ALTERE AQUI AS CONFIGURAÇÕES DO PROGRAMA DE PONTOS
const TUDOLIMPO_LOYALTY_CONFIG = {
  badge: "Programa TudoLimpo Pontos",
  title: "TudoLimpo Pontos",
  description:
    "Sua limpeza vale pontos. Seus pontos viram experiências.",
  supportText:
    "A cada diária realizada com a TudoLimpo, você ganha +100 pontos para trocar por benefícios exclusivos.",
  examplePoints: 100,
  exampleGoal: 800,
  pointsPerService: 100,
  featuredReward: {
    label: "Cada diária realizada",
    title: "+100 pontos",
    points: 100
  },
  benefits: [
    {
      icon: "feet",
      image: "assets/images/loyalty/print-spa-dos-pes.png",
      title: "800 pontos",
      description: "Spa dos Pés",
      missingText: "Faltam 700 pontos",
      status: "Quase lá!"
    },
    {
      icon: "therapy",
      image: "assets/images/loyalty/print-spa-terapeutico.png",
      title: "1.200 pontos",
      description: "Spa Terapêutico",
      missingText: "Faltam 1.100 pontos",
      status: "Chegando perto!"
    },
    {
      icon: "skin",
      image: "assets/images/loyalty/print-spa-limpeza-pele.png",
      title: "1.600 pontos",
      description: "Spa Terapêutico + Limpeza de Pele",
      missingText: "Faltam 1.500 pontos",
      status: "Ative agora o seu benefício!"
    },
    {
      icon: "beauty",
      image: "assets/images/loyalty/print-cabeleireiro.png",
      title: "3.200 pontos",
      description: "Cabeleireiro + Manicure + Spa dos Pés",
      missingText: "Faltam 3.100 pontos",
      status: "Pontuação máxima!"
    }
  ],
  earningExamples: [
    { icon: "friends", label: "Ganhe pontos", points: "indicando amigos" },
    { icon: "review", label: "Ganhe pontos", points: "avaliando serviços" },
    { icon: "plan", label: "Ganhe pontos", points: "contratando planos" }
  ]
};

// ALTERE AQUI AS AVALIAÇÕES DOS CLIENTES
const TUDOLIMPO_TESTIMONIALS = [
  {
    id: 1,
    name: "Mariana Santos",
    location: "Pituba — Salvador",
    service: "Limpeza residencial",
    rating: 5,
    testimonial: "A equipe chegou no horário combinado, foi muito cuidadosa com os móveis e deixou o apartamento impecável."
  },
  {
    id: 2,
    name: "Roberto Almeida",
    location: "Caminho das Árvores — Salvador",
    service: "Limpeza empresarial",
    rating: 5,
    testimonial: "Contratamos para o escritório e o atendimento foi organizado, discreto e muito profissional."
  },
  {
    id: 3,
    name: "Cláudia Menezes",
    location: "Lauro de Freitas — BA",
    service: "Limpeza pós-obra",
    rating: 5,
    testimonial: "Depois da reforma achei que seria impossível resolver rápido, mas a limpeza ficou excelente."
  },
  {
    id: 4,
    name: "Fernanda Lima",
    location: "Barra — Salvador",
    service: "Diarista",
    rating: 5,
    testimonial: "Gostei da atenção aos detalhes e da forma como confirmaram tudo pelo WhatsApp antes do atendimento."
  },
  {
    id: 5,
    name: "André Carvalho",
    location: "Paralela — Salvador",
    service: "Limpeza de condomínio",
    rating: 5,
    testimonial: "O serviço nas áreas comuns foi feito com capricho e a equipe manteve tudo bem sinalizado."
  },
  {
    id: 6,
    name: "Patrícia Rocha",
    location: "Imbuí — Salvador",
    service: "Limpeza residencial",
    rating: 5,
    testimonial: "Foi a primeira vez que usei a TudoLimpo e já quero deixar uma frequência quinzenal."
  },
  {
    id: 7,
    name: "Lucas Martins",
    location: "Stella Maris — Salvador",
    service: "Limpeza de estofados",
    rating: 5,
    testimonial: "Meu sofá ficou renovado e o atendimento explicou todo o processo antes de começar."
  },
  {
    id: 8,
    name: "Daniela Reis",
    location: "Rio Vermelho — Salvador",
    service: "Manicure/Pedicure",
    rating: 5,
    testimonial: "Agendei junto com a limpeza e foi muito prático resolver tudo em um único atendimento."
  },
  {
    id: 9,
    name: "Eduardo Nascimento",
    location: "Brotas — Salvador",
    service: "Serviços residenciais",
    rating: 5,
    testimonial: "Atendimento rápido, equipe educada e orçamento bem claro. Recomendo pela confiança."
  }
];

// ALTERE AQUI O COMPORTAMENTO DO CARROSSEL DE AVALIAÇÕES
const TUDOLIMPO_TESTIMONIALS_CAROUSEL = {
  autoplay: true,
  autoplayDelay: 7000,
  loop: true,
  swipeThreshold: 50
};

// ALTERE AQUI OS TEXTOS DO CTA FINAL
const TUDOLIMPO_FINAL_CTA_CONFIG = {
  primaryTarget: "#monte-sua-limpeza",
  whatsappMessage: "Olá! Gostaria de solicitar informações sobre os serviços da TudoLimpo."
};

// ALTERE AQUI OS DADOS DO RODAPÉ
const TUDOLIMPO_FOOTER_CONFIG = {
  brandName: "TudoLimpo",
  description:
    "Limpeza, conservação e apoio operacional com atendimento profissional e humanizado.",
  navigation: [
    { label: "Início", href: "#inicio" },
    { label: "Serviços", href: "#servicos" },
    { label: "Monte sua limpeza", href: "#monte-sua-limpeza" },
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Pontos", href: "#pontos" },
    { label: "Avaliações", href: "#avaliacoes" }
  ],
  contact: {
    phone: "(71) 98822-1221",
    email: "contato@tudolimpo.com.br",
    city: "Salvador — Bahia"
  },
  socialLinks: [
    { name: "Instagram", url: "#", icon: "instagram" },
    { name: "Facebook", url: "#", icon: "facebook" },
    { name: "WhatsApp", url: "#", icon: "whatsapp" }
  ],
  legalLinks: [
    { label: "Política de Privacidade", href: "#" },
    { label: "Termos de Uso", href: "#" }
  ],
  developerCredit: {
    show: true,
    text: "Desenvolvido por TudoLimpo"
  }
};

let selectedService = null;

const state = {
  ambiente: "",
  comodos: "",
  adicionais: [],
  periodicidade: "",
  data: ""
};

const builderElements = {
  title: document.querySelector("#builder-title"),
  subtitle: document.querySelector("#builder-subtitle"),
  support: document.querySelector("#builder-support"),
  steps: document.querySelector("#builder-steps"),
  progressBar: document.querySelector("#builder-progress-bar"),
  progressText: document.querySelector("#builder-progress-text"),
  validation: document.querySelector("#builder-validation"),
  summary: {
    ambiente: document.querySelector("#summary-ambiente"),
    comodos: document.querySelector("#summary-comodos"),
    adicionais: document.querySelector("#summary-adicionais"),
    periodicidade: document.querySelector("#summary-periodicidade"),
    data: document.querySelector("#summary-data"),
    points: document.querySelector("#summary-points")
  },
  score: document.querySelector(".builder-score"),
  whatsapp: document.querySelector("#builder-whatsapp")
};

const housekeeperElements = {
  openButton: document.querySelector("#housekeeper-open"),
  modal: document.querySelector("#housekeeper-modal"),
  form: document.querySelector("#housekeeper-form"),
  closeButtons: document.querySelectorAll("[data-housekeeper-close]"),
  status: document.querySelector("#housekeeper-status"),
  cep: document.querySelector("#applicant-cep"),
  address: document.querySelector("#applicant-address"),
  neighborhood: document.querySelector("#applicant-neighborhood"),
  cityState: document.querySelector("#applicant-city-state")
};

const timelineElements = {
  timeline: document.querySelector("#how-it-works-timeline"),
  progress: document.querySelector("#how-it-works-progress")
};

const whyChooseElements = {
  badge: document.querySelector("#why-choose-badge"),
  title: document.querySelector("#why-choose-title"),
  description: document.querySelector("#why-choose-description"),
  featured: document.querySelector("#why-choose-featured"),
  stats: document.querySelector("#why-choose-stats"),
  grid: document.querySelector("#why-choose-grid"),
  cta: document.querySelector("#why-choose-cta")
};

const beforeAfterState = {
  currentIndex: 0,
  startX: 0,
  currentX: 0,
  isDragging: false,
  autoplayId: null
};

const beforeAfterElements = {
  carousel: document.querySelector("#before-after-carousel"),
  track: document.querySelector("#before-after-track"),
  prev: document.querySelector("#before-after-prev"),
  next: document.querySelector("#before-after-next"),
  indicators: document.querySelector("#before-after-indicators"),
  status: document.querySelector("#before-after-status")
};

const testimonialsState = {
  currentIndex: 0,
  visibleItems: 3,
  startX: 0,
  currentX: 0,
  isDragging: false,
  autoplayId: null
};

const loyaltyElements = {
  badge: document.querySelector("#loyalty-badge"),
  title: document.querySelector("#loyalty-title"),
  description: document.querySelector("#loyalty-description"),
  support: document.querySelector("#loyalty-support"),
  benefits: document.querySelector("#loyalty-benefits"),
  visual: document.querySelector("#loyalty-visual"),
  button: document.querySelector("#loyalty-whatsapp")
};

const testimonialsElements = {
  carousel: document.querySelector("#testimonials-carousel"),
  track: document.querySelector("#testimonials-track"),
  prev: document.querySelector("#testimonials-prev"),
  next: document.querySelector("#testimonials-next"),
  indicators: document.querySelector("#testimonials-indicators"),
  status: document.querySelector("#testimonials-status")
};

const footerElements = {
  grid: document.querySelector("#site-footer-grid"),
  bottom: document.querySelector("#site-footer-bottom")
};

function setMenuState(isOpen) {
  document.body.classList.toggle("nav-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
}

function getScrollBehavior() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
}

function isDevelopmentEnvironment() {
  return ["localhost", "127.0.0.1", ""].includes(window.location.hostname);
}

function getImageConfig(path) {
  if (!path) {
    return null;
  }

  return path.split(".").reduce((current, key) => {
    if (current && Object.prototype.hasOwnProperty.call(current, key)) {
      return current[key];
    }

    return null;
  }, TUDOLIMPO_IMAGES);
}

function isDecorativeImage(imageConfig) {
  return Boolean(imageConfig?.decorative || imageConfig?.alt === "");
}

function handleImageError(event) {
  const image = event.currentTarget;
  const failedSrc = image.dataset.originalSrc || image.currentSrc || image.src;

  if (TUDOLIMPO_IMAGE_CONFIG.showDevelopmentWarnings && isDevelopmentEnvironment()) {
    console.warn(`[TudoLimpo images] Falha ao carregar: ${failedSrc}`);
  }

  if (!TUDOLIMPO_IMAGE_CONFIG.enableFallback || image.dataset.fallbackApplied === "true") {
    image.classList.add("is-image-fallback");
    image.removeAttribute("src");
    return;
  }

  image.dataset.fallbackApplied = "true";
  image.classList.add("is-image-fallback");
  image.src = resolveAssetPath(image.dataset.fallback || TUDOLIMPO_IMAGE_CONFIG.defaultFallback);
}

function createResponsiveImage({
  src,
  alt = "",
  className = "",
  width,
  height,
  loading = "lazy",
  decoding = "async",
  fetchPriority = "auto",
  fallback = "",
  desktopSrc = "",
  mobileSrc = ""
}) {
  const image = document.createElement("img");
  const resolvedSrc = resolveAssetPath(src || desktopSrc || fallback || TUDOLIMPO_IMAGE_CONFIG.defaultFallback);

  image.src = resolvedSrc;
  image.alt = alt;
  image.decoding = decoding;
  image.loading = loading;
  image.dataset.originalSrc = resolvedSrc;
  image.dataset.fallback = fallback || TUDOLIMPO_IMAGE_CONFIG.defaultFallback;

  if (className) image.className = className;
  if (width) image.width = width;
  if (height) image.height = height;
  if (fetchPriority && fetchPriority !== "auto") image.setAttribute("fetchpriority", fetchPriority);
  image.addEventListener("error", handleImageError);

  if (desktopSrc && mobileSrc) {
    const picture = document.createElement("picture");
    const source = document.createElement("source");
    source.media = "(max-width: 767px)";
    source.srcset = resolveAssetPath(mobileSrc);
    image.src = resolveAssetPath(desktopSrc);
    image.dataset.originalSrc = image.src;
    picture.append(source, image);
    return picture;
  }

  return image;
}

function applyConfiguredImage(element, imageConfig) {
  if (!element || !imageConfig) {
    return null;
  }

  const image = createResponsiveImage({
    ...imageConfig,
    className: imageConfig.className || element.dataset.imageClass || "",
    loading: imageConfig.loading || "lazy",
    fallback: imageConfig.fallback || TUDOLIMPO_IMAGE_CONFIG.defaultFallback
  });

  element.replaceChildren(image);
  return image;
}

function flattenImageConfiguration(value = TUDOLIMPO_IMAGES, prefix = "") {
  if (!value || typeof value !== "object") {
    return [];
  }

  if (Object.prototype.hasOwnProperty.call(value, "src")) {
    return [{ path: prefix, config: value }];
  }

  if (Array.isArray(value)) {
    return value.flatMap((item, index) => flattenImageConfiguration(item, `${prefix}[${index}]`));
  }

  return Object.entries(value).flatMap(([key, child]) => flattenImageConfiguration(child, prefix ? `${prefix}.${key}` : key));
}

function validateConfiguredImages() {
  if (!TUDOLIMPO_IMAGE_CONFIG.showDevelopmentWarnings || !isDevelopmentEnvironment()) {
    return;
  }

  const images = flattenImageConfiguration();
  const paths = new Map();
  const allowedExtensions = /\.(svg|png|jpe?g|webp|avif)$/i;
  const suspiciousPathPattern = /[\sÀ-ÿ()[\]]/;

  ["beforeAfter", "testimonials"].forEach((collectionKey) => {
    const collection = TUDOLIMPO_IMAGES[collectionKey] || [];
    const ids = new Set();

    collection.forEach((item) => {
      if (!item.id) return;
      if (ids.has(item.id)) console.warn(`[TudoLimpo images] ID duplicado em ${collectionKey}: ${item.id}`);
      ids.add(item.id);
    });
  });

  images.forEach(({ path, config }) => {
    const src = config.src || "";

    if (!src && !isDecorativeImage(config) && !config.optional) {
      console.warn(`[TudoLimpo images] Imagem informativa sem src em ${path}.`);
    }

    if (src && !allowedExtensions.test(src) && !src.startsWith("data:")) {
      console.warn(`[TudoLimpo images] Extensão incomum em ${path}: ${src}`);
    }

    if (src && suspiciousPathPattern.test(src)) {
      console.warn(`[TudoLimpo images] Caminho com caracteres não recomendados em ${path}: ${src}`);
    }

    if (src && /^https?:\/\//i.test(src)) {
      console.warn(`[TudoLimpo images] Caminho externo revisar autorização em ${path}: ${src}`);
    }

    if (!isDecorativeImage(config) && !config.alt) {
      console.warn(`[TudoLimpo images] Alt ausente para imagem informativa em ${path}.`);
    }

    if (src) {
      const existing = paths.get(src);
      if (existing) console.warn(`[TudoLimpo images] Caminho duplicado em ${existing} e ${path}: ${src}`);
      paths.set(src, path);
    }
  });
}

function initializeConfiguredContentImages() {
  const heroWrapper = document.querySelector('[data-configured-image="hero.main"]');
  const heroImageConfig = getImageConfig("hero.main");

  if (heroWrapper && heroImageConfig) {
    const heroImage = createResponsiveImage({
      ...heroImageConfig,
      className: "hero__image",
      loading: "eager",
      decoding: "async",
      fetchPriority: "high",
      fallback: ""
    });

    heroImage.addEventListener("load", () => {
      if (heroImage.dataset.fallbackApplied !== "true") {
        heroWrapper.classList.add("has-configured-image");
      }
    });
    heroWrapper.prepend(heroImage);
  }

  const finalCtaMedia = document.querySelector('[data-configured-image="finalCta.supervisor"]');
  const finalCtaImageConfig = getImageConfig("finalCta.supervisor");
  const finalCtaLogo = document.querySelector('[data-configured-image="finalCta.logo"]');
  const finalCtaLogoConfig = getImageConfig("finalCta.logo");

  if (finalCtaLogo && finalCtaLogoConfig?.src) {
    const logoImage = document.createElement("img");

    logoImage.src = resolveAssetPath(finalCtaLogoConfig.src);
    logoImage.alt = finalCtaLogoConfig.alt || "";
    logoImage.width = finalCtaLogoConfig.width;
    logoImage.height = finalCtaLogoConfig.height;
    logoImage.loading = "lazy";
    logoImage.decoding = "async";
    logoImage.className = "final-cta__logo-image";

    logoImage.addEventListener("load", () => finalCtaLogo.classList.add("has-configured-image"));
    logoImage.addEventListener("error", () => {
      if (TUDOLIMPO_IMAGE_CONFIG.showDevelopmentWarnings && isDevelopmentEnvironment()) {
        console.warn(`[TudoLimpo images] Falha ao carregar: ${logoImage.src}`);
      }
      logoImage.remove();
    });

    finalCtaLogo.appendChild(logoImage);
  }

  if (finalCtaMedia && finalCtaImageConfig?.src) {
    const finalCtaImage = document.createElement("img");

    finalCtaImage.src = resolveAssetPath(finalCtaImageConfig.src);
    finalCtaImage.alt = finalCtaImageConfig.alt || "";
    finalCtaImage.width = finalCtaImageConfig.width;
    finalCtaImage.height = finalCtaImageConfig.height;
    finalCtaImage.loading = "lazy";
    finalCtaImage.decoding = "async";
    finalCtaImage.className = "final-cta__image";

    finalCtaImage.addEventListener("load", () => finalCtaMedia.classList.add("has-configured-image"));
    finalCtaImage.addEventListener("error", () => {
      if (TUDOLIMPO_IMAGE_CONFIG.showDevelopmentWarnings && isDevelopmentEnvironment()) {
        console.warn(`[TudoLimpo images] Falha ao carregar: ${finalCtaImage.src}`);
      }
      finalCtaImage.remove();
    });

    finalCtaMedia.appendChild(finalCtaImage);
  }

  document.querySelectorAll("[data-service-image]").forEach((wrapper) => {
    const imageKey = wrapper.dataset.serviceImage;
    const imageConfig = getImageConfig(`services.${imageKey}`);

    if (!imageConfig) {
      if (TUDOLIMPO_IMAGE_CONFIG.showDevelopmentWarnings && isDevelopmentEnvironment()) {
        console.warn(`[TudoLimpo images] Configuração não encontrada para serviço: ${imageKey}`);
      }
      return;
    }

    const image = createResponsiveImage({
      ...imageConfig,
      className: "service-card__image-img",
      loading: "lazy",
      decoding: "async"
    });
    image.addEventListener("load", () => wrapper.classList.add("has-configured-image"));
    wrapper.appendChild(image);
  });
}

navToggle.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  setMenuState(!isOpen);
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => setMenuState(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && housekeeperElements.modal?.classList.contains("is-open")) {
    setHousekeeperModalState(false);
    return;
  }

  if (event.key === "Escape" && document.body.classList.contains("nav-open")) {
    setMenuState(false);
    navToggle.focus();
  }
});

document.addEventListener("click", (event) => {
  const isOpen = document.body.classList.contains("nav-open");
  const clickedInsideMenu = nav.contains(event.target);
  const clickedToggle = navToggle.contains(event.target);

  if (isOpen && !clickedInsideMenu && !clickedToggle) {
    setMenuState(false);
  }
});

function selectService(button) {
  selectedService = button.dataset.service;
  window.selectedTudoLimpoService = selectedService;

  serviceCards.forEach((card) => {
    const isSelected = card.dataset.serviceCard === selectedService;
    const cardButton = card.querySelector(".service-card__button");

    card.classList.toggle("is-selected", isSelected);
    cardButton.setAttribute("aria-pressed", String(isSelected));
    cardButton.textContent = isSelected ? "Selecionado" : "Selecionar";
  });

  const nextSection = document.querySelector("#monte-sua-limpeza");

  if (nextSection) {
    nextSection.scrollIntoView({ behavior: getScrollBehavior(), block: "start" });
  }
}

serviceButtons.forEach((button) => {
  button.addEventListener("click", () => selectService(button));
});

function createOptions(group, options, isMultiple = false, compact = false) {
  if (isMultiple) {
    return createMultiSelect(group, options);
  }

  const wrapper = document.createElement("div");
  wrapper.className = "builder-select";
  const select = document.createElement("select");
  select.dataset.group = group;
  select.setAttribute("aria-label", TUDOLIMPO_CONFIG.stepTitles[group]);
  select.required = group !== "adicionais";

  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = "Selecione uma opção";
  select.appendChild(placeholder);

  options.forEach((option) => {
    const selectOption = document.createElement("option");
    selectOption.value = option.label;
    selectOption.textContent = option.label;
    selectOption.dataset.none = option.none ? "true" : "false";
    select.appendChild(selectOption);
  });

  select.addEventListener("change", (event) => {
    updateState(group, event.target.value, isMultiple);
  });

  wrapper.appendChild(select);

  return wrapper;
}

function createMultiSelect(group, options) {
  const wrapper = document.createElement("details");
  wrapper.className = "builder-multiselect";
  wrapper.dataset.group = group;

  const summary = document.createElement("summary");
  summary.innerHTML = '<span class="builder-multiselect__label">Selecione uma ou mais opções</span>';
  summary.addEventListener("click", () => {
    if (!wrapper.open) {
      closeOpenMultiSelects(wrapper);
    }
  });
  wrapper.appendChild(summary);

  const list = document.createElement("div");
  list.className = "builder-multiselect__list";
  list.setAttribute("role", "group");
  list.setAttribute("aria-label", TUDOLIMPO_CONFIG.stepTitles[group]);

  const search = document.createElement("input");
  search.className = "builder-multiselect__search";
  search.type = "search";
  search.placeholder = "Pesquisar serviço";
  search.setAttribute("aria-label", "Pesquisar serviço adicional");
  list.appendChild(search);

  const optionalHint = document.createElement("p");
  optionalHint.className = "builder-multiselect__hint";
  optionalHint.textContent = "Serviço opcional, não é campo obrigatório.";
  list.appendChild(optionalHint);

  options.forEach((option, index) => {
    const item = document.createElement("label");
    item.className = "builder-multiselect__item";
    const inputId = `builder-${group}-${index}`;
    item.setAttribute("for", inputId);
    item.innerHTML = `
      <input id="${inputId}" type="checkbox" value="${option.label}" ${option.none ? 'data-none="true"' : ""} />
      <span>${option.label}</span>
    `;

    item.querySelector("input").addEventListener("change", (event) => {
      updateMultipleSelection(option.label, option.none, event.target.checked);
      syncMultiSelect(wrapper);
      updateProgress();
      updateSummary();
      closeMultiSelect(wrapper);
    });

    list.appendChild(item);
  });

  search.addEventListener("input", () => filterMultiSelect(wrapper, search.value));

  wrapper.appendChild(list);
  return wrapper;
}

function closeMultiSelect(wrapper) {
  if (!wrapper) {
    return;
  }

  wrapper.open = false;

  const search = wrapper.querySelector(".builder-multiselect__search");
  if (search?.value) {
    search.value = "";
    filterMultiSelect(wrapper, "");
  }
}

function closeOpenMultiSelects(exception = null) {
  document.querySelectorAll(".builder-multiselect[open]").forEach((wrapper) => {
    if (wrapper !== exception) {
      closeMultiSelect(wrapper);
    }
  });
}

function bindMultiSelectCloseEvents() {
  document.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) {
      return;
    }

    if (!event.target.closest(".builder-multiselect")) {
      closeOpenMultiSelects();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeOpenMultiSelects();
    }
  });
}

function createStep(number, title, content, group) {
  const step = document.createElement("section");
  step.className = "builder-step";
  step.dataset.step = group;
  step.setAttribute("aria-labelledby", `builder-step-${group}`);
  const isRequired = group !== "adicionais";
  const requirementText = isRequired ? "Campo obrigatório" : "Opcional";
  step.innerHTML = `
    <div class="builder-step__title">
      <span class="builder-step__number" aria-hidden="true">${number}</span>
      <h3 id="builder-step-${group}">${title}</h3>
      <span class="builder-step__requirement ${isRequired ? "is-required" : "is-optional"}">${requirementText}</span>
    </div>
  `;
  step.appendChild(content);

  return step;
}

function createDateStep() {
  const wrapper = document.createElement("div");
  wrapper.className = "builder-date";
  wrapper.innerHTML = `
    <label for="builder-date-input">${TUDOLIMPO_CONFIG.texts.dateLabel}</label>
    <input id="builder-date-input" type="date" required />
    <p>${TUDOLIMPO_CONFIG.texts.dateHelp}</p>
  `;

  wrapper.querySelector("input").addEventListener("input", (event) => {
    clearValidation();
    state.data = event.target.value;
    updateProgress();
    updateSummary();
  });

  return wrapper;
}

function renderOptions() {
  if (!builderElements.steps) {
    return;
  }

  builderElements.title.textContent = TUDOLIMPO_CONFIG.texts.title;
  builderElements.subtitle.textContent = TUDOLIMPO_CONFIG.texts.subtitle;
  builderElements.support.textContent = TUDOLIMPO_CONFIG.texts.support;

  builderElements.steps.innerHTML = "";
  builderElements.steps.appendChild(createStep(1, TUDOLIMPO_CONFIG.stepTitles.ambiente, createOptions("ambiente", TUDOLIMPO_CONFIG.ambientes), "ambiente"));
  builderElements.steps.appendChild(createStep(2, TUDOLIMPO_CONFIG.stepTitles.comodos, createOptions("comodos", TUDOLIMPO_CONFIG.comodos, false, true), "comodos"));
  builderElements.steps.appendChild(createStep(3, TUDOLIMPO_CONFIG.stepTitles.adicionais, createOptions("adicionais", TUDOLIMPO_CONFIG.adicionais, true), "adicionais"));
  builderElements.steps.appendChild(createStep(4, TUDOLIMPO_CONFIG.stepTitles.periodicidade, createOptions("periodicidade", TUDOLIMPO_CONFIG.periodicidades, false, true), "periodicidade"));
  builderElements.steps.appendChild(createStep(5, TUDOLIMPO_CONFIG.stepTitles.data, createDateStep(), "data"));

  updateProgress();
  updateSummary();
}

function updateState(group, value, isMultiple) {
  clearValidation();

  if (isMultiple) {
    updateMultipleSelection(value, false, Boolean(value));
  } else {
    state[group] = value;
  }

  syncOptionButtons();
  updateProgress();
  updateSummary();
}

function updateMultipleSelection(value, isNoneOption = false, isChecked = true) {
  clearValidation();

  if (!value) {
    return;
  }

  if (isNoneOption) {
    state.adicionais = isChecked ? [value] : [];
    return;
  }

  state.adicionais = state.adicionais.filter((item) => item !== "Não no momento");

  if (isChecked) {
    state.adicionais = state.adicionais.includes(value) ? state.adicionais : [...state.adicionais, value];
    return;
  }

  state.adicionais = state.adicionais.filter((item) => item !== value);
}

function syncMultiSelect(wrapper) {
  const selected = state.adicionais;
  const label = wrapper.querySelector(".builder-multiselect__label");
  const hasNoneSelected = selected.includes("Não no momento");

  wrapper.querySelectorAll('input[type="checkbox"]').forEach((input) => {
    input.checked = selected.includes(input.value);
    input.disabled = hasNoneSelected && input.value !== "Não no momento";
    input.closest(".builder-multiselect__item")?.classList.toggle("is-disabled", input.disabled);
  });

  if (!label) {
    return;
  }

  if (!selected.length) {
    label.textContent = "Selecione uma ou mais opções";
    return;
  }

  label.textContent = selected.length === 1 ? selected[0] : `${selected.length} serviços selecionados`;
}

function filterMultiSelect(wrapper, query) {
  const normalizedQuery = query.trim().toLowerCase();

  wrapper.querySelectorAll(".builder-multiselect__item").forEach((item) => {
    const text = item.textContent.toLowerCase();
    item.hidden = Boolean(normalizedQuery) && !text.includes(normalizedQuery);
  });
}

function syncOptionButtons() {
  document.querySelectorAll(".builder-option").forEach((button) => {
    const group = button.dataset.group;
    const value = button.dataset.value;
    const isSelected = Array.isArray(state[group]) ? state[group].includes(value) : state[group] === value;

    button.setAttribute("aria-pressed", String(isSelected));
  });
}

function calculatePoints() {
  const completedSteps = [
    state.ambiente,
    state.comodos,
    state.periodicidade
  ].filter(Boolean).length;

  return Math.min(Math.round((completedSteps / 3) * 100), 100);
}

function updateProgress() {
  const completedSteps = [
    state.ambiente,
    state.comodos,
    state.periodicidade
  ].filter(Boolean).length;
  const progress = Math.min(Math.round((completedSteps / 3) * 100), 100);

  builderElements.progressBar.style.width = `${progress}%`;
  builderElements.progressText.textContent = `${progress}%`;
}

function updateSummary() {
  const points = calculatePoints();

  builderElements.summary.ambiente.textContent = state.ambiente || "Não selecionado";
  builderElements.summary.comodos.textContent = state.comodos || "Não selecionado";
  builderElements.summary.adicionais.textContent = state.adicionais.length ? state.adicionais.join(", ") : "Não selecionado";
  builderElements.summary.periodicidade.textContent = state.periodicidade || "Não selecionado";
  builderElements.summary.data.textContent = state.data ? formatDate(state.data) : "Não selecionado";
  builderElements.summary.points.textContent = `${points} pontos!`;

  animateScore();
}

function animateScore() {
  if (!builderElements.score) {
    return;
  }

  builderElements.score.classList.remove("is-updating");
  void builderElements.score.offsetWidth;
  builderElements.score.classList.add("is-updating");
}

function validateForm() {
  const missing = [];

  if (!state.ambiente) missing.push({ field: "ambiente", label: "Tipo de ambiente" });
  if (!state.comodos) missing.push({ field: "comodos", label: "Quantidade de cômodos" });
  if (!state.periodicidade) missing.push({ field: "periodicidade", label: "Periodicidade" });
  if (!state.data) missing.push({ field: "data", label: "Data" });

  document.querySelectorAll(".builder-step").forEach((step) => {
    step.classList.toggle("is-invalid", missing.some((item) => item.field === step.dataset.step));
  });

  if (missing.length) {
    const fields = missing.map((item) => item.label).join(", ");
    builderElements.validation.textContent = `Complete os campos obrigatórios: ${fields}.`;
    builderElements.validation.classList.add("is-visible");
    document.querySelector(`[data-step="${missing[0].field}"]`)?.scrollIntoView({ behavior: getScrollBehavior(), block: "center" });
    return false;
  }

  clearValidation();
  return true;
}

function clearValidation() {
  builderElements.validation.textContent = "";
  builderElements.validation.classList.remove("is-visible");
  document.querySelectorAll(".builder-step.is-invalid").forEach((step) => step.classList.remove("is-invalid"));
}

function buildWhatsAppMessage() {
  const adicionais = state.adicionais.length ? state.adicionais.join(", ") : "Não selecionado";

  return [
    "Olá! Gostaria de solicitar um orçamento na TudoLimpo.",
    "",
    `Ambiente: ${state.ambiente}`,
    `Quantidade de cômodos: ${state.comodos}`,
    `Serviços adicionais: ${adicionais}`,
    `Periodicidade: ${state.periodicidade}`,
    `Data desejada: ${state.data ? formatDate(state.data) : "Não selecionado"}`,
    `Pontuação: ${calculatePoints()}`
  ].join("\n");
}

function openWhatsApp() {
  if (!validateForm()) {
    return;
  }

  const message = encodeURIComponent(buildWhatsAppMessage());
  const url = `https://wa.me/${TUDOLIMPO_CONFIG.whatsappNumber}?text=${message}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

function formatDate(value) {
  if (!value) {
    return "";
  }

  const [year, month, day] = value.split("-");
  return `${day}/${month}/${year}`;
}

renderOptions();
bindMultiSelectCloseEvents();

if (builderElements.whatsapp) {
  builderElements.whatsapp.addEventListener("click", openWhatsApp);
}

function getHowItWorksIcon(icon) {
  const icons = {
    home: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 11.5 12 4l9 7.5" /><path d="M5.5 10.5V20h13v-9.5" /><path d="M9.5 20v-6h5v6" /></svg>',
    settings: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" /><path d="M4 12h2m12 0h2M12 4v2m0 12v2M6.3 6.3l1.4 1.4m8.6 8.6 1.4 1.4m0-11.4-1.4 1.4m-8.6 8.6-1.4 1.4" /></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.7 18.2 4 20l.8-3.2A8 8 0 1 1 12 20a8.2 8.2 0 0 1-5.3-1.8Z" /><path d="M9 8.8c.4 2.5 2.1 4.2 4.4 5 .7.2 1.2-.4 1.6-1" /></svg>',
    calendar: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3v4m10-4v4" /><path d="M4.5 6.5h15v13h-15z" /><path d="M4.5 10.5h15" /><path d="m8 15 2 2 5-5" /></svg>',
    sparkles: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 1.7 5.1L19 10l-5.3 1.9L12 17l-1.7-5.1L5 10l5.3-1.9L12 3Z" /><path d="m5 15 .8 2.2L8 18l-2.2.8L5 21l-.8-2.2L2 18l2.2-.8L5 15Z" /></svg>'
  };

  return icons[icon] || icons.sparkles;
}

function getDifferentialIcon(icon) {
  const icons = {
    psychology: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18a5 5 0 0 1-3.7-8.4A6 6 0 0 1 17 6.8 4.5 4.5 0 0 1 18 15.7V19a2 2 0 0 1-2 2h-3" /><path d="M9 14h6" /><path d="M12 11v6" /></svg>',
    shield: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 5 6v5c0 4.6 2.9 8.4 7 10 4.1-1.6 7-5.4 7-10V6l-7-3Z" /><path d="m9 12 2 2 4-5" /></svg>',
    users: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 19c0-2.2-1.8-4-4-4s-4 1.8-4 4" /><path d="M12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" /><path d="M20 18c0-1.8-1.2-3.2-2.8-3.8" /><path d="M17 5.4a2.6 2.6 0 0 1 0 5.2" /></svg>',
    heart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20s-7-4.4-9-9.1C1.5 7.4 3.8 4 7.4 4c2 0 3.4 1 4.6 2.5C13.2 5 14.6 4 16.6 4 20.2 4 22.5 7.4 21 10.9 19 15.6 12 20 12 20Z" /></svg>',
    settings: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h10" /><path d="M18 7h2" /><path d="M16 5v4" /><path d="M4 17h2" /><path d="M10 17h10" /><path d="M8 15v4" /><path d="M4 12h5" /><path d="M13 12h7" /><path d="M11 10v4" /></svg>'
  };

  return icons[icon] || icons.shield;
}

function highlightBrandName(title) {
  return title.replace("TudoLimpo", "<span>TudoLimpo</span>");
}

function renderHowItWorks() {
  if (!timelineElements.timeline) {
    return;
  }

  timelineElements.timeline.innerHTML = TUDOLIMPO_HOW_IT_WORKS.map((item, index) => `
    <li class="how-it-works__step" style="--timeline-delay: ${index * 80}ms" data-step-index="${index}">
      <button class="how-it-works__button" type="button" aria-current="${index === 0 ? "step" : "false"}">
        <span class="how-it-works__marker">
          ${getHowItWorksIcon(item.icon)}
          <span class="how-it-works__step-number">${item.step}</span>
        </span>
        <span class="how-it-works__content">
          <span class="how-it-works__title">${item.title}</span>
          <span class="how-it-works__description">${item.description}</span>
        </span>
      </button>
    </li>
  `).join("");

  setActiveStep(0);
  bindTimelineEvents();
  observeTimeline();
}

function setActiveStep(index) {
  document.querySelectorAll(".how-it-works__step").forEach((step, stepIndex) => {
    const isActive = stepIndex === index;
    const button = step.querySelector(".how-it-works__button");

    step.classList.toggle("is-active", isActive);
    button.setAttribute("aria-current", isActive ? "step" : "false");
  });

  updateTimelineProgress(index);
}

function updateTimelineProgress(index) {
  if (!timelineElements.progress) {
    return;
  }

  const total = Math.max(TUDOLIMPO_HOW_IT_WORKS.length - 1, 1);
  const progress = (index / total) * 100;

  if (window.matchMedia("(max-width: 767px)").matches) {
    timelineElements.progress.style.width = "100%";
    timelineElements.progress.style.height = `${progress}%`;
    return;
  }

  timelineElements.progress.style.width = `${progress}%`;
  timelineElements.progress.style.height = "100%";
}

function observeTimeline() {
  const steps = document.querySelectorAll(".how-it-works__step");

  if (!steps.length) {
    return;
  }

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
    steps.forEach((step) => step.classList.add("is-visible"));
    return;
  }

  steps.forEach((step) => step.classList.add("is-hidden"));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("is-hidden");
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.25 });

  steps.forEach((step) => observer.observe(step));
}

function bindTimelineEvents() {
  document.querySelectorAll(".how-it-works__button").forEach((button, index) => {
    button.addEventListener("click", () => setActiveStep(index));
  });

  window.addEventListener("resize", () => {
    const activeStep = document.querySelector(".how-it-works__step.is-active");
    const activeIndex = Number(activeStep?.dataset.stepIndex || 0);
    updateTimelineProgress(activeIndex);
  });
}

renderHowItWorks();

function renderFeaturedDifferential() {
  const featured = TUDOLIMPO_DIFFERENTIALS.featured;

  whyChooseElements.featured.innerHTML = `
    <span class="why-choose__featured-icon" aria-hidden="true">${getDifferentialIcon(featured.icon)}</span>
    <h3>${featured.title}</h3>
    <p>${featured.description}</p>
  `;
  whyChooseElements.featured.setAttribute("data-why-reveal", "");
}

function renderDifferentialCards() {
  whyChooseElements.grid.innerHTML = TUDOLIMPO_DIFFERENTIALS.items.map((item, index) => `
    <article class="why-choose__card" data-why-reveal style="--why-delay: ${index * 80}ms">
      <span class="why-choose__icon" aria-hidden="true">${getDifferentialIcon(item.icon)}</span>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    </article>
  `).join("");
}

function renderTrustStats() {
  whyChooseElements.stats.innerHTML = TUDOLIMPO_DIFFERENTIALS.stats.map((item, index) => `
    <div class="why-choose__stat" data-why-reveal style="--why-delay: ${index * 80}ms">
      <strong>${item.value}</strong>
      <span>${item.label}</span>
    </div>
  `).join("");
}

function renderWhyChoose() {
  if (!whyChooseElements.title) {
    return;
  }

  whyChooseElements.badge.textContent = TUDOLIMPO_DIFFERENTIALS.badge;
  whyChooseElements.title.innerHTML = highlightBrandName(TUDOLIMPO_DIFFERENTIALS.title);
  whyChooseElements.description.textContent = TUDOLIMPO_DIFFERENTIALS.description;
  whyChooseElements.cta.innerHTML = `
    <p>${TUDOLIMPO_DIFFERENTIALS.cta.text}</p>
    <a class="why-choose__cta-link" href="${TUDOLIMPO_DIFFERENTIALS.cta.target}">${TUDOLIMPO_DIFFERENTIALS.cta.button}</a>
  `;
  whyChooseElements.cta.setAttribute("data-why-reveal", "");

  renderFeaturedDifferential();
  renderTrustStats();
  renderDifferentialCards();
  bindWhyChooseEvents();
  observeWhyChooseElements();
}

function bindWhyChooseEvents() {
  const ctaLink = whyChooseElements.cta.querySelector(".why-choose__cta-link");

  if (!ctaLink) {
    return;
  }

  ctaLink.addEventListener("click", (event) => {
    const target = document.querySelector(TUDOLIMPO_DIFFERENTIALS.cta.target);

    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: getScrollBehavior(), block: "start" });
  });
}

function observeWhyChooseElements() {
  const elements = document.querySelectorAll("[data-why-reveal]");

  if (!elements.length) {
    return;
  }

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  elements.forEach((element) => element.classList.add("is-hidden"));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("is-hidden");
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.22 });

  elements.forEach((element) => observer.observe(element));
}

renderWhyChoose();

function getBeforeAfterImageConfig(slideId, type) {
  const imageSet = TUDOLIMPO_IMAGES.beforeAfter.find((item) => item.id === slideId);

  if (!imageSet && TUDOLIMPO_IMAGE_CONFIG.showDevelopmentWarnings && isDevelopmentEnvironment()) {
    console.warn(`[TudoLimpo images] Imagens de Antes/Depois não encontradas para slide ID ${slideId}.`);
  }

  return imageSet?.[type] || {
    src: "",
    alt: type === "after" ? "Resultado depois da limpeza" : "Resultado antes da limpeza",
    width: 1400,
    height: 1050,
    decorative: false
  };
}

function getBeforeAfterFullImageConfig(slideId) {
  const imageSet = TUDOLIMPO_IMAGES.beforeAfter.find((item) => item.id === slideId);

  return imageSet?.full || null;
}

function createBeforeAfterFullImage(item) {
  const wrapper = document.createElement("div");
  wrapper.className = "before-after__single-wrapper";
  wrapper.dataset.placeholder = "IMAGEM DO RESULTADO";

  const imageConfig = getBeforeAfterFullImageConfig(item.id);
  const image = createResponsiveImage({
    ...imageConfig,
    className: "before-after__single-image",
    loading: "lazy",
    decoding: "async"
  });

  image.addEventListener("load", () => wrapper.classList.add("has-image"));
  image.addEventListener("error", () => {
    wrapper.classList.remove("has-image");
  });

  wrapper.appendChild(image);

  if (image.complete && image.naturalWidth > 0) {
    wrapper.classList.add("has-image");
  }

  return wrapper;
}

function createBeforeAfterImage(item, type) {
  const isAfter = type === "after";
  const wrapper = document.createElement("div");
  wrapper.className = "before-after__image-wrapper";
  wrapper.dataset.placeholder = isAfter ? "PLACEHOLDER DEPOIS" : "PLACEHOLDER ANTES";

  const label = document.createElement("span");
  label.className = isAfter ? "before-after__label before-after__label--after" : "before-after__label";
  label.textContent = isAfter ? "Depois" : "Antes";

  const imageConfig = getBeforeAfterImageConfig(item.id, type);
  const image = createResponsiveImage({
    ...imageConfig,
    className: "before-after__image",
    loading: "lazy",
    decoding: "async"
  });

  image.addEventListener("load", () => wrapper.classList.add("has-image"));
  image.addEventListener("error", () => {
    wrapper.classList.remove("has-image");
  });

  wrapper.append(label, image);

  return wrapper;
}

function createBeforeAfterSlide(item, index) {
  const slide = document.createElement("article");
  slide.className = "before-after__slide";
  slide.setAttribute("role", "group");
  slide.setAttribute("aria-roledescription", "slide");
  slide.setAttribute("aria-label", `Slide ${index + 1} de ${TUDOLIMPO_BEFORE_AFTER.length}`);
  slide.dataset.slideIndex = String(index);

  const images = document.createElement("div");
  const fullImageConfig = getBeforeAfterFullImageConfig(item.id);

  if (fullImageConfig?.src) {
    images.className = "before-after__images before-after__images--single";
    images.appendChild(createBeforeAfterFullImage(item));
    slide.classList.add("before-after__slide--single");
  } else {
    images.className = "before-after__images";
    images.append(createBeforeAfterImage(item, "before"), createBeforeAfterImage(item, "after"));
  }

  const content = document.createElement("div");
  content.className = "before-after__content";
  content.innerHTML = `
    <span class="before-after__service">${item.service}</span>
    <h3 class="before-after__slide-title">${item.title}</h3>
    <p class="before-after__slide-description">${item.description}</p>
  `;

  slide.append(images);

  if (!fullImageConfig?.src) {
    slide.appendChild(content);
  }

  return slide;
}

function renderBeforeAfterCarousel() {
  if (!beforeAfterElements.track) {
    return;
  }

  beforeAfterElements.track.innerHTML = "";
  beforeAfterElements.indicators.innerHTML = "";

  TUDOLIMPO_BEFORE_AFTER.forEach((item, index) => {
    beforeAfterElements.track.appendChild(createBeforeAfterSlide(item, index));

    const indicator = document.createElement("button");
    indicator.className = "before-after__indicator";
    indicator.type = "button";
    indicator.setAttribute("aria-label", `Ver slide ${index + 1}`);
    indicator.addEventListener("click", () => goToBeforeAfterSlide(index));
    beforeAfterElements.indicators.appendChild(indicator);
  });

  goToBeforeAfterSlide(0, false);
  bindBeforeAfterEvents();
  startBeforeAfterAutoplay();
}

function goToBeforeAfterSlide(index, shouldAnnounce = true) {
  const total = TUDOLIMPO_BEFORE_AFTER.length;
  let nextIndex = index;

  if (TUDOLIMPO_CAROUSEL_CONFIG.loop) {
    nextIndex = (index + total) % total;
  } else {
    nextIndex = Math.min(Math.max(index, 0), total - 1);
  }

  beforeAfterState.currentIndex = nextIndex;
  beforeAfterElements.track.style.transform = `translateX(-${nextIndex * 100}%)`;
  updateBeforeAfterControls(shouldAnnounce);
}

function nextBeforeAfterSlide() {
  goToBeforeAfterSlide(beforeAfterState.currentIndex + 1);
}

function previousBeforeAfterSlide() {
  goToBeforeAfterSlide(beforeAfterState.currentIndex - 1);
}

function updateBeforeAfterControls(shouldAnnounce = true) {
  const slides = beforeAfterElements.track.querySelectorAll(".before-after__slide");
  const indicators = beforeAfterElements.indicators.querySelectorAll(".before-after__indicator");
  const total = TUDOLIMPO_BEFORE_AFTER.length;

  slides.forEach((slide, index) => {
    const isActive = index === beforeAfterState.currentIndex;
    slide.setAttribute("aria-hidden", String(!isActive));
    slide.querySelectorAll("a, button, input, select, textarea").forEach((element) => {
      element.tabIndex = isActive ? 0 : -1;
    });
  });

  indicators.forEach((indicator, index) => {
    const isActive = index === beforeAfterState.currentIndex;
    indicator.setAttribute("aria-current", String(isActive));
  });

  if (!TUDOLIMPO_CAROUSEL_CONFIG.loop) {
    beforeAfterElements.prev.disabled = beforeAfterState.currentIndex === 0;
    beforeAfterElements.next.disabled = beforeAfterState.currentIndex === total - 1;
  }

  if (shouldAnnounce) {
    const item = TUDOLIMPO_BEFORE_AFTER[beforeAfterState.currentIndex];
    beforeAfterElements.status.textContent = `Slide ${beforeAfterState.currentIndex + 1} de ${total}: ${item.title}`;
  }
}

function bindBeforeAfterEvents() {
  beforeAfterElements.prev.addEventListener("click", previousBeforeAfterSlide);
  beforeAfterElements.next.addEventListener("click", nextBeforeAfterSlide);

  beforeAfterElements.carousel.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      previousBeforeAfterSlide();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      nextBeforeAfterSlide();
    }
  });

  beforeAfterElements.carousel.addEventListener("pointerdown", handleSwipeStart);
  beforeAfterElements.carousel.addEventListener("pointermove", handleSwipeMove);
  beforeAfterElements.carousel.addEventListener("pointerup", handleSwipeEnd);
  beforeAfterElements.carousel.addEventListener("pointercancel", handleSwipeEnd);
  beforeAfterElements.carousel.addEventListener("mouseenter", stopBeforeAfterAutoplay);
  beforeAfterElements.carousel.addEventListener("focusin", stopBeforeAfterAutoplay);
  beforeAfterElements.carousel.addEventListener("mouseleave", startBeforeAfterAutoplay);
  beforeAfterElements.carousel.addEventListener("focusout", (event) => {
    if (!beforeAfterElements.carousel.contains(event.relatedTarget)) {
      startBeforeAfterAutoplay();
    }
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stopBeforeAfterAutoplay();
      return;
    }

    startBeforeAfterAutoplay();
  });
}

function handleSwipeStart(event) {
  beforeAfterState.startX = event.clientX;
  beforeAfterState.currentX = event.clientX;
  beforeAfterState.isDragging = true;
  stopBeforeAfterAutoplay();
}

function handleSwipeMove(event) {
  if (!beforeAfterState.isDragging) {
    return;
  }

  beforeAfterState.currentX = event.clientX;
}

function handleSwipeEnd() {
  if (!beforeAfterState.isDragging) {
    return;
  }

  const distance = beforeAfterState.currentX - beforeAfterState.startX;
  beforeAfterState.isDragging = false;

  if (Math.abs(distance) >= TUDOLIMPO_CAROUSEL_CONFIG.swipeThreshold) {
    if (distance < 0) {
      nextBeforeAfterSlide();
    } else {
      previousBeforeAfterSlide();
    }
  }

  startBeforeAfterAutoplay();
}

function startBeforeAfterAutoplay() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!TUDOLIMPO_CAROUSEL_CONFIG.autoplay || prefersReducedMotion || document.hidden) {
    return;
  }

  stopBeforeAfterAutoplay();
  beforeAfterState.autoplayId = window.setInterval(nextBeforeAfterSlide, TUDOLIMPO_CAROUSEL_CONFIG.autoplayDelay);
}

function stopBeforeAfterAutoplay() {
  if (!beforeAfterState.autoplayId) {
    return;
  }

  window.clearInterval(beforeAfterState.autoplayId);
  beforeAfterState.autoplayId = null;
}

renderBeforeAfterCarousel();

function getSharedIcon(icon) {
  const icons = {
    sparkles: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 1.7 5.1L19 10l-5.3 1.9L12 17l-1.7-5.1L5 10l5.3-1.9L12 3Z" /><path d="m5 15 .8 2.2L8 18l-2.2.8L5 21l-.8-2.2L2 18l2.2-.8L5 15Z" /></svg>',
    gift: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 10h16v10H4z" /><path d="M3 6h18v4H3z" /><path d="M12 6v14" /><path d="M12 6H8.5a2 2 0 1 1 2-2c0 2-2.5 2-2.5 2" /><path d="M12 6h3.5a2 2 0 1 0-2-2c0 2 2.5 2 2.5 2" /></svg>',
    history: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12a8 8 0 1 0 2.3-5.7" /><path d="M4 5v5h5" /><path d="M12 8v5l3 2" /></svg>',
    instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="5" /><path d="M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z" /><path d="M17.5 6.5h.01" /></svg>',
    facebook: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h2V4h-2a5 5 0 0 0-5 5v3H7v4h2v4h4v-4h3l1-4h-4V9a1 1 0 0 1 1-1Z" /></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.7 18.2 4 20l.8-3.2A8 8 0 1 1 12 20a8.2 8.2 0 0 1-5.3-1.8Z" /><path d="M9 8.8c.4 2.5 2.1 4.2 4.4 5 .7.2 1.2-.4 1.6-1" /></svg>'
  };

  return icons[icon] || icons.sparkles;
}

function getLoyaltyCardIcon(icon) {
  const icons = {
    calendar: '<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="12" y="14" width="40" height="38" rx="7" /><path d="M22 9v11M42 9v11M12 25h40M24 38l6 6 12-14" /></svg>',
    gift: '<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="15" y="29" width="34" height="25" rx="4" /><path d="M12 21h40v10H12zM32 21v33M32 21h-9a6 6 0 1 1 6-6c0 6-8 6-8 6M32 21h9a6 6 0 1 0-6-6c0 6 8 6 8 6" /></svg>',
    lock: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="10" width="12" height="10" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" /></svg>',
    feet: '<svg viewBox="0 0 80 80" aria-hidden="true"><path d="M27 58c-9-12-10-28-2-36 5-5 14-3 17 4 4 9-2 17-7 25-2 4-4 7-8 7Z" /><path d="M50 62c-8-11-8-29 0-37 5-6 15-4 18 4 4 10-3 19-8 27-2 4-5 7-10 6Z" /><path d="M17 27h.1M23 19h.1M31 16h.1M55 18h.1M64 21h.1M70 29h.1" /></svg>',
    therapy: '<svg viewBox="0 0 80 80" aria-hidden="true"><path d="M23 35c0-15 10-25 25-25 9 0 16 5 17 14-11-4-25-2-39 6" /><path d="M22 34c-3 5-4 18 2 26 5 7 19 11 29 4 5-4 8-10 8-18" /><path d="M31 47h.1M50 47h.1M34 57c5 4 11 4 16 0M29 25c6-6 20-9 29-3M58 38l8-8M61 47l10-4" /></svg>',
    skin: '<svg viewBox="0 0 80 80" aria-hidden="true"><path d="M23 35c0-15 10-25 25-25 9 0 16 5 17 14-11-4-25-2-39 6" /><path d="M22 34c-3 5-4 18 2 26 5 7 19 11 29 4 5-4 8-10 8-18" /><path d="M31 47h.1M50 47h.1M34 57c5 4 11 4 16 0M57 56l13-22M66 31l7 4M54 61l7 4" /></svg>',
    beauty: '<svg viewBox="0 0 112 80" aria-hidden="true"><path d="M18 54c-3-16 2-33 17-39 12-5 26 2 27 15-10-4-23 0-31 9" /><path d="M28 37c-3 11 3 25 15 27M39 45h.1M34 55c5 4 10 4 15 0" /><rect x="67" y="24" width="10" height="28" rx="2" /><path d="M67 58h18M80 40l4 4 8-10M94 58c-6-8-6-18 0-24 4-4 11-2 13 4" /><path d="M97 38h.1M102 41h.1M107 47h.1" /></svg>',
    friends: '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M24 31a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM9 52c2-10 9-16 18-16s16 6 18 16M43 23a7 7 0 1 0 0-14M43 38c6 1 10 5 12 12M51 39v14M44 46h14" /></svg>',
    review: '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M12 14h40v29H31L20 53V43h-8z" /><path d="m32 21 3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6Z" /></svg>',
    plan: '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M20 12h24l6 6v34H14V12h6ZM22 24h20M22 34h20M22 44h12M42 45l4 4 8-10" /><path d="M44 12v8h8" /></svg>'
  };

  return icons[icon] || icons.gift;
}

function getWhatsAppUrl(message) {
  return `https://wa.me/${TUDOLIMPO_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function bindHeroWhatsApp() {
  if (!heroWhatsAppButton) {
    return;
  }

  heroWhatsAppButton.href = getWhatsAppUrl("Olá! Gostaria de solicitar um orçamento na TudoLimpo.");
  heroWhatsAppButton.target = "_blank";
  heroWhatsAppButton.rel = "noopener noreferrer";
}

function getLoyaltyRewardPoints(title) {
  return Number(String(title).replace(/\D/g, ""));
}

function calculateLoyaltyProgress() {
  const { examplePoints, exampleGoal } = TUDOLIMPO_LOYALTY_CONFIG;
  const progress = exampleGoal > 0 ? (examplePoints / exampleGoal) * 100 : 0;

  return Math.min(Math.max(progress, 0), 100);
}

function isLoyaltyRewardAvailable(title) {
  const rewardPoints = getLoyaltyRewardPoints(title);

  return rewardPoints > 0 && TUDOLIMPO_LOYALTY_CONFIG.examplePoints >= rewardPoints;
}

function getLoyaltyGoalMessage() {
  const missingPoints = Math.max(
    TUDOLIMPO_LOYALTY_CONFIG.exampleGoal - TUDOLIMPO_LOYALTY_CONFIG.examplePoints,
    0
  );

  if (!missingPoints) {
    return "Benefício disponível para resgate";
  }

  return `Faltam ${missingPoints.toLocaleString("pt-BR")} pontos para o próximo benefício`;
}

function getLoyaltyBenefitStatus(benefit) {
  const rewardPoints = getLoyaltyRewardPoints(benefit.title);
  const missingPoints = Math.max(rewardPoints - TUDOLIMPO_LOYALTY_CONFIG.examplePoints, 0);

  if (!missingPoints) {
    return benefit.status;
  }

  return `Faltam ${missingPoints.toLocaleString("pt-BR")} pontos`;
}

function renderLoyaltySection() {
  if (!loyaltyElements.title) {
    return;
  }

  loyaltyElements.badge.textContent = TUDOLIMPO_LOYALTY_CONFIG.badge;
  loyaltyElements.title.textContent = TUDOLIMPO_LOYALTY_CONFIG.title;
  loyaltyElements.description.textContent = TUDOLIMPO_LOYALTY_CONFIG.description;
  loyaltyElements.support.textContent = TUDOLIMPO_LOYALTY_CONFIG.supportText;
  loyaltyElements.benefits.hidden = true;
  loyaltyElements.benefits.innerHTML = "";
  loyaltyElements.visual.innerHTML = `
    <div class="loyalty__card" style="--loyalty-progress: ${calculateLoyaltyProgress()}%">
      <div class="loyalty__card-top">
        <div class="loyalty__card-panel loyalty__card-panel--brand">
          <div class="loyalty__brand-lockup">
            <div class="loyalty__brand-mark" aria-hidden="true">
              <span></span><span></span><span></span>
            </div>
            <div>
              <strong>TudoLimpo</strong>
              <small>Serviços de limpeza</small>
            </div>
          </div>
          <h3 class="loyalty__card-title">TudoLimpo <span>Pontos</span></h3>
          <p class="loyalty__card-copy">Sua limpeza vale pontos.<br>Seus pontos viram <span>experiências.</span></p>
          <p class="loyalty__card-note">${TUDOLIMPO_LOYALTY_CONFIG.supportText}</p>
        </div>
        <div class="loyalty__card-panel loyalty__card-panel--balance">
          <span class="loyalty__card-label">Seu saldo atual</span>
          <strong class="loyalty__points"><span>★</span><b>${TUDOLIMPO_LOYALTY_CONFIG.examplePoints.toLocaleString("pt-BR")}</b></strong>
          <p class="loyalty__points-label">pontos</p>
          <p class="loyalty__next">${getLoyaltyGoalMessage()}</p>
          <div class="loyalty__progress" aria-label="${TUDOLIMPO_LOYALTY_CONFIG.examplePoints} de ${TUDOLIMPO_LOYALTY_CONFIG.exampleGoal} pontos">
            <span class="loyalty__progress-track"><span class="loyalty__progress-fill"></span></span>
          </div>
          <p class="loyalty__goal"><strong>${TUDOLIMPO_LOYALTY_CONFIG.examplePoints.toLocaleString("pt-BR")}</strong> / ${TUDOLIMPO_LOYALTY_CONFIG.exampleGoal.toLocaleString("pt-BR")} pontos</p>
        </div>
        <div class="loyalty__card-panel loyalty__card-panel--daily">
          <span class="loyalty__daily-icon">${getLoyaltyCardIcon("calendar")}</span>
          <strong>${TUDOLIMPO_LOYALTY_CONFIG.featuredReward.label}</strong>
          <span class="loyalty__daily-equals">=</span>
          <p>${TUDOLIMPO_LOYALTY_CONFIG.featuredReward.title}</p>
        </div>
      </div>
      <div class="loyalty__reward-heading">
        <span>${getLoyaltyCardIcon("gift")}</span>
        <strong>Troque seus pontos por benefícios</strong>
      </div>
      <div class="loyalty__card-rewards">
        ${TUDOLIMPO_LOYALTY_CONFIG.benefits.map((benefit) => `
          <article class="${isLoyaltyRewardAvailable(benefit.title) ? "is-available" : ""}">
            <strong class="loyalty__reward-points"><span>★</span>${benefit.title}</strong>
            <figure class="loyalty__benefit-photo">
              <img src="${resolveAssetPath(benefit.image)}" alt="${benefit.description}" loading="lazy">
            </figure>
            <h4>${benefit.description}</h4>
            <small><span>${getLoyaltyCardIcon("lock")}</span>${getLoyaltyBenefitStatus(benefit)}</small>
          </article>
        `).join("")}
      </div>
      <div class="loyalty__earning-bar">
        ${TUDOLIMPO_LOYALTY_CONFIG.earningExamples.map((item) => `
          <span>
            <i>${getLoyaltyCardIcon(item.icon)}</i>
            <span>${item.label}<b>${item.points}</b></span>
          </span>
        `).join("")}
      </div>
    </div>
  `;
  bindLoyaltyEvents();
}

function bindLoyaltyEvents() {
  loyaltyElements.button?.addEventListener("click", () => {
    window.open(getWhatsAppUrl("Olá! Gostaria de saber mais sobre o programa de pontos da TudoLimpo."), "_blank", "noopener,noreferrer");
  });
}

function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function createTestimonialCard(item, index) {
  const slide = document.createElement("article");
  slide.className = "testimonials__slide";
  slide.setAttribute("role", "group");
  slide.setAttribute("aria-roledescription", "slide");
  slide.setAttribute("aria-label", `Avaliação ${index + 1} de ${TUDOLIMPO_TESTIMONIALS.length}`);
  slide.dataset.testimonialIndex = String(index);

  const rating = Math.min(Math.max(Number(item.rating) || 0, 0), 5);
  slide.innerHTML = `
    <div class="testimonials__card">
      <span class="testimonials__quote" aria-hidden="true">“</span>
      <div class="testimonials__rating">
        <span class="sr-only">${rating} de 5 estrelas</span>
        <span aria-hidden="true">${"★".repeat(rating)}${"☆".repeat(5 - rating)}</span>
      </div>
      <p class="testimonials__text">${item.testimonial}</p>
      <div class="testimonials__author">
        <div class="testimonials__avatar"></div>
        <div>
          <strong>${item.name}</strong>
          <span>${item.location}</span>
          <span>${item.service}</span>
        </div>
      </div>
    </div>
  `;

  slide.querySelector(".testimonials__avatar").appendChild(createTestimonialAvatar(item));

  return slide;
}

function createTestimonialAvatar(testimonial) {
  const imageConfig = TUDOLIMPO_IMAGES.testimonials.find((item) => item.id === testimonial.id);
  const fallback = document.createElement("span");
  fallback.setAttribute("aria-hidden", "true");
  fallback.textContent = getInitials(testimonial.name) || "TL";

  if (!imageConfig?.src) {
    return fallback;
  }

  const image = createResponsiveImage({
    ...imageConfig,
    className: "testimonials__avatar-image",
    loading: "lazy",
    decoding: "async",
    fallback: ""
  });

  image.addEventListener("error", () => {
    image.replaceWith(fallback);
  });

  return image;
}

function getTestimonialsVisibleItems() {
  if (window.matchMedia("(max-width: 767px)").matches) return 1;
  if (window.matchMedia("(max-width: 1120px)").matches) return 2;
  return 3;
}

function renderTestimonials() {
  if (!testimonialsElements.track) {
    return;
  }

  testimonialsElements.track.innerHTML = "";
  TUDOLIMPO_TESTIMONIALS.forEach((item, index) => {
    testimonialsElements.track.appendChild(createTestimonialCard(item, index));
  });

  testimonialsState.visibleItems = getTestimonialsVisibleItems();
  testimonialsElements.carousel.style.setProperty("--testimonials-visible", testimonialsState.visibleItems);
  updateTestimonialsCarousel(0, false);
  bindTestimonialsEvents();
  startTestimonialsAutoplay();
}

function updateTestimonialsIndicators(maxIndex) {
  testimonialsElements.indicators.innerHTML = "";

  for (let index = 0; index <= maxIndex; index += 1) {
    const indicator = document.createElement("button");
    indicator.className = "testimonials__indicator";
    indicator.type = "button";
    indicator.setAttribute("aria-label", `Ver grupo ${index + 1} de avaliações`);
    indicator.addEventListener("click", () => updateTestimonialsCarousel(index));
    testimonialsElements.indicators.appendChild(indicator);
  }
}

function updateTestimonialsCarousel(index = testimonialsState.currentIndex, shouldAnnounce = true) {
  const total = TUDOLIMPO_TESTIMONIALS.length;
  testimonialsState.visibleItems = getTestimonialsVisibleItems();
  testimonialsElements.carousel.style.setProperty("--testimonials-visible", testimonialsState.visibleItems);

  const maxIndex = Math.max(total - testimonialsState.visibleItems, 0);
  updateTestimonialsIndicators(maxIndex);

  let nextIndex = index;
  if (TUDOLIMPO_TESTIMONIALS_CAROUSEL.loop) {
    nextIndex = index > maxIndex ? 0 : index < 0 ? maxIndex : index;
  } else {
    nextIndex = Math.min(Math.max(index, 0), maxIndex);
  }

  testimonialsState.currentIndex = nextIndex;
  testimonialsElements.track.style.transform = `translateX(-${(nextIndex * 100) / testimonialsState.visibleItems}%)`;

  testimonialsElements.indicators.querySelectorAll(".testimonials__indicator").forEach((indicator, indicatorIndex) => {
    indicator.setAttribute("aria-current", String(indicatorIndex === nextIndex));
  });

  testimonialsElements.track.querySelectorAll(".testimonials__slide").forEach((slide, slideIndex) => {
    const isVisible = slideIndex >= nextIndex && slideIndex < nextIndex + testimonialsState.visibleItems;
    slide.setAttribute("aria-hidden", String(!isVisible));
  });

  if (shouldAnnounce) {
    testimonialsElements.status.textContent = `Exibindo avaliações ${nextIndex + 1} a ${Math.min(nextIndex + testimonialsState.visibleItems, total)} de ${total}.`;
  }
}

function nextTestimonialsSlide() {
  updateTestimonialsCarousel(testimonialsState.currentIndex + 1);
}

function previousTestimonialsSlide() {
  updateTestimonialsCarousel(testimonialsState.currentIndex - 1);
}

function bindTestimonialsEvents() {
  testimonialsElements.prev.addEventListener("click", previousTestimonialsSlide);
  testimonialsElements.next.addEventListener("click", nextTestimonialsSlide);
  testimonialsElements.carousel.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      previousTestimonialsSlide();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      nextTestimonialsSlide();
    }
  });
  testimonialsElements.carousel.addEventListener("pointerdown", handleTestimonialsSwipe);
  testimonialsElements.carousel.addEventListener("pointermove", handleTestimonialsSwipe);
  testimonialsElements.carousel.addEventListener("pointerup", handleTestimonialsSwipe);
  testimonialsElements.carousel.addEventListener("pointercancel", handleTestimonialsSwipe);
  testimonialsElements.carousel.addEventListener("mouseenter", stopTestimonialsAutoplay);
  testimonialsElements.carousel.addEventListener("focusin", stopTestimonialsAutoplay);
  testimonialsElements.carousel.addEventListener("mouseleave", startTestimonialsAutoplay);
  testimonialsElements.carousel.addEventListener("focusout", (event) => {
    if (!testimonialsElements.carousel.contains(event.relatedTarget)) {
      startTestimonialsAutoplay();
    }
  });
  window.addEventListener("resize", () => updateTestimonialsCarousel(testimonialsState.currentIndex, false));
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stopTestimonialsAutoplay();
      return;
    }

    startTestimonialsAutoplay();
  });
}

function handleTestimonialsSwipe(event) {
  if (event.type === "pointerdown") {
    testimonialsState.startX = event.clientX;
    testimonialsState.currentX = event.clientX;
    testimonialsState.isDragging = true;
    return;
  }

  if (!testimonialsState.isDragging) {
    return;
  }

  if (event.type === "pointermove") {
    testimonialsState.currentX = event.clientX;
    return;
  }

  const distance = testimonialsState.currentX - testimonialsState.startX;
  testimonialsState.isDragging = false;

  if (Math.abs(distance) >= TUDOLIMPO_TESTIMONIALS_CAROUSEL.swipeThreshold) {
    distance < 0 ? nextTestimonialsSlide() : previousTestimonialsSlide();
  }
}

function startTestimonialsAutoplay() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!TUDOLIMPO_TESTIMONIALS_CAROUSEL.autoplay || prefersReducedMotion || document.hidden) {
    return;
  }

  stopTestimonialsAutoplay();
  testimonialsState.autoplayId = window.setInterval(nextTestimonialsSlide, TUDOLIMPO_TESTIMONIALS_CAROUSEL.autoplayDelay);
}

function stopTestimonialsAutoplay() {
  if (!testimonialsState.autoplayId) {
    return;
  }

  window.clearInterval(testimonialsState.autoplayId);
  testimonialsState.autoplayId = null;
}

function bindFinalCtaEvents() {
  document.querySelector(".final-cta__button--primary")?.addEventListener("click", (event) => {
    const target = document.querySelector(TUDOLIMPO_FINAL_CTA_CONFIG.primaryTarget);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: getScrollBehavior(), block: "start" });
  });

  document.querySelector("#final-whatsapp")?.addEventListener("click", () => {
    window.open(getWhatsAppUrl(TUDOLIMPO_FINAL_CTA_CONFIG.whatsappMessage), "_blank", "noopener,noreferrer");
  });
}

function setHousekeeperModalState(isOpen) {
  if (!housekeeperElements.modal) {
    return;
  }

  housekeeperElements.modal.classList.toggle("is-open", isOpen);
  housekeeperElements.modal.setAttribute("aria-hidden", String(!isOpen));
  document.body.classList.toggle("has-open-modal", isOpen);

  if (isOpen) {
    housekeeperElements.form?.querySelector("input")?.focus();
    return;
  }

  housekeeperElements.openButton?.focus();
}

function normalizeCep(value) {
  return value.replace(/\D/g, "").slice(0, 8);
}

function formatCep(value) {
  const digits = normalizeCep(value);
  return digits.length > 5 ? `${digits.slice(0, 5)}-${digits.slice(5)}` : digits;
}

function setHousekeeperStatus(message, isError = false) {
  if (!housekeeperElements.status) {
    return;
  }

  housekeeperElements.status.textContent = message;
  housekeeperElements.status.classList.toggle("is-error", isError);
}

async function fetchAddressByCep(cep) {
  setHousekeeperStatus("Buscando endereço pelo CEP...");

  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();

    if (!response.ok || data.erro) {
      setHousekeeperStatus("CEP não encontrado. Preencha o endereço manualmente.", true);
      return;
    }

    housekeeperElements.address.value = data.logradouro || "";
    housekeeperElements.neighborhood.value = data.bairro || "";
    housekeeperElements.cityState.value = [data.localidade, data.uf].filter(Boolean).join(" / ");
    setHousekeeperStatus("Endereço preenchido automaticamente.");
  } catch (error) {
    setHousekeeperStatus("Não foi possível buscar o CEP agora. Preencha o endereço manualmente.", true);
  }
}

function buildHousekeeperMessage(formData) {
  return [
    "Olá! Gostaria de enviar minha inscrição para ser diarista na TudoLimpo.",
    "",
    `Nome completo: ${formData.get("name")}`,
    `CEP: ${formData.get("cep")}`,
    `Endereço: ${formData.get("address")}, ${formData.get("addressNumber")}`,
    `Complemento: ${formData.get("complement") || "Não informado"}`,
    `Bairro: ${formData.get("neighborhood")}`,
    `Cidade/UF: ${formData.get("cityState")}`,
    `Telefone/Celular/WhatsApp: ${formData.get("phone")}`,
    `E-mail: ${formData.get("email")}`,
    `Data de nascimento: ${formatDate(formData.get("birthdate"))}`
  ].join("\n");
}

function bindHousekeeperApplication() {
  housekeeperElements.openButton?.addEventListener("click", () => setHousekeeperModalState(true));

  housekeeperElements.closeButtons.forEach((button) => {
    button.addEventListener("click", () => setHousekeeperModalState(false));
  });

  housekeeperElements.cep?.addEventListener("input", (event) => {
    const formattedCep = formatCep(event.target.value);
    event.target.value = formattedCep;
    setHousekeeperStatus("");

    const cep = normalizeCep(formattedCep);
    if (cep.length === 8) {
      fetchAddressByCep(cep);
    }
  });

  housekeeperElements.form?.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!housekeeperElements.form.checkValidity()) {
      housekeeperElements.form.reportValidity();
      return;
    }

    const message = buildHousekeeperMessage(new FormData(housekeeperElements.form));
    window.open(getWhatsAppUrl(message), "_blank", "noopener,noreferrer");
    setHousekeeperModalState(false);
  });
}

function createFooterSocialLinks() {
  return TUDOLIMPO_FOOTER_CONFIG.socialLinks.map((item) => `
    <a class="site-footer__social-link" href="${item.url}" aria-label="${item.name}">
      ${getSharedIcon(item.icon)}
    </a>
  `).join("");
}

function renderFooter() {
  if (!footerElements.grid) {
    return;
  }

  footerElements.grid.innerHTML = `
    <div class="site-footer__brand">
      <h2>${TUDOLIMPO_FOOTER_CONFIG.brandName}</h2>
      <p>${TUDOLIMPO_FOOTER_CONFIG.description}</p>
    </div>
    <div class="site-footer__column">
      <h2>Navegação</h2>
      <nav class="site-footer__links" aria-label="Links do rodapé">
        ${TUDOLIMPO_FOOTER_CONFIG.navigation.map((item) => `<a href="${item.href}">${item.label}</a>`).join("")}
      </nav>
    </div>
    <div class="site-footer__column">
      <h2>Contato</h2>
      <div class="site-footer__contact">
        <span>${TUDOLIMPO_FOOTER_CONFIG.contact.phone}</span>
        <span>${TUDOLIMPO_FOOTER_CONFIG.contact.email}</span>
        <span>${TUDOLIMPO_FOOTER_CONFIG.contact.city}</span>
      </div>
    </div>
    <div class="site-footer__column">
      <h2>Redes sociais</h2>
      <div class="site-footer__social">${createFooterSocialLinks()}</div>
    </div>
  `;

  updateFooterYear();
}

function updateFooterYear() {
  const year = new Date().getFullYear();
  const legalLinks = TUDOLIMPO_FOOTER_CONFIG.legalLinks.map((item) => `<a href="${item.href}">${item.label}</a>`).join("");
  const credit = TUDOLIMPO_FOOTER_CONFIG.developerCredit.show ? `<span>${TUDOLIMPO_FOOTER_CONFIG.developerCredit.text}</span>` : "";

  footerElements.bottom.innerHTML = `
    <span>© ${year} ${TUDOLIMPO_FOOTER_CONFIG.brandName}. Todos os direitos reservados.</span>
    <div class="site-footer__legal">${legalLinks}${credit}</div>
  `;
}

initializeConfiguredContentImages();
validateConfiguredImages();
bindHeroWhatsApp();
renderLoyaltySection();
renderTestimonials();
bindFinalCtaEvents();
bindHousekeeperApplication();
renderFooter();
