import { Component, Input, OnInit } from '@angular/core';
import { Especialista } from 'src/app/clases/especialista';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
import { Workbook } from 'exceljs';
import * as fileSaver from 'file-saver';
const ExcelJS = require('exceljs');

@Component({
  selector: 'app-listado-todos-usuarios',
  templateUrl: './listado-todos-usuarios.component.html',
  styleUrls: ['./listado-todos-usuarios.component.scss']
})
export class ListadoTodosUsuariosComponent implements OnInit {

  verHistorial : boolean = false;
  pacienteHistorial : any;
  constructor(public userService : UserService) {

    

  }

  ngOnInit(): void {
  }

  DeshabilitarEspecialista(especialista : Especialista){
    this.userService.DeshabilitarEspecialista(especialista);
  }
  
  HabilitarEspecialista(especialista : Especialista){
    this.userService.HabilitarEspecialista(especialista);
  }

  VerHistorial(paciente : any){

    console.log(paciente);
    if(this.verHistorial){
      this.verHistorial = false;
    }else{
      if(paciente.historialMedico.length == 0){
        Swal.fire({
          title: "Advertencia",
          text: 'Este paciente no tiene historial medico',
          icon: 'warning',
          timer: 2000,
          timerProgressBar : true
        })
      }else{
        this.pacienteHistorial = paciente.historialMedico;
        console.log('paciente historial ', this.pacienteHistorial);
        this.verHistorial = true;
      }

    }
    

  }

  ExcelTurnos(paciente : any){

    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet('Turno');
    let turnosAGuardar : any[] = [];

    for(let turno of this.userService.todosLosTurnos){
      if(turno.paciente == paciente.dni){
        turnosAGuardar.push(turno);
      }
    }
    
    for(let especialista of this.userService.todosLosEspecialistas){
      for(let turno of turnosAGuardar){
        if(turno.especialista == especialista.dni){
          turno.especialista = especialista.nombre;
        }
      }
    }
    
    console.log(turnosAGuardar);
    let header = ["Fecha y hora", "Especialista"];
    let headerRow = sheet.addRow(header);


    for(let turno of turnosAGuardar){
      let fila = [turno.horario, turno.especialista];

      sheet.addRow(fila);
    }


    let nombre = `Clinica OnLine - Turnos de ${paciente.nombre} `;

    workbook.xlsx.writeBuffer().then((data : any) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fileSaver.saveAs(blob, nombre + '.xlsx');
    });
  }


}