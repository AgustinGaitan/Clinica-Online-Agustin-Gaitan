import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-historial-medico',
  templateUrl: './historial-medico.component.html',
  styleUrls: ['./historial-medico.component.scss']
})
export class HistorialMedicoComponent implements OnInit {

  controles !: FormGroup
  constructor(private fb : FormBuilder) { 
    this.controles = this.fb.group({
      altura:['',Validators.required],
      peso:['',Validators.required],
      temperatura:['',Validators.required],
      presion:['',Validators.required],
      datoUno:['',Validators.required],
      datoUnoNom:['',Validators.required],
      datoDos:['',Validators.required],
      datoDosNom:['',Validators.required],
      datoTres:['',Validators.required],
      datoTresNom:['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  EnviarHistorial(){

  }
}
