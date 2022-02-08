<template>
    <div class="brawler">
        <inmate-body v-bind="$props"/>
    </div>
</template>

<script lang="tsx">
import Item from '@/classes/items/Item';
import InmateBody from '@/components/inmate/InmateBody.vue';
import { Vue, Prop, Component } from 'vue-property-decorator';

@Component({
    components: {
        InmateBody,
    },
})
export default class BrawlerComponent extends Vue {
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