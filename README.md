# Markdown editor backend

## Para correr el backend en modo dev:

### Correr mongo con docker-compose

```sh
$ docker-compose -f docker-compose.local.yml up --force-recreate -d
```

Correr script dev para desarrollar

```sh
$ npm run dev 
```

Para detener el contenedor de mongo
```sh
$ docker-compose -f docker-compose.local.yml down -v  
```

## Para ejecutar el backend y mongo con docker-compose para el desarrollo de frontend


```sh
$ docker-compose up --force-recreate -d --build
```


Para detener los contenedores
```sh
$ docker-compose down -v  
```
