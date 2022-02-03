<template>
    <table class="stats-bar">
        <tr><td>HP</td><td>{{ hp }}</td></tr>
        <tr><td>Power</td><td>{{ power }}</td></tr>
        <tr><td>lastDamageTaken</td><td>{{ lastDamageTaken }}</td></tr>
    </table>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class StatsBar extends Vue {
    @Prop({ required: true }) readonly hp: number
    @Prop({ required: true }) readonly power: number
    @Prop({ required: true }) readonly lastDamageTaken: number
}
</script>