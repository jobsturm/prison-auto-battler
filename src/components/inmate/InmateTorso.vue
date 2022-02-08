<template>
    <path :d="bodyPath" fill="#FFB803" stroke="black" stroke-width="4"/>
</template>

<script lang="tsx">
import Item from '@/classes/items/Item';
import { Vue, Prop, Component } from 'vue-property-decorator';

interface Point {
    x: number,
    y: number,
}
interface RectanglePoints {
    topLeft: Point,
    topRight: Point,
    bottomLeft: Point,
    bottomRight: Point,
}

@Component
export default class InmateBody extends Vue {
    @Prop({ required: true }) readonly y: number
    @Prop({ required: true }) readonly hp: number
    @Prop({ required: true }) readonly power: number
    @Prop({ required: true }) readonly aim: number
    @Prop({ required: true }) readonly name: number
    @Prop({ required: true }) readonly type: string
    @Prop({ default: 0 }) readonly damageHistory: number
    @Prop({ default: null }) readonly item: Item

    readonly svgWidth: number;
    readonly svgHeight: number;

    constructor() {
        super();
        this.svgWidth = 100;
        this.svgHeight = 100;
    }

    get startPoint():number {
        return this.svgWidth  / 2;
    }

    get bodyCoordinates():RectanglePoints {
        const bodyWidth = 50;
        const bodyHeight = 100;
        const offsetTop = 2 + this.y;
        const powerPercentage = this.power / 50;
        const trapezoidModefier = -5 + (10 *  powerPercentage);
        const shoulderWidth = 20 * powerPercentage;

        const offsetLeft = bodyWidth  / 2;
        
        return {
            topLeft: {x: offsetLeft - shoulderWidth, y: offsetTop},
            topRight: {x: offsetLeft + bodyWidth + shoulderWidth, y: offsetTop},
            bottomLeft: {x: offsetLeft + bodyWidth - trapezoidModefier, y: bodyHeight + offsetTop - 4},
            bottomRight: {x: this.startPoint - offsetLeft + trapezoidModefier, y: bodyHeight + offsetTop - 4},
        }
    }

    private get bodyPath():string {
        const points = this.bodyCoordinates;
        return `
            M ${ this.startPoint } ${ points.topLeft.y }
            L ${ points.topRight.x } ${ points.topRight.y }
            L ${ points.bottomLeft.x } ${ points.bottomLeft.y }
            L ${ points.bottomRight.x } ${ points.bottomRight.y }
            L ${ points.topLeft.x } ${ points.topLeft.y }
            L ${ this.startPoint } ${ points.topLeft.y }
        `.trim();
    }   
}
</script>