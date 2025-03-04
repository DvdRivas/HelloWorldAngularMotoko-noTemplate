# HelloWorldAngularMotoko-noTemplate
Breve ejemplo de la únion entre un frontend en Angular y un backend en Motoko.

## 1.- Procedimiento
El back se creó sin incorporar ninguna plantilla de un frontend. Las modificaciones realizadas a partir de la existencia de los dos proyectos fue:

* Combinar el contenido del front y el back, en este caso se hizo en la carpeta src.
* Dejar en la carpeta principal los archivos y documentos relacionados con la instalacion de librerias y detalles del proyecto, por ejemplo: dfx.json, package.json, etc. Si este documento ya existe en ambos es necesario mover el contenido de un archivo al otro.
* El contenido de los archivos varias dependiendo de como se creó el proyecto, tal es el caso de uso entre vite y ng para Angular.
* Basandose en el .env es necesario crear una carpeta de nombre ``environments`` dentro de la carpeta de Angular. Dicha carpeta debe incluir dos archvios, el ``enironments.ts`` y ``environments.prod.ts``, en ambos existe la misma informacion.
* Incluir la siguiente linea en el main.ts ``(window as any).global = window;`` antes de los imports.
* `` ng build`` para crear la carpeta dist.
* `` dfx generate `` para crear la carpeta declarations.
* En la carpeta declarations es necesario reemplazar los process.env (ID y NETWORK) de los main. js por las variables de la carpeta environments creada anteriormente, asi mismo, se debe eliminar el export al final del main.js.

## 2.- Despliegue
Una vez realizados los ajustes necesarios, ejecutar los siguientes comandos:
* `` npm install `` para instalar las dependencias (Si es que no han sido instaladas)
* `` dfx start --clean --background ``, posteriormente `` dfx deploy ``
* Abrir otra terminal e ir al directorio `` cd src/HelloWorldMA-frontend `` y ejecutar `` npm start `` o `` ng serve ``
* El modulo donde se realiza la importación de los métodos del back es en names.component.ts

Es posible replicar el funcionamiento de este repositorio mediante el git clone y ejecutando solamente los ultimos comandos. 
Existe la posibilidad de que existan errores por dependencias las cuales es necesario instalar. 
Se recomienda usar la herramienta de insepccion de los navegadores para identificar problemas existentes.
