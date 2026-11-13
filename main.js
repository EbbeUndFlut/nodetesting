const drinks = {
    espresso: 150,
    coffee: 100,
    latte: 200
}

export function buyCoffee({ drink, coins, weekday, random }) {
    if (!Number.isInteger(coins)) throw new Error('Keine Dezimalzahlen erlaubt')

    if (random < 0.1) return { drink: null, change: 0, message: 'Der Automat hat Ihre Münzen gefressen' }

    let choice = drinks[drink]

    if (!choice) throw new Error('Das gibt es hier nicht')
    if (weekday === 'monday') choice = choice * 0.8
    if (coins < choice) throw new Error('Zu wenig Geld')

    return { drink, change: coins - choice, message: 'Bitte sehr' }

}