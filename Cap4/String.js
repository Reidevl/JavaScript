// let cadena = "   pedro   ";
// // let cadena2 = "al "

// resultado = cadena.trimStart();

// document.write(resultado.length); 

// let cadena = "a,b,c"
// let cadena1 = cadena.split(",")

// document.write(cadena1.push("Hollaaaa") + " <br>");
// let numeros = ["abecedario","manzana", "pedro", "dedo", "bobo"];

// document.write(numeros + "<br><br>");
// // let resultado = numeros.reverse();

// numeros.splice(-2,0, "roberto", "gustavo", "maximo");

// document.write(numeros);

//Metodos accesores

let numeros = ["abecedario", "manzana", "pedro", "dedo", "bobo"];

document.write(numeros + "<br><br>");

// let resultado = numeros.join("<br>elemento: ");

resultado = numeros.filter(numero => numero.length>4)

document.write(resultado)

 