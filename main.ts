namespace SpriteKind {
    export const Ball = SpriteKind.create()
    export const messenge = SpriteKind.create()
}
// Chat P2 bye
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    P2.sayText("Good bye! ", 2000, false)
})
// Chat P1 Hi! 
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    P1.sayText("Hello!", 2000, false)
})
// Chat P3 bye
controller.player4.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    P4.sayText("Good bye! ", 2000, false)
})
// Chat P1 bye
controller.player1.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    P1.sayText("Good bye! ", 2000, false)
})
// Chat P3 bye
controller.player3.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    P3.sayText("Good bye! ", 2000, false)
})
function Players () {
    controller.player1.moveSprite(P1)
    controller.player2.moveSprite(P2)
    controller.player3.moveSprite(P3)
    controller.player4.moveSprite(P4)
}
// Chat P2 HI
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    P2.sayText("Hi!", 2000, false)
})
// Chat P3 HI
controller.player3.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    P3.sayText("Hi! ", 2000, false)
})
// Chat P4 HI
controller.player4.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    P4.sayText("Hello!", 2000, false)
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
music.play(music.stringPlayable("B A G A G F A C5 ", 235), music.PlaybackMode.LoopingInBackground)
Sprites()
tiles.setCurrentTilemap(tilemap`level`)
Players()
