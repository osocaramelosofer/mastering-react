// FizzBuzz
// Enunciado: Escribe una función que imprima números del 1 al 100, pero:
// Para múltiplos de 3 imprime "Fizz".
// Para múltiplos de 5 imprime "Buzz".
// Para múltiplos de 3 y 5 imprime "FizzBuzz".

enum Dictionary {
    fizz = 'Fizz',
    buzz = 'Buzz',
    fizzBuzz = 'FizzBuzz'    
}

export function fizzBuzz(num: number): string | null{
    const resultArr: Array<number | string> = []
    for(let i = 1; i < num +1; i ++){
        let output = ''
        
        if(i % 3 === 0) output += Dictionary.fizz 
        if(i % 5 === 0) output += Dictionary.buzz 

        resultArr.push(output || i)
    }
    const result = resultArr.join(", ") 
    return result
}