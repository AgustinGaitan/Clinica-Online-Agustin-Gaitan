import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appEstados]'
})
export class EstadosDirective {

  @Input() set appEstados (value : any){
    
    console.log(value);
    console.log(this.element);
    if(value == 'cancelado' || value == 'rechazado'){
      this.element.nativeElement.style.backgroundColor = 'red';
    }
    else if(value == 'pendiente'){
      this.element.nativeElement.style.backgroundColor = 'grey';
    }else if(value=='finalizado'){
      this.element.nativeElement.style.backgroundColor = 'rgb(107, 109, 182)';
    }else{
      this.element.nativeElement.style.backgroundColor = 'green';
    }
    
  }
  
  constructor(private element : ElementRef) { //Directiva usada en lista-turnos-component.html linea 33, cambia el fondo del card
    
  }


}
