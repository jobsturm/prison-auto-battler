import Inmate from "../Inmate";
import CraftedCatapult from "../items/weapons/CraftedCatapult";
import inmateComponent from './ShooterComponent.vue';

export default class Shooter extends Inmate {
    constructor(hp = 3, power = 1, aim = 2) {
        super('shooter', hp, power, aim, inmateComponent);
        this.giveItem(new CraftedCatapult(this));
    }
}
