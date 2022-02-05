import { chooseEndingAfterConsonant } from "./declension";

//провряем на мягкость предпоследнюю букву
const isPreLastLetterSoft = (lastLetter, preLastLetter) => {
  const softConsonants = ["й", "ч", "щ", "ш", "ц"];
  const lettersThatMakesConsonantsSoft = ["е", "ё", "и", "ю", "я", "ь"];

  return (
    softConsonants.includes(preLastLetter) ||
    lettersThatMakesConsonantsSoft.includes(preLastLetter) ||
    lastLetter === "я"
  );
};

//первое склонение
export const firstDeclension = (word, lastLetter, preLastLetter, caseName) => {
  const wordWithoutLastLetter = word.slice(0, -1);
  const isPreLastIsSoft = isPreLastLetterSoft(lastLetter, preLastLetter);

  switch (caseName) {
    case "roditelniy":
      return chooseEndingAfterConsonant(
        lastLetter,
        isPreLastIsSoft || ["г", "к", "х"].includes(word.slice(-2, -1)),
        wordWithoutLastLetter + "и",
        wordWithoutLastLetter + "ы"
      );

    case "datelniy":
      return wordWithoutLastLetter + "e";

    case "vinitelniy":
      return chooseEndingAfterConsonant(
        lastLetter,
        isPreLastIsSoft && !["ч", "щ", "ш"].includes(word.slice(-2, -1)),
        wordWithoutLastLetter + "ю",
        wordWithoutLastLetter + "у"
      );

    case "tvoritelniy":
      return chooseEndingAfterConsonant(
        lastLetter,
        isPreLastIsSoft,
        wordWithoutLastLetter + "ей",
        wordWithoutLastLetter + "ой"
      );

    case "predlozhniy":
      return wordWithoutLastLetter + "e";

    default:
      return word;
  }
};
