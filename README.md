# Maison Élégance Digital Experience

Projeto React, TypeScript e Vite. O conteúdo parte do [briefing](./prd.md), do [guia visual](./DESIGN.md) e da referência de layout `screen.png`.

> **Modelo demonstrativo:** esta landing page é apenas um modelo visual e conceitual. Os textos, imagens, indicadores, endereço e demais informações exibidas são ilustrativos e devem ser substituídos e validados antes de qualquer publicação ou uso comercial.

## Desenvolvimento

```bash
npm install
npm run dev
```

Para validar a compilação e o código:

```bash
npm run build
npm run lint
```

## Tailwind CSS

O Tailwind CSS v4 está integrado ao Vite por `@tailwindcss/vite` em [vite.config.ts](./vite.config.ts). A importação `@import "tailwindcss"` e os tokens do projeto ficam em [src/index.css](./src/index.css), carregado por [src/main.tsx](./src/main.tsx). A configuração segue a [documentação oficial para Vite](https://tailwindcss.com/docs/installation/using-vite) e usa `@theme` para expor cores e fontes como classes utilitárias.

Exemplos: `bg-pearl`, `text-espresso`, `border-marble`, `text-champagne`, `font-display` e `font-sans`. As fontes Playfair Display e Plus Jakarta Sans são carregadas em [index.html](./index.html).

## Rotas

O React Router está configurado no modo declarativo em [src/routes/AppRoutes.tsx](./src/routes/AppRoutes.tsx). A experiência pública usa uma única rota, `/`, com navegação por âncoras entre as seções da landing page. Qualquer URL desconhecida mostra a página 404. A landing page fica em [src/pages/Home.tsx](./src/pages/Home.tsx) e o fallback em [src/pages/NotFound.tsx](./src/pages/NotFound.tsx).

## Conteúdo e imagens

Os protocolos e a galeria são definidos em [src/data/content.ts](./src/data/content.ts). As imagens em [public/images/](./public/images/) foram geradas para ilustrar a direção visual; não representam instalações, pacientes ou profissionais reais da clínica. Novas imagens PNG podem ser convertidas para WebP com `npm run images:optimize`.

O formulário em [src/components/BookingForm.tsx](./src/components/BookingForm.tsx) abre o WhatsApp com uma mensagem pré-preenchida e não armazena dados no site. **Antes de publicar**, confirme o número de concierge mostrado na referência visual, assim como os indicadores e detalhes operacionais do briefing. Não há CRM nem agenda em tempo real integrados nesta fase.
