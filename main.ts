//% color='#cc00ff'
namespace SOmobile {
    let sfw: number
    let defaultMSG: string
    let apps = ['']
    let isLock = false
    let isOff = false
    let update: string = 'none'
    export enum OSV {
        //% block='android 5'
        AndroidFive,
        //% block='android 6'
        AndroidSix,
        //% block='android 10'
        AndroidTen,
        //% block='android 9'
        AndroidNine,
        //% block='android 7'
        AndroidSeven,
        //% block='android 8'
        AndroidEight,
        //% block='iphone'
        Iphone
    }
    export enum MSGApp {
        //% block='MicroMSG(only android)'
        MicroMSG,
        //% block='MensagePho(only iphone)'
        MensagePho
    }
    /*
    * install a software in your micro:bit
    * @os - the software, eg: android 5
    */
    //% block='import software %os%'
    export function exportSO(so: OSV){
        sfw = so
        if(sfw < 6){
            apps.push('play store')
            apps.shift()
        }else{
            apps.push('apple store')
            apps.shift()
        }
    }
    /*
    * return the software(without the version)
    */
    //% block='software'
    export function software(){
        let ret: string
        if(sfw < 6){
            ret = 'android'
        }else{
            ret = 'iphone'
        }
        return ret
    }
    /*
    * install a massage app in your micro:bit
    * @app - the app, eg: MicroMSG
    */
    //% block='use %app% how default message app'
    export function MSGDefaultApp(app: MSGApp) {
        defaultMSG = app.toString()
        if (defaultMSG = '1') {
            apps.push('MensagePho')
        } else {
            apps.push('MicroMSG')
        }
    }
    /*
    * set the wifi force for only recive and send wifi in the force
    * @force - the force, recomended: use 10, eg: 10
    */
    //% block='set the wifi force to %number%'
    //% force.min=1 force.max=20
    export function WifiForce(force: number) {
        radio.setGroup(force)
    }
    /*
    * install a software in your micro:bit
    * @position - the app position, eg: 1
    */
    //% block='get app number %position% (start in 0)'
    //% position.min=1 position.max=10000 position.value=1
    export function getApp(position: number){
        return apps[position-1]
    }
    /*
    * lock the screen. nothing for describe
    */
    //% block='set lock screen to %lock%'
    export function lockScreen(lock: boolean){
        if(lock){
            isLock = true
        }else{
            isLock = false
        }
    }
    /*
    * nothing to describe too.
    */
    //% block='the screen is locked?'
    export function isLockScreen() {
        return isLock
    }
    /*
    * no describe
    */
    //% block='scroll up'
    export function srlUp() {
        if(!isOff){
            isLock = false
        }
    }
    /*
    * no describe
    */
    //% block='scroll down'
    export function srlDown() {
        if(!isOff){
            isLock = false
        }
    }
    /*
    * no describe
    */
    //% block='shutdown'
    export function turnOff() {
        music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once)
        isLock = true
        isOff = true
    }
    /*
    * no describe
    */
    //% block='a update is avaliable?'
    export function updateAvaliable(){
        let ret: boolean = false
        if(update != 'none'){
            ret = true
        }
        return ret
    }
    /*
    * no describe
    */
    //% block='setup update ? in second plane: %inSecondPlane and turn off: %setOff'
    export function setupUpdate(inSecondPlane: boolean, setOff: boolean){
        if(inSecondPlane && setOff){
            isOff = true
            control.waitMicros(randint(1000, 50000))
            update = 'none'
            isOff = false
        }else if(setOff){
            isOff = true
            control.waitMicros(randint(1000, 8000))
            update = 'none'
            isOff = false
        }else if(inSecondPlane){
            control.waitMicros(randint(1000, 40000))
            update = 'none'
        }else{
            isOff = true
            basic.showString("updating please wait...")
            control.waitMicros(randint(1000, 11000))
            update = 'none'
            isOff = false
        }
    }
    /*
    * this generate a update randomly
    */
    //% block
    export function generateUpdate(){
        if(Math.randomBoolean()){
            update = 'update avaliable'
        }
    }
}