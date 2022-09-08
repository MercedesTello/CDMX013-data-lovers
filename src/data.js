// estas funciones son de ejemplo

export const filterByHouse = (characters, house) => {
  return characters.filter(characters => characters.house === house)
}

export const orderedCharacters = (characters, typeOrder) => {

  if (typeOrder == " De la A a la Z") {
    return characters.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });

  } else if (typeOrder == " De la Z a la A") {
    return characters.sort(function (a, b) {
      if (a.name < b.name) {
        return 1;
      }
      if (a.name > b.name) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
  }
};
export const getStats = (characters) => {

  let totalFemale = 0
  let totalMale = 0
  let totalOther = 0
  characters.forEach(characters => {
    if (characters.gender === "Female") {
      totalFemale++

    } else if (characters.gender === "Male") {
      totalMale++

    } else {
      totalOther++
    }
  })

  return { totalFemale, totalMale, totalOther };
};