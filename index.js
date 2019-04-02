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
    
    // create a loop that replaces the number inputted, and returns a random letter each time:
    let startingString = ''
    for (let i = 0; i < howManyCharacters; i++){
      
      //what do you want the loop to do? pick a random letter in this case.
      
     const randomIndex = Math.floor(Math.random() * 26)
     startingString += lowerCaseLetters[randomIndex]
     
     // then how do you bring in the rest of the 'const's above?
     
     let randomIndex = Math.floor(Math.random() * lowerCaseLetters.length)
     startingString += lowerCaseLetters[randomIndex]
     
     randomIndex = Math.floor(Math.random() * upperCaseLetters.length)
     startingString += lowerCaseLetters[randomIndex]
     
     randomIndex = Math.floor(Math.random() * numbers.length)
     startingString += lowerCaseLetters[randomIndex]
     
     randomIndex = Math.floor(Math.random() * specialCharacters.length)
     startingString += lowerCaseLetters[randomIndex]
     
     
    }
    //replace your current "result" div with outputted result
    const output = document.getElementById('result')
    output.innerHTML = startingString
  }
  
  document.addEventListener('submit', onSubmit)
  
  // 
  
});
