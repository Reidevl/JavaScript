// Arrays
// let frutas = ["banana","manzana","pera", 5, 9, "pedro"];

// document.write(frutas[4])


// -Arrays asociativos
let pc1 ={
    nombre: "DaltoPC",
    procesador: "Intel Core I7",
    ram: "16 GB",
    espacio: "1TB",
    marca: "Dell"
};

let nombre = pc1["nombre"];
let procesador = pc1["procesador"];
let ram = pc1["ram"];
let espacio = pc1["espacio"];
let marca = pc1["marca"]

frase = `el nombre de mi PC es: <b>${nombre}</b> <br>
         el procesador es: <b>${procesador} </b><br>
         la memoria ram es: <b>${ram}</b> <br>
         el espacio en disco es: <b>${espacio}</b> <br>
         la marca de la pc es: <b>${marca}</b>`;

document.write(frase);
