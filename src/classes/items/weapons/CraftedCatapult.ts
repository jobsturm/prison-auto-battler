import Inmate from "@/classes/Inmate";
import RangedWeapon from "../RangedWeapon";

export default class CraftedCatapult extends RangedWeapon {
    constructor(owner: Inmate) {
        super('craftedCatapult', 1, owner);
        this.attackFunction = this.shoot;
    }
    shoot(inmate: Inmate):void {
        inmate.onPunched(this.owner.aim);
    }
}
