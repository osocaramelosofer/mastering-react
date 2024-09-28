import { expect, test } from 'vitest'
import { findSecondLargestElement } from '../../lib/helpers/findSecondLargestElemen'

test('should return the second largest element in an array', ()=>{
    const numbers = [12, 35, 35, 2, 10, 10, 34, 12];
    expect(findSecondLargestElement(numbers)).toBe(34)
})
test('should return null because there is no second largest element', ()=>{
    const numbers = [10,10,10];
    expect(findSecondLargestElement(numbers)).toBe(null)
})
test('should return null because there is only one element', ()=>{
    const numbers = [2];
    expect(findSecondLargestElement(numbers)).toBe(null)
})