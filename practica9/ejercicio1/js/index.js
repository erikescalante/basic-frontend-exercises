let firstNumber = prompt("Enter a first number: ",);
let secondNumber = prompt("Enter a second number: ");

if(isNaN(firstNumber) || isNaN(secondNumber)) {
    console.log("It's not possible to operate on the entered data");
}
else {
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);
    console.log(`Addition: ${firstNumber + secondNumber}`);
    console.log(`Subtraction: ${firstNumber - secondNumber}`);
    console.log(`Multiplication: ${firstNumber * secondNumber}`);
    if(secondNumber !== 0){
        console.log(`Division: ${firstNumber * secondNumber}`);
        console.log(`Module: ${firstNumber * secondNumber}`);    
    }
    else {
        console.log("Division undefined")
        console.log("Module undefined")
    }
}