export class Empleado {
    constructor(
        public nombre:string,
        public edad:number,
        public contratado:boolean,
    ){}

    toString(){
        console.log(this.nombre+this.edad);
    }
}