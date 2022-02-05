import Inmate from "../Inmate";

export default class Item {
    name: string;
    level: number;
    owner: Inmate;
    isRanged: boolean;
    isWeapon: boolean;
    
    constructor(name: string, level: number, owner: Inmate) {
        this.name = name;
        this.level = level;
        this.owner = owner;
    }
}