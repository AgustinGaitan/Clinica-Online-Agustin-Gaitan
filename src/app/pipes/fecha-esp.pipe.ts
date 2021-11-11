import { Pipe, PipeTransform } from '@angular/core';   

@Pipe({
  name: 'fechaEsp'
})
export class FechaEspPipe implements PipeTransform {  //Pipe usado en solicitar-turno-components.ts linea 64
 
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
    arrayRetorno = this.Traducir(arrayRetorno);
    arrayRetorno = this.AgregarHorario(arrayRetorno,dias);

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

  AgregarHorario(arrayDias : string[], horarios : string[]){
    
    let arrayRetorno : any[] = [];


    //  arrayRetorno = arrayDias.map((item) =>{
    for(let item of arrayDias){
      for(let fecha of horarios){

        if(fecha.includes('lunes') && item.includes('Lunes')){
         arrayRetorno.push(item + ' ' + fecha.split(' ')[1]);
        }else if(fecha.includes('martes') && item.includes('Martes')){

          arrayRetorno.push(item + ' ' + fecha.split(' ')[1]);
        }else if(fecha.includes('miercoles')&& item.includes('Miercoles')){

          arrayRetorno.push(item + ' ' + fecha.split(' ')[1]);
        }else if(fecha.includes('jueves') && item.includes('Jueves')){

          arrayRetorno.push(item + ' ' + fecha.split(' ')[1]);
        }else if(fecha.includes('viernes') && item.includes('Viernes')){
          
          arrayRetorno.push(item + ' ' + fecha.split(' ')[1]);
        }else if(fecha.includes('sabado') && item.includes('Sabado')){

          arrayRetorno.push(item + ' ' + fecha.split(' ')[1]);
        }else if (fecha.includes('domingo') && item.includes('Domingo')){

          arrayRetorno.push(item + ' ' + fecha.split(' ')[1]);
        }
      }
    //   return [];
    // });
  }

    return arrayRetorno;
  }

  Traducir(arrayFechas : string[]){
    let arrayRetorno :any[] = [];
      for(let item of arrayFechas){

            if(item.includes('Jan')){
          
              arrayRetorno.push(item.replace('Jan','Enero'));
            }else if(item.includes('Feb')){
              arrayRetorno.push(item.replace('Feb','Febrero'));
            }else if(item.includes('Mar')){
              arrayRetorno.push(item.replace('Mar','Marzo'));
        
            }else if(item.includes('Ap')){
              arrayRetorno.push(item.replace('Apr','Abril'));
            }else if(item.includes('May')){
              arrayRetorno.push(item.replace('May','Mayo'));
            }else if(item.includes('Jun')){
              arrayRetorno.push(item.replace('Jun','Junio'));
            }else if(item.includes('Jul')){
              arrayRetorno.push(item.replace('Jul','Julio'));
            }else if(item.includes('Aug')){
              arrayRetorno.push(item.replace('Aug','Agosto'));
            }else if(item.includes('Sep')){
              arrayRetorno.push(item.replace('Sep','Septiembre'));
            }else if(item.includes('Oct')){
              arrayRetorno.push(item.replace('Oct','Octubre'));
            }else if(item.includes('Nov')){
              arrayRetorno.push(item.replace('Nov','Noviembre'));
            }else if(item.includes('Dec')){
              arrayRetorno.push(item.replace('Dec','Diciembre'));
            }
      }

      return arrayRetorno;

  }

}
