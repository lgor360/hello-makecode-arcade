namespace SpriteKind {
    export const Ball = SpriteKind.create()
    export const messenge = SpriteKind.create()
}
// Chat P2 bye
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    P2.setImage(assets.image`Player 2 bye`)
    timer.after(2000, function () {
        P2.setImage(assets.image`Player 2`)
    })
})
// Chat P1 HI
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    P1.setImage(assets.image`Player 1 hi`)
    timer.after(2000, function () {
        P1.setImage(assets.image`Player 1`)
    })
})
// Chat P3 bye
controller.player4.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    P4.setImage(assets.image`Player 4 bye`)
    timer.after(2000, function () {
        P4.setImage(assets.image`Player 4`)
    })
})
// Chat P1 bye
controller.player1.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    P1.setImage(assets.image`Player 1 bye`)
    timer.after(2000, function () {
        P1.setImage(assets.image`Player 1`)
    })
})
// Chat P3 bye
controller.player3.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    P3.setImage(assets.image`Player 3 bye`)
    timer.after(2000, function () {
        P3.setImage(assets.image`Player 3`)
    })
})
function Players () {
    controller.player1.moveSprite(P1)
    controller.player2.moveSprite(P2)
    controller.player3.moveSprite(P3)
    controller.player4.moveSprite(P4)
}
// Chat P2 HI
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    P2.setImage(assets.image`Player 2 hi`)
    timer.after(2000, function () {
        P2.setImage(assets.image`Player 2`)
    })
})
// Chat P3 HI
controller.player3.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    P3.setImage(assets.image`Player 3 hi`)
    timer.after(2000, function () {
        P3.setImage(assets.image`Player 3`)
    })
})
// Chat P4 HI
controller.player4.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    P4.setImage(assets.image`Player 4 hi`)
    timer.after(2000, function () {
        P4.setImage(assets.image`Player 4`)
    })
})
function Sprites () {
    P1 = sprites.create(assets.image`Player 1`, SpriteKind.Player)
    P2 = sprites.create(assets.image`Player 2`, SpriteKind.Player)
    P3 = sprites.create(assets.image`Player 3`, SpriteKind.Player)
    P4 = sprites.create(assets.image`Player 4`, SpriteKind.Player)
}
let P3: Sprite = null
let P4: Sprite = null
let P1: Sprite = null
let P2: Sprite = null
music.play(music.createSong(assets.song`mySong`), music.PlaybackMode.LoopingInBackground)
Sprites()
tiles.setCurrentTilemap(tilemap`level`)
Players()
