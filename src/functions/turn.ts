import Inmate from "@/classes/Inmate";
import DecksInterface from '../classes/DecksInterface';

// ...the incinerator I guess
function trimTheDead({ leftDeck, rightDeck }:DecksInterface):DecksInterface {
    return {
        leftDeck: leftDeck.filter((inmate: Inmate) => !inmate.isDead),
        rightDeck: rightDeck.filter((inmate: Inmate) => !inmate.isDead),
    }
}

export default function ({ leftDeck, rightDeck }:DecksInterface):DecksInterface {
    const firstInmateLeftDeck = leftDeck[0];
    const firstInmateRightDeck = rightDeck[0];
    
    firstInmateLeftDeck.attackFunction(rightDeck);
    firstInmateRightDeck.attackFunction(leftDeck);
    return trimTheDead({ leftDeck, rightDeck });
}