---
title: Bonus Flutter docker (dockerizando nuestro ambiente de desarrollo docker)
date: 2021-03-22
tags: [Flutter, 2021]
social_image: '/media/miniatura.png'
---

Una de las formas de trabajar nuestro ambiente de desarrollo poco común es dockerizar nuestro ambiente en docker, esto se realiza a través de DevContainer de visual studio code:
La documentación de como crear una configuración personalizada te la dejo aqui:
* Codemagic: https://blog.codemagic.io/how-to-dockerize-flutter-apps/
* dockerflutter: repositorio ya con pasos dockerizados https://github.com/matsp/docker-flutter​
* Docker https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker
* Remote Development https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack

Comandos para ejecutar flutter en la terminal:
* flutter create (app nombre de tu app)
* flutter run (este comando debes ejecutarlo dentro de tu proyectos)

Nota: Los emuladores o dispositivos físicos deben estar instalados fuera de nuestro ambiente docker
* Para poder conectar internamente nuestros emuladores debes ejecutar: adb connect host.docker.internal:5555 
* Y luego verificar con el comando flutter doctor.

# Video Youtube:

video: [Challenger Fintual](https://www.youtube.com/watch?v=46g4x9Z-xxQ&t=7s)


## Image del proyecto

![Clone Fintual](/media/miniatura.png)


## Nota

> Este es un proyecto de demostracióm realizado en Flutter.
