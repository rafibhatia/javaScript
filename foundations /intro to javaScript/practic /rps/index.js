function getComputer(){
    const computerPick = ['rock', 'paper','sessor'];
    const randomPick =  computerPick[Math.floor(Math.random() *3)]
    return randomPick
}

    const rock = document.querySelector("#rock");
    const paper = document.querySelector("#paper");
    const sessor = document.querySelector("#sessor");

    rock.addEventListener('click', ()=> playRound('rock'));
    paper.addEventListener('click', ()=> playRound('paper'));
    sessor.addEventListener('click', ()=> playRound('sessor'));

let player
function playRound(player_choice){
    let result = document.querySelector("#result")
    let compterChoice = getComputer()

    if (player_choice === compterChoice){
        result.textContent = 'it a tie';
        console.log('you win')
    }else if (player_choice == "rock" && compterChoice == 'sessor'){
        result.textContent = ' you win ';
         console.log('you win')
    }else if ( player_choice== 'paper'&& compterChoice == 'rock'){
        result.textContent = 'you win';
         console.log('you win')
    }else if (player_choice == 'sessor'&& compterChoice == 'paper'){
        result.textContent = 'you win'
         console.log('you win')
    }else{
        result.textContent = 'you loss'
        console.log(' you loss')
    }}
