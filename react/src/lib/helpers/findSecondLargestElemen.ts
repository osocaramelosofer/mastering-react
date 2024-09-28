// Finding the second largest element in an array in JavaScript involves sorting the array 
//in descending order and then accessing the element at index 1.
//Alternatively, you can iterate through the array to identify the second-largest element manually.

export function findSecondLargestElement(array: number[]): number | null {
    // create a set
    const uniqueElements = new Set(array)
    if(uniqueElements.size < 2) {
        console.error("It should be at least 2 elements in the array")
        return null
    }
    const uniqueSortedArray = Array.from(uniqueElements).sort((a,b) => a - b)
    return uniqueSortedArray[uniqueSortedArray.length - 2]
}
