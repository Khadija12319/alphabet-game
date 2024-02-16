function handleKeyboardButtonPressed(event){
    const playerPressed = event.key;

    const currentAlphabet1 = document.getElementById('current-alphabet').innerText;
    const currentAlphabet =currentAlphabet1.toLowerCase();

    if(playerPressed===currentAlphabet){    
        //update score
        const currentScore = getTextElementValueById('current-score');
        const newScore = currentScore + 1;
        document.getElementById('current-score').innerText = newScore;
        //start a new round
        removeHighlighter(currentAlphabet);
        continueGame();
    }
    else{
        const curretLife = getTextElementValueById('init_life');
        const newLife = curretLife - 1;
        document.getElementById('init_life').innerText=newLife;

        //life zero-------------------------
        if(newLife===0){
            hideElementById('play_ground');
            const score1 = document.getElementById('current-score').innerText;
            document.getElementById('final_score').innerText= score1;
            showElementById('game_over');
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
    continueGame();
}
