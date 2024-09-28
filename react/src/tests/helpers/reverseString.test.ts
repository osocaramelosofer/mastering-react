import { expect, test } from 'vitest'
import { reverseString } from '../../lib/helpers/reverseString'

test('should return a string', () => {
    expect(reverseString('hello')).toBe('olleh')
})