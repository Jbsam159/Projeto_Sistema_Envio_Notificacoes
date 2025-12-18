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

# Porque Testes Automatizados São Importantes?

Os testes automatizados existem para resolver um problema simples, mas comum: Todo código quebra mais ceod ou mais tarde, e a medida que um sistema cresce, mais chances de algo quebrar quando você mexer em outra parte e possuem as seguintes qualidades:

- Reduzem os riscos: Sem testes, cada alteração no código é um jogo de azar, com eles, você sabe imediatamente se quebrou algo
- Permitem escalar a equipe
- Mantêm o sistema funcionando por anos
- Ajudam a confirmar se cada parte do sistema faz o que deveria fazer
- O teste mostra exatamente: o que entra, o que sai, como deve funcionar
- Valida requisistos do sistema

# Porque O Docker é importante?

O principal objetivo do docker é resolver o problema de "funciona na minha máquina" ele empacota todo o ambiente em uma caixa selada chamda de container contento todas as características do sistema que você está desenvolvendo, não importando o sistema operacional da outra máquina, vai rodar de forma idêntica

Serve para fazer o backend rodar sem precisar instalar nada além do node e garanti que o projeto funcione igual em qualquer máquina

# Explicando Linha por Linha do Docker-Compose.yml

services: define quais containers existirão
db: nome do serviço (não é o container ainda)
image: Estamos usando a imagem oficial do PostgreSQL
enviroment: É a criação do banco de dados, possuindo variáveis como usuário, senha e nome do banco (isso só roda na primeira vez, por causa do volume)
ports: define as portas da máquina(esquerda) e do container(direita), exemplo: "5432:5432"
volumes: Garante que se o container morrer o banco não perde dados

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

Objetivo: O foco foi garantir a qualidade e a confiabilidade da API por meio de testes automatizados. Foram implementados tanto testes unitários, responsáveis por validar partes isoladas da aplicação, quanto testes de integração, que verificam o comportamento real dos endpoints da API.
Tecnologias Utilizadas: Jest, ts-jest, Supertest
Atividades Realizadas:

- Os testes unitários foram implementados para validar a lógica central da aplicação, especialmente a função sendNotification presente em notification_service.ts.
- Os testes de integração simulam requisições reais aos endpoints definidos no Express.
  Status: Concluído Com Sucesso✅

# Versão 0.4 - Integração Com Banco de Dados

Objetivo: Realizar a integração com o banco de dados PostgreSQL usando o Prisma ORM
Status: Concluído Com Sucesso✅

# Versão 0.5 - Docker + Docker Compose

Motivos: Fica mais fácil de debugar, se o banco funcionar metade dos problemas acabam, prisma depende 100% do banco
Objetivo: Colocar nosso projeto rodando em containers no docker
Status: Concluído Com Sucesso✅

# Versão 0.6 - Mensageria com RabbitMQ

Objetivo: Integrar o RabbitMQ ao projeto para que consigar publicar mensagens e comsumir mensagens
