import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  //acceso global
  providedIn: 'root'
})
export class GifsService {
 
  private apiKey: string = 'tJGLia77ilSvMpwchpvDLxOgDkVXEyOD';
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';

  //array para almacenar el historial de palabras buscadas
  private _historial: string[] = [];

  
 
  public resultados: Gif[] = [];



  get historial(){
    
    return [...this._historial];
  }

  constructor(private http: HttpClient ){

    //devolver el listado de historial del localstorage para mostrar en las búsquedas recientes
    this._historial= JSON.parse(localStorage.getItem('historial')!) || [];
   
   
    //resultados
    this.resultados=JSON.parse(localStorage.getItem('resultados')!) || [];


  }

  buscarGifs(query: string = ''){

    query = query.trim().toLocaleLowerCase();

    //si la palabra no esta en el array la inserta
    if(!this._historial.includes(query)){
      //unshift coloca en el ultimo lugar del array
      this._historial.unshift(query);
      this._historial=this._historial.splice(0,10);

      //almacenar en el local storage par luego al actualizar mantener el listado
      localStorage.setItem('historial', JSON.stringify(this._historial));
      
    }

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', query);

      console.log(params.toString);
                      

    //especificar el tipo en el get xq es de tipo genérico
    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`,{params})
    .subscribe(( response:any ) =>{
      console.log(response.data);
      this.resultados=response.data;
      localStorage.setItem('resultados', JSON.stringify(this.resultados))
    });




  }



}
