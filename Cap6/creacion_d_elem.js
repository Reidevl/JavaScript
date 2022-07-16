

const contenedor = document.querySelector(".contenedor");

const fragmento = document.createDocumentFragment(); 

// const textDelItem = document.createTextNode("Este es un item de la lista");

// console.log(textDelItem)

// item.appendChild(textDelItem)

for (i = 0; i < 20; i++){
    const item = document.createElement("LI");
    item.innerHTML = "Este es un item de la lista"
    fragmento.appendChild(item)
}

contenedor.appendChild(fragmento)

console.log(fragmento) 

