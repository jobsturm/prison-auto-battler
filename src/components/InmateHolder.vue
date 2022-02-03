<template>
    <div class="inmate-holder">
        <slot></slot>
        <stats-bar v-bind="$props" />
    </div>
</template>

<script lang="tsx">
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
    @Prop({ default: 0 }) readonly lastDamageTaken: number
}
</script>