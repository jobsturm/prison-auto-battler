<template>
    <circle :cx="x" :cy="y" :r="radius" :fill="skinColor" stroke-width="4" stroke="black"/>
</template>

<script lang="tsx">
import { Vue, Prop, Component } from 'vue-property-decorator';

@Component
export default class InmateBody extends Vue {
    @Prop({ required: true }) readonly x: number
    @Prop({ required: true }) readonly y: number
    @Prop({ required: true }) readonly radius: number
    @Prop({ required: true }) readonly skinColor: string
}
</script>