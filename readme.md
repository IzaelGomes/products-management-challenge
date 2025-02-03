# Gerenciador de Produtos

Este projeto é um sistema de gerenciamento de produtos que permite aos usuários se cadastrarem, acessarem um painel e realizar operações CRUD (Criar, Ler, Atualizar e Deletar) em produtos. O sistema é composto por um backend desenvolvido em NestJS e um frontend construído com Next.js, que consome a API fornecida pelo backend.

---

## Como Rodar o Projeto Localmente

Siga os passos abaixo para rodar o projeto em sua máquina local.

### Pré-requisitos

- Node.js (v18 ou superior)
- Docker (para subir o banco de dados) ou ter o banco postgresql instalado local
- npm ou yarn (gerenciadores de pacotes)

### Passo a Passo

## Backend

### Navegue até a pasta do backend:

```bash
cd server
```

### Adicione o arquivo .env:

Crie um arquivo .env na pasta root server adicione a variável de ambiente.

```env
DATABASE_URL="postgresql://docker:docker@localhost:5432/productsmanegment?schema=public"
```

### Instale as dependências:

```bash
npm install
```

### Suba o banco de dados com Docker Compose:

```bash
docker-compose up -d
```

### Rode as migrations:

```bash
npx prisma migrate dev
```

### Inicie o servidor de desenvolvimento:

```bash
npm run start:dev
```

O backend estará rodando em [http://localhost:3006](http://localhost:3006) ou selecione uma porta de preferência no main.ts.

---

## Frontend

### Navegue até a pasta do frontend:

```bash
cd web
```

### Adicione o arquivo .env.local:

Crie um arquivo .env na pasta root e adicione as variáveis de ambiente.

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_bGlrZWQtbGFkeWJ1Zy01Ny5jbGVyay5hY2NvdW50cy5kZXYk
CLERK_SECRET_KEY=sk_test_JCKumCZPx8THp2CdXqorw8v8LR87w3yN1xYIfEi6t9
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"
NEXT_PUBLIC_API_URL="http://localhost:3006"
NEXT_PUBLIC_API_KEY_GEMINI_IA="AIzaSyBPgGoBlo8g6_ucgZkhULDW0DMSWfPznq0"
```

### Instale as dependências:

```bash
npm install
```

### Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O frontend estará rodando em [http://localhost:3000](http://localhost:3000) (ou outra porta, dependendo da configuração).

---

## Dependências Utilizadas

### Backend

- **NestJS**: Framework Node.js para construção de aplicações server-side eficientes e escaláveis.
- **class-validator**: Biblioteca para validação de dados recebidos nas requisições, garantindo que os dados estejam corretos antes de serem processados.
- **Docker**: Utilizado para containerizar o banco de dados, facilitando a configuração e o desenvolvimento em diferentes ambientes.
- **PrismaOrm**: Utilizado para manipular o banco de dados.


### Frontend

- **Next.js**: Framework React para construção de aplicações web modernas, com renderização do lado do servidor (SSR) e geração estática (SSG).
- **Zod**: Biblioteca para validação de dados no frontend, garantindo que os dados enviados para o backend estejam corretos.
- **Day.js**: Biblioteca leve para manipulação e formatação de datas, utilizada para formatar as datas exibidas no frontend.

---

## Decisões Técnicas Relevantes

### Validação de Dados:

- No **backend**, optei por utilizar o **class-validator** para validar os dados recebidos nas requisições. Essa escolha foi feita devido à sua integração nativa com o NestJS e sua facilidade de uso.
- No **frontend**, utilizamos o **Zod** para validar os dados antes de enviá-los para o backend. O Zod foi escolhido por sua simplicidade e poder de validação, além de ser altamente compatível com TypeScript.

### Formatação de Datas:

- No **frontend**, utilizei o **Day.js** para formatar as datas. Essa foi escolhida por ser leve e fácil de usar, além de oferecer uma API simples e intuitiva para manipulação de datas.

### Containerização do Banco de Dados:

- Utilizei **Docker** para subir o banco de dados localmente. Isso garante que o ambiente de desenvolvimento seja consistente e fácil de configurar, independentemente do sistema operacional utilizado.

### Separação da Implementação do Banco de Dados no Backend:

- No **backend**, decidi separar a implementação real do banco de dados implementando uma **interface** para que os casos de uso que compõem a lógica pura não tivessem conhecimento de dependências externas. Isso facilita a realização de **testes de unidade** no backend, tornando o código mais modular e de fácil manutenção.

### Arquitetura do Frontend com Next.js:

- Optei por utilizar as ferramentas de **data fetching** do próprio Next.js, para buscar dados diretamente no lado do servidor. Isso melhora a performance e a segurança, evitando chamadas desnecessárias no cliente.
- Para operações como atualizar e deletar produtos, utilizei **Server Actions** do Next.js. Essa abordagem permite que as operações sejam mantidas no lado do servidor, garantindo maior segurança e consistência dos dados e muitas vezes eliminando necessidades de bibliotecas adicionais para controle de http states.
- Escolhir **não utilizar** bibliotecas como **SWR** ou **React Query**, pois as operações do projeto podiam ser mantidas no servidor, reduzindo a complexidade do cliente e mantendo a renderização da maior parte dos componentes no server side.
- Decidi implementar a filtragem dos produtos no backend ao invés do frontend. Caso a lista de produtos cresça muito, filtrar diretamente no client-side pode causar uma queda de **performance**. Dessa forma, o backend é responsável por realizar a filtragem na base de dados, retornando ao frontend apenas os produtos que atendem aos critérios solicitados. Isso otimiza o tempo de resposta e reduz o uso de recursos no cliente.
