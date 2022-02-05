import { useRef, useState } from "react";

import { getNewWord } from "./../helpers/newWord";
import Wrapper from "./Wrapper";
import classes from "./Form.module.css";

const Form = () => {
  const wordInputRef = useRef();
  const [ruCase, setRuCase] = useState(["imenitelniy", "Именительный"]);
  const [newWord, setNewWord] = useState("");
  const [output, setOutput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const word = wordInputRef.current.value;

    setNewWord(getNewWord(word, ruCase[0]));
    setOutput(`${ruCase[1]} падеж слова "${word}" - это `);
  };

  const changeRuCaseHandler = (e) => {
    setRuCase([e.target.value, e.target.options[e.target.selectedIndex].text]);
  };

  return (
    <>
      <h1 className={classes.title}>Генератор падежей для существительных</h1>
      <Wrapper>
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="word">
              Введите существительное в именительном падеже в единственном
              числе:
            </label>
            <input
              type="text"
              required
              autoFocus
              id="word"
              ref={wordInputRef}
              placeholder="например, солнце"
            />
          </div>

          <div className={classes.actions}>
            <div className={classes.select}>
              <label htmlFor="cases">Выбирете падеж: </label>
              <select
                value={ruCase[0]}
                onChange={changeRuCaseHandler}
                id="cases"
              >
                <option value="imenitelniy">Именительный</option>
                <option value="roditelniy">Родительный</option>
                <option value="datelniy">Дательный</option>
                <option value="vinitelniy">Винительный</option>
                <option value="tvoritelniy">Творительный</option>
                <option value="predlozhniy">Предложный</option>
              </select>
            </div>

            <button>Изменить</button>
          </div>

          <div className={classes.output}>
            <p>
              {output}
              <span>{newWord}</span>
            </p>
          </div>
        </form>
      </Wrapper>
    </>
  );
};

export default Form;
