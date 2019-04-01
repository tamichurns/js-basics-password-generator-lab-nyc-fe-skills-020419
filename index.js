window.addEventListener("load", () => {
  //start your code here
  
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
  
  const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" 
  
  const numbers = "0123456789"
  
  const specialCharacter = "!#$%&()*+,-./:;<=>?@[\]^_{|}~"
  
  document.addEventListener('submit', onSubmit)
  
  function onSubmit(event){
    event.preventDefault()
    const input = document.getElementById('input')
    console.log(input.value)
  }
  
});
