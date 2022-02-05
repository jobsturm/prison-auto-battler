import Inmate from '../../Inmate';
import Weapon from './Weapon';

export default class MultiHitWeapon extends Weapon {
    isMultiHit: true;

    constructor(name: string, level: number, owner: Inmate) {
        super(name, level, owner);
        this.isMultiHit = true;
    }
}
