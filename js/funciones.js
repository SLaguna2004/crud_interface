import datos from "../data/data.json" assert { type: "json" };
export const cargarDatos=()=>{
    const basedatos=JSON.parse(localStorage.getItem('datos'));
    if(!basedatos){
        localStorage.setItem("datos",JSON.stringify(datos));
    }
}