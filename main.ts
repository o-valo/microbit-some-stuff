let t1 = 0
let tx = 0
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    t1 = input.temperature()
    tx = 30
    if (t1 <= tx) {
        basic.showIcon(IconNames.StickFigure)
        basic.showNumber(t1)
    } else {
        basic.showIcon(IconNames.Heart)
        basic.showNumber(t1)
    }
})