// Obtener el saldo por cada cliente
// {
//   id: 1
//   nombre: "Andres",
//   saldo: [3000, 5000, 4000],
//   saldoTotal: //Saldo Total
// }

// Obtener el saldo total

var cliente2 = [
  { id: 1, nombre: "Andres", saldo: [3000, 5000, 4000] },
  { id: 2, nombre: "Carlos", saldo: [2350, 3428, 12890] },
  { id: 3, nombre: "Cesar", saldo: [2389, 9973] },
  { id: 4, nombre: "Raul", saldo: [3828, 50200, 23000] },
  { id: 5, nombre: "Marcos", saldo: [1232, 3378, 23787] },
  { id: 6, nombre: "Lissa", saldo: [12000, 1290, 390] },
  { id: 7, nombre: "Karla", saldo: [120000, 2389, 198] },
  { id: 8, nombre: "Patty", saldo: [237809, 2387, 280] },
  { id: 9, nombre: "Vilma", saldo: [145889, 2000, 1290] },
  { id: 10, nombre: "Carolina", saldo: [350000, 12659, 1578] }
];

var resultado = cliente2.map(function(elem){
  elem.sumaTotal = elem.saldo
  .reduce(function(a,b){
    return a + b;
  });
  return elem;
}).reduce(function(a,b){
  return { sumaTotal: a.sumaTotal + b.sumaTotal };
});

// console.log(resultado.sumaTotal);


console.log(resultado); 

// var persona = {
//   nombre: "Ramon",
//   apellido: "Sosa"
// };

// persona.edad = 35;

// persona.nombreCompleto = function() {
//   return this.nombre;
// }

// console.log(persona);













// var porCliente = cliente2.map(function(elem) { 
//    let saldoTotal = elem.saldo.reduce(function(a, b) {
//      return a + b;
//    })
//    elem.saldoTotal = saldoTotal;
//    return elem;
// })

// console.log(porCliente)

// 2
// var result1 = cliente2
//   .map(function(item) {
//     return item.saldo.reduce(function(a, b) {
//       return a + b;
//     });
//   })
//   .reduce(function(a, b) {
//     return a + b;
//   });

//   var result2 = cliente2
//   .map(function(item) {
//     return item.saldo;
//   }).map(function(elem){
//     return elem.reduce(function(a, b) { 
//       return a + b;
//     });
//   }).reduce(function(a, b) {
//     return a + b
//   });

// console.log(result1);
// console.log(result2);
