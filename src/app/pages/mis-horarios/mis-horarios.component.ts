import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mis-horarios',
  templateUrl: './mis-horarios.component.html',
  styleUrls: ['./mis-horarios.component.scss']
})
export class MisHorariosComponent implements OnInit {

  controles !: FormGroup;
  sabado  : boolean = false;
  constructor(private fb : FormBuilder, private userService : UserService, private router : Router) { 
    this.controles = this.fb.group({
      dia:['',Validators.required],
      hora:[Validators.required]
    });
  }

  ngOnInit(): void {
  }

  SeleccionarHorario(){

    let horaSeleccionada : string = this.controles.get('dia')?.value + ' ' + this.controles.get('hora')?.value;
    this.userService.usuarioActual.horarios.push(horaSeleccionada);
    this.userService.AgregarDisponibilidadHoraria(this.userService.usuarioActual , this.userService.usuarioActual.horarios)
    .then(()=>{
      Swal.fire({
        title: 'Horarios asignados',
        text: 'Horarios asignados correctamente',
        icon: 'success',
        timer:  2000
      }).then(()=>{
        this.router.navigateByUrl('/principal');
      });
    });

  }

  Sabado(value : any){
    

      this.sabado = true;
      console.log(this.sabado);
  
    
  }
}
 