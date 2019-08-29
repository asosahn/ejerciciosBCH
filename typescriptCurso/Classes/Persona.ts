export interface PersonaSchema {
    nombre: string;
    apellido: string;
    genero: Genero;
    nombreCompleto(): string;
}
export enum Genero {
    m = "Masculino",
    f = "Femenino",
    lbgtxvsu = "De todo"
}
export type Personas = {
    nombre: string,
    apellido: string,
    genero: Genero
}
export abstract class Persona implements PersonaSchema {
    public nombre: string;
    public apellido: string;
    public genero: Genero;
    constructor(props: Personas) {
        this.nombre = props.nombre;
        this.apellido = props.apellido;
        this.genero = props.genero;
    }
    nombreCompleto(): string {
        return `${this.nombre} ${this.apellido}`;
    }
}

