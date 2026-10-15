function validateInputs(variables) {
    if (!Array.isArray(variables)) return;

    for(const variable of variables) 
        if(typeof variable !== "string" || variable === "") return "Required fields need to be completed.";
    
    return "Form completed. Ready to send!";
}

let firstname = "Erik";
let email = "erikescalante@email.com";
let message = "hello i'm Erik!";

console.log(validateInputs([firstname, email, message]));