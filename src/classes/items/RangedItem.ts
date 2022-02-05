import Inmate from '../Inmate';
import Item from './Item';

export default class RangedItem extends Item {
    isRanged: true;

    constructor(name: string, level: number, owner: Inmate) {
        super(name, level, owner);

        this.isRanged = true;
    }
}
