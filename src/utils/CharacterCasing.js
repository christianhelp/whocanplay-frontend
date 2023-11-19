function isUpperCase(character) {
  return character === character.toUpperCase() && character !== character.toLowerCase();
}

function capitalizeFirstLetter(str) {
    if(isUpperCase(str.charAt(0))) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export {isUpperCase,capitalizeFirstLetter}