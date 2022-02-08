<template>
  <div id="app">
    <h1>Prison battler</h1>
    <p v-if="isDraw">It's a draw</p>
    <button v-else-if="!winner" @click="doTurn">Do a turn</button>
    <p v-else>{{ winner }} wins</p>
    <hr/>
    <main class="main">
      <section v-if="decks.leftDeck" class="deck deck--reverse">
        <inmate-holder
          v-for="({ inmateComponent, ...inmateProps }, index) in decks.leftDeck"
          :key="`inmate-left-${index}`"
          v-bind="inmateProps"
        >
          <component
            :is="inmateComponent"
            v-bind="inmateProps"
          />
        </inmate-holder>
      </section>
      <section v-if="decks.rightDeck" class="deck">
        <inmate-holder
          v-for="({ inmateComponent, ...inmateProps }, index) in decks.rightDeck"
          :key="`inmate-right-${index}`"
          v-bind="inmateProps"
        >
          <component
            :is="inmateComponent"
            v-bind="inmateProps"
          />
        </inmate-holder>
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Brawler from './classes/brawler/Brawler';
import Shooter from './classes/shooter/Shooter';
import DecksInterface from './classes/DecksInterface';
import turn from './functions/turn';
import InmateHolder from './components/InmateHolder.vue';
import WaterHose from '@/classes/items/weapons/WaterHose'

@Component({
  components: { InmateHolder },
})
export default class App extends Vue {
  decks = {
    leftDeck: [new Shooter, new Brawler, new Brawler(25, 25), new Brawler(4, 4), new Brawler(6, 5)],
    rightDeck: [new Brawler, new Brawler(25, 25), new Shooter, new Brawler, new Brawler(5, 50)],
  } as DecksInterface;

  constructor() {
    super();
    this.decks.rightDeck[0].giveItem(new WaterHose(this.decks.rightDeck[0]))
  }

  get isDraw():boolean {
    return (this.decks.leftDeck.length + this.decks.rightDeck.length === 0);
  }
  get winner():string|null {
    if (this.decks.leftDeck.length + this.decks.rightDeck.length === 0) null;
    if (this.decks.leftDeck.length === 0) return 'right';
    if (this.decks.rightDeck.length === 0) return 'left';
    return null;
  }

  doTurn():void {
    Vue.set(this, 'decks', turn(this.decks));
  }
}
</script>

<style scoped>
main {
  display: flex;
  justify-content: space-between;
}
section {
  width: 50%;
}
.deck {
  display: flex;
  justify-content: space-between;
  justify-content: flex-start;
}
.deck--reverse {
  flex-direction: row-reverse;
}
</style>