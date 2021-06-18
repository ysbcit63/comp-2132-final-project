
const $playerNum01  = $('#player-num-01');
const $playerNum02  = $('#player-num-02');
const $pCurrentScore = $('#player-current-score');
const $pTotalScore   = $('#player-total-score');


const $cptNum01  = $('#cpt-num-01');
const $cptNum02  = $('#cpt-num-02');
const $cptCurrentScore = $('#cpt-current-score');
const $cptTotalScore   = $('#cpt-total-score');


const $btnRoll = $('#btn-roll');




const diceArray = [1, 2, 3, 4, 5, 6];

let pTotalScore = 0;
let cptTotalScore = 0;

let roundNum = 0;


$btnRoll.click(function(){

    //codes for player
    let pNum01 = rollDice();
    let pNum02 = rollDice();
    let pScore = scoreRules( pNum01, pNum02 );
    pTotalScore += pScore;

    $playerNum01.html( pNum01 );
    $playerNum02.html( pNum02 );
    $pCurrentScore.html( pScore );
    $pTotalScore.html( pTotalScore );


    //codes for computer
    let cptNum01 = rollDice();
    let cptNum02 = rollDice();
    let cptScore = scoreRules( cptNum01, cptNum02 );
    cptTotalScore += cptScore;

    $cptNum01.html( cptNum01 );
    $cptNum02.html( cptNum02 );
    $cptCurrentScore.html( cptScore );
    $cptTotalScore.html( cptTotalScore );


    //comparing scores at round 3
    roundNum++;

    if( roundNum == 3 ){

        if( pTotalScore > cptTotalScore ){
            console.log('Winner is the Player');

        }else if( pTotalScore < cptTotalScore ){
            console.log('Winner is the Computer');

        }else{
            console.log('Tied');
        }
    }


});


function rollDice(){

    let randomNum = Math.floor(Math.random() * diceArray.length);
    return diceArray[randomNum];
}


function scoreRules( num01, num02 ){

    let score;

    if( num01 == 1 || num02 == 1){
        score = 0;

    }else if( num01 == num02 ){
        score = ( num01 + num02 )*2;

    }else{
        score = num01 + num02;
    }

    return score;
}
