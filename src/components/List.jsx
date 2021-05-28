import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ListItem from "./ListItem";

const List = ({ list }) => {
  return (
    <TransitionGroup component="ul" className="list">
      {list.map((item) => (
        <CSSTransition key={item.id} timeout={500} classNames="list__item">
          <ListItem item={item} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default List;
