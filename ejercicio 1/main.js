let n1 = prompt("escribe lo que quieras")
let h1 = document.createElement("H1");
let texto = document.createTextNode(n1);

h1.id = "loco"
h1.classList.add("colorH1"); /// h1.classList.add("colorH1"); añade mas listas por identificador 

// h1.append(texto);// estandar js 
// h1.innerText = texto.nodeValue;// estandar js 2
h1.insertAdjacentText("beforeend",texto.nodeValue);

// document.body.append(h1); // estandar js 
// document.body.innerHTML = h1.outerHTML;// estandar js2 

document.body.insertAdjacentElement("afterend",h1)

console.log(h1);
console.dir(h1);
