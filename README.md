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

