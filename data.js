export const genderFilter = (data, condition) => {
  const genderResult = data.filter(
    (character) => character.gender === condition
  );

  return genderResult;
}; 

export const percentCalc = (total, fractionItem) => {
  const percentage = Math.round((fractionItem * 100) / total);
  return percentage;
};


export const statusFilter = (data, condition) => {
  const statusResult = data.filter(
    (character) => character.status === condition
  );
  return statusResult;
};


export const speciesFilter = (data, condition) => {
  const speciesResult = data.filter(
    (character) => character.species === condition
  );
  return speciesResult;
};

export const orderAlfaFilter = (data, order) => {
  const newArray =[...data]
  if (order === "a-z") {
    return newArray.sort((a, z) => (a.name > z.name ? 1 : -1));
  } else {
    return newArray.sort((a, z) => (a.name > z.name ? -1 : 1));
  }
};

export const searchName = (data, condition) => {
  const result = data.filter((character) =>
    character.name.toLowerCase().includes(condition.toLowerCase())
  );
  return result;
};



