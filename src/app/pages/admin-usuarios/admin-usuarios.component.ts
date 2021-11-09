import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Administrador } from 'src/app/clases/administrador';
import { FotoService } from 'src/app/services/foto.service';
import { UserService } from 'src/app/services/user.service';
import { Workbook } from 'exceljs';
import * as fileSaver from 'file-saver';
const ExcelJS = require('exceljs');

@Component({
  selector: 'app-admin-usuarios',
  templateUrl: './admin-usuarios.component.html',
  styleUrls: ['./admin-usuarios.component.scss']
})
export class AdminUsuariosComponent implements OnInit {

  @ViewChild('informe', {static: true}) el!: ElementRef<HTMLImageElement>;
  formRegistro !: FormGroup;
  formData  : FormData = new FormData();
  mostrarRegistroAdmin = false;
  arrayTurnosPorDia : any[] = [];
  ctx: any;
  ctx1: any;
  chart: any = null;

  constructor(private fb : FormBuilder, private userService : UserService, private fotoService : FotoService) {
    
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

    this.cargarTurnosDia();
    this.generateChart();
   
  }

  // ngAfterViewInit(){
  //   this.ctx = document.getElementById('myChart') as any;
  //   this.ctx1 = this.ctx.getContext('2d');
  //   //console.log(likes, url, arrayDatos, this.contador);
   
  // }


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

  Pdf(){

  }

  cargarTurnosDia(){
    let cantidad = 0;
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

    console.log(this.arrayTurnosPorDia);

  }

  // downloadPdf(){
  //   html2canvas(this.el.nativeElement).then((canvas)=>{
  //     const imgData = canvas.toDataURL('image/jpeg');
  //     const pdf = new jsPDF({
  //       orientation: 'portrait',
  //     });
  //     const imageProps = pdf.getImageProperties(imgData);
  //     const pdfw = pdf.internal.pageSize.getWidth();
  //     const pdfh = (imageProps.height* pdfw)/ imageProps.width;

  //     pdf.addImage(imgData, 'PNG', 0, 0, pdfw, pdfh);
  //     pdf.save('informes.pdf');
  //   })
  // }

  generateChart(){

    let dias  = this.arrayTurnosPorDia.map((turno : any)=>{ return turno.dia});
    let cantidad  = this.arrayTurnosPorDia.map((turno : any)=>{ return turno.cantidad});

    this.chart = {
      primero:{
        pieChartLabels: dias,
        pieChartData: cantidad,
        pieChartType: 'pie',
      }/*,
      segundo:{
        pieChartLabels: ['excelente', 'bien', 'pesimo'],
        pieChartData: [
          this.obtenerCantidad(encuestas,'excelente','trato'), 
          this.obtenerCantidad(encuestas,'bien','trato'),
          this.obtenerCantidad(encuestas,'pesimo','trato')
        ],
        pieChartType: 'pie',
      },
      tercero:{
        pieChartLabels: ['Si', 'no'],
        pieChartData: [
          this.obtenerCantidad(encuestas,true,'visitar'), 
          this.obtenerCantidad(encuestas,false,'visitar'),
        ],
        pieChartType: 'pie',
      },
      cuarto:{
        pieChartLabels: ['Cocteles', 'Postres', 'Ambos', 'Ninguno'],
        pieChartData: [
          this.obtenerCantidad(encuestas,'cocteles','productoConsumido'), 
          this.obtenerCantidad(encuestas,'postres','productoConsumido'),
          this.obtenerCantidad(encuestas,'ambos','productoConsumido'),
          this.obtenerCantidad(encuestas,'ninguno','productoConsumido'),
        ],
        pieChartType: 'pie',
      },*/
    }
  }


}
