import React, { useState } from "react";
import styled from "styled-components";
import check from "../img/icon-check.svg";
import { Todo } from "../types";

interface Props {
  completed: boolean;
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
  id: string;
}

function CheckBox(props: Props) {
  const { completed, todoList, setTodoList, id } = props;

  const updateCheckBox = () => {
    const updatedState = [...todoList];
    const stateIndex = updatedState.findIndex((element) => element.id === id);
    updatedState[stateIndex].completed = !completed;
    setTodoList(updatedState);
  };

  return (
    <Content completed={completed} onClick={updateCheckBox}>
      {props.completed ? <Image src={check} alt="checked" /> : null}
    </Content>
  );
}

export default CheckBox;

const Image = styled.img`
  width: 8.7px;
  height: 6px;
`;

const Content = styled.button(
  (props: { completed: boolean }) => `
  width: 20px;
  height: 20px;
  margin-right: 12px; 
  border: ${props.completed ? "none" : "1px solid #e3e4f1"} ;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .2s;
  background: ${
    props.completed
      ? "linear-gradient(135deg, #55ddff 0%, #c058f3 100%)"
      : "none"
  };
`
);
