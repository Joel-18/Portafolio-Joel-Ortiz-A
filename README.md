# Portafolio — Joel Ortiz

Portafolio profesional construido con **React 19 + TypeScript + Vite**. Colores vivos
(violeta · cian · magenta), animaciones al hacer scroll y hover, y proyectos que se
abren **dentro de la misma página** en un modal con vista previa.

## Requisitos

- Node.js 18 o superior
- npm

## Comandos

```bash
npm install      # instalar dependencias
npm run dev      # desarrollo en http://localhost:5173
npm run build    # compilación de producción en dist/
npm run preview  # previsualizar el build
npm run lint     # lint de ESLint
```

## Cómo agregar tus proyectos

Edita **`src/data/projects.ts`**:

```ts
{
  id: 'mi-proyecto',
  title: 'Mi Proyecto',
  description: 'Qué hace y qué tecnologías usaste.',
  tags: ['React', 'TypeScript'],
  repoUrl: 'https://github.com/tu-usuario/mi-proyecto', // obligatorio
  demoUrl: 'https://tu-usuario.github.io/mi-proyecto',  // opcional
  image: 'capturas/mi-proyecto.png',                    // opcional (carpeta public/)
}
```

- Si `demoUrl` existe, el modal carga la demo dentro de un **iframe**.
- Si solo hay `repoUrl`, el modal muestra la ficha con botón para abrir GitHub
  (GitHub no permite embeber sus repositorios).

## Personaliza tus datos

| Archivo | Qué cambiar |
| --- | --- |
| `src/components/Hero.tsx` | Nombre, frase de inicio, enlaces de GitHub |
| `src/components/About.tsx` | Texto del perfil y cifras de estadísticas |
| `src/components/Experience.tsx` | Timeline de formación / experiencia |
| `src/components/Contact.tsx` | Email, GitHub, LinkedIn |
| `src/components/Footer.tsx` | Enlaces sociales |
| `src/styles/global.css` | Colores en `:root` y animaciones |

## Despliegue en GitHub Pages

1. Crea el repositorio y sube el código:
   ```bash
   git init
   git add .
   git commit -m "Portafolio Joel Ortiz"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
   git push -u origin main
   ```
2. En GitHub: **Settings → Pages → Source → GitHub Actions**.
3. El workflow `.github/workflows/deploy.yml` publicará el sitio automáticamente
   en cada push a `main`.

La ruta base ya está configurada con `base: './'` en `vite.config.ts`, por lo que
funciona en cualquier subcarpeta de GitHub Pages.
