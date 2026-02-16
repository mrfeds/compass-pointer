let degrees = 0
input.onButtonPressed(Button.B, function () {
    input.calibrateCompass()
})
basic.forever(function () {
    degrees = input.compassHeading()
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(degrees)
    } else {
        if (degrees < 45) {
            basic.showLeds(`
                . . # . .
                . # . # .
                # . . . #
                . . . . .
                . . . . .
                `)
        } else if (degrees < 90) {
            basic.showLeds(`
                # # # # .
                # . . . .
                # . . . .
                # . . . .
                . . . . .
                `)
        } else if (degrees < 135) {
            basic.showLeds(`
                . . # . .
                . # . . .
                # . . . .
                . # . . .
                . . # . .
                `)
        } else if (degrees < 180) {
            basic.showLeds(`
                . . . . .
                # . . . .
                # . . . .
                # . . . .
                # # # # .
                `)
        } else if (degrees < 225) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # . . . #
                . # . # .
                . . # . .
                `)
        } else if (degrees < 270) {
            basic.showLeds(`
                . . . . .
                . . . . #
                . . . . #
                . . . . #
                . # # # #
                `)
        } else if (degrees < 315) {
            basic.showLeds(`
                . . # . .
                . . . # .
                . . . . #
                . . . # .
                . . # . .
                `)
        } else {
            basic.showLeds(`
                . # # # #
                . . . . #
                . . . . #
                . . . . #
                . . . . .
                `)
        }
    }
})
