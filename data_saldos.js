// Obtener el saldo por cada cliente
// {
//   id: 1
//   nombre: "Andres",
//   saldo: [
//     {
//       id: "hipoteca",
//       saldo: 3000
//     },
//     {
//       id: "tarjeta MM",
//       saldo: 5000
//     },
//     {
//       id: "tarjeta VISA",
//       saldo: 4000
//     }
//   ],
//   saldoTotal: //Saldo Total

// }

// Obtener el saldo total
// Obtener la suma total de solo las hipotecas

var clientes = [
  {
    id: 1,
    nombre: "Andres",
    saldo: [
      {
        id: "hipoteca",
        saldo: 3000
      },
      {
        id: "tarjeta MM",
        saldo: 5000
      },
      {
        id: "tarjeta VISA",
        saldo: 4000
      }
    ]
  },
  {
    id: 2,
    nombre: "Carlos",
    saldo: [
      {
        id: "hipoteca",
        saldo: 2350
      },
      {
        id: "tarjeta MM",
        saldo: 3428
      },
      {
        id: "tarjeta VISA",
        saldo: 12890
      }
    ]
  },
  {
    id: 3,
    nombre: "Cesar",
    saldo: [
      {
        id: "tarjeta MM",
        saldo: 2389
      },
      {
        id: "tarjeta VISA",
        saldo: 9973
      }
    ]
  },
  {
    id: 4,
    nombre: "Raul",
    saldo: [
      {
        id: "hipoteca",
        saldo: 3828
      },
      {
        id: "tarjeta MM",
        saldo: 50200
      },
      {
        id: "tarjeta VISA",
        saldo: 23000
      }
    ]
  },
  {
    id: 5,
    nombre: "Marcos",
    saldo: [
      {
        id: "hipoteca",
        saldo: 1232
      },
      {
        id: "tarjeta MM",
        saldo: 3378
      },
      {
        id: "tarjeta VISA",
        saldo: 23787
      }
    ]
  },
  {
    id: 6,
    nombre: "Lissa",
    saldo: [
      {
        id: "hipoteca",
        saldo: 12000
      },
      {
        id: "tarjeta MM",
        saldo: 1290
      },
      {
        id: "tarjeta VISA",
        saldo: 390
      }
    ]
  },
  {
    id: 7,
    nombre: "Karla",
    saldo: [
      {
        id: "hipoteca",
        saldo: 120000
      },
      {
        id: "tarjeta MM",
        saldo: 2389
      },
      {
        id: "tarjeta VISA",
        saldo: 198
      }
    ]
  },
  {
    id: 8,
    nombre: "Patty",
    saldo: [
      {
        id: "hipoteca",
        saldo: 237809
      },
      {
        id: "tarjeta MM",
        saldo: 2387
      },
      {
        id: "tarjeta VISA",
        saldo: 280
      }
    ]
  },
  {
    id: 9,
    nombre: "Vilma",
    saldo: [
      {
        id: "hipoteca",
        saldo: 145889
      },
      {
        id: "tarjeta MM",
        saldo: 2000
      },
      {
        id: "tarjeta VISA",
        saldo: 1290
      }
    ]
  },
  {
    id: 10,
    nombre: "Carolina",
    saldo: [
      {
        id: "hipoteca",
        saldo: 350000
      },
      {
        id: "tarjeta MM",
        saldo: 12659
      },
      {
        id: "tarjeta VISA",
        saldo: 1578
      }
    ]
  }
];

var resultado1 = clientes.map(function(item) {
  var sumaTotal = item.saldo // {saldo: 12000}
    .reduce(function(a, b) {
      return { saldo: a.saldo + b.saldo };
    });
  item.sumaTotal = sumaTotal.saldo;
  return item;
})
.reduce(function(a, b){
  return { sumaTotal: a.sumaTotal + b.sumaTotal }
})
.sumaTotal

// console.log(resultado1);














const resultado2 = clientes.map(item => ({
  ...item,
  sumaTotal: item.saldo.reduce((a, b) => ({ saldo: a.saldo + b.saldo })).saldo
}));

// console.log(resultado2);

// // 1
// const result1 = clientes.map(function(cliente) {
//   return cliente.saldo.reduce(function(a, b) {
//     return { saldo: a.saldo + b.saldo }
//   })
// }).reduce(function(a, b) {
//   return { saldo: a.saldo + b.saldo }
// });

// const result1_ = clientes.map(function(cliente) {
//    let saldosIndividual = cliente.saldo.reduce(function(a, b) {
//     return { saldo: a.saldo + b.saldo }
//    })
//    return saldosIndividual.saldo;
// }).reduce(function(a, b) {
//   return a + b;
// });
// // console.log(result1);
// // console.log(result1_);

// //2

// const saldoxcliente = clientes.map(function(cliente) {
//   let saldosIndividual = cliente.saldo.reduce(function(a, b) {
//    return { saldo: a.saldo + b.saldo }
//   })
//   cliente.saldoTotal = saldosIndividual.saldo;
//   return cliente;
// })

// // console.log(saldoxcliente);

// // 3

var porHipoteca = clientes.map(function(element){
    var hipoteca = element.saldo
    .find(function(el){ 
      return el.id === "hipoteca" 
    });
    // debugger;
    return hipoteca;
})
.filter(function(item){ return item })
.reduce(function(a, b) {
    return { saldo: a.saldo + b.saldo }
});

// console.log(porHipoteca)

var porHipoteca_ = clientes
.map(function(element){
    var hipoteca = element.saldo
    .find(function(el)
    { return el.id === "hipoteca" });
    return hipoteca && hipoteca.saldo 
    ? hipoteca.saldo : 0;
    // return hipoteca
})
.reduce(function(a, b) { return a + b });


console.log(porHipoteca_)
// var porHipoteca3 = [];
// clientes.forEach(function(element){
//   let preData = element.saldo.find(function(e){ return e.id === 'hipoteca' });
//   if (preData) {
//     porHipoteca3.push(preData);
//   }
// });
// var resultado = 0;
// porHipoteca3.forEach(function(e){
//   resultado+= e.saldo;
// })

// // var resultado = porHipoteca3.reduce(function(a, b) {
// //   return { saldo: a.saldo + b.saldo };
// // });

// // console.log(porHipoteca);
// // console.log(porHipoteca_);
// // console.log(resultado);
