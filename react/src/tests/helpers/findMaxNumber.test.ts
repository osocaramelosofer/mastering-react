import {expect, test} from 'vitest'
import { findMaxNumber } from '../../lib/helpers/findMaxNumber'

test('should return true', () => {
    expect(findMaxNumber([1, -2, 3, 0])).toBe(3)
})

test('should return null because it is an empty array', () => {
    expect(findMaxNumber([])).toBe(null)
})

test('should return true', () => {
    expect(findMaxNumber([10, 5, 20, 8])).toBe(20)
})