import React, { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import List from "./List";

const ListSection = ({ getTime }) => {
  const [list, setList] = useState([]);
  const textRef = useRef(null);

  const clickHandler = () => {
    if (!textRef.current.value) return;

    const { hours, minutes, seconds } = getTime();

    const newMassage = {
      id: Date.now(),
      value: textRef.current.value,
      time: `${hours} : ${minutes} : ${seconds}`,
    };

    textRef.current.value = "";
    return setList((list) => [...list, newMassage]);
  };

  return (
    <section className="section section-list">
      <form className="form">
        <textarea
          ref={textRef}
          className="form__input"
          placeholder="Input massage here"
        ></textarea>
        <button
          className="form__btn"
          type="button"
          onClick={() => clickHandler()}
        >
          Send
        </button>
      </form>

      <List list={list} />

      <CSSTransition
        in={!list.length}
        timeout={300}
        classNames="list__empty"
        unmountOnExit
      >
        <p className="list__empty">Empty</p>
      </CSSTransition>
    </section>
  );
};

export default ListSection;
