import { filterByHouse, orderedCharacters, getStats } from '../src/data.js';

describe('filterByHouse', () => {
  it('filtra por casa Gryffindor', () => {
    let data = [
      { house: 'Gryffindor' },
      { house: 'Slytherin' }
    ];
    let house = 'Gryffindor';
    let resultadoReal = filterByHouse(data, house);

    let resultadoEsperado = [{ house: 'Gryffindor' }]

    expect(resultadoReal).toEqual(resultadoEsperado);
  });
  it('filtra por casa Slytherin', () => {
    let data = [
      { house: 'Gryffindor' },
      { house: 'Ravenclaw' },
      { house: 'Slytherin' },
      { house: 'hufflepuff' }
    ];
    let house = 'Slytherin';
    let resultadoReal = filterByHouse(data, house);
    let resultadoEsperado = [{ house: 'Slytherin' }]
    expect(resultadoReal).toEqual(resultadoEsperado)
  });

  it('filtra por casa Ravenclaw', () => {
    let data = [
      { house: 'Gryffindor' },
      { house: 'Ravenclaw' },
      { house: 'Slytherin' },
      { house: 'hufflepuff' }
    ];
    let house = 'Ravenclaw';
    let resultadoReal = filterByHouse(data, house);
    let resultadoEsperado = [{ house: 'Ravenclaw' }]
    expect(resultadoReal).toEqual(resultadoEsperado)
  });

  it('filtra por casa Hufflepuff', () => {
    let data = [
      { house: 'Gryffindor' },
      { house: 'Ravenclaw' },
      { house: 'Slytherin' },
      { house: 'Hufflepuff' }
    ];
    let house = 'Hufflepuff';
    let resultadoReal = filterByHouse(data, house);
    let resultadoEsperado = [{ house: 'Hufflepuff' }]
    expect(resultadoReal).toEqual(resultadoEsperado)

  });
});

describe('orderedCharacters', () => {
  it('Ordena ascendente', () => {
    let data = [{ name: 'Harry Potter' },
    { name: 'Euan Abercrombie' },
    { name: 'Stewart Ackerley' },
    { name: 'Cornelius Agrippa' }];
    let typeOrder = ' De la A a la Z';
    let resultadoOrdenado = orderedCharacters(data, typeOrder);

    let resultadoEspero = [
      { name: 'Cornelius Agrippa' },
      { name: 'Euan Abercrombie' },
      { name: 'Harry Potter' },
      { name: 'Stewart Ackerley' },
    ];

    expect(resultadoOrdenado).toStrictEqual(resultadoEspero);
  });

  it('Ordena descendente', () => {
    //const data: []
    let date = [
      { name: 'Harry Potter' },
      { name: 'Euan Abercrombie' },
      { name: 'Cornelius Agrippa' },
      { name: 'Stewart Ackerley' }
    ];
    let characterNameDos = ' De la Z a la A';
    let resultadoDos = orderedCharacters(date, characterNameDos);
    let resultadoReal = [
      { name: 'Stewart Ackerley' },
      { name: 'Harry Potter' },
      { name: 'Euan Abercrombie' },
      { name: 'Cornelius Agrippa' },
    ];

    expect(resultadoDos).toStrictEqual(resultadoReal);

  });
});

describe('getStats', () => {
  it('separa por género', () => {
    let data = [
      { gender: 'Female' },
      { gender: 'Female' },
      { gender: 'Male' },
      { gender: 'Female' },
      { gender: 'Male' },
      { gender: 'Male' },
      { gender: 'ffff' },
      { gender: 'adadas' },
      { gender: 'asadas' },
      { gender: 'Other' },
    ];
    const resultadoReal = getStats(data);

    let resultadoEsperado = { totalFemale: 3, totalMale: 3, totalOther: 4 };
    expect(resultadoEsperado).toStrictEqual(resultadoReal);


  });
});