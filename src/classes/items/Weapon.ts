import Inmate from '../Inmate';
import Item from './Item';

export default class Weapon extends Item {
    isWeapon: true;
    attackFunction: AttackFunction;

    constructor(name: string, level: number, owner: Inmate) {
        super(name, level, owner);
        this.isWeapon = true;
    }
}
