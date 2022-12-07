function 右转 () {
    wuKong.setAllMotor(-80, 0)
}
function 左转 () {
    wuKong.setAllMotor(0, -80)
}
function 前进 () {
    wuKong.setAllMotor(-100, -100)
}
basic.showIcon(IconNames.House)
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 0) {
        前进()
        basic.showLeds(`
            . . # . .
            . # # # .
            . . # . .
            . . # . .
            . . # . .
            `)
        music.playTone(988, music.beat(BeatFraction.Double))
    } else if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 1) {
        右转()
        basic.showLeds(`
            . . . . .
            . . . # .
            # # # # #
            . . . # .
            . . . . .
            `)
        music.playTone(659, music.beat(BeatFraction.Double))
    } else if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P2) == 0) {
        左转()
        basic.showLeds(`
            . . . . .
            . # . . .
            # # # # #
            . # . . .
            . . . . .
            `)
        music.playTone(165, music.beat(BeatFraction.Double))
    }
})
