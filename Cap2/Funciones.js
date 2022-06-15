//             //Funciones

// function saludar(){
//     alert("hola");
//     return "La funcion se ejecutó correctamente"
// }
// let saludo = saludar()

// document.write(saludo)


// function suma(num1, num2){
//     let res = num1 + num2;
//     return res

// }

// let resultado = suma(20,25)

// document.write(resultado)

// function saludar(nombre){
//     let frase = `¡Hola, ${nombre}! Como estas?`;
//     document.write(frase)
// }


// const saludar = function(nombre){
//     let frase = `¡Hola, ${nombre}! Como estas?`;
//     document.write(frase)
// } 

/*Funcion Flecha*/
// let frase = `¡Hola, ${nombre}! Como estas?`;

const saludar = (nombre) =>{
    document.write("Hola como estas? " +nombre)
}

saludar("Pedro")