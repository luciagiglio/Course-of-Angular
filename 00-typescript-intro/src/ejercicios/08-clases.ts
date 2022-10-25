/* CLASS

*/

/*
class Heroe{

    private alterEgo: string; //propiedad visible solo dentro de la clase
    public edad:number; // fuera de la clase puede verse la propiedad
    static nombreReal:number; // puedo acceder al valor de la propiedad sin crear una instancia de la clase

    constructor(alterEgo:string){
        this.alterEgo = alterEgo; //usando la instancia creada de la clase

        console.log(" se ejecuta primero el constructor cuando se instancia la clase")
    }
}
//puedo acceder al valor de la propiedad sin crear una instancia de la clase
// Heroe.nombreReal

*/

//Forma corta para crear la clase



class PersonaNormal{
    
    constructor(public nombre: string,
                public direccion: string) 
                {
                    this.nombre=nombre;
                    this.direccion=direccion;
                }
}

class Heroe extends PersonaNormal{

    constructor(public alterEgo: string,
                public edad: number,
                public nombreReal: string,
                public direccion: string)
                {
                    super(nombreReal, direccion);
                }

} 




const ironman = new Heroe('Iron', 35, 'Tony', 'NY');
console.log(ironman);



//extender de otras, agregar propiedades a clase existente