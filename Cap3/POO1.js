class animal{
    constructor(especie, edad, color){
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

let dog = new animal("dog", 5, "brown");
let cat = new animal("cat", 2, "black");
let bird = new animal("bird", 1, "green");

// document.write(dog.info + "<br>");
// document.write(cat.info + "<br>");
// document.write(bird.info + "<br>")

dog.verInfo();
cat.verInfo();
bird.verInfo()