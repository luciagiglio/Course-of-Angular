

interface SuperHeroe{
    nombre: string;
    edad:number;
    direccion: Direccion;

    mostrarDireccion: () => string;
}




interface Direccion{
    calle:string;
    pais:string;
    ciudad:string;
}


const superHeroe: SuperHeroe = {
    nombre: 'spiderman',
    edad:30,
    direccion: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    }, 

    mostrarDireccion(){
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
        
    }

}

