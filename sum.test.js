import { test,expect } from 'vitest'
import { add } from './sum'

test('1 + 2 expected be 3', () => {
    expect(add(1, 2)).toBe(3)
})