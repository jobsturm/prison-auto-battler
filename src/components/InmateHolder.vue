<template>
    <div class="inmate-holder">
        {{ name }} - {{ type }}
        <slot></slot>
        <stats-bar v-bind="$props" />
    </div>
</template>

<script lang="tsx">
import Item from '@/classes/items/Item';
import { Vue, Prop, Component } from 'vue-property-decorator';
import StatsBar from './StatsBar.vue';

@Component({
    components: {
        StatsBar,
    }
})
export default class Brawler extends Vue {
    @Prop({ required: true }) readonly hp: number
    @Prop({ required: true }) readonly power: number
    @Prop({ required: true }) readonly aim: number
    @Prop({ required: true }) readonly name: number
    @Prop({ required: true }) readonly type: string
    @Prop({ default: 0 }) readonly lastDamageTaken: number
    @Prop({ default: null }) readonly item: Item
}
</script>