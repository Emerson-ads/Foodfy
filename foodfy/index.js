const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.cards')

for (let card of cards){
    card.addEventListener("click", function(){
        const hGet = card.querySelector('.info h6')
        const text = hGet.innerHTML
        const pGet = card.querySelector('.info p')
        const textP = pGet.innerHTML
        const imgId = card.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('img').src = `/foodfy/assets/${imgId}` 
        modalOverlay.querySelector('.info-modal h1').innerHTML = text
        modalOverlay.querySelector('.info-modal p').innerHTML = textP

        
        console.log(pId)
    })
}

document.querySelector('.close-modal').addEventListener("click", function (){
    modalOverlay.classList.remove('active')
})
