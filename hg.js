let nuevoBoton = document.createElement("button");
nuevoBoton.innerText = "Agregar";
nuevoBoton.className = "botonCompra btn btn-primary";
nuevoBoton.type="button";

let tarjetas = document.getElementsByClassName("tarjeta__producto");
numeroTarjetas = tarjetas.length;
for (let tarjeta of tarjetas){
    tarjeta.appendChild(nuevoBoton);
    tarjeta.innerHTML = tarjeta.innerHTML;
}

tarjetas = document.getElementsByClassName("tarjeta");
numeroTarjetas = tarjetas.length;
for (let tarjeta of tarjetas){
    tarjeta.appendChild(nuevoBoton);
    tarjeta.innerHTML = tarjeta.innerHTML;
}

let img,i = 0,carrito = [],total = 0,articulos;


function agregarAlCarrito(e) {
  console.log("Evento Agregado");
  console.log(e.target);
}

let btn_compra = document.getElementsByClassName("botonCompra");

for (let boton of btn_compra) {
  boton.addEventListener("click", agregarAlCarrito);
}
