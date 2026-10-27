import { generarProductos } from "./productos.js";

let catalogo = generarProductos();

console.log("catálogo original:");
for(const {id, name, description, price} of catalogo) {
    console.log(`id: ${id}, nombre: ${name}, precio: ${price}`)
}

let nuevoProducto = {id: 6, name: "cellphone", description: "a smart mobile phone", price: 7800};
let catalogoActualizado = [...catalogo, nuevoProducto];

console.log("\ncatálogo actualizado:");
for(const {id, name, description, price} of catalogoActualizado) {
    console.log(`id: ${id}, nombre: ${name}, precio: ${price}`)
}
