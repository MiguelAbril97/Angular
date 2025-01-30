export class Alumno{
    constructor(
        public dni:string,
        public nombre:string,
        public fechaNacimiento:Date,
        public poblacion:string,
        public telefono:number,
        public curso:number,
        public modulos:Array<string>,
    )
    {}
}