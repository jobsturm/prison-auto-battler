<template>
    <table class="stats-bar">
        {{ hp }} | {{ power}} | {{ aim }}
    </table>
</template>

<script lang="ts">
import Item from '@/classes/items/Item';
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class StatsBar extends Vue {
    @Prop({ required: true }) readonly hp: number
    @Prop({ required: true }) readonly power: number
    @Prop({ required: true }) readonly aim: number
    @Prop({ required: true }) readonly damageHistory: number
    @Prop({ default: null }) readonly item: Item

    get itemName():string {
        if (!this.item) return '';
        return this.item.name;
    }
}
</script>