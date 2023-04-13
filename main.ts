//% color='#cc00ff'
namespace SOmobile {
    let sfw: number
    let defaultMSG: string
    let apps = ['']
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
    //% category='apps'
    export enum MSGApp {
        //% block='MicroMSG(only android)'
        MicroMSG,
        //% block='MensagePho(only iphone)'
        MensagePho
    }
    //% block='import software %os%'
    //% category='software'
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
    //% block='software'
    //% category='software'
    export function software(){
        let ret: string
        if(sfw < 6){
            ret = 'android'
        }else{
            ret = 'iphone'
        }
        return ret
    }
    //% block='use %app% how default message app'
    //% category='apps'
    export function MSGDefaultApp(app: MSGApp) {
        defaultMSG = app.toString()
        if (defaultMSG = '1') {
            apps.push('MensagePho')
        } else {
            apps.push('MicroMSG')
        }
    }
    //% block='set the wifi force to %number%'
    //% force.min=1 force.max=20
    //% category='wi-fi'
    export function WifiForce(force: number) {
        radio.setGroup(force)
    }
    //% block='get app number %position% (start in 0)'
    //% position.min=1 position.max=10000 position.default=1
    //% category='apps'
    export function getApp(position: number){
        return apps[position-1]
    }
}