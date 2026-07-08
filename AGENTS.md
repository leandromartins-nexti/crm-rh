# PLAYBOOK TÉCNICO - CRM RH

## Visão Geral da Arquitetura
O CRM RH é um sistema desenvolvido como uma aplicação front-end utilizando React, com gerenciamento de estado, roteamento e estilização através de Tailwind CSS. A arquitetura é modular, permitindo a escalabilidade e manutenção do código. A aplicação é empacotada e servida utilizando o Vite, que proporciona um ambiente de desenvolvimento rápido e eficiente.

## Stack e Dependências
- **Linguagens**: JavaScript/TypeScript
- **Framework**: React
- **Gerenciamento de Estado**: React Query
- **Estilização**: Tailwind CSS
- **Ferramentas de Construção**: Vite
- **Testes**: Vitest, Playwright
- **Gerenciamento de Dependências**: npm
- **Linting**: ESLint

### Dependências Principais
- `react` e `react-dom`: Bibliotecas fundamentais para construir a interface de usuário.
- `@tanstack/react-query`: Para gerenciamento de dados e sincronização de estado com servidores.
- `tailwindcss`: Framework CSS utilitário para estilização.
- `vitest`: Framework de testes para JavaScript/TypeScript.

## Estrutura de Módulos (Mapa)
```
src/
│
├── components/          # Componentes reutilizáveis
│   ├── AppSidebar.tsx
│   ├── Layout.tsx
│   └── NavLink.tsx
│
├── hooks/               # Hooks personalizados
│   ├── use-mobile.tsx
│   └── use-toast.tsx
│
├── pages/               # Páginas da aplicação
│   ├── Calendar.tsx
│   ├── Dashboard.tsx
│   ├── Employees.tsx
│   ├── Index.tsx
│   ├── NotFound.tsx
│   ├── Recruitment.tsx
│   └── Talents.tsx
│
├── data/                # Dados mockados para desenvolvimento
│   └── mockData.ts
│
├── lib/                 # Funções utilitárias
│   └── utils.ts
│
├── test/                # Testes
│   ├── example.test.ts
│   └── setup.ts
│
└── main.tsx            # Ponto de entrada da aplicação
```

## Modelo de Dados
Os dados são gerenciados principalmente através de hooks e consultas com o React Query. O modelo de dados pode incluir entidades como:
- Funcionários
- Recrutamento
- Talentos
- Calendário de eventos

Os dados mockados estão disponíveis no arquivo `src/data/mockData.ts`, que serve como base para desenvolvimento e testes.

## Principais Endpoints/APIs
Atualmente, não foi identificado código referente a endpoints específicos, pois a aplicação parece focar principalmente na interface do usuário e na interação com dados mockados. No entanto, a integração com uma API real pode ser realizada através do uso do React Query.

## Convenções e Padrões
- **Organização de Arquivos**: A estrutura de pastas é modular, com separação clara entre componentes, páginas, hooks e testes.
- **Nomenclatura**: O padrão de nomenclatura segue o estilo camelCase para arquivos e funções.
- **Componentização**: Os componentes são altamente reutilizáveis e seguem a abordagem funcional do React.

## Decisões Técnicas
- **Uso do Vite**: A escolha do Vite como ferramenta de construção foi feita devido à sua velocidade e eficiência no desenvolvimento.
- **React Query**: Optou-se por usar o React Query para gerenciar o estado e as requisições assíncronas, facilitando a sincronização de dados.
- **Tailwind CSS**: A utilização do Tailwind permite uma estilização rápida e responsiva, reduzindo a necessidade de CSS personalizado.

Este playbook técnico reflete o estado atual do código no commit `4ad165a1` e serve como um guia para desenvolvedores que desejam entender e contribuir para o projeto CRM RH.