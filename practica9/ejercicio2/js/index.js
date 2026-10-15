let name = prompt("Enter your name: ");
let age = parseInt(prompt("Enter your age: "));

if(isNaN(parseInt(age)) || age < 0) {
    console.log("invalid entry")
}
else {
    age = parseInt(age);
    message = `Your name is ${name} and you are ${age} years old`
    age >= 18
        ? console.log(`${message}. ¡¡¡You are of legal age!!!`)
        : console.log(`${message}. ¡¡¡You are a minor!!!`);
}