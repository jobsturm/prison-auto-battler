import Inmate from "@/classes/Inmate";
import DecksInterface from '../classes/DecksInterface';

interface PunchExchangeInterface {
    inmateLeftDeck: Inmate,
    inmaterRightDeck: Inmate,
}
interface PunchInterface {
    punchingInmate: Inmate,
    receivingInmate: Inmate,
}

function punch({ punchingInmate, receivingInmate }:PunchInterface):PunchInterface {
    receivingInmate.onPunched(punchingInmate.power)
    return { punchingInmate, receivingInmate } as PunchInterface;
}
function punchExchange({ inmateLeftDeck, inmaterRightDeck }:PunchExchangeInterface):PunchExchangeInterface {
    const inmates = {
        inmateLeftDeck,
        inmaterRightDeck,
    } as PunchExchangeInterface;

    const punchLeft = punch({ punchingInmate: inmateLeftDeck, receivingInmate: inmaterRightDeck });
    inmates.inmateLeftDeck = punchLeft.punchingInmate;
    inmates.inmaterRightDeck = punchLeft.receivingInmate;
    const punchRight = punch({ punchingInmate: inmaterRightDeck, receivingInmate: inmateLeftDeck });
    inmates.inmateLeftDeck = punchRight.receivingInmate;
    inmates.inmaterRightDeck = punchRight.punchingInmate;

    return inmates;
}
// The incinerator I guess
function trimTheDead({ leftDeck, rightDeck }:DecksInterface):DecksInterface {
    return {
        leftDeck: leftDeck.filter((inmate: Inmate) => !inmate.isDead()),
        rightDeck: rightDeck.filter((inmate: Inmate) => !inmate.isDead()),
    }
}

export default function ({ leftDeck, rightDeck }:DecksInterface):DecksInterface {
    const returnLeftDeck = leftDeck;
    const returnRightDeck = rightDeck;

    const firstInmateLeftDeck = returnLeftDeck[0];
    const firstInmateRightDeck = returnRightDeck[0];
    
    const afterPunchExchange = punchExchange({ inmateLeftDeck: firstInmateLeftDeck, inmaterRightDeck: firstInmateRightDeck });
    returnLeftDeck[0] = afterPunchExchange.inmateLeftDeck;
    returnRightDeck[0] = afterPunchExchange.inmaterRightDeck;
    const afterTrimmingTheDead = trimTheDead({ leftDeck: returnLeftDeck, rightDeck: returnRightDeck });

    return afterTrimmingTheDead;
}