namespace SOmobile {
    let sfw: number
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
    //% block='import software %os%'
    export function exportSO(so: OSV){
        sfw = so
    }
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
    //% block='use %app% how default message app'
    export function MSGDefaultApp(app: MSGApp) {
        
    }
}