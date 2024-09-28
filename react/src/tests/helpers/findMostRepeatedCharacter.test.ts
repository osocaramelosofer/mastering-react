import {expect, test} from 'vitest'
import { findMostRepeatedCharacter } from '../../lib/helpers/findMostRepeatedCharacter'

test('should return the most repeated character in a string', ()=>{
    expect(findMostRepeatedCharacter('carro')).toBe('r')
})

test('should return the most repeated character in a string', ()=>{
    expect(findMostRepeatedCharacter('dinner')).toBe('n')
})
test('should return the most repeated character in a string', ()=>{
    expect(findMostRepeatedCharacter('coffee')).toBe('f')
})