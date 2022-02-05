//склонение существительных, образованных от прилагательных
export const adjectiveNoun = (word, caseName) => {
  const lastTwoLetters = word.slice(-2);
  const wordWithoutLastLetters = ["ое", "ее"].includes(lastTwoLetters)
    ? word.slice(0, -1)
    : word.slice(0, -2);

  switch (caseName) {
    case "roditelniy":
      return ["ой", "ый"].includes(lastTwoLetters)
        ? wordWithoutLastLetters + "ого"
        : lastTwoLetters === "ий"
        ? wordWithoutLastLetters + "его"
        : ["ое", "ее"].includes(lastTwoLetters)
        ? wordWithoutLastLetters + "го"
        : lastTwoLetters === "ая" &&
          ["ж", "ш", "ч", "щ"].includes(wordWithoutLastLetters.slice(-1))
        ? wordWithoutLastLetters + "ей"
        : wordWithoutLastLetters + "ой";

    case "datelniy":
      return ["ой", "ый"].includes(lastTwoLetters)
        ? wordWithoutLastLetters + "ому"
        : lastTwoLetters === "ий"
        ? wordWithoutLastLetters + "ему"
        : ["ое", "ее"].includes(lastTwoLetters)
        ? wordWithoutLastLetters + "му"
        : lastTwoLetters === "ая" &&
          ["ж", "ш", "ч", "щ"].includes(wordWithoutLastLetters.slice(-1))
        ? wordWithoutLastLetters + "ей"
        : wordWithoutLastLetters + "ой";

    case "vinitelniy":
      return ["ой", "ый", "ое", "ее"].includes(lastTwoLetters)
        ? word
        : lastTwoLetters === "ий"
        ? wordWithoutLastLetters + "его"
        : lastTwoLetters === "ая"
        ? wordWithoutLastLetters + "ую"
        : "";

    case "tvoritelniy":
      return ["ой", "ый"].includes(lastTwoLetters)
        ? wordWithoutLastLetters + "ым"
        : ["ое", "ее", "ий"].includes(lastTwoLetters)
        ? wordWithoutLastLetters + "им"
        : lastTwoLetters === "ая" &&
          ["ж", "ш", "ч", "щ"].includes(wordWithoutLastLetters.slice(-1))
        ? wordWithoutLastLetters + "ей"
        : wordWithoutLastLetters + "ой";

    case "predlozhniy":
      return ["ой", "ый"].includes(lastTwoLetters)
        ? wordWithoutLastLetters + "ом"
        : lastTwoLetters === "ий"
        ? wordWithoutLastLetters + "ем"
        : ["ое", "ее"].includes(lastTwoLetters)
        ? wordWithoutLastLetters + "м"
        : lastTwoLetters === "ая" &&
          ["ж", "ш", "ч", "щ"].includes(wordWithoutLastLetters.slice(-1))
        ? wordWithoutLastLetters + "ей"
        : wordWithoutLastLetters + "ой";

    default:
      return word;
  }
};
