// Using forEach function
function capSentence(text) {
    let wordsArray = text.toLowerCase().split(' ')
    let capsArray = []

    wordsArray.forEach(word => {
        capsArray.push(word[0].toUpperCase() + word.slice(1))
    });

    return capsArray.join(' ')
}


// Using map and slice methods
function capSentence(text) {
    let wordsArray = text.toLowerCase().split(' ')
    let capsArray = wordsArray.map(word=>{
        return word[0].toUpperCase() + word.slice(1)
    })

    return capsArray.join(' ')
}


// Using map and replace
function capSentence(text) {
    let wordsArray = text.toLowerCase().split(' ')
    
    let capsArray = wordsArray.map( word=>{
      return  word.replace(word[0], word[0].toUpperCase())
    })
  
    return capsArray.join(' ')
  }