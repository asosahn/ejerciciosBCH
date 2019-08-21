// for_inicial:
// for (var i=0; i<=10; i++) {
//     console.log("for_inicial " + i);
//     segundo_for:
//     for (var j = 0; j<=5; j++) {
//         if (j == 2) {
//             continue for_inicial;
//         }
//         console.log("segundo for", j);
//         for(var x = 0; x<=2; x++) {
//             if(x ==1 ) {
//                 continue for_inicial;
//             }
//             console.log("tercer for", j);
//         }
//     }
// }

// var array = [
//     {
//         nombre: "Ramon",
//         saldos: [200, 300, 
//             400, 500, 
//             ["hola", "mundo", ["200"]]]
//     }
// ];

// console.log(array[0]['saldos'][4][2][0]);
// console.log(array[0]["nombre"])
// console.log(array[0].nombre);
// function holamundo() {
//     console.log("hola mundo");
// }
// var array = [200,300,"Ramon", true,
// holamundo];

// array[4]();
// var array = [200,300,400,500];

// array.forEach(function(item, idx){
//     console.log("item " + item);
//     console.log("indice " + idx);
// });

// var resultado = array.map(function(item, idx){
//     console.log("item " + item);
//     console.log("indice " + idx); 
//     return item;
// });
// console.log(resultado);

// array.push(1000);
// array.unshift(2899);
// var borrado = array.pop()
// var borradoInicial = array.shift()
// console.log(array);
// console.log(borrado);
// console.log(borradoInicial);

// array.splice(1,1,500, 800);
// console.log(array);
// console.log(array);
//  var res = array.slice(1,2);

// console.log(res);

// var array = [200,300,400,500];

// var busqueda = array
// .filter(function(elem){
//     return elem > 300
// });

// var busqueda2 = array
// .find(function(elem){
//     return elem == 200
// })

// var array = ["bueno",300,"b",500];
// var suma = array
// .reduce(function(a,b){
//     console.log("a :" + a);
//     console.log("b :" + b);
//     return a + b
// });

// console.log(suma);

// var array2 = [
//     {
//         saldo: 200,
//         nombre: "Miguel"
//     },
//     {
//         saldo: 300,
//         nombre: "David"
//     },
//     {
//         saldo: 700,
//         nombre: "Ramon"
//     },
//     {
//         saldo: 9900,
//         nombre: "Andres"
//     }
// ];

// var suma2 = array2
// .reduce(function(primero, segundo){
//     console.log("primero : " + primero.saldo);
//     console.log("segundo : " + segundo.saldo);
//     // creacion de objeto
//     var preSaldo = {
//         saldo: primero.saldo + segundo.saldo
//     }
//     // retorno el objeto
//     return preSaldo;
    
// });

// console.log(busqueda);
// console.log(busqueda2);
// console.log(suma);
// console.log(suma2);

// var filtro = array2.filter(function(elem){
//     return elem.saldo >= 700
// })
// .map(function(elem){ 
//     return elem.saldo
// })
// .reduce(function(a, b){
//     return a + b
// });

// console.log(filtro)
// var filtro1 = array2.find(function(elem){
//     return elem.nombre === "Miguel"
// });
// var filtro3 = array2.findIndex(function(elem){
//     return elem.nombre === "David"
// });

// console.log(filtro);
// console.log(filtro1);
// console.log(filtro3);
// // var nuevaPersona = {
// //     nombre: "Eliana", saldo: 300
// // }
// array2.splice(filtro3, 1);
// console.log(array2)

// var array = [200,300,400,500];
// var str = "Ramon Sosa"

// console.log(array.includes(200));
// console.log(str.includes("Ra"));

// var persona = {
//     nombre: "Ramon",
//     apellido: "Sosa",
//     edad: 46
// };
// persona.direccion = "La Cascada";
// for (var key in persona) {
//     console.log(key);
//     console.log(persona[key]);
// }

// var llaves = Object.keys(persona);
// console.log(llaves);

// Object.keys(persona)
// .map(function(e, ind){
//     console.log(e, ind);
// });

// var llaves2 = Object
// .getOwnPropertyNames(persona);
// console.log(llaves2);

function hola() {
    console.log("hola");
}

var hola2 = function(a,b,c) {
    console.log(arguments);
    if(arguments.length >= 3) {
        return console.log("solo 2 arg")
    }
    console.log("hola");
}

// hola2("hola", 2);

function Persona() {
    this.nombre = "Ramon";
}

var person1 = new Persona();


var srt = "Ramon";
var srt2 = new String("Ramon");
var int = 1;
var int2 = new Number(1);
// console.log(typeof int);
// console.log(typeof int2);
// console.log(int2 instanceof Number)
// function suma(a , b) {
//     if (typeof a != "number" 
//     || typeof b != "number") {
//         return console.log
//         ("Deber ser numeros")
//     }
//     return a + b;
// };

// console.log(suma(3, 2));

// try {
//     function hola() {
//         try {

//         } catch (e) {
//             console.log("hola -" + e);
//         }
//     }
//     throw {code: "ora-902", 
//     mensaje: "llave duplicada"};
//     console.log("hola");
// } catch (error) {
//     console.log(error);
// } 
// finally {
//     console.log("final");
// }

// BIND,, CALL, APPLY

// var persona = {
//     nombre: "Andres",
//     apellido: "Sosa",
//     nombreCompleto: function() {
//         return this.nombre + " " + 
//         this.apellido;
//     }
// };

// console.log(persona.nombreCompleto());

// var persona2 = function(arg1, arg2) {
//     console.log(this);
//     this.nombre = arg1;
//     this.apellido = arg2;
//     console.log(this.nombreCompleto());
// };

// persona2();
// var persona3 = persona2
// .bind(persona, "Ramon", "Sosa");
// persona3();
// var person4 = {
//     nombre : "Carlos",
//     apellido : "Rodriguez"
// }
// persona2.call(persona, "Ramon", "Diaz");
// persona2.apply(persona, ["Ramon", "Aguilar"]);
// console.log(persona.nombreCompleto
//     .call(person4));

// var vehiculo = {
//     ruedas: 4,
//     marca: "toyota",
//     placa: "PA7878",
//     obtenerPlaca: function() {
//         return this.placa + " "+ this.marca;
//     }
// }

// var moto = {
//     ruedas: 2,
//     marca: "Yamaha",
//     placa: "PB8989"
// };


// console.log(vehiculo.obtenerPlaca.call(moto));

// function moto(ruedas, marca) {
//     this.ruedas = ruedas;
//     this.marca = marca;
    
//     console.log(this.obtenerPlaca());
// }
// moto.bind(vehiculo, 2, "Yamaha");

// var exp = RegExp("a");
// var exp2 = /[aeiouáéíóú]{2,2}/ig;
// var str = "Hola ll Mundo";

// console.log(quijote.match(exp2))

// setInterval(function(){

// }, 1500);
// setTimeout(function(){
//     console.log("hola")
// });

// var intervalo = setInterval(function(){
//     console.log(new Date().getSeconds());
//     seconds = new Date().getSeconds();
//     if (seconds == 10) {
//         clearInterval(intervalo);
//     }
// }, 500);

// let num = 1;

// const PERSONA = {nombre: "Ramon"};
// var funciones = [];
// for(let i=0; i<=10; i++) {
//     // console.log(i);
//     funciones.push(
//         function() {
//             return function() {
//                 console.log(i);
//             }
//         }()
//     )
// }
// i = 100;
// // console.log(funciones);
// funciones.forEach(function(e){
//     e();
// });
function hola() {
    return "Hola Mundo"
}
var array = [10,30,40];
let str = "Ramon";
let str2 = "Sosa";
let num1 = 1;
let num2 = 2;
console.log(srt + "es un literal " + str2);
console.log(`${str} es un literal 
${array.reduce(function(a,b)
{ return a + b})}`)

