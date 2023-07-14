Tailwind la particularidad que tiene es que no necesitamos crear archivos desde css adicionales simplemente añadiendo clases a nuestros elementos html y podemos ir dando estilo. Tenemos que ir a las guias de instalación del framework y usamos crate react app.
Creando un proyecto
1)npx create-react-app my-project
  cd my-project
2)npm install -D tailwindcss
  npx tailwindcss init
  Se creará el archivo "tailwind.config.js". Abrirlo y copiar dentro de "content:["./src/**/*.{js,jsx,ts,tsx}",]
3)Abrir el archivo index.css y borrar todo su contenido. Luego pegar:
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
4) Eliminar el archivo App.css
5) En el archivo App.js modificamos la función App.
      function App() {
      return (
      <div>
      <h1>Lista de tareas</h1> 
      </div>
      );
      }
6)Creamos una className para h1 y le agregamos un estilo, por ejemplo
  /className="text-6xl text-yellow-700"/
7)Ahora vamos a dividir la aplicación final en componentes
El primer componente es el título.
El segundo componente es el input donde vamos a escribir lo que queremos hacer.
El tercero va a contener la lista de las tareas
El cuarto los to-do como componentes individuales que van dentro de la lista
El quinto serían los filtros.
8)Ahora trabajamos sobre h1 de la function App
  darle un background gris 900 y a

Damos una altura mínima el tamaño de la pantalla y h full para que tomen toda la altura de la pantalla y así vamos agregando estilos.
//<h1 className="bg-gray-900 min-h-screen h-full text-gray-100 flex items-center justify-center py-20 px-5">Lista de tareas</h1> //
9)Creamos un nuevo div dentro del anterior para las listas.Le agrgamos un className = container.Por ej <div className="container flex flex-col max-w-xl">
10)Creamos una carpeta para los componentes en src (components) y dentro creamos el primer jsx con el nombre Title(siempre empiezan en mayúsculas). También creamos un index.js dentro de components.
En Title jsx creamos un componente const Title y luego lo importamos en la App.js

CREAMOS ESTADOS PARA LOS Todo