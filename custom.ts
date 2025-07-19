namespace codeenbois {

    const DELAY_MOVE_MS  = 1000;
    const DELAY_TURN_MS  =  330;
    const DELAY_PAUSE_MS = 2000;

    function moveStep(m1dir: maqueen.Dir, m2dir: maqueen.Dir, duration: number) {
        maqueen.motorRun(maqueen.Motors.M1, m1dir, 100)
        maqueen.motorRun(maqueen.Motors.M2, m2dir, 100)
        basic.pause(duration)
        maqueen.motorStop(maqueen.Motors.All)
        basic.pause(DELAY_PAUSE_MS)
    }

    export enum Direction {
        //% block="droite"
        Right,
        //% block="gauche"
        Left
    }

    //% block="début du programme"
    export function customWrapper(handler: () => void) {
        handler();
    }
    
    //% block="avance"
    export function moveForward() {
        moveStep(maqueen.Dir.CW, maqueen.Dir.CW, DELAY_MOVE_MS)
    }

    //% block="recule"
    export function moveBackward() {
        moveStep(maqueen.Dir.CCW, maqueen.Dir.CCW, DELAY_MOVE_MS)
    }

    function turnRight() {
        moveStep(maqueen.Dir.CW, maqueen.Dir.CCW, DELAY_TURN_MS)
    }

    function turnLeft() {
        moveStep(maqueen.Dir.CCW, maqueen.Dir.CW, DELAY_TURN_MS)
    }

    //% block="pivote $direction"
    export function turn(direction: Direction) {
        if (direction == Direction.Right) {
            turnRight()
        } else {
            turnLeft()
        }
    }

    //% block="creuse"
    export function dig() {
        music.play(music.stringPlayable("C4 D4 E4", 600), music.PlaybackMode.UntilDone)
    }

}
