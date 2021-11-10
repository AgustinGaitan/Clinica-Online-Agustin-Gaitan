import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHabilitarDeshabilitar]'
})
export class HabilitarDeshabilitarDirective {

  @Input() set appHabilitarDeshabilitar (value : any){
    
    console.log(value);
    console.log(this.element);
    if(value == 'cancelado' || value == 'rechazado'){
      this.element.nativeElement.style.backgroundColor = 'rgb(235, 131, 131)';
    }
    else if(value == 'pendiente'){
      this.element.nativeElement.style.backgroundColor = 'rgb(199, 165, 165)';
    }else if(value=='finalizado'){
      this.element.nativeElement.style.backgroundColor = 'rgb(165, 171, 199)';
    }else{
      this.element.nativeElement.style.backgroundColor = 'rgb(165, 216, 192)';
    }
    
  }
  
  constructor(private element : ElementRef) { 
    
  }

}
