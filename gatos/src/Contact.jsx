export default function Contact({img, name, phone, email}){ //En este caso estoy desestructurando los props. Aparentemente no otorga ningún beneficio, es solo un tema de preferencia
    return(
        <article className="contact-card">
                <img 
                    src={img}
                    alt="Photo of a cat"
                />
                <h3>{name}</h3>
                <div className="info-group">
                    <img 
                        src="src/assets/phone-icon.png" 
                        alt="phone icon" 
                    />
                    <p>{phone}</p>
                </div>
                <div className="info-group">
                    <img 
                        src="src/assets/mail-icon.png" 
                        alt="mail icon"
                    />
                    <p>{email}</p>
                </div>
            </article>
    )
}

const person = {
  img: "src/assets/Felix.jpg",
  name: "Felix",
  phone: "(212) 555 1234",
  email: "felix@gmail.com"
}

const {img, name} = person
console.log("Imagen: "+img +" Nombre: "+name )

/*Respuestas a preguntas del minuto 3:13:15
1. Los props en react permiten la reutilización de código
2. Para pasar un prop a un componente hay que escribir un nombre como si fuera un atributo de html en el jsx
3. No se puede porque solo aceptan atributos existentes en el lenguaje html
4. En este caso los props se reciben así:
function Nabvar(props){
return(
 <header>

 <header/>

)
}
5. Los props son del tipo objeto
*/