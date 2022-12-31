const board = document.querySelector('#board');
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const SQUARES_NUMBER = 500;


for (let i=0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => 
    setColor(square))

    square.addEventListener('mouseleave', () => 
    removeColor(square))

    board.append(square)

}
function setColor (element) {
    const color =getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow=`0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor ='#1d1d1d'
    element.style.boxShadow=`0 0 2px #000`
}

 function getRandomColor(){
   const index = Math.floor( Math.random() * colors.length)
   return colors[index]
 }
