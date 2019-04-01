window.addEventListener("load", () => {
  //start your code here
  
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
  const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" 
  const numbers = "0123456789"
  const specialCharacter = "!#$%&()*+,-./:;<=>?@[\]^_{|}~"
  
  
  function onSubmit(event){
    
    // prevent weird submitting form default behavior
    event.preventDefault()
    
    // get the thing that was entered
    const input = document.getElementById('password-length')
    const howManyCharacters = input.value
    
    // create a loop that replaces the number inputted, and returns a random letter each time:
    let startingString = ''
    for (let i = 0; i < howManyCharacters; i++){
      //what do you want the loop to do? pick a random letter in this case
     const randomIndex = Math.floor(Math.random() * 26)
     startingString += lowerCaseLetters[randomIndex]
    }
    console.log(startingString)
  }
  
  document.addEventListener('submit', onSubmit)
  
  // 
  
});
