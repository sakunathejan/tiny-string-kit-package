export function capitalizeFirst(word){
    const capitalizedLetter = word.charAt(0).toUpperCase();
    const wordRest = word.substring(1);
    const fullWord = capitalizedLetter + wordRest;

    return fullWord;    
}

export function reverseText(word){
    const reversedWord = word.split("").reverse().join("");
    return reversedWord;
}

export function countWords(word){
    const count = word.split(" ").length;
    return count
    
}