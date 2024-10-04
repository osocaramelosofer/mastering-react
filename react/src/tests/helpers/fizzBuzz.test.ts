import {expect, test} from 'vitest'
import { fizzBuzz } from '../../lib/helpers/fizzBuzz'

test('should return empty string for 0', () => {
    expect(fizzBuzz(0)).toBe('');
});

test('should return correct sequence for 1', () => {
    expect(fizzBuzz(1)).toBe('1');
});

test('should return correct sequence for multiples of 3', () => {
    expect(fizzBuzz(3)).toBe('1, 2, Fizz');
});

test('should return correct sequence for multiples of 5', () => {
    expect(fizzBuzz(5)).toBe('1, 2, Fizz, 4, Buzz');
});

test('should return correct fizzBuzz sequence for 15', () => {
    expect(fizzBuzz(15)).toBe('1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz');
});