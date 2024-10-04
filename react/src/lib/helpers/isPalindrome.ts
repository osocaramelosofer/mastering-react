// Determinar si una palabra es un palíndromo
// Enunciado: Escribe una función que determine si una palabra es un palíndromo (se lee igual al derecho que al revés).

export function isPalindrome(str: string): boolean{
    const splitedStr = str.split("")
    const reverseStr = splitedStr.reverse().join("")
    return str === reverseStr
}