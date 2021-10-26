import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fechaEsp'
})
export class FechaEspPipe implements PipeTransform {

  transform(arrayFechas: string[], dias : string[]) {
    let arrayRetorno = [];
    console.log(dias.includes('lunes'));

    for(let item of arrayFechas){

      if(item.includes('Mon,') && this.Incluye(dias,'lunes')){
     
        arrayRetorno.push(item.replace('Mon','Lunes'));
      }else if(item.includes('Tue,')  && this.Incluye(dias,'martes')){
        arrayRetorno.push(item.replace('Tue','Martes'));
      }else if(item.includes('Wed,')  && this.Incluye(dias,'miercoles')){
        arrayRetorno.push(item.replace('Wed','Miercoles'));
  
      }else if(item.includes('Thu,')  && this.Incluye(dias,'jueves')){
        arrayRetorno.push(item.replace('Thu','Jueves'));
      }else if(item.includes('Fri,')  && this.Incluye(dias,'viernes')){
        arrayRetorno.push(item.replace('Fri','Viernes'));
      }else if(item.includes('Sat,')  && this.Incluye(dias,'sabado')){
        arrayRetorno.push(item.replace('Sat','Sabado'));
      }else if(item.includes('Sun,')  && this.Incluye(dias,'domingo')){
        arrayRetorno.push(item.replace('Sun','Domingo'));
      }

     

    }
    return arrayRetorno;
  }

  Incluye(arrayDias : any[] , diaParam : string){

    for(let dia of arrayDias){
      if(dia.includes(diaParam) ){
        return true;
      }
    }
    return false;

  }

}
