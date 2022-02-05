import Inmate from "../Inmate";
import inmateComponent from './BrawlerComponent.vue';

export default class Brawler extends Inmate {
    constructor(hp = 3, power = 2, aim = 1) {
        super('brawler', hp, power, aim, inmateComponent);
    }
}
