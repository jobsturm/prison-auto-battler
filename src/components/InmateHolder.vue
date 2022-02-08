<template>
    <div class="inmate-holder">
        <slot></slot>
        {{ name }} - {{ type }}
        <stats-bar v-bind="$props" />
        <damage-indicator :damage-history="damageHistory"/>
    </div>
</template>

<script lang="tsx">
import Item from '@/classes/items/Item';
import { Vue, Prop, Component } from 'vue-property-decorator';
import StatsBar from './StatsBar.vue';
import DamageIndicator from './DamageIndicator.vue';

@Component({
    components: {
        StatsBar,
        DamageIndicator,
    }
})
export default class Brawler extends Vue {
    @Prop({ required: true }) readonly hp: number
    @Prop({ required: true }) readonly power: number
    @Prop({ required: true }) readonly aim: number
    @Prop({ required: true }) readonly name: number
    @Prop({ required: true }) readonly type: string
    @Prop({ default: 0 }) readonly damageHistory: number
    @Prop({ default: null }) readonly item: Item
    @Prop({ required: true }) readonly skinColor: string
}
</script>

<style scoped>
.inmate-holder {
    position: relative;
}
</style>