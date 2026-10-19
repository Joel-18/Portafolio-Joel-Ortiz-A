export type Project = {
  id: string
  title: string
  description: string
  tags: string[]
  repoUrl: string
  demoUrl?: string
  image?: string
}

/**
 * CONFIGURACIÓN DE PROYECTOS
 * Cada proyecto necesita:
 *  - repoUrl: enlace al repositorio en GitHub (siempre)
 *  - demoUrl: enlace a la demo desplegada (opcional, se embebe en un iframe)
 *  - image:  captura del proyecto en /public (opcional, ej: "capturas/techstore.png")
 */
export const projects: Project[] = [
  {
    id: 'techstore',
    title: 'TechStore',
    description:
      'Tienda online de tecnología: catálogo con 66 productos y 11 categorías, búsqueda, filtros, carrito, favoritos, autenticación simulada y checkout. 100% frontend con React Router y Context API.',
    tags: ['React', 'React Router', 'Context API', 'Vite', 'localStorage'],
    repoUrl: 'https://github.com/Joel-18/TechStore',
    demoUrl: 'https://joel-18.github.io/TechStore/',
    image: 'capturas/techstore.png',
  },
  {
    id: 'gymtrack',
    title: 'GymTrack',
    description:
      'Gestión de gimnasio: 48 ejercicios en 8 grupos musculares, creación de rutinas, sesión de entrenamiento en vivo con temporizador, historial y gráficos de progreso.',
    tags: ['React', 'React Router', 'Context API', 'recharts', 'Vite'],
    repoUrl: 'https://github.com/Joel-18/GymTrack',
    demoUrl: 'https://joel-18.github.io/GymTrack/',
    image: 'capturas/gymtrack.png',
  },
  {
    id: 'restaurante-ortiz',
    title: 'Restaurante Ortiz',
    description:
      'Aplicación de restaurante con menú filtrado por categorías, carrito con control de cantidades, cálculo automático del total, vaciado del carrito y diseño responsive.',
    tags: ['React', 'JavaScript', 'Context API', 'Vite'],
    repoUrl: 'https://github.com/Joel-18/Restaurante-React',
    demoUrl: 'https://joel-18.github.io/Restaurante-React/',
    image: 'capturas/restaurante.png',
  },
  {
    id: 'calculadora-react',
    title: 'Calculadora React',
    description:
      'Calculadora con suma, resta, multiplicación y división, decimales, borrado y pantalla limpia. Lógica encapsulada en un hook personalizado (useCalculator).',
    tags: ['React', 'JavaScript', 'Hooks', 'Vite'],
    repoUrl: 'https://github.com/Joel-18/Calculadora-React',
    demoUrl: 'https://joel-18.github.io/Calculadora-React/',
    image: 'capturas/calculadora.png',
  },
]
