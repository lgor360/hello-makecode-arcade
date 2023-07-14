mp.onButtonEvent(mp.MultiplayerButton.A, ControllerButtonEvent.Pressed, function (player2) {
	
})
mp.onControllerEvent(ControllerEvent.Connected, function (player2) {
	
})
music.play(music.stringPlayable("C5 B A F G A B C5 ", 268), music.PlaybackMode.LoopingInBackground)
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
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
    8 8 8 8 8 1 8 8 8 1 8 8 8 8 8 . 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
    8 8 8 1 8 8 8 8 8 8 8 1 8 8 8 . 
    8 8 8 8 1 8 8 8 8 1 1 8 8 8 8 . 
    8 8 8 8 8 1 1 1 1 1 8 8 8 8 8 . 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`Player 1`, SpriteKind.Player))
