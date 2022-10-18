// Get the modal
let modal = document.querySelector("#myModal");

// Get the button that opens the modal
let btn = document.querySelector("#myBtn");

// Get the <span> element that closes the modal
let span = document.querySelector(".close");

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = () => modal.style.display = "none"


let screen = document.querySelector('#display')
let backSpace = document.querySelector('.del')
let clearScreen = document.querySelector('.clear')

let temporary = ''
let final

let plus = document.querySelector('.plus')
let minus = document.querySelector('.minus')
let times = document.querySelector('.times')
let divide = document.querySelector('.divide')

screen.innerHTML = '0'

// show numbers on calculator screen
let keys = document.querySelectorAll('button')
keys.forEach(key => {
  key.addEventListener('click', () => {
    screen.innerHTML === '0' ? 
      screen.innerHTML = key.value : 
      screen.innerHTML += key.value
    
    temporary = screen.innerHTML
  })
})

// clear the entire screen
clearScreen.onclick = () => screen.innerHTML = '0'

// remove the last number
backSpace.onclick = () => {
  screen.innerHTML = screen.innerHTML.length === 0 ? '0' : screen.innerHTML
  screen.innerHTML = screen.innerHTML.substr(1)
}

// plus action
plus.onclick = () => {

  temporary = parseInt(temporary)

  final = 0

  console.log(typeof(temporary))
}