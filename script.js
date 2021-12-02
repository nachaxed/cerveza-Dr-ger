// Ejecutar funcion en el evento click
document.getElementById("btn_open").addEventListener("click",open_close_menu);

//Declaramos Variables
let btn_open = document.getElementById("btn_open");
let side_menu = document.getElementById("menu_side");
let body = document.getElementById("body");

//Evento para mostrar y ocultar menu
function open_close_menu(){
    body.classList.toggle("body_move");
    side_menu.classList.toggle("menu__side_move");
}

//Si el ancho de la pag es menor a 760px, ocultar el menu al recargar pag
if(window.innerWidth < 760){

    body.classList.add("body_move");
    body.classList.add("menu__side_move");

}
//Menu responsive
window.addEventListener("resize",() => {
    if(window.innerWidth > 760){
        body.classList.remove("body_move");
        side_menu.classList.remove("menu__side_move"); 
    }
    if(window.innerWidth < 760){
        body.classList.add("body_move");
        side_menu.classList.add("menu__side_move");
    }
});
