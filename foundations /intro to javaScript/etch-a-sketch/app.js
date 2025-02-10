
const container = document.createElement('div')
container.classList.add('container')

document.body.appendChild(container)
const gridDisplay = document.querySelector('.container')


function createBorad(){

    for (let i = 0; i <132; i++){
        const grid = document.createElement('div')
        grid.classList.add('grid')
        gridDisplay.append(grid)

    }

}
createBorad()