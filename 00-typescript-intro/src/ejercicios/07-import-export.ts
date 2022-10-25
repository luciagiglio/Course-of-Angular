import { Producto, calculaISV } from "./06-desestructuracion-funcion.ts";


const carritoCompras: Producto[] = [
    {
        desc: 'Celular 1',
        precio:100,
    },
    {
        desc: 'Celular 2',
        precio:200,
    },
];


const [total, isv] = calculaISV( carritoCompras );

console.log('Producto: ', carritoCompras[1].desc);
console.log('Total', total);
console.log('ISV', isv);