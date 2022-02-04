<template>
  <div id="app">
    <h1>Prison battler</h1>
    <p v-if="isDraw">It's a draw</p>
    <button v-else-if="!winner" @click="doTurn">Do a turn</button>
    <p v-else>{{ winner }} wins</p>
    <hr/>
    <main class="main">
      <section v-if="decks.leftDeck">
        <inmate-holder
          v-for="({ inmateComponent, ...inmateProps }, index) in decks.leftDeck"
          :key="`inmate-left-${index}`"
          v-bind="inmateProps"
        >
          <component
            :is="inmateComponent"
          />
        </inmate-holder>
      </section>
      <section v-if="decks.rightDeck">
        <inmate-holder
          v-for="({ inmateComponent, ...inmateProps }, index) in decks.rightDeck"
          :key="`inmate-right-${index}`"
          v-bind="inmateProps"
        >
          <component
            :is="inmateComponent"
          />
        </inmate-holder>
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Brawler from './classes/brawler/Brawler';
import DecksInterface from './classes/DecksInterface';
import turn from './functions/turn';
import InmateHolder from './components/InmateHolder.vue';

@Component({
  components: { InmateHolder },
})
export default class App extends Vue {
  decks = {
    leftDeck: [new Brawler(8, 2), new Brawler, new Brawler, new Brawler(4, 4), new Brawler(3, 3)],
    rightDeck: [new Brawler, new Brawler(3, 3), new Brawler(10, 2), new Brawler, new Brawler(3, 3)],
  } as DecksInterface;

  constructor() {
    super();
  }

  get isDraw() {
    return (this.decks.leftDeck.length + this.decks.rightDeck.length === 0);
  }
  get winner() {
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
</style>