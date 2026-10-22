import type { L10n } from '../i18n/dictionary'

export type Project = {
  id: string
  title: L10n
  description: L10n
  tags: string[]
  repoUrl: string
  demoUrl?: string
  image?: string
}

/**
 * CONFIGURACIÓN DE PROYECTOS
 * Cada proyecto necesita:
 *  - title/description: objeto { es, en } con los textos en cada idioma
 *  - repoUrl: enlace al repositorio en GitHub (siempre)
 *  - demoUrl: enlace a la demo desplegada (opcional, se embebe en un iframe)
 *  - image:  captura del proyecto en /public (opcional, ej: "capturas/techstore.png")
 */
export const projects: Project[] = [
  {
    id: 'rastreador-gastos',
    title: {
      es: 'Rastreador de Gastos',
      en: 'Expense Tracker',
    },
    description: {
      es: 'Rastreador de gastos personales con panel financiero (tendencia diaria, reparto por categoría y ranking), presupuesto mensual que se descuenta con los gastos, historial de meses, modo claro/oscuro y persistencia local. Los datos de ejemplo se eliminan solos al registrar tus propios gastos.',
      en: 'Personal expense tracker with a financial dashboard (daily trend, category split and ranking), a monthly budget that deducts as you spend, month history, light/dark mode and local persistence. The sample data clears itself once you record your own expenses.',
    },
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'recharts'],
    repoUrl: 'https://github.com/Joel-18/Rastreador-de-gastos',
    demoUrl: 'https://joel-18.github.io/rastreador-de-gastos/',
    image: 'capturas/rastreador.png',
  },
  {
    id: 'turnocero',
    title: {
      es: 'TurnoCero',
      en: 'TurnoCero',
    },
    description: {
      es: 'Agenda médica para descubrir especialistas, revisar disponibilidad y reservar consultas en varios pasos. Perfil de paciente, historial de citas y panel de administración, con modo demo local o conexión a Supabase (Auth, PostgreSQL y RLS).',
      en: 'Medical booking app to discover specialists, review availability and reserve appointments in a few steps. Patient profile, appointment history and admin panel, with local demo mode or Supabase connection (Auth, PostgreSQL and RLS).',
    },
    tags: ['React', 'TypeScript', 'Vite', 'Supabase', 'PostgreSQL'],
    repoUrl: 'https://github.com/Joel-18/TurnoCero',
    demoUrl: 'https://turno-cero.vercel.app',
    image: 'capturas/turnocero.png',
  },
  {
    id: 'techstore',
    title: {
      es: 'TechStore',
      en: 'TechStore',
    },
    description: {
      es: 'Tienda online de tecnología: catálogo con 66 productos y 11 categorías, búsqueda, filtros, carrito, favoritos, autenticación simulada y checkout. 100% frontend con React Router y Context API.',
      en: 'Online tech store: catalog with 66 products and 11 categories, search, filters, cart, favorites, simulated auth and checkout. 100% frontend with React Router and Context API.',
    },
    tags: ['React', 'React Router', 'Context API', 'Vite', 'localStorage'],
    repoUrl: 'https://github.com/Joel-18/TechStore',
    demoUrl: 'https://joel-18.github.io/TechStore/',
    image: 'capturas/techstore.png',
  },
  {
    id: 'gymtrack',
    title: {
      es: 'GymTrack',
      en: 'GymTrack',
    },
    description: {
      es: 'Gestión de gimnasio: 48 ejercicios en 8 grupos musculares, creación de rutinas, sesión de entrenamiento en vivo con temporizador, historial y gráficos de progreso.',
      en: 'Gym management: 48 exercises across 8 muscle groups, routine builder, live training session with timer, history and progress charts.',
    },
    tags: ['React', 'React Router', 'Context API', 'recharts', 'Vite'],
    repoUrl: 'https://github.com/Joel-18/GymTrack',
    demoUrl: 'https://joel-18.github.io/GymTrack/',
    image: 'capturas/gymtrack.png',
  },
  {
    id: 'restaurante-ortiz',
    title: {
      es: 'Restaurante Ortiz',
      en: 'Ortiz Restaurant',
    },
    description: {
      es: 'Aplicación de restaurante con menú filtrado por categorías, carrito con control de cantidades, cálculo automático del total, vaciado del carrito y diseño responsive.',
      en: 'Restaurant app with category-filtered menu, cart with quantity control, automatic total calculation, cart clearing and responsive design.',
    },
    tags: ['React', 'JavaScript', 'Context API', 'Vite'],
    repoUrl: 'https://github.com/Joel-18/Restaurante-React',
    demoUrl: 'https://joel-18.github.io/Restaurante-React/',
    image: 'capturas/restaurante.png',
  },
  {
    id: 'calculadora-react',
    title: {
      es: 'Calculadora React',
      en: 'React Calculator',
    },
    description: {
      es: 'Calculadora con suma, resta, multiplicación y división, decimales, borrado y pantalla limpia. Lógica encapsulada en un hook personalizado (useCalculator).',
      en: 'Calculator with addition, subtraction, multiplication and division, decimals, clearing and a clean display. Logic encapsulated in a custom hook (useCalculator).',
    },
    tags: ['React', 'JavaScript', 'Hooks', 'Vite'],
    repoUrl: 'https://github.com/Joel-18/Calculadora-React',
    demoUrl: 'https://joel-18.github.io/Calculadora-React/',
    image: 'capturas/calculadora.png',
  },
]
