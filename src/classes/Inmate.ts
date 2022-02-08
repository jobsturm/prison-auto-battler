import { Component } from "vue/types/umd";
import { faker } from '@faker-js/faker';
import Item from "./items/Item";
import Weapon from "./items/weapons/Weapon";

export default class Inmate {
    hp: number;
    power: number;
    aim: number;
    damageHistory: Array<number>;
    gender: 'male'|'female';
    name: string;
    type: string;
    item: Item|null;
    skinColor: string;
    inmateComponent: Component;

    constructor(type: string, hp: number, power: number, aim: number, inmateComponent: Component) {
        this.type = type;   
        this.hp = hp;
        this.power = power;
        this.aim = aim;
        this.damageHistory = [];
        this.gender = Math.random() > 0.5 ? 'male' : 'female';
        this.name = faker.name.firstName(this.gender);
        this.item = null;
        this.inmateComponent = inmateComponent;
        const skinColors = ['#8d5524','#c68642','#e0ac69','#f1c27d','#ffdbac'];
        this.skinColor = skinColors[Math.floor(Math.random() * skinColors.length)];
    }
    onPunched(power:number):void {
        this.hp -= power;
        this.damageHistory.push(power);
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