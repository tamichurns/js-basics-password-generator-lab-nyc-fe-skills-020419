window.addEventListener("load", () => {
  //start your code here
  
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
  const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" 
  const numbers = "0123456789"
  const specialCharacter = "!#$%&()*+,-./:;<=>?@[\]^_{|}~"
  
  
  function onSubmit(event){
    event.preventDefault()
    const input = document.getElementById('password-length')
    console.log(input.value)
  }
  
  document.addEventListener('submit', onSubmit)
  
});
