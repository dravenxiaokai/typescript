import { Animal } from './Animal'

export class Person extends Animal{
    constructor(){
        super()
    }

    public eat():void{
        console.log('人类吃熟的东西！')
    }

    public run():void{
        console.log('人类直立行走！')
    }
}