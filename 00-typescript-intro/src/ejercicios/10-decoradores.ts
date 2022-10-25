// Decoradores, caracteristica propia de TypeScript


function classDecorator<T extends {new (...args: any[]): {} }>(
    constructor: T
){
    return class extends constructor{
        newProperty = "new property";
        hello = "override";
    };
}



//el decorador trabaja antes que la instancia

@classDecorator
class MiSuperClase {
    public miPropiedad: string = 'abc123';
    
    imprimir(){
        console.log('Hola mundo');
    }
}

console.log(MiSuperClase);

const miClase = new MiSuperClase();

console.log(miClase.miPropiedad);

