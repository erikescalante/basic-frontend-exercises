const array = ["laptop","cell phone","headphones","mouse","monitor"];
let counter = 0;

for(const item of array){
    alert(item);
    counter++;
}
console.log("Product list displayed correctly.");
console.log(`Counted items: ${counter}`);