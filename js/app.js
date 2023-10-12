import datos from "../data/data.json" assert { type: "json" };
import { Gift } from "./clases.js";

const cuerpoTabla = document.querySelector("#cuerpo-tabla");
const myModal = new bootstrap.Modal(document.getElementById("modalGift"));

let idGiftUpdate = null;

window.mostrarModal = (id) => {
    console.log(id);
    idGiftUpdate = id;
    let index = datos.findIndex((item) => item.id == idGiftUpdate);

    document.querySelector("#giftModal").value = datos[index].gift;
    document.querySelector("#tipoModal").value = datos[index].tipo;
    document.querySelector("#tiempoModal").value = datos[index].tiempo;
    document.querySelector("#precioModal").value = datos[index].precio;
    document.querySelector("#imagenModal").value = datos[index].imagen;

    myModal.show();
};

const giftUpdate = (e) => {
    e.preventDefault();
    let index = datos.findIndex((item) => item.id == idGiftUpdate);
    
}