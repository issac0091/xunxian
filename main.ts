cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Run, 0)
basic.showIcon(IconNames.Happy)
while (!(input.buttonIsPressed(Button.A))) {
	
}
basic.forever(function () {
    if (cbit_小车类.Line_Sensor(cbit_小车类.enPos.LeftState, cbit_小车类.enLineState.Black) && cbit_小车类.Line_Sensor(cbit_小车类.enPos.RightState, cbit_小车类.enLineState.Black)) {
        cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Run, 150)
    } else if (cbit_小车类.Line_Sensor(cbit_小车类.enPos.LeftState, cbit_小车类.enLineState.Black) && cbit_小车类.Line_Sensor(cbit_小车类.enPos.RightState, cbit_小车类.enLineState.White)) {
        cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Left, 255)
    } else if (cbit_小车类.Line_Sensor(cbit_小车类.enPos.LeftState, cbit_小车类.enLineState.White) && cbit_小车类.Line_Sensor(cbit_小车类.enPos.RightState, cbit_小车类.enLineState.Black)) {
        cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Right, 255)
    } else if (cbit_小车类.Line_Sensor(cbit_小车类.enPos.LeftState, cbit_小车类.enLineState.White) && cbit_小车类.Line_Sensor(cbit_小车类.enPos.RightState, cbit_小车类.enLineState.White)) {
        cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Back, 150)
        basic.pause(80)
        cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Run, 0)
    }
})
