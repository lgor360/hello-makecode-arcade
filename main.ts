namespace SpriteKind {
    export const ball = SpriteKind.create()
}
controller.player3.onEvent(ControllerEvent.Connected, function () {
    p3 = sprites.create(assets.image`myImage1`, SpriteKind.Player)
    controller.player3.moveSprite(p3)
})
controller.player3.onEvent(ControllerEvent.Disconnected, function () {
    sprites.destroy(p3)
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    p2.sayText("Hi!", 1500, false)
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    p1.sayText("Hi!", 1500, false)
})
controller.player2.onEvent(ControllerEvent.Connected, function () {
    p2 = sprites.create(assets.image`myImage0`, SpriteKind.Player)
    controller.player2.moveSprite(p2)
})
controller.player4.onEvent(ControllerEvent.Disconnected, function () {
    sprites.destroy(p4)
})
controller.player1.onEvent(ControllerEvent.Connected, function () {
    p1 = sprites.create(assets.image`myImage`, SpriteKind.Player)
    controller.player1.moveSprite(p1)
})
controller.player1.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    p1.sayText("Good Bye!", 1500, false)
})
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    p2.sayText("Good Bye!", 1500, false)
})
controller.player4.onEvent(ControllerEvent.Connected, function () {
    p4 = sprites.create(assets.image`myImage2`, SpriteKind.Player)
    controller.player4.moveSprite(p4)
})
controller.player2.onEvent(ControllerEvent.Disconnected, function () {
    sprites.destroy(p2)
})
controller.player3.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    p3.sayText("Good Bye!", 1500, false)
})
controller.player4.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    p4.sayText("Good Bye!", 1500, false)
})
controller.player3.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    p3.sayText("Hi!", 1500, false)
})
controller.player4.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    p4.sayText("Hi!", 1500, false)
})
controller.player1.onEvent(ControllerEvent.Disconnected, function () {
    sprites.destroy(p1)
})
let p4: Sprite = null
let p1: Sprite = null
let p2: Sprite = null
let p3: Sprite = null
music.play(music.stringPlayable("C5 B G A B G F G ", 202), music.PlaybackMode.LoopingInBackground)
tiles.setCurrentTilemap(tilemap`уровень`)
