import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMarcado]'
})
export class MarcadoDirective {


  constructor(private element : ElementRef) { 
    
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.border = "5px solid blue";
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.border = "";
  }
  
}
