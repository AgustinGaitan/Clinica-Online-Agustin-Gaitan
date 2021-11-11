import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minusculasEnLogin'
})
export class MinusculasEnLoginPipe implements PipeTransform {

  transform(value : string): string { // Pipe usado en Login linea 67 y 68
    return value.toLocaleLowerCase();
  }

}
