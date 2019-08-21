const work = [
    {
        nombre: "Andres",
        genero: "m",
        edad: 35,
        conocimientos: ["js","coldfusion", "c#", "Angular", "React", "nodejs"]
    },
    {
        nombre: "Alejandra",
        genero: "f",
        edad: 37,
        conocimientos: ["js","VB", "PHP", "Angular", "ObjectiveC"]
    },
    {
        nombre: "Marlon",
        genero: "m",
        edad: 27,
        conocimientos: ["js","VueJS", "VB", "Angular", "React"]
    },
    {
        nombre: "Michelle",
        genero: "f",
        edad: 35,
        conocimientos: ["python","Ruby", "PHP", "Ember", "React"]
    },
    {
        nombre: "Santiago",
        genero: "m",
        edad: 23,
        conocimientos: ["python","Angular", "PHP", "Ember"]
    },
    {
        nombre: "Carolina",
        genero: "f",
        edad: 30,
        conocimientos: ["UIX", "React"]
    },
];

var resultado1 = work.filter(function(item){
    return item.edad > 30;
});

var resultado2 = work.filter(function(elem){
    return elem.conocimientos.includes('Angular');
});

var resultado3 = work.filter(function(elem){
    return elem.edad < 30 &&
    elem.genero == 'm' && 
    elem.conocimientos.includes('React');
});
var resultado4 = work.filter(function(elem){
    return elem.edad > 30 &&
    elem.genero == 'f' && 
    elem.conocimientos.includes('Angular');
});

// console.log(resultado1);
// console.log(resultado2);
console.log(resultado4);





















const mayores = work.filter(function(x){ return x.edad > 30});
const mayores_angular = work.filter(function(x){ return x.edad > 30 && x.conocimientos.includes("Angular") });
const mujeres_angular = work.filter(function(x){ return x.edad > 30 && x.conocimientos.includes("Angular") && x.genero === 'f' });
const menores_react = work.filter(function(x){ return x.edad < 30 && x.conocimientos.includes("React") && x.genero === 'm' });
const conocimientos = work.filter(function(item){
    return item.conocimientos.includes("Angular");
})