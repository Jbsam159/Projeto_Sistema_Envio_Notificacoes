Projeto: Sistema de Envio de Noticiações
Roteiro de Desenvolvimento — Full Stack & DevOps

Visão Geral do Projeto
O objetivo deste projeto é construir um sistema moderno de envio de notificações usando microserviços, filas, testes, boas práticas e infraestrutura realista.
Fluxo básico: Cliente → API Gateway → Fila (RabbitMQ) → Worker → Envio real (e-mail) → Banco de Dados → Frontend (dashboard)

Índice
1.Estrutura Inicial do Projeto
2.API Básica
3.Testes Automatizados
4.Banco de Dados
5.Docker e Docker Compose
6.Mensageria (RabbitMQ)
7.Worker (Microserviço)
8.Envio Real (AWS SES)
9.Observabilidade e Logs
10.Frontend (Next.js)
11.CI/CD (GitHub Actions)
12.Deploy em Cloud
13.Kubernetes
14.Melhorias Futuras

# Versão 0.1 - Estrutura Inicial do Projeto

Objetivo: montar a fundação do projeto e estrutura de pastas, garantindo organização
Tecnologias utilizadas: Node.js, Typescript, Express, ts-node-dev, Git + Github
Principais Atividadades:
Criação da estrutura inicial do projeto com TypeScript.

- Configuração do tsconfig.json e package.json.
- Configuração do servidor Express.
- Separação entre app.ts (aplicação) e server.ts (servidor), permitindo testes posteriores.
- Criação da primeira rota de teste (/health).
- Organização da arquitetura base do projeto, preparando para módulos, serviços e testes.
- Commit inicial no GitHub, estabelecendo boas práticas de versionamento.
  Status: Concluído Com Sucesso✅

# Versão 0.2 - API Básica

Objetivo: Criação do primeiro módulo real da aplicação, implementando uma API funcional para fins de teste e validação
Tecnologias Utilizadas: Express, TypeScript, Arquitetura em camadas
Principais atividades:

- Criação do módulo Notifications, com a seguinte estrutura:
- notification.routes.ts
- notification.controller.ts
- notification.service.ts
- notification.repository.ts
- Implementação de dois endpoints:
- POST /notifications – cria uma notificação
- GET /notifications – lista todas as notificações
- Implementação de um banco de dados em memória (fakeDB) para - testes.
- Integração das rotas com o app.ts.
- Testes manuais da API para validar funcionamento.
- Commits organizados no GitHub documentando o progresso.
  Status: Concluído Com Sucesso✅

# Versão 0.3 - Testes Automatizados Com Jest
