# Proyecto de Ecommerce para el Colegio Labarden 

## Requirements

- Node.js and npm

## Localmente


```
yarn
```

Levantar el servicio local

```
yarn dev
```

Abrir http://localhost:3000 


```
.
├── projects          # Catalogo de proyectos
├── public            # Static files
│   ├── assets
│   │   └── images
│   │       └── projects # Imagenes
└── src
    ├── pages         # Next.js pages
    ├── styles        # CSS files
    └── templates     # templates
```

## Deploy a produccion

Localmente

```
$ yarn build
$ yarn start
```

Deploy optimizado:

```
yarn build-prod
```
### License

Licensed under the MIT License, Copyright © 2022

See [LICENSE](LICENSE) for more information.
