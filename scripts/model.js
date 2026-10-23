import CL_vHorario from "./view.js"; //qué flojera aplicar el MCV

var day = new Date().getDay() - 1
if (day == -1){
    day = 0
}
let view = new CL_vHorario()
let listDays = [
        view.lunes, 
        view.martes, 
        view.miercoles, 
        view.jueves, 
        view.viernes, 
        view.sabado
    ]
listDays[day].classList.remove("cel-oculto")

document.addEventListener('touchstart', (event) =>{
    listDays[day].classList.add("cel-oculto")
    const pos = event.touches[0]
    const x = pos.clientX
    if (x < window.innerWidth*0.25){
        day == 0 ? day = 5 : day --
    }else 
    if (x > window.innerWidth*0.75){
        day == 5? day = 0 : day ++
    }
    listDays[day].classList.remove("cel-oculto")
})