/*
    ===== Código de TypeScript =====
*/

let habilidades: (string | boolean | number)[] = ['bash', 'conuter', 'healing']; //ts infiere los tipos en caso de que no los coloque


habilidades.push(100);


interface Personaje{
    nombre: string, 
    hp: number,
    habilidades: string[];
    puebloNatal?: string; //? opcional

}

//personaje de tipo Personaje
const personaje: Personaje = {
    nombre: 'strider',
    hp: 100,
    habilidades: ['bash', 'counter', 'healing']
}

personaje.puebloNatal = 'Pueblito';

console.table(personaje);