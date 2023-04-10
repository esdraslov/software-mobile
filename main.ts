namespace SOmobile {
    let sfw: string
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
        sfw = so.toString()
    }
    //% block='software'
    export function software(){
        return sfw
    }
    //% block='use %app% how default menssage app'
    export function MSGDefaultApp(app: MSGApp) {
        
    }
}