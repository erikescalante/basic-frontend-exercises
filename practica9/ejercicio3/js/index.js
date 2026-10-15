let product1 = {name:"Cup", price:2000, stock:10};
let product2 = {name:"Thermos", price:19500, stock:5};
let product3 = {name:"Mate", price:5400, stock:7};

console.log(`name of product 1: ${product1.name}`);
console.log(`price of product 1: ${product2.price}`);

const catalog = [product1, product2, product3];
console.log(catalog);
console.log(catalog[1].name);