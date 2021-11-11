import { Pipe, PipeTransform } from '@angular/core';
import { UserService } from '../services/user.service';

@Pipe({
  name: 'obtenerNombre'
})
export class ObtenerNombrePipe implements PipeTransform { //Pipe usado en admin-usuarios-component.ts lineas 232 y 238
  
  constructor(private user : UserService){

  }

  transform(dni : any): string {
    
    let todos = this.user.todosLosEspecialistas.concat(this.user.todosLosPacientes);
    let retorno : string = '';

    for(let usuario of todos){
      if(usuario.dni == dni){
        retorno = usuario.nombre;
      }
    }

    return retorno;
  }

}
