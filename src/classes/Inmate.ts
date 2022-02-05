import { Component } from "vue/types/umd";
import { faker } from '@faker-js/faker';
import Item from "./items/Item";
import Weapon from "./items/weapons/Weapon";

export default class Inmate {
    hp: number;
    power: number;
    lastDamageTaken: 0;
    aim: number;
    name: string;
    type: string;
    item: Item|null;
    inmateComponent: Component;

    constructor(type: string, hp: number, power: number, aim: number, inmateComponent: Component) {
        this.type = type;   
        this.hp = hp;
        this.power = power;
        this.aim = aim;
        this.name = faker.name.findName();
        this.item = null;
        this.inmateComponent = inmateComponent;
    }
    onPunched(power:number):void {
        this.lastDamageTaken = 0;
        this.hp -= power;
        this.lastDamageTaken += power;
    }
    punch(inmate:Inmate):void {
        inmate.onPunched(this.power);
    }
    giveItem(item:Item):void {
        this.item = item;
    }
    attackFunction(opposingDeck: Array<Inmate>):void {
        if (this.weapon) {
            this.weapon.attackFunction(opposingDeck);
        } else {
            this.punch(opposingDeck[0]);
        }
    }
    get isDead():boolean {
        return (this.hp <= 0);
    }
    get weapon():Weapon|null {
        if (this.item && this.item.isWeapon) return this.item as Weapon;
        return null;
    }
}