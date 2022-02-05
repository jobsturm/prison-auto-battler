<template>
    <table class="stats-bar">
        <tr><td>HP</td><td>{{ hp }}</td></tr>
        <tr><td>Power</td><td>{{ power }}</td></tr>
        <tr><td>Aim</td><td>{{ aim }}</td></tr>
        <tr><td>lastDamageTaken</td><td>{{ lastDamageTaken }}</td></tr>
        <tr><td>item</td><td>{{ itemName }}</td></tr>
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
    @Prop({ required: true }) readonly lastDamageTaken: number
    @Prop({ default: null }) readonly item: Item

    get itemName():string {
        if (!this.item) return '';
        return this.item.name;
    }
}
</script>