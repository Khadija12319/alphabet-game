function handleKeyboardButtonPressed(event){
    const playerPressed = event.key;

    const currentAlphabet1 = document.getElementById('current-alphabet').innerText;
    const currentAlphabet =currentAlphabet1.toLowerCase();

    if(playerPressed===currentAlphabet){    
        //update score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText= currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        const newScore = currentScore + 1;
        currentScoreElement.innerText = newScore;
        //start a new round
        removeHighlighter(currentAlphabet);
        continueGame();
    }
    else{
        const currentLifeElement= document.getElementById('init_life');
        const currentLifeText =currentLifeElement.innerText;
        const curretLife = parseInt(currentLifeText);
        const newLife = curretLife - 1;
        currentLifeElement.innerText=newLife;

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
    showElementById('play_ground');
    continueGame();
}