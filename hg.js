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




class Producto {
  constructor(name, sku, price, inventory) {
    this.name = name;
    this.sku = sku;
    this.price = price;
    this.inventory = inventory;
  }
}

const productos = [];

productos.push(new Producto("Nintendo Switch", "000001", 5999.99, 50));
productos.push(new Producto("Playstation 5", "000002", 15999.99, 5));
productos.push(new Producto("Amiibo Zelda & Loftwing", "000003", 899.99, 50));
productos.push(new Producto("Amiibo Minecraft", "000004", 899.99, 50));
productos.push(new Producto("Figma Princesa Zelda Twillight Princess ","000005",3999.99,10)
);

class Carrito {
    constructor(sku, cantidad, precio) {
        this.sku = sku;
        this.cantidad = cantidad;
        this.precio = precio;
    }
}

let img,i = 0,carrito = [],total = 0,articulos;

/*for (let producto of productos) {
    tarjeta[i].getElementsByTagName("h3")[0].innerText = producto.name;
    tarjeta[i].getElementsByClassName("precio")[0].innerText =
        "$" + producto.price;
    tarjeta[i].getElementsByClassName("cantidad")[0].innerText =
        "Disponible(s): " + producto.inventory;
    img = "./assets/" + producto.sku + ".jpg";
    tarjeta[i].getElementsByTagName("img")[0].src = img;
    i++;
    console.log(tarjeta[i]);
    carrito.push(new Carrito(producto.sku, 0, 0.0));
}*/

function agregarAlCarrito(e) {
  console.log("Evento Agregado");
  console.log(e.target);
}

let btn_compra = document.getElementsByClassName("botonCompra");

for (let boton of btn_compra) {
  boton.addEventListener("click", agregarAlCarrito);
}
