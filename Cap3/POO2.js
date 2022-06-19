class Animal {
    constructor(especie, edad, color) {
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, tengo ${this.edad} años 
        y soy de color ${this.color}`
    }
    verInfo() {
        document.write(this.info + "<br>")
    }
  
}

class Perro extends Animal {
    /**
     * The constructor function is a special method for creating and initializing an object created
     * within a class
     * @param especie - "perro"
     * @param edad - age
     * @param color - string
     * @param raza - string
     */
    constructor(especie, edad,color, raza){
        super(especie,edad, color);
        this.raza = raza;
    }
    static ladrar(){
        alert("Waw Waw chamita");
    }
    set setRaza(newName){
        this.raza= newName;
    }

    get getRaza(){
        return this.raza;
    }

}

const dog = new Perro("dog", 5, "brown, doberman");
const cat = new Animal("cat", 2, "black");
const bird = new Animal("bird", 1, "green");

dog.setRaza = "Pedro";
document.write(dog.getRaza)