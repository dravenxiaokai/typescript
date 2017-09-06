export class Animal{
    /**
     * 这是构造函数
     */
    constructor(){
        console.log('Animal ...')
    }

    public eat():void{
        console.log('畜生吃的东西！')
    }

    public run():void{
        console.log('畜生随机到处跑！')
    }
}