//  numero = 0;

//  while (numero <= 1000) {
//     if (numero==10) {
//         break        
//     }
//     document.write(numero + "<br>")
//     numero++;

//  } 



// for(let i= 0; i<=20; i++){
//     if (i >5 && i<13) {
//         continue ;       
//     }
//     document.write( i + "<br>");

// }



// let animales=["perro", "gato", "loro"]

// for (animal in animales){
//     document.write(animal + "<br>");
// }

// document.write ("<br>")

// for (animal of animales){
//     document.write(animal + "<br>");
// }


array1 = ["Maria", "Josefa", "Roberta"];
array2 = ["Pedro", "Marcelo", array1, "Josefina"];

forRancio:
for (let array in array2){
    if (array == 2){
        for (let array of array1){
            continue forRancio;
            document.write(array + "<br>");
        }
    } else {
        document.write(array2[array] + "<br>");
    }
}