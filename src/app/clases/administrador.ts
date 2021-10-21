import { Persona } from "./persona";

export class Administrador extends Persona {

    foto ?: string;


    constructor(nombreParam : string,
        apellidoParam : string,
        edadParam : number,
        dniParam : number,
        emailParam : string,
        passwordParam : string,
        ){
        super(nombreParam,apellidoParam,edadParam,dniParam,emailParam,passwordParam);
        
    }
}
