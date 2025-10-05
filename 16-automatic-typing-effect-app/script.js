const span = document.querySelector('span')

const wordList = ['Developer.', 'Coder.', 'Youtuber.', 'Progrmmer.']

const word = 'Developer';

let wordIndex = 0
let characterIndex = 0
let skipUpdate = 0
let reverseType = false;

let clearIntervalID = setInterval(() => {
    if (!reverseType) {
        span.innerText = span.innerText + wordList[wordIndex][characterIndex]
        characterIndex++
    } else {
        span.innerText = span.innerText.slice(0, span.innerText.length - 1)
    }

    if (characterIndex === wordList[wordIndex].length) {
        reverseType = true;
    }

    if (span.innerText.length === 0 && reverseType){
        reverseType = false;
        characterIndex = 0
        wordIndex++
    }
  
    if(wordIndex === wordList.length) {
        wordIndex = 0
    }

}, 300);