



function sumar(a: number, b: number):number {
    return a+b;
}

const sumarFlecha = (a:number, b:number):number =>{
    return a + b;
}

//parametros obligatorios, opcionales (?) y con valor por defecto
function multiplicar(numero: number, otroNumero?: number, base:number=2):number {
    return numero*base
}

//const result = multiplicar(5, 0, 10);
//console.log(result);

///////////////


interface PersonajeLor{
    nombre: string;
    pv: number;
    mostrarPv: ()=>void;

}






//void no retorna nada en la funcion (en js siempre esta explicito, por practica ts colocar void)
function curar(personaje: PersonajeLor, curarX: number): void{

    personaje.pv += curarX;
    console.log(personaje);

}

//crear constante si nunca va a cambiar su valor. es mucho mas ligero de implementar por eso es buena practica utilizarlo
const nuevoPersonaje: PersonajeLor = {

    nombre: 'strider',
    pv: 50,
    mostrarPv(){
        console.log('Puntos de vida: ', this.pv);
    }
}

curar(nuevoPersonaje,20);
nuevoPersonaje.mostrarPv();