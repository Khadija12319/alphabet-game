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
    continueGame()
}