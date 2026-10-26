const suma = (n1, n2) => (isNaN(n1) || isNaN(n2)) ? undefined : n1 + n2;

const resta = (n1, n2) => (isNaN(n1) || isNaN(n2)) ? undefined : n1 - n2;

const multiplicacion = (n1, n2) => (isNaN(n1) || isNaN(n2)) ? undefined : n1 * n2;

const division = (n1, n2) => (isNaN(n1) || isNaN(n2) || n2 === 0) ? undefined : n1 / n2;

export const calculadora = (n1, n2, operacion) => {
    if(operacion === undefined) return operacion;
    
    let resultado;
    
    switch(operacion.toLowerCase()) {
        case "suma": 
            resultado = suma(n1, n2); 
            break;
        case "resta": 
            resultado = resta(n1, n2);
            break;
        case "multiplicacion": 
            resultado = multiplicacion(n1, n2);
            break;
        case "division": 
            resultado = division(n1, n2);
            break;  
    }
    return resultado;
}