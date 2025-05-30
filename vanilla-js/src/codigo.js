

const root = document.getElementById("root");
console.log(root);

const h1 = document.createElement("h1");
h1.textContent = "hola desde vanilla javascript";
h1.setAttribute("class","header");
console.log(h1); 

root.appendChild(h1);
