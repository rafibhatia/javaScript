const rock = document.querySelector("#rock")
const paper = document.querySelector('#paper')
const scissor = document.querySelector('#scissor')
const result = document.querySelector('#result')
const score = document.querySelector('#score')
let scoreValue = 0 

rock.addEventListener('click',playRound)
paper.addEventListener('click', playRound)
scissor.addEventListener('click',playRound)

function playRound(){
    const computerPick = computerChoice()
    const humenPick = this.textContent
    if (computerPick === humenPick){
        result.textContent =  `it's a tie computer choice: ${computerPick} and  so was yours: ${humenPick}`
    }else if ((humenPick === 'rock'&& computerPick === 'scissor')||
             (humenPick=== 'paper'&& computerPick === 'rock')||
             (humenPick === 'scissor' && computerPick === 'paper')
        ) {
            scoreValue++
            score.textContent = scoreValue
            result.textContent = `your the lucky winner with the result:  computer pick:${computerPick} your pick: ${humenPick}`
        }else{
            result.textContent=`your the sorry losser with the result being: computer pick ${computerPick} humen pick: ${humenPick}`
        }
}


function computerChoice(){
    const choice = [ 'rock', 'paper', 'scissor']
    const randomePick = choice[Math.floor(Math.random() * 3)]
    return randomePick
}
