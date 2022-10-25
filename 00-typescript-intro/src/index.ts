
interface Pasajero{
    nombre: string;
    hijos?: string[];
}
const pasajero1: Pasajero = {nombre:'Fernando'}

const pasajero2: Pasajero = {nombre:'Melisa', hijos: ['natalia', 'gabriel']}


function imprimirHijos(pasajero: Pasajero): void {


    const cuantosHijos = pasajero.hijos?.length || 0; //encadenamiento opcional


    console.log(cuantosHijos);
}


imprimirHijos(pasajero1);