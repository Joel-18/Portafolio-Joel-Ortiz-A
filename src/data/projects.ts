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
 * Agrega o edita los proyectos aquí. Cada proyecto necesita:
 *  - repoUrl: enlace al repositorio en GitHub (siempre)
 *  - demoUrl: enlace a la demo en vivo (opcional, se embebe en un iframe)
 *  - image:  captura del proyecto en /public (opcional, ej: "capturas/proyecto-1.png")
 */
export const projects: Project[] = [
  {
    id: 'proyecto-1',
    title: 'Nombre del proyecto 1',
    description:
      'Descripción breve: qué problema resuelve, qué tecnologías usaste y cuál fue tu aporte concreto.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    repoUrl: 'https://github.com/tu-usuario/proyecto-1',
  },
  {
    id: 'proyecto-2',
    title: 'Nombre del proyecto 2',
    description:
      'Descripción breve: qué problema resuelve, qué tecnologías usaste y cuál fue tu aporte concreto.',
    tags: ['React', 'TypeScript', 'Vite'],
    repoUrl: 'https://github.com/tu-usuario/proyecto-2',
    demoUrl: 'https://tu-usuario.github.io/proyecto-2',
  },
  {
    id: 'proyecto-3',
    title: 'Nombre del proyecto 3',
    description:
      'Descripción breve: qué problema resuelve, qué tecnologías usaste y cuál fue tu aporte concreto.',
    tags: ['Java', 'POO', 'Base de datos'],
    repoUrl: 'https://github.com/tu-usuario/proyecto-3',
  },
]
