// Cree una función unique(arr) que debería devolver un array con elementos únicos de arr.
export function uniqueElements(arr: string[]): string[] | null {
    if(arr.length < 1) {
        console.error('The array cannot be empty')
        return null
    }
    const uniqueElements = new Set(arr)
    const uniqueElementsArr = Array.from(uniqueElements)
    return uniqueElementsArr
}
