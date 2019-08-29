"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Persona_1 = require("./Classes/Persona");
var Politico_1 = require("./Classes/Politico");
// // console.log("Hola Mundo");
// // let str: string = "Ramon";
// // let num: number = 12;
// // let bol: boolean = true;
// // let array: any[] = [{}];
// // let array2: Array<any> = []
// // let nose: any;
// // nose = {};
// // nose = [];
// // let tupla: [string, number] = ["Ramon", 12];
// // enum Gender {
// //     m = "Masculino",
// //     f = "Femenino"
// // };
// // type Personas = {
// //     nombre: string, apellido: string, genero: Gender, edad?: number
// // }
// // let persona: Personas = {
// //     nombre: "Ramon",
// //     apellido: "Sosa",
// //     genero: Gender.m,
// //     // edad: 35
// // }
// // // Persona.edad = 35;
// // // console.log(Persona);
// // // enum Volumen {
// // //     mute = 0,
// // //     volumenBajo = 10,
// // //     VolumenMedio = 50,
// // //     VolumenAlto = 100
// // // }
// // // console.log(Gender.f);
// // // console.log(Volumen.VolumenAlto);
// // let cualquiera: any = "Ramon";
// // let cantidaDeLetras: number = (<string>cualquiera).length
// // console.log(cantidaDeLetras);
// // function getNombre(): string | void {
// //     return "Ramon";
// // }
// // let getNombre2 = (nombre: any, apellido: string = "No tiene apellido", flag: boolean = true): string  => {
// //    return `${ nombre } ${ apellido }`
// // }
// // console.log(getNombre2("Ramon", "Sosa"));
// // function nombres(nombre: string, ...otrosNombres: string[]): string {
// //     console.log(otrosNombres);
// //     return nombre + " " + otrosNombres.join(" ");
// // }
// // let per: any = nombres("Ramon", "Andres", "Sosa", "Diaz");
// // console.log(per);
// // let person2: Personas = {
// //     nombre: "Andres",
// //     apellido: "Sosa",
// //     genero: Gender.m
// // }
// // const person1: Personas = {
// //     nombre: "Carlos",
// //     apellido: "Rodriguez",
// //     genero: Gender.m
// // }
// // const { nombre, apellido } = person2;
// // console.log(nombre);
// // let nuevaPersona: Object = {...person2, direccion: "La Cascada"};
// // console.log(nuevaPersona);
// // let personasArray: any[] = [person1, person2];
// // console.log(personasArray);
// // let promesas = async (): Promise<any[]> => {
// //     try {
// //         let canciones = await fetch("url");
// //         let cancionesJson: any[] = await canciones.json(); 
// //         return cancionesJson;
// //     } catch(err) {
// //         console.log(err)
// //         throw err;
// //     }
// // }
// // let promesa2 = (): Promise<any> => {
// //     return new Promise((resolve: any, reject: any) => {
// //         fetch("url")
// //         .then((res: any) => res.json)
// //         .then((canciones: any[]) => {
// //             resolve(canciones);
// //         })
// //         .catch(err => reject(err))
// //     })
// // }
// // interface PersonaSchema {
// //     nombre: string;
// //     apellido: string;
// //     edad: number;
// //     genero: string;
// //     obtenerEdad?(): number;
// //     getNombre: () => string;
// //     addGenero: string;
// //     obtenerGenero: string;
// // }
// // type Personas = {
// //     nombre: string;
// //     apellido: string;
// //     edad: number;
// //     genero: string;
// // }
// // class Persona implements PersonaSchema {
// //     public nombre: string;
// //     public apellido: string;
// //     public edad: number;
// //     public genero: string = "";
// //     constructor(props: Personas) {
// //         this.nombre = props.nombre;
// //         this.apellido = props.apellido;
// //         this.edad = props.edad;
// //     }
// //     getNombre(): string {
// //         return `${ this.nombre } ${ this.apellido }`
// //     }
// //     set addGenero(genero: string) {
// //         this.genero = genero;
// //     }
// //     get obtenerGenero(): string {
// //         return this.genero;
// //     }
// // }
// // const newPerson: Personas = {
// //     nombre: "Carlos",
// //     apellido: "Velasquez",
// //     edad: 30,
// //     genero: "m"
// // }
// // let person1 = new Persona(newPerson);
// // // person1.addGenero = "m";
// // console.log(person1);
// // function consola( constructor: Function ) {
// //     console.log(constructor);
// // }
// // function imprimirConsola( imprimir: boolean ): Function | any {
// //     if(imprimir) {
// //         return consola;
// //     } else {
// //         return null;
// //     }
// // }
// // @imprimirConsola(false)
// // class Persona {
// //     constructor() {}
// // }
// function consola( constructor: Function ) {
//     console.log(constructor);
// }
// function planDelCorrupto( constructor: Function ) {
//     constructor.prototype.imprimirPlan = function() {
//         console.log(`El plan de ${this.nombre} es robarse todos los recursos de ${this.pais}`);
//     }
// }
// @planDelCorrupto
// @consola
// class Corrupto {
//     public nombre: string;
//     public pais: string;
//     constructor(nombre: string, pais: string) {
//         this.nombre = nombre;
//         this.pais = pais;
//     }
// }
// let corrupto = new Corrupto("JOH", "Honduras");
// (<any>corrupto).imprimirPlan();
var JOH = {
    nombre: "JOH",
    apellido: "el bandido",
    genero: Persona_1.Genero.lbgtxvsu,
    esCorrupto: true
};
var newPolitico = new Politico_1.Politico(JOH);
console.log(newPolitico.nombreCompleto());
console.log(newPolitico.mostrarTransparencia());
//# sourceMappingURL=apps.js.map