t1 = 0
tx = 0

def on_forever():
    global t1, tx
    basic.show_leds("""
        . . . . .
                . . . . .
                # # # # #
                . . . . .
                . . . . .
    """)
    t1 = input.temperature()
    tx = 30
    if t1 <= tx:
        basic.show_icon(IconNames.STICK_FIGURE)
        basic.show_number(t1)
    else:
        basic.show_icon(IconNames.HEART)
        basic.show_number(t1)
basic.forever(on_forever)
