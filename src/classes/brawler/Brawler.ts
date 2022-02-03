import Inmate from "../Inmate";
import inmateComponent from './BrawlerComponent.vue';

export default class Brawler extends Inmate {
    constructor(hp = 3, power = 1) {
        super(hp, power, inmateComponent);
    }
}
