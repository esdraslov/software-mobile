namespace SOmobile {
    let sfw
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
    export function exportSO(so: OSV){
        sfw = so
    }
}