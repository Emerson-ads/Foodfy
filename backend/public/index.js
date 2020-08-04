
const cards = document.querySelectorAll('.cards')
const ingredientes = document.querySelectorAll('.ingredients-details')
const buttons = document.querySelectorAll('.button')
console.log(buttons)
console.log(ingredientes)
console.log(cards)


for (let card of cards){
    card.addEventListener("click", function(){
        const receitaId = card.getAttribute('id')
        window.location.href = `/recipes/${receitaId}`
        
    })
}

for ( let [i,button] of buttons.entries()){    
    
    button.addEventListener('click', () => {

        if(ingredientes[i].classList.contains('hide')){
            ingredientes[i].classList.remove('hide')
            ingredientes[i].classList.add('show')
            button.innerHTML = "Esconder"
        }else {
            ingredientes[i].classList.add('hide')
            ingredientes[i].classList.remove('show')
            button.innerHTML = "Mostrar"
        }
        
    })
}