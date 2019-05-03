// Using iterative approach
const vowels = ["a", "e", "i", "o", "u"];

function vowelsCounter(text) {
    let counter = 0;

    for (let letter of text.toLowerCase()) {
        if (vowels.includes(letter)) {
            counter++;
        }
    }

    return counter;
}

// Using regular expression
function vowelsCounter(text) {
    let matchingInstances = text.match(/[aeiou]/gi);

    if (matchingInstances) {
        return matchingInstances.length;
    } else {
        return 0;
    }
}