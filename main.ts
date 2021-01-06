input.onButtonPressed(Button.A, function () {
    sprite.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    sprite.change(LedSpriteProperty.Y, 1)
})
let leegObstakelY = 0
let stappen = 0
let sprite: game.LedSprite = null
sprite = game.createSprite(0, 2)
sprite.set(LedSpriteProperty.Blink, 300)
let obstakels: game.LedSprite[] = []
basic.forever(function () {
    while (obstakels.length > 0 && obstakels[0].get(LedSpriteProperty.X) == 0) {
        obstakels.removeAt(0).delete()
    }
    for (let obstakel of obstakels) {
        obstakel.change(LedSpriteProperty.X, -1)
    }
    if (stappen % 3 == 0) {
        leegObstakelY = randint(0, 4)
        for (let index = 0; index <= 4; index++) {
            if (index != leegObstakelY) {
                obstakels.push(game.createSprite(4, index))
            }
        }
    }
    for (let obstakel of obstakels) {
        if (obstakel.get(LedSpriteProperty.X) == sprite.get(LedSpriteProperty.X) && obstakel.get(LedSpriteProperty.Y) == sprite.get(LedSpriteProperty.Y)) {
            game.gameOver()
        }
    }
    stappen += 1
    basic.pause(1000)
})
