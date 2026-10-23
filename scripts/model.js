import CL_vHorario from "./view.js";

const day = new Date().getDay() - 1
let view = new CL_vHorario()
let listDays = [
        view.lunes, 
        view.martes, 
        view.miercoles, 
        view.jueves, 
        view.viernes, 
        view.sabado
    ]

if (day == -1){
    listDays[0].classList.remove("cel-oculto")
} else {
    listDays[day].classList.remove("cel-oculto")
}
