import { chooseEndingAfterConsonant, consonants } from "./declension";

//определяем нужно ли убрать окончание у слова
const getwordWithoutLastLetter = (word, lastLetter) => {
  const lastThreeLetters = word.slice(-3);
  if (["о", "е", "ё", "ь", "й"].includes(lastLetter)) {
    return word.slice(0, -1);
  } else if (["чок", "лок", "нок"].includes(lastThreeLetters)) {
    return word.slice(0, -2) + "к";
  } else if (lastThreeLetters === "бец") {
    return word.slice(0, -3) + "бц";
  }
  return word;
};

//второе склонение
export const secondDeclension = (word, lastLetter, preLastLetter, caseName) => {
  const wordWithoutLastLetter = getwordWithoutLastLetter(word, lastLetter);

  const isLastSoft =
    ["ь", "е", "ё", "ю", "я", "й"].includes(lastLetter) &&
    !["ж", "ш", "ч", "щ", "ц"].includes(preLastLetter);

  switch (caseName) {
    case "roditelniy":
      return chooseEndingAfterConsonant(
        lastLetter,
        isLastSoft,
        wordWithoutLastLetter + "я",
        wordWithoutLastLetter + "а"
      );

    case "datelniy":
      return chooseEndingAfterConsonant(
        lastLetter,
        isLastSoft,
        wordWithoutLastLetter + "ю",
        wordWithoutLastLetter + "у"
      );

    case "vinitelniy":
      if (
        ["о", "е", "ё"].includes(lastLetter) ||
        (consonants.includes(lastLetter) && lastLetter !== "й")
      ) {
        return word;
      } else {
        return chooseEndingAfterConsonant(
          lastLetter,
          isLastSoft,
          wordWithoutLastLetter + "я",
          wordWithoutLastLetter + "а"
        );
      }

    case "tvoritelniy":
      return isLastSoft ||
        (lastLetter === "ц" && word.slice(-2) !== "ец") ||
        lastLetter === "й" ||
        preLastLetter === "ц"
        ? wordWithoutLastLetter + "ем"
        : wordWithoutLastLetter + "ом";

    case "predlozhniy":
      return lastLetter === "й"
        ? wordWithoutLastLetter + "и"
        : wordWithoutLastLetter + "е";

    default:
      return word;
  }
};
