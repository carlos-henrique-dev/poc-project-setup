# Project setup POC

Esse projeto tem o objetivo de testar uma ideia de setup automatizado de uma aplicação através de arquivos `manifest.ts` que exportam as configurações necessárias para os módulos do app

No `index` do projeto é chamada a função `setup` que é responsável por buscar recursivamente e ler todos os arquivos `manifest.ts` no projeto e validar o conteúdo para saber se o objeto está de acordo com os requisitos do sistema.

Uma vez validados, os objetos são enviados para funções responsáveis por montar as estruturas core do sistema como por exemplo `menu` e `routes`.

## Setup

Para rodar o projeto primeiro instale as dependências com o comando:

```bash
yarn
```

E depois inicie com o comando:

```bash
yarn start:dev
```

## Modelo de manifest

Abaixo podemos ver um modelo de manifest que define a rota e menu de gerenciamento de categorias

```typescript
export const manifest: ModuleManifest = {
  name: '@categories-management',
  isPrivate: true,
  permissions: [Permissions.CREATE, Permissions.READ],
  route: {
    path: '/categories/management',
  },
  menu: {
    key: '@categories-management',
    name: 'Categories',
    group: EMenuGroup.MANAGEMENT,
    position: 1,
    permissions: [Permissions.CREATE, Permissions.READ],
  },
}
```

## Resultado do setup

Após a leitura e validação dos arquivos, o sistema loga um resultado simulando as estruturas necessárias para o projeto. Exemplo:

```json
{
  "menu": [
    {
      "label": "Dashboard",
      "position": 0,
      "items": [{ "key": "@dashboard", "name": "Dashboard", "position": 0 }]
    },
    {
      "label": "Management",
      "position": 1,
      "items": [{ "key": "@categories-management", "name": "Categories", "position": 1 }]
    },
    {
      "label": "Listing",
      "position": 2,
      "items": [null]
    }
  ],
  "routes": [
    {
      "name": "@categories-list",
      "path": "/categories/list",
      "element": null
    },
    {
      "name": "@categories-management",
      "path": "/categories/management",
      "element": "Name: @categories-management => Path: /categories/management"
    }
  ]
}
```

Repare que alguns elementos estão com valor `null`, isso é resultado da validação dos itens `isPrivate` e `permissions` que verificam se o usuário possui a permissão para ver/acessar a rota/menu
