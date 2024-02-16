function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function addHighlighter(elementId){
    document.getElementById(elementId).classList.add('bg-[#FFA500]');
}

function removeHighlighter(elementId){
    document.getElementById(elementId).classList.remove('bg-[#FFA500]');
}

function getARandomAlphabet(){
    //created an alphabed array
    const alphabetString='abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    //get a random index between 0 - 25
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet;
}