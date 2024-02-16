function handleKeyboardButtonPressed(event){
    const playerPressed = event.key;

    const currentAlphabet1 = document.getElementById('current-alphabet').innerText;
    const currentAlphabet =currentAlphabet1.toLowerCase();

    if(playerPressed===currentAlphabet){    
        //update score
        const currentScore = getTextElementValueById('current-score');
        const newScore = currentScore + 1;
        setTextElementValueById('current-score',newScore);
        //start a new round
        removeHighlighter(currentAlphabet);
        continueGame();
    }
    else{
        const curretLife = getTextElementValueById('init_life');
        const newLife = curretLife - 1;
        setTextElementValueById('init_life', newLife);

        //life zero-------------------------
        if(newLife===0){
            hideElementById('play_ground');
            const score1 = document.getElementById('current-score').innerText;
            document.getElementById('final_score').innerText= score1;
            showElementById('game_over');
            //clear last alphabet background color

            const currentLetter= getElementTextById('current-alphabet');
            removeHighlighter(currentLetter);

        }

    }
}

document.addEventListener('keyup' , handleKeyboardButtonPressed);

function continueGame(){
    //step 1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    //set randomly generated alphabet to the screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerHTML = alphabet;

    //set background color
    addHighlighter(alphabet);
}

function play(){
    //hide the home screen
    //show the play ground
    hideElementById('home_screen');
    hideElementById('game_over');
    showElementById('play_ground');
    setTextElementValueById('init_life', 5);
    setTextElementValueById('current-score',0);

    continueGame();
}
