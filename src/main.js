
import allData from './data/harrypotter/data.js'

const characters = allData.characters;

const llamarHTML = (data) => {
    const div = document.createElement('div')
    const Names = document.createElement('div')
}


const createCards = (arrData) => {
    const arrResult = [];
    arrData.forEach((item) => {
        const card = document.createElement('div')
        card.classList.add('card')
        
        const cardName = document.createElement('p')
        cardName.innerHTML=item.name

        const cardHouse = document.createElement('p')
        cardHouse.innerHTML=item.house

        const cardSpecies = document.createElement('p')
        cardSpecies.innerHTML=item.species

        card.appendChild(cardName)
        card.appendChild(cardHouse)
        card.appendChild(cardSpecies)
        arrResult.push(card)
    })
    return arrResult
}

const containerCards= document.getElementById ('containerCards')

createCards(characters).forEach((card)=>{
    containerCards.appendChild(card)

})
const griffindor= document.getElementById ('griffindor')
griffindor.addEventListener('click',function(){

})

const slytherin= document.getElementById ('slytherin')
slytherin.addEventListener('click',function(){
    console.log ('soy el evento de slytherin')
})

 const ravenclaw= document.getElementById ('ravenclaw')
 ravenclaw.addEventListener('click',function(){

 })

 const hufflepuff= document.getElementById ('hufflepuff')
 hufflepuff.addEventListener('click',function(){ //evento para el logo al cual quiero dar el filtrado
    
 })
