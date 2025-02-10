const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png',

    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',

    }, 
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
        
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
        
    },   
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
        
    },
    {
        name:'pizza',
        img: 'images/white.png'
    },
  {
        name: 'fries',
        img: 'images/fries.png',

    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',

    }, 
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
        
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
        
    },   
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
        
    },
    {
        name:'pizza',
        img: 'images/white.png'
    },
]

cardArray.sort(()=> 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenId = []
const cardsWon = []

function createBoard(){
    for (let i = 0 ; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src','images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.append(card)
      
    }
}


createBoard()

function checkMatch(){
   const cards =  document.querySelectorAll('img')
    const choiceOne = cardsChosenId[0]
    const choiceTwo = cardsChosenId[1]
    console.log(cards)
    if (choiceOne == choiceTwo){
        cards[choiceOne].setAttribute('src','images/blank.png')
        cards[choiceTwo].setAttribute('src' , 'images/blank.png')
        alert('you pick the same oe')
    }
    else if  (cardsChosen[0] === cardsChosen[1]){
        alert('you found a match')
        cards[choiceOne].setAttribute('src', 'images/white.png')
        cards[choiceTwo].setAttribute('src', 'images/white.png')
        cards[choiceOne].removeEventListener('click',flipCard)
        cards[choiceTwo].removeEventListener('click',flipCard)
        cardsWon.push(cardsChosen)
        console.log(cardsWon,cardsWon.length)
        resultDisplay.textContent = cardsWon.length


    }else{
        cards[choiceOne].setAttribute('src', 'images/blank.png')
        cards[choiceTwo].setAttribute('src','images/blank.png')
    }
    cardsChosen = []
    cardsChosenId= []
    if (cardsWon.length === cardArray.length/2){
        resultDisplay.textContent ='you got them all'
    }
}

function flipCard(){

    const cardId = this.getAttribute('data-id')
   
    cardsChosen.push(cardArray[cardId].name)
   
    cardsChosenId.push(cardId)

    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2){
        setTimeout( checkMatch, 500)
    }
  


}