window.addEventListener("load", () => {
  //start your code here
  
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
  const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" 
  const numbers = "0123456789"
  const specialCharacters = "!#$%&()*+,-./:;<=>?@[\]^_{|}~"
  
  
  function onSubmit(event){
    
    // prevent weird submitting form default behavior
    event.preventDefault()
    
    // get the thing that was entered
    const input = document.getElementById('password-length')
    const howManyCharacters = input.value
    if (input.value < 4) {
      howManyCharacters = 4 
    }
    
    // create a loop that replaces the number inputted, and returns a random value each time:
    let startingString = ''
    for (let i = 0; i < howManyCharacters; i++){
      
      //what do you want the loop to do? pick a random letter in this case.
     // then how do you bring in the rest of the 'const's above?
     // then yyou need to add an if statement to make sure the script runs only the same number of times as the input value
     
     if (startingString.length < howManyCharacters) {
        let randomIndex = Math.floor(Math.random() * lowerCaseLetters.length)
        startingString += lowerCaseLetters[randomIndex]
     }
     
      if (startingString.length < howManyCharacters) {
        randomIndex = Math.floor(Math.random() * upperCaseLetters.length)
        startingString += upperCaseLetters[randomIndex]
     }
     
      if (startingString.length < howManyCharacters) {
        randomIndex = Math.floor(Math.random() * numbers.length)
        startingString += numbers[randomIndex]
     }
     
      if (startingString.length < howManyCharacters) {
        randomIndex = Math.floor(Math.random() * specialCharacters.length)
        startingString += specialCharacters[randomIndex]
     }
    }
    //replace your current "result" div with outputted result
    const output = document.getElementById('result')
    output.innerHTML = startingString
  }
  
  //run the damn thing
  document.addEventListener('submit', onSubmit)
  
  // 
  
});
