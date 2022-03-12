window.addEventListener('load', function () {
const Answer = document.getElementById("Answer")
if (Answer != null){Answer.innerHTML = '0'}
let number:number = 0

const one = document.getElementById("one")
const tue = document.getElementById("two")
const three = document.getElementById("three")
const four = document.getElementById("four")
const five = document.getElementById("five")
const six = document.getElementById("six")
const seven = document.getElementById("seven")
const eight = document.getElementById("eight")
const nine = document.getElementById("nine")

one?.addEventListener('click' , function (){
    number = number*10+1
    if (Answer != null){Answer.innerHTML = number.toString()}
})
tue?.addEventListener('click' , function (){
    number = number*10+2
    if (Answer != null){Answer.innerHTML = number.toString()}
})
three?.addEventListener('click' , function (){
    number = number*10+3
    if (Answer != null){Answer.innerHTML = number.toString()}
})
four?.addEventListener('click' , function (){
    number = number*10+4
    if (Answer != null){Answer.innerHTML = number.toString()}
})
five?.addEventListener('click' , function (){
    number = number*10+5
    if (Answer != null){Answer.innerHTML = number.toString()}
})
six?.addEventListener('click' , function (){
    number = number*10+6
    if (Answer != null){Answer.innerHTML = number.toString()}
})
seven?.addEventListener('click' , function (){
    number = number*10+7
    if (Answer != null){Answer.innerHTML = number.toString()}
})
eight?.addEventListener('click' , function (){
    number = number*10+8
    if (Answer != null){Answer.innerHTML = number.toString()}
})
nine?.addEventListener('click' , function (){
    number =  number*10+9
    if (Answer != null){Answer.innerHTML = number.toString()}
})
})