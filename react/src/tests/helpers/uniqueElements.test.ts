import {expect, test} from 'vitest'
import { uniqueElements } from '../../lib/helpers/uniqueElements' 

test('should return unique elements from an array', () => {
    const values = ["Hare", "Krishna", "Hare", "Krishna",
        "Krishna", "Krishna", "Hare", "Hare", ":-O"
      ];
    expect(uniqueElements(values)).toStrictEqual(['Hare', 'Krishna', ':-O'])
})
test('should return null because we pass an empty string as param', () => {
    expect(uniqueElements([])).toStrictEqual(null)
})
