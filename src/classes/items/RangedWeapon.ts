import Inmate from '../Inmate';
import Weapon from './Weapon';

export default class RangedWeapon extends Weapon {
    isRanged: true;

    constructor(name: string, level: number, owner: Inmate) {
        super(name, level, owner);
        this.isRanged = true;
    }
}
