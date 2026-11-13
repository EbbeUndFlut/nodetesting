import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { buyCoffee } from './main.js'

describe('Ich kaufe Kaffee', () => {
    it('Espresso am Dienstag', () => {
        const drink = 'espresso'
        const coins = 300
        const weekday = 'tuesday'
        const random = 1

        const result = buyCoffee({ drink, coins, weekday, random })

        assert.equal(result.change, 150)
    })
    it('Espresso am Dienstag und passend', () => {
        const drink = 'espresso'
        const coins = 150
        const weekday = 'tuesday'
        const random = 1

        const result = buyCoffee({ drink, coins, weekday, random })

        assert.equal(result.change, 0)
    })
    it('Espresso am Montag', () => {
        const drink = 'espresso'
        const coins = 300
        const weekday = 'monday'
        const random = 1

        const result = buyCoffee({ drink, coins, weekday, random })

        assert.equal(result.change, 180)
    })
    it('Falsche Auswahl', () => {
        const drink = 'pizza'
        const coins = 300
        const weekday = 'tuesday'
        const random = 1

        assert.throws(() => buyCoffee({ drink, coins, weekday, random }), { message: 'Das gibt es hier nicht' })
    })
    it('Zu wenig Geld', () => {
        const drink = 'espresso'
        const coins = 50
        const weekday = 'tuesday'
        const random = 1

        assert.throws(() => buyCoffee({ drink, coins, weekday, random }), { message: 'Zu wenig Geld' })
    })
    it('Es sollen keine Kommazahlen erlaubt sein, wir nutzen nur cents :D ', () => {
        const drink = 'espresso'
        const coins = 1.50
        const weekday = 'tuesday'
        const random = 1

        assert.throws(() => buyCoffee({ drink, coins, weekday, random }), { message: 'Keine Dezimalzahlen erlaubt' })
    })
})
