"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Genero;
(function (Genero) {
    Genero["m"] = "Masculino";
    Genero["f"] = "Femenino";
    Genero["lbgtxvsu"] = "De todo";
})(Genero = exports.Genero || (exports.Genero = {}));
var Persona = /** @class */ (function () {
    function Persona(props) {
        this.nombre = props.nombre;
        this.apellido = props.apellido;
        this.genero = props.genero;
    }
    Persona.prototype.nombreCompleto = function () {
        return this.nombre + " " + this.apellido;
    };
    return Persona;
}());
exports.Persona = Persona;
//# sourceMappingURL=Persona.js.map