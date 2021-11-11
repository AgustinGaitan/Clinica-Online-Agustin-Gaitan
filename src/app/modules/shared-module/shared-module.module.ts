import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarcadoDirective } from 'src/app/directives/marcado.directive';



@NgModule({
  declarations: [MarcadoDirective],
  imports: [
    CommonModule
  ],
  exports: [MarcadoDirective]
})
export class SharedModuleModule { }
