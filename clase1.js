
    // console.log("hola mundo");
    // console.warn("warning");
    // console.error("Error");
    // var a = 1;
    // var b = "hola mundo";
    // var c = true;
    // var d = undefined;
    // var e = null;
    // console.log(a);
    // console.log(b);
    // console.log(c);
    // console.log(d);
    // console.log(e);
    // var persona = 
    // { 
    //     nombre: "Andres", 
    //     apellidos: {
    //         primerApellido: "Sosa",
    //         segundoApellido: "Diaz",
    //         direcciones: {
    //             direccion1: "Direccion"
    //         }
    //     }
    // };

    // console.log(persona.nombre, persona.apellido);
    // console.log(persona.apellidos.direcciones.direccion1);
    // console.log(perso,na['apellidos']['direcciones']['direccion1']);
    // var array = ["nombre", 
    // 1, 
    // true, 
    // { nombre: "Andres" },
    // new Date()];
    // var array2 = [1,5,8,9,10];
    // console.log(array2.sort(
    //     function(a, b) {
    //         console.log(a, b);
    //         return a - b
    //     }
    // ));
    // // console.log(array2.splice(0,2));
    // var array3 = array2.map(function(i){
    //     console.log(i);
    //     return i;
    // });
    // array2.forEach(function(i){
    //     console.log(i)
    // })

    // console.log(array3);

    // var personas = [
    //     {
    //         nombre: "Ramon",
    //         saldos: [
    //             {
    //                 tipo: "prestamos",
    //                 saldo: 30000
    //             },
    //             {
    //                 tipo: "seguros",
    //                 saldo: 4000
    //             }
    //         ]
    //     },
    //     {
    //         nombre: "Edgardo"
    //     },
    //     {
    //         nombre: "Andres"
    //     }
    // ]

    // var persona = {
    //     nombre: "Ramon",
    //     direcciones: ["direccion 1", "direccion2"],
    //     alergias: ['fresa', 'piña'],
    //     apellidos: {
    //         primerApellido: "Sosa",
    //         segundoApellido: "Diaz"
    //     },
    //     fecha: new Date(),
    //     edad: 35
    // }

    // console.log(persona.apellidos.primerApellido);

    // var fecha = new Date(2019, 7, 15, 13);
    // var fecha2 = new Date();
    // var diferencia = fecha2.getTime() - fecha.getTime();
    // console.log(fecha2.getTime());
    // console.log(new Date().getDate())

    // var nombre1 = new String("AndresDIAZ Sosa");
    // var nombre = "AndresDIAZ Sosa";
    // console.log(nombre.indexOf("e"));
    // console.log(nombre.substr(0,3));
    // console.log(nombre.toUpperCase());
    // console.log(nombre.toLowerCase());
    // console.log(nombre.split(" "));
    // console.log(nombre.lastIndexOf("s"));
    // console.log(nombre.substr(0, nombre.indexOf(" ")));
    // console.log(nombre.split(" "));
    // console.log(nombre.split(" ")[1]);
    // console.log(nombre === nombre1);
    // console.log(Math.random(Math.random() * (100 - 20 + 1) + 2));

//    var a = 1;
//    var b = a;
//    b = 2;
//    var objeto1 = {
//        nombre: "Andres",
//        apellido: "Sosa"
//    };

//    var objecto2 = Object.assign({}, objeto1);
// //    var objecto2 = objeto1;
// //    var objecto2 = {...objecto1};
//    objecto2.nombre = "Ramon";
//    console.log(objeto1);
//    console.log(objecto2);

//    var array = [ "Andres", "Sosa" ];
// //    var array2 = array;
//    var array2 = array.slice();
//    array2[0] = "Ramon";
//    console.log(array2);
//    console.log(array);

//    var array3 = [
//        {
//            nombre: "Andres",
//            apellido: "Sosa"
//        }
//    ];

// //    var array4 = JSON.parse(JSON.stringify(array3));
//    var array4 = array3.map(function(item){
//        return Object.assign({}, item);
//    })
//    array4[0].nombre = "Ramon";

//    console.log(array3)
//    console.log(array4)
// class Persona {
//     constructor() {
//         this.nombre = "Ramon";
//         this.apellido = "Sosa";
//     }
//     nombreCompleto() {
//         return this.nombre + " " + this.apellido;
//         // return `${this.nombre} ${this.apellido}`;
//     }
// }
// function Persona() {
//     this.nombre = "Ramon";
//     this.apellido = "Sosa";
//     this.nombreCompleto = function() {
//         return this.nombre + " " + this.apellido
//     } 
// }

// // Persona.prototype.nombreCompleto = function(){
// //     return this.nombre + " " + this.apellido;
// // }

// Date.prototype.traerAnio = function() {
//     return this.getFullYear();
// }

// console.log(new Date().traerAnio())


// var person1 = new Persona();
// person1.nombre = "Andres";

// var person2 = new Persona();

// console.log(person1);
// console.log(person2.nombreCompleto());

// var a = true;
// var b = "1";

// if (a === b) {
    //     console.log("igual");
    // } else if (b != a) {
        //     console.log("no es igual");
        // } else {
            //     console.log("anidado")
            // }
                       
// for (var i=0; i<=100; i++) {
//   if(i === 90) {
//       console.log('break')
//       break;
//   }
//   console.log(i);
// }
// var b = 2;
// switch(b) {
//     case 1:
//         console.log("entro");
//         break;
//     case 2:
//         console.log("entro al 2");
//         break;
//     default:
//         console.log("default"); 
// } 
// var i = 0;
// while (i < 10) {
//     console.log(i);
//     // i = i + 1;
//     i++
// }

// var f = 0;
// do {
//     console.log(f)
//     f++
// }
// while(f < 10);

// var a = 2;
// var b = a == 1 ? a : 5;
// console.log(b)

// console.log(new Date().getDay())

// console.log(new Date(2019, 7, 18).getDay())







