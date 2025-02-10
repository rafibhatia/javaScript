const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0;
let hitPosition 
let currentTime = 60

function randomeSquare(){
    squares.forEach(square => {
        square.classList.remove('mole')
    })
    let randomSqare = squares[Math.floor(Math.random() * 9 )]
    randomSqare.classList.add('mole')
    hitPosition = randomSqare.id

}
squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if  (square.id == hitPosition){
            result++
            score.textContent = result
            hitPosition = null
        }
    })
})
function moveMole(){
    let timerId = null
    timerId = setInterval(randomeSquare , 1000)
}
function countDown(){
    currentTime--
    timeLeft.textContent = currentTime
    if (currentTime ==0 ){
        clearInterval(countDownTimerId)
        alert('game over' + result)
    }

}
let countDownTimerId = setInterval(countDown, 1000)
moveMole()
randomeSquare()