Para começar a desenvolver o backend, faça clone desse repositorio base ou crie a mesma estrutura que é assim : 

1. Criar a Estrutura do Monorepo:
backend
└── packages

E na pasta `packages`, é onde estarao todos os packages (modules) que podes desenvolver separadamente.

dentro da pasta `root`, ex; backend/, começe um projeto node. 
Use o yarn init, ele irá criar um package.json: 

Configurar Yarn Workspaces:

No seu arquivo package.json principal, você deve configurar Yarn Workspaces para que o Yarn saiba como lidar com os pacotes no monorepo. Por exemplo:

```
{
  "private": true,
  "workspaces": ["packages/*"]
}
```

E para lidar com o genrencimento dos packages (modules), use o Lerna, uma ferramenta de código aberto que otimiza o gerenciamento de projetos com múltiplos pacotes. 

Instale ele

npm install -g lerna

E no diretorio root, ex: backend rode o `lerna init` para inicializar o Lerna.
E para um criar um novo package ou module, no diretorio package, use o comando: 

lerna create nome-do-pacote

A estrutura basica de seu projeto, deve ser similar a esta: 

monorepo/
├── packages/
│   ├── auth/
│   │   ├── index.js
│   │   └── authRoutes.js
│   └── database/
│       ├── index.js
│       └── databaseController.js
└── package.json

Para cada pacote, você pode criar rotas unicas para cada uma delas e um server unico para cada um.

Para compartinhar pacotes, você pode usar o comando: 

yarn add

Por exemplo, você criou o pacote_1, e no pacote_2 rode o comando yarn add pacote_1

