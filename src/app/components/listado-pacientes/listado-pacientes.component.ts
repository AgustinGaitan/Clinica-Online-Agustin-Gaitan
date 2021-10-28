import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-listado-pacientes',
  templateUrl: './listado-pacientes.component.html',
  styleUrls: ['./listado-pacientes.component.scss']
})
export class ListadoPacientesComponent implements OnInit {

  @Output() pacienteClickeadoEmitter : EventEmitter<any> = new EventEmitter();
  cambiarColor : boolean = false;
  
  constructor(public user : UserService) {

    
  }

  ngOnInit(): void {
  }

  SeleccionarPaciente(paciente : any){
    this.pacienteClickeadoEmitter.emit(paciente);
    this.cambiarColor = true;
  }
}
