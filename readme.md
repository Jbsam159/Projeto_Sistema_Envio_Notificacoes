📨 Sistema de Envio de Notificações

Projeto Full Stack com foco em boas práticas, qualidade de código e arquitetura profissional

Este projeto é um sistema de gerenciamento e envio de notificações, desenvolvido com o objetivo de aplicar tecnologias amplamente utilizadas no mercado, padrões arquiteturais modernos e práticas de engenharia de software adotadas em empresas reais.

O sistema permite cadastrar notificações, consultar dados, enviar mensagens por e-mail (opcional), gerenciar filas assíncronas, testar funcionalidades e manter um código altamente escalável e de fácil manutenção.

🚀 Tecnologias Utilizadas
Backend

- Node.js
- TypeScript
- Express
- Arquitetura em camadas (Controller, Service, Repository)
- Jest (testes unitários e integração)
- Supertest
- Docker (containers)
- PostgreSQL ou MongoDB (dependendo da escolha)
- Prisma ORM ou Mongoose
- Redis (caso implemente fila)
- RabbitMQ / Kafka (mensageria — opcional)
- ESLint + Prettier (padrões de código)
- CI/CD (GitHub Actions) – opcional
- Sentry e Datadog (monitoramento – opcional)

Frontend (opcional, projeto completo)

- React.js
- Next.js
- TailwindCSS
- Typescript
- Componentização + Storybook

🧪 Testes Automatizados
Toda a base do projeto é testada com:

- Jest
- Supertest
- Testes unitários → Services e Repositories
- Testes de integração → Rotas e comportamentos da API

A suíte de testes garante segurança na evolução do projeto e reduz regressões.

Funcionalidades Principais

- Criação, listagem e gerenciamento de notificações
- Persistência em banco de dados (Postgres/Mongo)
- Estrutura pronta para envio real de e-mails
- Worker assíncrono para processamento de filas
- API documentada
- Testes para garantir robustez
- Monitoramento e logs (Sentry/Datadog — opcional)
- Deploy simples e reprodutível com Docker

🔥 Objetivo do Projeto

- Este projeto foi desenvolvido com foco em:
- Evoluir habilidades Full Stack
- Aprender tecnologias essenciais do mercado
- Construir experiência prática para o portfólio
- Criar um sistema completo, organizado e escalável
- Trabalhar boas práticas desde o início:
- SOLID
- Clean Code
- Separação de responsabilidades
- Testes automatizados
- Versionamento correto
- Logger / Monitoramento
- Dockerização
