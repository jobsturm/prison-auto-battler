<template>
    <svg width="100%" :height="svgHeight" :viewBox="`0 0 ${svgWidth} ${svgHeight}`" fill="none" xmlns="http://www.w3.org/2000/svg">
        <inmate-torso :y="60" v-bind="$props" :svg-width="svgWidth" :svg-height="svgHeight"/>
        <inmate-head :x="svgWidth / 2" :y="35" :radius="25" :skin-color="skinColor"/>
    </svg>
</template>

<script lang="tsx">
import Item from '@/classes/items/Item';
import InmateTorso from './InmateTorso.vue';
import InmateHead from './InmateHead.vue';
import { Vue, Prop, Component } from 'vue-property-decorator';

@Component({
    components: {
        InmateTorso,
        InmateHead,
    }
})
export default class InmateBody extends Vue {
    @Prop({ required: true }) readonly hp: number
    @Prop({ required: true }) readonly power: number
    @Prop({ required: true }) readonly aim: number
    @Prop({ required: true }) readonly name: number
    @Prop({ required: true }) readonly type: string
    @Prop({ default: 0 }) readonly damageHistory: number
    @Prop({ default: null }) readonly item: Item
    @Prop({ required: true }) readonly skinColor: string

    readonly svgWidth: number;
    readonly svgHeight: number;

    constructor() {
        super();
        this.svgWidth = 100;
        this.svgHeight = 160;
    }
}
</script>