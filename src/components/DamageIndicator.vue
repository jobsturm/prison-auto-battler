<template>
    <div class="damage-indicator">
        <div
            ref="damageIndicator"
            class="damage-indicator__damage"
            :class="`damage-indicator__damage--${animationClass}`"
            @transitionend="onTransitionEnd"
        >{{ lastDamage }}</div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';

@Component
export default class DamageIndicator extends Vue {
    @Prop({ required: true }) readonly damageHistory: Array<number>

    animationClass: string;
    animationStep: number;
    animationClasses: Array<string>

    constructor() {
        super();
        this.animationClasses = ['middle', 'end', 'final']
        this.animationClass = 'end';
        this.animationStep = 0;
    }

    get lastDamage():number {
        return this.damageHistory[0];
    }

    @Watch('lastDamage')
    private animate():void {
        this.animationClass = 'start';
    }
    onTransitionEnd():void {
        this.animationClass = this.animationClasses[this.animationStep];
        this.animationStep += 1;
    }
}
</script>

<style scoped>
.damage-indicator {
    position: absolute;
    z-index: 2;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    pointer-events: none;
    color: red;
}
.damage-indicator__damage {
    font-size: 40px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    opacity: 0;
}
.damage-indicator__damage--start {
    transition: all 78ms;
    opacity: 1;
}
.damage-indicator__damage--middle {
    transition: all 1200ms;
    transform: translateY(-100px);
}

</style>