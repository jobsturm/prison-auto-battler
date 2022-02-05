import Inmate from "@/classes/Inmate";
import RangedWeapon from "./RangedWeapon";

export default class CraftedCatapult extends RangedWeapon {
    constructor(owner: Inmate) {
        super('craftedCatapult', 1, owner);
        this.attackFunction = this.shoot;
    }
    shoot(opposingDeck: Inmate[]):void {
        const targetInmate = opposingDeck[Math.floor(opposingDeck.length * Math.random())];
        targetInmate.onPunched(this.owner.aim);
    }
}
