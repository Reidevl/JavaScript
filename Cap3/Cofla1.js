class Celular {
    constructor(color, peso, tamaño, rdc, ram){
        this.color = color;
        this.peso= peso;
        this.tamaño = tamaño;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
    }
    presionarBotonEncendido(){
        if (this.encendido == false){
            alert("Celular prendido");
            this.encendido = true;
        } else {
            alert("Celular apagado")
        }
    }

    reiniciar(){
        if (this.encendido==true){
            alert("Reiniciando celular");
        } else {
            alert("El celular está apagado");
        }
    }

    tomarFoto(){
        alert(`Foto tomada en una resolucion de: ${this.resolucionDeCamara}`);
    }

    grabarVideo(){
        alert(`Grabando video en ${this.resolucionDeCamara}`);
    }

    mobileInfo(){
        return `
        Color: <b> ${this.color}</b><br>
        Peso: <b> ${this.peso}</b><br>
        Tamaño: <b> ${this.tamaño}</b><br>
        Resolucion de Video: <b> ${this.resolucionDeCamara}</b><br>
        Memoria Ram: <b> ${this.memoriaRam}</b><br>
        `
    }
}

class celularAltaGama extends Celular{
    constructor(color, peso, tamaño, rdc, ram, rdce){
        super(color, peso, tamaño, rdc, ram);
        this.resolucionDeCamaraExta = rdce;
    }

    grabarVideoLento(){
        alert("Estas grabando en camara lenta");
    }

    reconocimientoFacil(){
        alert("Vamos a iniciar reconocimiento facial");
    }

    infoAltaGama() {
    return this.mobileInfo() + `Resolucion de Camara Extra: 
    ${this.resolucionDeCamaraExta}`
    }
}

// const celular1 = new Celular("rojo", "150 g", "5 pulgadas", "hd", " GB");
// const celular2 = new Celular("negro", "155 g", "5.4 pulgadas", "Full hd", "2 GB");
// const celular3 = new Celular("blanco", "146 g", "5.9 pulgadas", "Full hd", "2 GB");

// celular1.presionarBotonEncendido()
// celular1.tomarFoto();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.presionarBotonEncendido();

celular1 = new celularAltaGama("rojo", "130g", "5.2 pulgadas", "4K", "3GB", "full hd");
celular2 = new celularAltaGama("negro", "142g", "6 pulgadas", "4K", "4GB", "hd");

// document.write(`
//     ${celular1.mobileInfo()} <br>
//     ${celular2.mobileInfo()} <br>
//     ${celular3.mobileInfo()} <br>

// `)

document.write(`
     ${celular1.infoAltaGama()} <br><br>
     ${celular2.infoAltaGama()} <br>
`)