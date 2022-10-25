import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent   {

 @Input() nuevo: Personaje={

    nombre:'',
    poder:0
 }
//inyectar servicio
constructor(private dbzService: DbzService){
  
}

 //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(){
    if(this.nuevo.nombre.trim().length === 0 ){
      return;
    }
    //insertar el personaje
    console.log(this.nuevo);
    //this.onNuevoPersonaje.emit(this.nuevo);


    //usando el servicio
    this.dbzService.agregarPersonaje(this.nuevo);

      this.nuevo = {
        nombre:'',
        poder: 0
      }
  
    }

}
