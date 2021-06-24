//grab html elements
const $btnRules = $('#btn-rules');
const $rulesPopup    = $('#rules-popup');
const $btnClose = $('#btn-close');



const $playerNum01  = $('#player-num-01');
const $playerNum02  = $('#player-num-02');
const $pCurrentScore = $('#player-current-score');
const $pTotalScore   = $('#player-total-score');


const $cptNum01  = $('#cpt-num-01');
const $cptNum02  = $('#cpt-num-02');
const $cptCurrentScore = $('#cpt-current-score');
const $cptTotalScore   = $('#cpt-total-score');


const $btnNewGame = $('#new-game');
const $btnRoll = $('#btn-roll');

const $result = $('#result');
const $resultPopup = $('#result-popup');
const $btnResultReset = $('#result-reset');


//globle variables
const diceArray = [1, 2, 3, 4, 5, 6];
const iconArray = [
    'images/dice-one-solid.svg',
    'images/dice-two-solid.svg',
    'images/dice-three-solid.svg',
    'images/dice-four-solid.svg',
    'images/dice-five-solid.svg',
    'images/dice-six-solid.svg'
];

let pNum01;
let pNum02;
let pScore;
let pTotalScore = 0;

let cptNum01;
let cptNum02;
let cptScore;
let cptTotalScore = 0;

let roundNum = 0;


//events for rules popup

$btnRules.click(function(){
    showPopup();
})


function showPopup(){
    
    let currentOpacity = 0;
    let popupHandler;

    popupHandler = requestAnimationFrame( fadeIn );

    function fadeIn(){
        currentOpacity++;
        $rulesPopup.css('opacity', (currentOpacity/100));

        if(currentOpacity > 100){
            cancelAnimationFrame(popupHandler);

        }else{
            popupHandler = requestAnimationFrame( fadeIn );
        }
    }

}


$btnClose.click(function(){

    $rulesPopup.css('opacity', '0' );

});




//events for dice game

$btnRoll.click(function(){

    playerScores();

    //comparing scores at round 3
    roundNum++;

    if( roundNum == 3 ){

        if( pTotalScore > cptTotalScore ){
            $result.html('Winner is the Player');

        }else if( pTotalScore < cptTotalScore ){
            $result.html('Winner is the Computer');

        }else{
            $result.html('Tie. No one wins.');
        }

        $resultPopup.css('display', 'block');
    }

});


$btnNewGame.click(function(){
    reset();
})


$btnResultReset.click(function(){
    reset();
    $resultPopup.css('display', 'none');
})



//functions


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


function playerScores(){

    //scores of player
    pNum01 = rollDice();
    pNum02 = rollDice();
    pScore = scoreRules( pNum01, pNum02 );
    pTotalScore += pScore;

    $playerNum01.attr('src', iconArray[pNum01 - 1]);
    $playerNum02.attr('src', iconArray[pNum02 - 1]);

    $pCurrentScore.html( pScore );
    $pTotalScore.html( pTotalScore );


    //scores of computer
    cptNum01 = rollDice();
    cptNum02 = rollDice();
    cptScore = scoreRules( cptNum01, cptNum02 );
    cptTotalScore += cptScore;


    $cptNum01.attr('src', iconArray[cptNum01 - 1]);
    $cptNum02.attr('src', iconArray[cptNum02 - 1]);

    $cptCurrentScore.html( cptScore );
    $cptTotalScore.html( cptTotalScore );

}

function reset(){

    pNum01 = 0;
    pNum02 = 0;
    pScore = 0;
    pTotalScore = 0;

    $playerNum01.attr('src', 'images/dice-one-solid.svg');
    $playerNum02.attr('src', 'images/dice-six-solid.svg');
    $pCurrentScore.html( '0' );
    $pTotalScore.html( '0' );

    
    cptNum01 = 0;
    cptNum02 = 0;
    cptScore = 0;
    cptTotalScore = 0;

    $cptNum01.attr('src', 'images/dice-six-solid.svg');
    $cptNum02.attr('src', 'images/dice-one-solid.svg');
    $cptCurrentScore.html( '0' );
    $cptTotalScore.html( '0' );

    roundNum = 0;

}