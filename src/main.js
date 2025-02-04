import allData from './data/harrypotter/data.js'
import { filterByHouse, orderedCharacters, getStats } from './data.js'


const characters = allData.characters;

const createCards = (arrData) => {
    const arrResult = [];//incializa como un array vacío para meter con push las tarjetas
    arrData.forEach((item) => {/*ejcuta la función indicada una vez por cada elementod el array*/
        const card = document.createElement('div')/*agrega nuevos elementos al árbol del dom*/
        card.classList.add('card')

        const cardName = document.createElement('p')
        cardName.innerHTML = item.name

        const cardHouse = document.createElement('p')
        cardHouse.innerHTML = item.house

        const cardSpecies = document.createElement('p')
        cardSpecies.innerHTML = item.species

        card.append(cardName, cardHouse, cardSpecies)//append agrega todos los elementos
        // card.appendChild(cardHouse)
        // card.appendChild(cardSpecies)
        arrResult.push(card)//añade un elemento al final del array
    })
    return arrResult
}

const containerCards = document.getElementById('containerCards')

createCards(characters).forEach((card) => {/*ejecuta itera ya cciona*/
    containerCards.appendChild(card)/* cards es el nodo hijo*/

})
const gryffindor = document.getElementById('gryffindor')
gryffindor.addEventListener('click', function () {
    containerCards.innerHTML = "";
    containerCards.style.backgroundImage= "url(./img/gryff.jpg)";
    containerCards.style.backgroundSize = "contain";



    createCards(filterByHouse(characters, 'Gryffindor')).forEach((card) => {/* por cada elemento se ejecuta uno por uno*/
        containerCards.appendChild(card)

    })
})

const slytherin = document.getElementById('slytherin')
slytherin.addEventListener('click', function () {
    containerCards.innerHTML = "";
    containerCards.style.backgroundImage= "url(./img/slyt.jpg)";
    containerCards.style.backgroundSize = "contain";



    createCards(filterByHouse(characters, 'Slytherin')).forEach((card) => {
        containerCards.appendChild(card)
    })
})

const ravenclaw = document.getElementById('ravenclaw')
ravenclaw.addEventListener('click', function () {

    containerCards.innerHTML = "";
    containerCards.style.backgroundImage= "url(./img/raven.jpg)";
    containerCards.style.backgroundSize = "contain";



    createCards(filterByHouse(characters, 'Ravenclaw')).forEach((card) => {
        containerCards.appendChild(card)
    })
})

const hufflepuff = document.getElementById('hufflepuff')
hufflepuff.addEventListener('click', function () { //evento para el logo al cual quiero dar el filtrado
    containerCards.innerHTML = "";
    containerCards.style.backgroundImage = "url(./img/i.jpg)";
    containerCards.style.backgroundSize = "contain";



    createCards(filterByHouse(characters, 'Hufflepuff')).forEach((card) => {
        containerCards.appendChild(card)

    })
})
const selectElement = document.querySelector('.menuOne');
selectElement.addEventListener('change', (e) => {

    containerCards.innerHTML = ""/* se le asigna un nuevo valor*/

    createCards(orderedCharacters(characters, e.target.value)).forEach((card) => {
        containerCards.appendChild(card)
    })
})

document.querySelector('.questions').addEventListener('change', () => {

    const stats = getStats(characters)/*argumentos*/

    containerCards.innerHTML = `<div class='male'>${stats.totalMale}<p id='one'>si, como lo lees, la mayor parte de personajes son hombres 🧙🏼‍♂️</p>${stats.totalFemale},<p id='two'>la participación de 🧙‍♀️' y sólo</p>${stats.totalOther}<p id='three'>los otros</p></div>`;
    // llama a la función $
});


