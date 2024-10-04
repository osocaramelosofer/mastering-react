import {expect, test} from 'vitest'
import { isPalindrome } from '../../lib/helpers/isPalindrome'

test('should return true because we pass a palindrome', () => {
    expect(isPalindrome('racecar')).toBe(true)
})
test('should return false because we do not pass a palindrome', () => {
    expect(isPalindrome('hello')).toBe(false)
})