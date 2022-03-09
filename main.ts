basic.forever(function () {
    pins.servoWritePin(AnalogPin.P0, 20)
    basic.pause(2000)
    pins.servoWritePin(AnalogPin.P0, 180)
})
