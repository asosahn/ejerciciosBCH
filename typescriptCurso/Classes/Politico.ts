import { PersonaSchema, Personas, Persona } from './Persona';
interface PoliticoSchema extends PersonaSchema {
    esCorrupto: boolean;
    mostrarTransparencia(): boolean;
}
export type Politicos = Personas & {
    esCorrupto: boolean;
}

export class Politico extends Persona implements PoliticoSchema {
    public esCorrupto: boolean; 
    constructor(props: Politicos) {
        super(props)
        this.esCorrupto = props.esCorrupto;
    }
    mostrarTransparencia(): boolean {
        return !this.esCorrupto;
    }
}
