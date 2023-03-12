// Get the modal
let modal = document.querySelector("#myModal");

// Get the button that opens the modal
let btn = document.querySelector("#myBtn");

// Get the <span> element that closes the modal
let span = document.querySelector(".close");

// When the user clicks the button, open the modal 
btn.onclick = () => modal.style.display = "block"

// When the user clicks on <span> (x), close the modal
span.onclick = () => modal.style.display = "none"

// get the elements
let screen = document.querySelector('#display')
let backSpace = document.querySelector('.del')
let clearScreen = document.querySelector('.clear')

let plus = document.querySelector('.plus')
let minus = document.querySelector('.minus')
let times = document.querySelector('.times')
let divide = document.querySelector('.divide')
let equal =  document.querySelector('.equal')

screen.innerHTML = '0'

// show numbers on calculator screen
let keys = document.querySelectorAll('.operand')
let buttons = document.querySelectorAll('button')
let operators =  document.querySelectorAll('.operator')

// clear the entire screen
clearScreen.onclick = () => screen.innerHTML = '0'

// oprations
let temporary = ''
let finale

// remove the last number
backSpace.onclick = () => {
  screen.innerHTML = screen.innerHTML.length < 2 ? '0' : screen.innerHTML.substr(0, screen.innerHTML.length - 1)
  temporary = temporary.substr(0, temporary.length - 1)
}

keys.forEach(key => {
  key.addEventListener('click', () => {

    screen.innerHTML === '0' && key.value === '.' ?
    screen.innerHTML += key.value :
    screen.innerHTML === '0' ?
    screen.innerHTML = key.value :
    screen.innerHTML.includes('.') ?
    screen.innerHTML = screen.innerHTML + key.value.replace('.', '') :
    screen.innerHTML += key.value

  })
})

buttons.forEach(button => {
  button.addEventListener('click', () => {

    button.classList.contains('operand') ? 
    temporary += parseInt(button.value) :
    button.classList.contains('operator') ?
    temporary += button.value :
    button.classList.contains('equal') ?
    screen.innerHTML = eval(temporary) :
    screen.innerHTML = '0'

    console.log(temporary)
  })
})

// operators.forEach(operator => {
//   operator.addEventListener('click', () => {
//     screen.innerHTML.replace(screen.innerHTML, key.value)
//   })
// })

equal.onclick = () => {
  // screen.innerHTML = screen.innerHTML === '0' ? '0'
}