//слова искючения во 2 склонении
const exeptionsSecond = [
  "бремя",
  "время",
  "вымя",
  "знамя",
  "имя",
  "пламя",
  "племя",
  "семя",
  "стремя",
  "темя",
];

//согласные
export const consonants = [
  "б",
  "в",
  "г",
  "д",
  "ж",
  "з",
  "й",
  "к",
  "л",
  "м",
  "н",
  "п",
  "р",
  "с",
  "т",
  "ф",
  "х",
  "ц",
  "ч",
  "ш",
  "щ",
];

//несклоняемые сущ
const immutableWords = [
  "евро",
  "пенни",
  "песо",
  "сентаво",
  "боа",
  "бра",
  "фейхоа",
  "амплуа",
  "буржуа",
  "манго",
  "какао",
  "кино",
  "трюмо",
  "пальто",
  "бюро",
  "танго",
  "вето",
  "бунгало",
  "сабо",
  "авокадо",
  "депо",
  "панно",
  "зебу",
  "кенгуру",
  "рагу",
  "какаду",
  "шоу",
  "шимпанзе",
  "конферансье",
  "атташе",
  "колье",
  "резюме",
  "пенсне",
  "кашне",
  "протеже",
  "коммюнике",
  "драже",
  "суфле",
  "пюре",
  "купе",
  "фойе",
  "шоссе",
  "крупье",
  "такси",
  "жалюзи",
  "шасси",
  "алиби",
  "киви",
  "иваси",
  "регби",
  "конфетти",
  "колибри",
  "жюри",
  "пенальти",
  "рефери",
  "кольраби",
  "каноэ",
  "алоэ",
  "меню",
  "парвеню",
  "авеню",
  "дежавю",
  "инженю",
  "барбекю",
  "интервью",
];

//муж род с мягкими согл
const masculineWithSoft = [
  "автослесарь",
  "библиотекарь",
  "водитель",
  "воспитатель",
  "врач",
  "выхухоль",
  "гвоздь",
  "делопроизводитель",
  "день",
  "дождь",
  "заместитель",
  "зверь",
  "любитель",
  "камень",
  "конь",
  "конь",
  "корень",
  "лось",
  "медведь",
  "модуль",
  "олень",
  "парень",
  "пекарь",
  "пельмень",
  "пень",
  "председатель",
  "представитель",
  "преподаватель",
  "продавец",
  "производитель",
  "путь",
  "рояль",
  "рубль",
  "руководитель",
  "секретарь",
  "слесарь",
  "строитель",
  "табель",
  "токарь",
  "трутень",
  "тюлень",
  "учитель",
  "циркуль",
  "шампунь",
  "шкворень",
  "юань",
  "ячмень",
];

// Определение склонения существительного
export const defineDeclension = (word, lastLetter, preLastLetter, caseName) => {
  const wordWithoutLastLetter = word.slice(0, -1);
  const lastTwoLetters = word.slice(-2);

  //несклоняемые сущ
  if (immutableWords.includes(word)) {
    return word;
  } else if (exeptionsSecond.includes(word)) {
    switch (caseName) {
      case "roditelniy":
      case "datelniy":
      case "predlozhniy":
        return wordWithoutLastLetter + "ени";
      case "vinitelniy":
        return word;
      case "tvoritelniy":
        return wordWithoutLastLetter + "енем";
      default:
        return word;
    }
  } else if (
    ["ой", "ий", "ый", "ая", "ое", "ее"].includes(lastTwoLetters) &&
    !["гений", "комментарий", "герой"].includes(word)
  ) {
    return "adjectiveNoun";
  } else if (
    //первое склонение
    (lastLetter === "а" || lastLetter === "я") &&
    word.slice(-2) !== "мя"
  ) {
    return "first";
  } else if (
    //второе склонение
    ["о", "е", "ё"].includes(lastLetter) ||
    consonants.includes(lastLetter) ||
    exeptionsSecond.includes(word) ||
    (lastLetter === "ь" &&
      consonants.includes(preLastLetter) &&
      !["ж", "ш", "ч", "щ"].includes(preLastLetter) &&
      masculineWithSoft.includes(word))
  ) {
    return "second";
  } else {
    return "third";
  }
};

//гласная после согласной
export const chooseEndingAfterConsonant = (
  lastLetter,
  isPreLastIsSoft,
  vowelAfterSoft,
  vowelAfterHard
) => {
  //return lastLetter !== "й" && isPreLastIsSoft
  return isPreLastIsSoft ? vowelAfterSoft : vowelAfterHard;
};
