import { Fragment, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Header.jsx'
import MainContent from './MainContent.jsx'
import Footer from './Footer.jsx'


const root = createRoot(document.getElementById('root'));

root.render(
  //TemporaryName(), así funciona pero no es la mejor manera de expresarlo cuando trabajamos con React
  //<TemporaryName/> Esta es una forma correcta de expresarlo 
  <Page/>
  //<Page></Page> Así también funciona
)

function TemporaryName(){
  return (
    <main>
    <img width="40px" src="/src/assets/react-logo.png" alt="Logo de React" />
    <h1>Fun facts about React</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was orginally created by Jordan Walke</li>
      <li>Has well over 100k stars on github</li>
      <li>Is maintained by Meta</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  </main>
  )
}

function Page(){ 
  return (
    <> 
      <Header></Header>
      <MainContent></MainContent>
      <Footer></Footer>
    </>
  )
}






/*
Where does React put all of the elements i create in jsx when i call root.render()?
Dentro del div que está en el index.html con el id root (podemos llamar a root con otro nombre si lo deseamos)

what would show up in my console if i were to run this line of code?
console.log(<h1>Hello world</h1>)
Un objeto

what's wrong with this code?
root.render(
   <h1>Hi there</h1>
   <p>This is my website</p>
)  
No pueden haber dos elementos dentro de render() a menos que esté encerrados de uno solo, por ejemplo un div o un main

What does it mean for something to be "declarative" instead of "imperative"?
Que solo hay que indicarle lo que hay que hacer sin brindar detalles del como debe hacerse

What does it mean for something to be "composable"?
Tenemos piezas pequeñas que podemos usar para crear algo más grande

*/

/*
Preguntas del minuto 01:20:56
1. Hay que responder lo que es un React component, según el youtuber es una función que retorna elementos de React.
2. El código tiene un error porque la función empieza con minúscula. Debería empezar con mayúscula.
3. Un custom component llamado Header está siendo renderizado llamando a la función en lugar de usar los corchetes picudos.
*/