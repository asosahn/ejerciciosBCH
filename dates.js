function getDays(day, language) {
    var days = {
        1: {
            es: "Lunes",
            en: "Monday"
        },
        2: {
            es: "Martes",
            en: "Tuesday"
        },
        3: {
            es: "Miercoles",
            en: "Wednesday"
        },
        4: {
            es: "Jueves",
            en: "Thursday"
        },
        5: {
            es: "Viernes",
            en: "Friday"
        },
        
        6: {
            es: "Sabado",
            en: "Saturday"
        },
        
        0: {
            es: "Domingo",
            en: "Sunday"
        },
        
    }

     return days[day][language];
     
}

console.log(getDays(6, "es"));
