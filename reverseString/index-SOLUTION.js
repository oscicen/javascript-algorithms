// Width build in methods
function reverseString(text) {
    return text.split("").reverse().join("");
}

//  Width build in methods ES6
function reverseString(text) {
    return [...text].reverse().join("");
}

// Using for loop
function reverseString(text) {
    let result = "";
    for (let i = text.length - 1; i >= 0; i--) {
        result += text[i];
    }
    return result;
}

// Using for loop ES6
function reverseString(text) {
    let result = "";
    for (let char of text) {
        result = char + result
    }
    return result;
}

// Recursive method
function reverseString(text) {
    if (text === "") {
        return ""
    } else {
        return reverseString(text.substr(1)) + text[0]
    }
}


// Using reduce()
function reverseString(text) {
    return text.split("").reduce((acc, char) => char + acc);
}