// Escribe una función que encuentre el carácter que más veces se repite en una cadena.
interface Word {
    [key:string]: number
}

export function findMostRepeatedCharacter(str: string): string | null {
    const words: Word = {}
    for(let i = 0; i < str.length; i ++){
        if(words[str[i]]){
            words[str[i]] ++
        }
        if(!words[str[i]]){
            words[str[i]] = 1
        }
    }

    let mostFrecuentChar = ''
    let maxValue = 0
    for(const char in words){
        if(words[char] > maxValue ){
            mostFrecuentChar = char
            maxValue = words[char]
        }
    }
    return mostFrecuentChar
}