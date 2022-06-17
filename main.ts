let t1 = 0
let tx = 0
basic.forever(function () {
    radio.setGroup(1)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    t1 = input.temperature()
    tx = 20
    if (t1 <= tx) {
        basic.showIcon(IconNames.StickFigure)
        basic.showNumber(t1)
        radio.sendString("" + (t1))
    } else {
        basic.showIcon(IconNames.Heart)
        basic.showNumber(t1)
        radio.sendString("" + (t1))
    }
})
