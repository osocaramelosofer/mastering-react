// Encontrar el número más grande en un array
// Enunciado: Escribe una función que tome un array de números y devuelva el número más grande.

// this way is more complex  O(n log n), 
// export function findMaxNumber(arr: number[]): number | null {
//     const sortArr = arr.sort((a,b) => a - b)
//     return sortArr[sortArr.length -1]
// }

// This is more efficient less complex O(n)
export function findMaxNumber(arr: number[]): number | null {
    if( arr.length < 1 ) return null

    let max = arr[0]
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max ){
            max = arr[i]
        }
    }
    return max
}

