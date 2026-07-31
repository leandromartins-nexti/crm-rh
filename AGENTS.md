# PLAYBOOK TÉCNICO - CRM RH

## Visão Geral da Arquitetura
O CRM RH é uma aplicação front-end desenvolvida em React, focada na gestão de recursos humanos. A arquitetura modular facilita a escalabilidade e manutenção do sistema. O projeto utiliza Vite para empacotamento e desenvolvimento, garantindo um ambiente rápido e eficiente. A estilização é feita com Tailwind CSS, permitindo uma abordagem utilitária e responsiva.

## Stack e Dependências
- **Linguagens**: JavaScript/TypeScript
- **Framework**: React
- **Gerenciamento de Estado**: @tanstack/react-query
- **Estilização**: Tailwind CSS
- **Ferramentas de Construção**: Vite
- **Testes**: Vitest, Playwright
- **Gerenciamento de Dependências**: npm
- **Linting**: ESLint

### Dependências Principais
- `react` e `react-dom`: Bibliotecas essenciais para a interface do usuário.
- `@tanstack/react-query`: Para gerenciamento de estado e requisições assíncronas.
- `tailwindcss`: Framework CSS para estilização.
- `vitest`: Framework de testes para JavaScript/TypeScript.
- `@radix-ui/react-*`: Componentes acessíveis e personalizáveis para React.

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
O modelo de dados é gerenciado através de hooks e consultas utilizando o React Query. As entidades principais incluem:
- Funcionários
- Recrutamento
- Talentos
- Calendário de eventos

Os dados mockados estão disponíveis no arquivo `src/data/mockData.ts`, que serve como base para o desenvolvimento e testes.

## Principais Endpoints/APIs
Atualmente, não há implementação de endpoints específicos, já que a aplicação foca na interface do usuário e utiliza dados mockados. A integração com uma API real pode ser realizada utilizando o React Query para gerenciar as requisições.

## Convenções e Padrões
- **Organização de Arquivos**: Estrutura modular com separação clara entre componentes, páginas, hooks e testes.
- **Nomenclatura**: O padrão de nomenclatura segue o estilo camelCase para arquivos e funções.
- **Componentização**: Os componentes são reutilizáveis e seguem a abordagem funcional do React.

## Decisões Técnicas
- **Uso do Vite**: Escolha do Vite pela sua rapidez e eficiência no desenvolvimento.
- **React Query**: Optou-se por esta biblioteca para facilitar o gerenciamento de estado e a sincronização de dados.
- **Tailwind CSS**: Utilização deste framework para estilização, permitindo um desenvolvimento rápido e responsivo.

Este playbook técnico reflete o estado atual do código no commit `30149d6d` e serve como um guia para desenvolvedores que desejam compreender e contribuir para o projeto CRM RH.