
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
const gryffindor= document.getElementById ('gryffindor')
gryffindor.addEventListener('click',function(){
    const houseGryffindor= characters.filter(characters => characters.house === 'Gryffindor')
   // si el array houseGryffindor= personajes.filtrados (personajes de la propiedad house es igual a gryffindor será true)
 console.log (houseGryffindor)
})

const slytherin= document.getElementById ('slytherin')
slytherin.addEventListener('click',function(){
    const houseSlytherin= characters.filter(characters => characters.house === 'Slytherin')
    
})

 const ravenclaw= document.getElementById ('ravenclaw')
 ravenclaw.addEventListener('click',function(){
    const houseRavenclaw= characters.filter(characters => characters.house === 'Ravenclaw')
    
 })

 const hufflepuff= document.getElementById ('hufflepuff')
 hufflepuff.addEventListener('click',function(){ //evento para el logo al cual quiero dar el filtrado
    const houseHufflepuff= characters.filter(characters => characters.house === 'Hufflepuff')
    console.log (houseHufflepuff)
 })

 
 
  

  

  
  
  
 