//третье склонение
export const thirdDeclension = (word, caseName) => {
  const wordWithoutLastLetter = word.slice(0, -1);

  switch (caseName) {
    case "roditelniy":
    case "datelniy":
    case "predlozhniy":
      return wordWithoutLastLetter + "и";

    case "vinitelniy":
      return word;

    case "tvoritelniy":
      return wordWithoutLastLetter + "ью";

    default:
      return word;
  }
};
