import { Persona } from "./persona";

export class Especialista extends Persona {

    especialidad : string;
    foto ?: string;
    habilitado: boolean = false;

    constructor(nombreParam : string,
        apellidoParam : string,
        edadParam : number,
        dniParam : number,
        emailParam : string,
        passwordParam : string,
        especialidadParam : string){
        super(nombreParam,apellidoParam,edadParam,dniParam,emailParam,passwordParam);
        this.especialidad = especialidadParam;
    }
    

}
