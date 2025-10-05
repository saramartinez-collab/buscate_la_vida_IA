# Bestial.me (Landing)

Landing minimalista en **React + Vite + Tailwind** con animaciones **Framer Motion**.
Optimizada para **Vercel** (SSL automático, deploy instantáneo).

## Scripts
- `npm install`
- `npm run dev`   # desarrollo
- `npm run build` # genera /dist
- `npm run preview`

## Estructura
- `src/App.jsx`   -> Landing completa
- `src/components/ui/*` -> componentes mínimos (Button, Card, Input)
- `public/logo.svg` -> logo garra negro
- `public/favicon.png`

## Deploy en Vercel
1. Conecta este repo en Vercel (Import Project).
2. Framework: Vite + React. Build: `npm run build`. Output: `dist` (auto).
3. Añade tu dominio `bestial.me` en Settings > Domains y sigue las instrucciones DNS.

## Notas
- Los botones de Stripe / Calendly están marcados como TODO.
- Preparado para ampliar a eventos, comunidad y documentos.
