"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Persona_1 = require("./Persona");
var Politico = /** @class */ (function (_super) {
    __extends(Politico, _super);
    function Politico(props) {
        var _this = _super.call(this, props) || this;
        _this.esCorrupto = props.esCorrupto;
        return _this;
    }
    Politico.prototype.mostrarTransparencia = function () {
        return !this.esCorrupto;
    };
    return Politico;
}(Persona_1.Persona));
exports.Politico = Politico;
//# sourceMappingURL=Politico.js.map