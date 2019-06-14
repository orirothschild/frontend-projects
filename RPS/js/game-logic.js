// All code should be written in this file.
let playerOneMoveOneType
let playerOneMoveOneValue
let playerOneMoveTwoType

let playerOneMoveTwoValue
let playerOneMoveThreeType
let playerOneMoveThreeValue

let playerTwoMoveOneType
let playerTwoMoveOneType
let playerTwoMoveTwoType

let playerTwoMoveTwoType
let playerTwoMoveThreeType
let playerTwoMoveThreeType

const P1 = 'player one';
const P2 = 'player two';
const ROCK = 'rock';
const PAPER = 'paper';
const SCICORS = 'sciccors';
const TIE = 'tie';

const setPlayerMoves =(player,m1v,m2v,m3v,m1t,m2t,m3t) =>{
    if(!player || !m1v || !m2v || !m3v || !m1t || !m2t || !m3t){
        console.log('falsy value was inserted');
        return;
    }
    if (!isValidMoveType(moveOneType) ||
    !isValidMoveType(moveTwoType) ||
    !isValidMoveType(moveThreeType)) {
        console.log('unmatching Types inserted');
        return;
  return;
}

if (!isValidMoveValue(moveOneValue) ||
    !isValidMoveValue(moveTwoValue) ||
    !isValidMoveValue(moveThreeValue)) {
        console.log('unmatching values inserted');
  return;
  
  if ((moveOneValue + moveTwoValue + moveThreeValue) > 99) {
    return;
  }
}

    switch(player){
        case P1:
            playerOneMoveOneType = m1t;
            playerOneMoveOneValue = m1v;
            playerOneMoveTwoType = m2t;
            playerOneMoveTwoValue = m2v;
            playerOneMoveThreeType = m3t;
            playerOneMoveThreeValue = m3v;
            break;

        default:
            playerTwoMoveOneType = m1t;
            playerTwoMoveOneValue = m1v;
            playerTwoMoveTwoType = m2t;
            playerTwoMoveTwoValue = m2v;
            playerTwoMoveThreeType = m3t;
            playerTwoMoveThreeValue = m3v;
            break;
    }
}

const getRoundWinner = round =>{
    let p1v;
    let p2v;
    let p1t;
    let p2t;

    switch (round){
        case 1:
            p1v = playerOneMoveOneValue;
            p1t = playerOneMoveOneType;
            p2v = playerTwoMoveOneValue;
            p2t = playerTwoMoveOneType;
            break;
        case 2:
            p1v = playerOneMoveTwoValue;
            p1t = playerOneMoveTwoType;
            p2v = playerTwoMoveTwoValue;
            p2t = playerTwoMoveTwoType;
            break;
        default: //last round
            p1v = playerOneMoveThreeValue;
            p1t = playerOneMoveThreeType;
            p2v = playerTwoMoveThreeValue;
            p2t = playerTwoMoveThreeType;
            break;
        }
     const logwinner = 
    }