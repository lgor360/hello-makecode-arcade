@namespace
class SpriteKind:
    Ball = SpriteKind.create()
    messenge = SpriteKind.create()
# Chat P2 bye

def on_player2_button_b_pressed():
    P2.set_image(assets.image("""
        Player 2 bye
    """))
    
    def on_after():
        P2.set_image(assets.image("""
            Player 2
        """))
    timer.after(2000, on_after)
    
controller.player2.on_button_event(ControllerButton.B,
    ControllerButtonEvent.PRESSED,
    on_player2_button_b_pressed)

# Chat P1 HI

def on_player1_button_a_pressed():
    P1.set_image(assets.image("""
        Player 1 hi
    """))
    
    def on_after2():
        P1.set_image(assets.image("""
            Player 1
        """))
    timer.after(2000, on_after2)
    
controller.player1.on_button_event(ControllerButton.A,
    ControllerButtonEvent.PRESSED,
    on_player1_button_a_pressed)

# Chat P3 bye

def on_player4_button_b_pressed():
    P4.set_image(assets.image("""
        Player 4 bye
    """))
    
    def on_after3():
        P4.set_image(assets.image("""
            Player 4
        """))
    timer.after(2000, on_after3)
    
controller.player4.on_button_event(ControllerButton.B,
    ControllerButtonEvent.PRESSED,
    on_player4_button_b_pressed)

# Chat P1 bye

def on_player1_button_b_pressed():
    P1.set_image(assets.image("""
        Player 1 bye
    """))
    
    def on_after4():
        P1.set_image(assets.image("""
            Player 1
        """))
    timer.after(2000, on_after4)
    
controller.player1.on_button_event(ControllerButton.B,
    ControllerButtonEvent.PRESSED,
    on_player1_button_b_pressed)

# Chat P3 bye

def on_player3_button_b_pressed():
    P3.set_image(assets.image("""
        Player 3 bye
    """))
    
    def on_after5():
        P3.set_image(assets.image("""
            Player 3
        """))
    timer.after(2000, on_after5)
    
controller.player3.on_button_event(ControllerButton.B,
    ControllerButtonEvent.PRESSED,
    on_player3_button_b_pressed)

def Players():
    controller.player1.move_sprite(P1)
    controller.player2.move_sprite(P2)
    controller.player3.move_sprite(P3)
    controller.player4.move_sprite(P4)
# Chat P2 HI

def on_player2_button_a_pressed():
    P2.set_image(assets.image("""
        Player 2 hi
    """))
    
    def on_after6():
        P2.set_image(assets.image("""
            Player 2
        """))
    timer.after(2000, on_after6)
    
controller.player2.on_button_event(ControllerButton.A,
    ControllerButtonEvent.PRESSED,
    on_player2_button_a_pressed)

# Chat P3 HI

def on_player3_button_a_pressed():
    P3.set_image(assets.image("""
        Player 3 hi
    """))
    
    def on_after7():
        P3.set_image(assets.image("""
            Player 3
        """))
    timer.after(2000, on_after7)
    
controller.player3.on_button_event(ControllerButton.A,
    ControllerButtonEvent.PRESSED,
    on_player3_button_a_pressed)

# Chat P4 HI

def on_player4_button_a_pressed():
    P4.set_image(assets.image("""
        Player 4 hi
    """))
    
    def on_after8():
        P4.set_image(assets.image("""
            Player 4
        """))
    timer.after(2000, on_after8)
    
controller.player4.on_button_event(ControllerButton.A,
    ControllerButtonEvent.PRESSED,
    on_player4_button_a_pressed)

def Sprites():
    global P1, P2, P3, P4
    P1 = sprites.create(assets.image("""
        Player 1
    """), SpriteKind.player)
    P2 = sprites.create(assets.image("""
        Player 2
    """), SpriteKind.player)
    P3 = sprites.create(assets.image("""
        Player 3
    """), SpriteKind.player)
    P4 = sprites.create(assets.image("""
        Player 4
    """), SpriteKind.player)
P3: Sprite = None
P4: Sprite = None
P1: Sprite = None
P2: Sprite = None
music.play(music.string_playable("B A G A G F A C5 ", 235),
    music.PlaybackMode.LOOPING_IN_BACKGROUND)
Sprites()
tiles.set_current_tilemap(tilemap("""
    level
"""))
Players()