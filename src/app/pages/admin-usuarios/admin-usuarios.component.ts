import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Administrador } from 'src/app/clases/administrador';
import { FotoService } from 'src/app/services/foto.service';
import { UserService } from 'src/app/services/user.service';
import { Workbook } from 'exceljs';
import * as fileSaver from 'file-saver';
import { ObtenerNombrePipe } from 'src/app/pipes/obtener-nombre.pipe';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
const ExcelJS = require('exceljs');

@Component({
  selector: 'app-admin-usuarios',
  templateUrl: './admin-usuarios.component.html',
  styleUrls: ['./admin-usuarios.component.scss']
})
export class AdminUsuariosComponent implements OnInit {

  @ViewChild('informe', {static: true}) element!: ElementRef<HTMLImageElement>;
  formRegistro !: FormGroup;
  formData  : FormData = new FormData();
  mostrarRegistroAdmin = false;
  arrayTurnosPorDia : any[] = [];
  arrayTurnosPorEsp : any[] = [];
  arrayTurnosPorDoc : any[] = [];
  arrayTurnosFinalizadosDoc : any[] = [];

  chart: any = null;
  mostrarGraficos : boolean = false;

  constructor(private fb : FormBuilder, private userService : UserService, private fotoService : FotoService,
              private pipe : ObtenerNombrePipe) {
    
    this.formRegistro = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      edad: ['', Validators.required],
      dni: ['', Validators.required],
      obraSocial: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      captcha:[false,Validators.requiredTrue]

    }); 


    this.CargarTurnosDia();
    this.CargarTurnosEsp();
    this.CargarTurnosPorMedico();
    this.CargarTurnosPorMedicoFinalizado();
    this.ActualizarGrafico();
   
  }

  Graficos(){
    if(this.mostrarGraficos){
      this.mostrarGraficos = false;
    }else{
      this.mostrarGraficos = true;
    }
    
  }

  ngOnInit(): void {
  }

  getNombre(){
    return this.formRegistro.get('nombre')?.value;
  }
  getApellido(){
    return this.formRegistro.get('apellido')?.value;
  }
  getDni(){
    return this.formRegistro.get('dni')?.value;
  }
  getEmail(){
    return this.formRegistro.get('email')?.value;
  }
  getEdad(){
    return this.formRegistro.get('edad')?.value;
  }
  getPassword(){
    return this.formRegistro.get('password')?.value;
  }

  Registrarse(){
    let administrador : Administrador = new Administrador(this.getNombre(),
                                            this.getApellido(),
                                            this.getEdad(),
                                            this.getDni(),
                                            this.getEmail(),
                                            this.getPassword(),
                                            )

                                            
    this.fotoService.SubirFotoAdministrador(this.formData,administrador);

  }

  SubirFoto(event : any){

    this.formData.append('foto',event.target.files[0], event.target.files[0].name);
    
  }

  RegistrarAdmin(){
    this.mostrarRegistroAdmin = true;
  }

  Excel(){

    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet('Usuarios');
    let header = ["Nombre", "Apellido", "DNI", "Edad", "Correo", "Tipo de usuario"];
    let headerRow = sheet.addRow(header);

    let todosLosUsuarios = this.userService.todosLosPacientes.concat(this.userService.todosLosEspecialistas);
    todosLosUsuarios = todosLosUsuarios.map((usuario : any)=>{
        if(usuario?.especialidad){
          usuario.tipo = 'Especialista';
        }else{
          usuario.tipo = 'Paciente';
        }

        return usuario;
    });

    for(let usuario of todosLosUsuarios){
      let fila = [usuario.nombre, usuario.apellido, usuario.dni, usuario.edad, usuario.email, usuario.tipo];

      sheet.addRow(fila);
    }

    let nombre = 'Clinica OnLine - Usuarios';

    workbook.xlsx.writeBuffer().then((data : any) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fileSaver.saveAs(blob, nombre + '.xlsx');
    });
  }

  ExcelLogs(){

    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet('Logs');
    let header = ["Día", "Hora", "Usuario"];
    let headerRow = sheet.addRow(header);

    for(let log of this.userService.todosLosLogs){
      let fila = [log.dia, log.hora, log.usuario];

      sheet.addRow(fila);
    }

    let nombre = 'Clinica OnLine - Logs';

    workbook.xlsx.writeBuffer().then((data : any) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fileSaver.saveAs(blob, nombre + '.xlsx');
    });
  }

  CargarTurnosDia(){
    
    let flag;

    for(let turno of this.userService.todosLosTurnos)
    {
      flag = false;
      let objeto = {
        dia: turno.horario.split(' ')[0] + ' ' +turno.horario.split(' ')[1],
        cantidad: 1,
      }

      for(let item of this.arrayTurnosPorDia)
      {
        if(item.dia === turno.horario.split(' ')[0] + ' ' +turno.horario.split(' ')[1])
        {
          flag = true;
          item.cantidad++;
        }
      }

      if(!flag)
      {
        this.arrayTurnosPorDia.push(objeto);
      }
    }

   

  }

  CargarTurnosEsp(){
    let flag;

    for(let turno of this.userService.todosLosTurnos)
    {
      flag = false;
      let objeto = {
        especialidad: turno.especialidad,
        cantidad: 1,
      }

      for(let item of this.arrayTurnosPorEsp)
      {
        if(item.especialidad === turno.especialidad)
        {
          flag = true;
          item.cantidad++;
        }
      }

      if(!flag)
      {
        this.arrayTurnosPorEsp.push(objeto);
      }
    }

    
  }

  CargarTurnosPorMedico(){

    let flag;

    for(let turno of this.userService.todosLosTurnos)
    {
      flag = false;
      let objeto = {
        especialista: this.pipe.transform(turno.especialista),
        cantidad: 1,
      }

      for(let item of this.arrayTurnosPorDoc)
      {
        if(item.especialista === this.pipe.transform(turno.especialista))
        {
          flag = true;
          item.cantidad++;
        }
      }

      if(!flag)
      {
        this.arrayTurnosPorDoc.push(objeto);
      }
    }

    console.log('arrayTurnosPorDoc' , this.arrayTurnosPorDoc);

  }

  CargarTurnosPorMedicoFinalizado(){

    let arrayTurnosFinalizados = this.userService.todosLosTurnos.filter((turno : any)=>{
      return turno.estado == 'finalizado';
    });
    
    console.log('arrayTurnosFINALIZados, ' , arrayTurnosFinalizados);
    let flag;

    for(let turno of arrayTurnosFinalizados)
    {
      flag = false;
      let objeto = {
        especialista: this.pipe.transform(turno.especialista),
        cantidad: 1,
      }

      for(let item of this.arrayTurnosFinalizadosDoc)
      {
        if(item.especialista === this.pipe.transform(turno.especialista))
        {
          flag = true;
          item.cantidad++;
        }
      }

      if(!flag)
      {
        this.arrayTurnosFinalizadosDoc.push(objeto);
      }
    }

    console.log('arrayTurnosFinalizadosDoc' , this.arrayTurnosFinalizadosDoc);
  }

  Pdf(){
    html2canvas(this.element.nativeElement).then((canvas)=>{
      const imgData = canvas.toDataURL('image/jpeg');
      const pdf = new jsPDF({
        orientation: 'portrait',
      });
      const imageProps = pdf.getImageProperties(imgData);
      const pdfw = pdf.internal.pageSize.getWidth();
      const pdfh = (imageProps.height* pdfw)/ imageProps.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfw, pdfh);
      pdf.save('graficos.pdf');
    })
  }

  ActualizarGrafico(){

    let dias  = this.arrayTurnosPorDia.map((turno : any)=>{ return turno.dia});
    let cantidad  = this.arrayTurnosPorDia.map((turno : any)=>{ return turno.cantidad});

    let especialidades = this.arrayTurnosPorEsp.map((turno : any)=> { return turno.especialidad});
    let cantidadEsp = this.arrayTurnosPorEsp.map((turno : any)=> { return turno.cantidad});

    let especialistas = this.arrayTurnosPorDoc.map((turno: any)=>{return turno.especialista});
    let cantidadDoc = this.arrayTurnosPorDoc.map((turno : any)=> { return turno.cantidad});

    let especialistasFin = this.arrayTurnosFinalizadosDoc.map((turno: any)=>{return turno.especialista});
    let cantidadFin = this.arrayTurnosFinalizadosDoc.map((turno : any)=> { return turno.cantidad});

   

    this.chart = {
      primero:{
        pieChartLabels: dias,
        pieChartData: cantidad,
        pieChartType: 'pie',
      },
      segundo:{
        pieChartLabels: especialidades,
        pieChartData: cantidadEsp,
        pieChartType: 'pie',
      },
      tercero:{
        pieChartLabels: especialistas,
        pieChartData: cantidadDoc,
        pieChartType: 'pie',
      },
      cuarto:{
        pieChartLabels: especialistasFin,
        pieChartData: cantidadFin,
        pieChartType: 'pie',
      },
    }
  }


}
