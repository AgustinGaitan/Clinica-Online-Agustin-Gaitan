export abstract class Persona {
    nombre : string;
    apellido : string;
    edad : number;
    dni : number;
    email : string;
    password : string;
    uid ?: string;
    constructor(nombreParam : string,
                apellidoParam : string,
                edadParam : number,
                dniParam : number,
                emailParam : string,
                passwordParam : string){
                    this.nombre = nombreParam;
                    this.apellido = apellidoParam;
                    this.edad = edadParam;
                    this.dni = dniParam;
                    this.email = emailParam;
                    this.password = passwordParam;
                }
}
