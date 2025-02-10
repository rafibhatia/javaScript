const grid = document.querySelector('.grid')

function addBlock(){
    const block = document.createElement('div')
    block.classList.add('block')
    grid.appendChild(block)
}
addBlock()
addBlock()
addBlock()

class Block {
    constructor(xAxis, yAxis){
        this.bottonLeft = [xAxis,yAxis]
        this.bottomRight= [xAxis + blockWidth, yAxis]
        this.topLeft = [ xAxis, yAxis + this.blockHight]
        this.topRight = [ xAxis + blockWidth, yAxis + blockHight]
    }
}