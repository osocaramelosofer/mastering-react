// Escribe una función que invierta una cadena.

export function reverseString(str: string): string | null {
    if(!str) {
        console.error('Missing string param')
        return null
    }
    const splitString = str.split("")
    const reverseArray = splitString.reverse()
    const joinArray = reverseArray.join("") 
    return joinArray
}