import Vue, { VNode } from 'vue'
import Inmate from './classes/Inmate';

declare global {
  interface AttackFunction {
    (inmate: Inmate): void;
  }  
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
}
