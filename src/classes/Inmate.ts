import { Component } from "vue/types/umd";

export default class Inmate {
    hp: number;
    power: number;
    inmateComponent: Component;
    lastDamageTaken: 0;

    constructor(hp: number, power: number, inmateComponent: Component) {
        this.hp = hp;
        this.power = power;
        this.inmateComponent = inmateComponent;
    }
    onPunched(power:number):void {
        this.lastDamageTaken = 0;
        this.hp -= power;
        this.lastDamageTaken += power;
    }
    isDead():boolean {
        return (this.hp <= 0);
    }
}
