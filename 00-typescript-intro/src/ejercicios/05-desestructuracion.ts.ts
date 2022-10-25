

interface Reproductor  {
    volumen:number;
    segundo:number;
    cancion:string;
    detalles: Detalles;
}


interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor={
    volumen:90,
    segundo:36,
    cancion:'mess',
    detalles: {
        autor:'Ed Sheeran',
        anio: 2015,
    }
}

// DESESTRUCTURACIÓN DE OBJETOS

const autor = 'fulano';

const { volumen: vol, cancion, detalles: {autor: autorDetalle} } = reproductor;
//const { autor } = detalles;

//console.log('El volumen actual es de: ' + vol);
//console.log('El autor es: ' + autorDetalle);

/*
console.log('El volumen actual es de: ' + reproductor.volumen);
console.log('El autor es: ' + reproductor.detalle.autor);
*/


// DESESTUCTURACIÓN DE ARREGLOS

const dbz: string[]=['Goku', 'Vegeta', 'Trunks'];
const [  , , p3 ] = dbz; //LA POSICIÓN ES LO IMPORTANTE

console.log('Personaje 1:', p3);
// console.log('Personaje 2:', dbz[1]);
// console.log('Personaje 3:', dbz[2]);