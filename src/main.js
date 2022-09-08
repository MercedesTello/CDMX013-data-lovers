import allData from './data/harrypotter/data.js'
import { filterByHouse,orderedCharacters, getStats } from './data.js'

const characters = allData.characters;

const createCards = (arrData) => {
    const arrResult = [];
    arrData.forEach((item) => {
        const card = document.createElement('div')
        card.classList.add('card')

        const cardName = document.createElement('p')
        cardName.innerHTML = item.name

        const cardHouse = document.createElement('p')
        cardHouse.innerHTML = item.house

        const cardSpecies = document.createElement('p')
        cardSpecies.innerHTML = item.species

        card.appendChild(cardName)
        card.appendChild(cardHouse)
        card.appendChild(cardSpecies)
        arrResult.push(card)
    })
    return arrResult
}

const containerCards = document.getElementById('containerCards')

createCards(characters).forEach((card) => {
    containerCards.appendChild(card)

})
const gryffindor = document.getElementById('gryffindor')
gryffindor.addEventListener('click', function () {
    containerCards.innerHTML = ""

    createCards(filterByHouse(characters, 'Gryffindor')).forEach((card) => {
        containerCards.appendChild(card)

    })
})

const slytherin = document.getElementById('slytherin')
slytherin.addEventListener('click', function () {
    containerCards.innerHTML = ""

    createCards(filterByHouse(characters, 'Slytherin')).forEach((card) => {
        containerCards.appendChild(card)
    })
})

const ravenclaw = document.getElementById('ravenclaw')
ravenclaw.addEventListener('click', function () {

    containerCards.innerHTML = ""

    createCards(filterByHouse(characters, 'Ravenclaw')).forEach((card) => {
        containerCards.appendChild(card)
    })
})

const hufflepuff = document.getElementById('hufflepuff')
hufflepuff.addEventListener('click', function () { //evento para el logo al cual quiero dar el filtrado
    containerCards.innerHTML = ""

    createCards(filterByHouse(characters, 'Hufflepuff')).forEach((card) => {
        containerCards.appendChild(card)
    })
})
const selectElement = document.querySelector('.menuOne');
selectElement.addEventListener('change', (e) => {

    containerCards.innerHTML = ""

    createCards(orderedCharacters(characters, e.target.value)).forEach((card) => {
        containerCards.appendChild(card)
    })
})

document.querySelector('.questions').addEventListener('change', () => {
    
   const stats= getStats(characters)

    containerCards.innerHTML = `<div class='male'>${stats.totalMale}<p id='one'>si, como lo lees, la mayor parte de personajes son hombres 🧙🏼‍♂️</p>${stats.totalFemale},<p id='two'>la participación de 🧙‍♀️' y sólo</p>${stats.totalOther}<p id='three'>los otros</p></div>`;
  
});
