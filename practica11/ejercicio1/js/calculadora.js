export const suma = (n1, n2) => (isNaN(n1) || isNaN(n2)) ? undefined : n1 + n2;

export const resta = (n1, n2) => (isNaN(n1) || isNaN(n2)) ? undefined : n1 - n2;

export const multiplicacion = (n1, n2) => (isNaN(n1) || isNaN(n2)) ? undefined : n1 * n2;

export const division = (n1, n2) => (isNaN(n1) || isNaN(n2) || n2 === 0) ? undefined : n1 / n2;