
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-listado-especialidades',
  templateUrl: './listado-especialidades.component.html',
  styleUrls: ['./listado-especialidades.component.scss']
})
export class ListadoEspecialidadesComponent implements OnInit {

  especialidades : any[] = [];

  constructor(private userService : UserService) { 
    
    this.userService.especialidades
    .subscribe((data : any)=>{
      this.especialidades = data;
    });
  }

  ngOnInit(): void {
  }

}
