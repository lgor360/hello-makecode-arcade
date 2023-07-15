namespace SpriteKind {
    export const Ball = SpriteKind.create()
}
function Players () {
    controller.player1.moveSprite(P1)
    controller.player2.moveSprite(P2)
    controller.player3.moveSprite(P3)
    controller.player4.moveSprite(P4)
}
function Sprites () {
    P1 = sprites.create(assets.image`Player 1`, SpriteKind.Player)
    P2 = sprites.create(assets.image`Player 2`, SpriteKind.Player)
    P3 = sprites.create(assets.image`Player 3`, SpriteKind.Player)
    P4 = sprites.create(assets.image`Player 4`, SpriteKind.Player)
}
let P4: Sprite = null
let P3: Sprite = null
let P2: Sprite = null
let P1: Sprite = null
music.play(music.stringPlayable("C5 A B F D A G B ", 101), music.PlaybackMode.LoopingInBackground)
Sprites()
scene.setBackgroundImage(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `)
Players()
