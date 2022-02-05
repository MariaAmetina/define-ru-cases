import { defineDeclension } from "./declension";
import { firstDeclension } from "./firstDeclension";
import { secondDeclension } from "./secondDeclension";
import { thirdDeclension } from "./thirdDeclension";
import { adjectiveNoun } from "./adjectiveNoun";

export const getNewWord = (word, caseName) => {
  word = word.trim().toLowerCase();
  word = word.replace(/[^а-яё]/gi, "");
  const lastLetter = word.slice(-1);
  const preLastLetter = word.slice(-2, -1);

  const declension = defineDeclension(
    word,
    lastLetter,
    preLastLetter,
    caseName
  );
  switch (declension) {
    case "first":
      return firstDeclension(word, lastLetter, preLastLetter, caseName);
    case "second":
      return secondDeclension(word, lastLetter, preLastLetter, caseName);
    case "third":
      return thirdDeclension(word, caseName);
    case "adjectiveNoun":
      return adjectiveNoun(word, caseName);
    default:
      return declension;
  }
};
