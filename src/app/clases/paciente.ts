import { Persona } from "./persona";


export class Paciente extends Persona {

    obraSocial : string;

    fotos : string[] = [];


    constructor(nombreParam : string,
        apellidoParam : string,
        edadParam : number,
        dniParam : number,
        emailParam : string,
        passwordParam : string,
        obraSocialParam : string){
        super(nombreParam,apellidoParam,edadParam,dniParam,emailParam,passwordParam);
        this.obraSocial = obraSocialParam;
    }
}
