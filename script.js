console.log("Hello!")
var a=0
const NAME='Gera'
if(a===0){
    var b=0
    let c=5
}
console.log(b)
for (let i=0; i++; i>=0){
    console.log(i)
}
const NAMES=['A1', 'A2']
for (const item in NAMES){
    console.log(NAMES[item])
}
const element = document.querySelectorAll('.header-link')
console.log(element)
const PHOTO = document.querySelector('.animation1')
PHOTO.addEventListener('click',addToConsole)
function addToConsole(){
    console.log('click')
}
