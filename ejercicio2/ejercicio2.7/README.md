# Ejercicio 2.7

````
    - Con el fin de comprender cómo funcionan los estilos, componentes y comprender las ventajas y problemas de alguna de las formas de aplicar estilos en React, se debe desarrollar una app que tenga la siguiente estructura, con colores y estilos.

    - Se tendrá foco en la modularización y aplicado de estilos

    - Se usaran “CSS stylesheets” y una de las 3 metodologías CSS (OOCSS, BEM o SMACSS)

````

## Resultado

<img width='700px' src='./readme-media/resultado-ejercicio2-7.png' />

<br>

## Estructura del proyecto - Atomic Design

````
Se me ocurrió practicar la metodología de Atomic Design

    - En la parte de componentes hay 3 grupos
        - Los Atomos: La unidad mas pequeña de elementos necesarios para armar la UI

        - Las Molecules: Conjunto de Atomos

        - Los Organismos: Conjunto de Moleculas

    Cada uno de estos grupos contiene un archivo index donde se exportaran todos los elementos del grupo

    Por último esta la carpeta Page donde se unen todos los elementos necesarios para armar una interfaz
````

<img width='250px' src='./readme-media/Atomic-Design-Architecture.jpeg'/>

<br>

## Metodología de estilos - BEM

````
Elegí usar la metodologia BEM para los estilos

    - Cada componente cuentas con su archivo CSS para los estilos base

    - Creé un archivo llamado "custom-style.css" donde hay estilos que se suelen repetir

    - Los componentes pueden recibir clases mediante props ademas de tener las propias
````

### custom-style.css

<img width='350px' src='./readme-media/custom-style.png'/>

<br>

### Page.css

<img width='350px' src='./readme-media/Page.png' />

<br>

### Page.tsx

<img width='700px' src='./readme-media/Page-code.png'/>