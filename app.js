// Selectors
let header = document.querySelector('.header')
let img1 = document.querySelector('.img1')
let img2 = document.querySelector('.img2')
let btn = document.querySelector('.btn')
// Events
btn.addEventListener('click' , ()=>{
    let randomNumber = Math.floor( Math.random() * 6 + 1)
img1.src = `images/dice${randomNumber}.png`
let randomNumber2 = Math.floor( Math.random() * 6 + 1)
img2.src = `images/dice${randomNumber2}.png`
if(randomNumber > randomNumber2){
    header.textContent = 'Player 1 Winner !!!'
} else{
    header.textContent = 'Player 2 Winner !!!'
}
if(randomNumber === randomNumber2){
    header.textContent =  'Draw !!!'
}

})

