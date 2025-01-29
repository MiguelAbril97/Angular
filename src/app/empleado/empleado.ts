export class Empleado {
    constructor(
        public nombre:string,
        public edad:number,
    ){}

    toString(){
        console.log(this.nombre+this.edad);
    }
}