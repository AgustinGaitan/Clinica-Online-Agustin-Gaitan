import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FechaEspPipe } from 'src/app/pipes/fecha-esp.pipe';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-solicitar-turno',
  templateUrl: './solicitar-turno.component.html',
  styleUrls: ['./solicitar-turno.component.scss']
})
export class SolicitarTurnoComponent implements OnInit {
  
  controles !: FormGroup;
  especialidadClickeada : any;
  especialistaClickeado : any;
  mostrarListaEspecialistas : boolean = false;
  horariosMostrar : any[] = [];
  fechasAMostrar : any[] = [];
  posiblesTurnos : any[] = [];
  fechasEspAMostrar : any[] = [];
  fecha = new Date();
  diasAMostrar : any[] = [];

  constructor(private pipe : FechaEspPipe, private fb : FormBuilder, private userSerivce : UserService) {

    this.controles = this.fb.group({
      horario :['']
    });

  }

  ngOnInit(): void {
  }

  MostrarSeleccionado(event : any){
    this.especialidadClickeada = event;
    this.mostrarListaEspecialistas = true;
   // console.log("clickeado ",  event);
  }

  MostrarEspecialistaSeleccionado(event : any){
    this.especialistaClickeado = event;
    this.horariosMostrar = event.horarios;
    
    let hoy = new Date();
    let actual = new Date();
    if(this.fechasAMostrar.length == 15){
      this.fechasAMostrar = [];
      hoy.setDate(actual.getDate());
    }
    for(let i = 0 ; i < 15 ; i++){

      this.fecha.setDate(hoy.getDate() + 1);
      hoy.setDate(hoy.getDate() + 1);
      this.fechasAMostrar.push(this.fecha.toUTCString().split(' ')[0] + 
                               this.fecha.toUTCString().split(' ')[1] + ' ' +
                               this.fecha.toUTCString().split(' ')[2]);
      
    }


    this.fechasEspAMostrar = this.pipe.transform(this.fechasAMostrar, event.horarios);
    console.log(this.fechasEspAMostrar);
  
    

  }

  PedirTurno(){
    
    let horario  = {
      horario: this.controles.get('horario')?.value,
      paciente: this.userSerivce.usuarioActual.dni,
      especialista: this.especialistaClickeado.dni
    }
    
    console.log(horario); 
    this.userSerivce.SetearTurno(horario);
  }
}
