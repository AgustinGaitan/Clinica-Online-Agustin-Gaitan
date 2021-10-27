import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.scss']
})
export class TurnosComponent implements OnInit {


  turnoSeleccionado : any;
  mostrarFiltroEspecialidad : boolean = false;
  mostrarFiltroEspecialista : boolean = false;
  
  especialidadFiltro : any;

  constructor(public userService : UserService) {


  }

  ngOnInit(): void {
  }
  
  SeleccionarTurno(event : any){
    this.turnoSeleccionado = event;
  }

  FiltroEspecialidad(){
    this.mostrarFiltroEspecialidad = true;
    this.mostrarFiltroEspecialista = false;
  }

  
  FiltroEspecialista(){
    this.mostrarFiltroEspecialista = true;
    this.mostrarFiltroEspecialidad = false;
  }

  ClickearEspecialidad(event : any){
    this.especialidadFiltro = {
      item : event.target.innerText,
      tipo:'especialidad'
    }
    console.log(this.especialidadFiltro);
  }

  ClickearEspecialista(especialista : any){
    this.especialidadFiltro = {
      item : especialista.dni,
      tipo:'especialista'
    }
    console.log(this.especialidadFiltro);
  }
}
