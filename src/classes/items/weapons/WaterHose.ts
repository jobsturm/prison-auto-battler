import Inmate from "@/classes/Inmate";
import MultiHitWeapon from "./MultiHitWeapon";

export default class WaterHose extends MultiHitWeapon {
    constructor(owner: Inmate) {
        super('waterHose', 1, owner);
        this.isMultiHit = true;
        this.attackFunction = this.multiHit;
    }
    multiHit(deck: Array<Inmate>):void {
        deck[0].onPunched(1);
        deck[1].onPunched(1);
    }
}
