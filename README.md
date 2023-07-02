#  Project - Microservices, Docker and Docker compose 

## Objetivos del Proyecto

- Construir una API utlizando el enfoque de la arquitectura de microservicios con NodeJs y ExpressJS.
- Implementar mejores prácticas.
- Usar Docker y Docker compose.
- Despliegue con AWS


## Comenzando

Se creara un `boilerplate` con la estructura general del servidor.

Actualmente las versiónes necesarias son:

 * __Node__: 12.18.3 o mayor
 * __NPM__: 6.14.16 o mayor

Para verificar que versión tienen instalada:

> node -v
> docker --version 
> npm -v

## BoilerPlate
- Inicialmente dividimos nuestra aplicación en pequeñas aplicaciónes que van ha tener una interfaz de comunicación `gateway` que se encargara de administrar las solicitudes a las aplicaciónes pertinentes. 