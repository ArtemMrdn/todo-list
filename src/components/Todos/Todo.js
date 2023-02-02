import { RiDeleteBin2Line, RiEditFill } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import styles from "./Todo.module.css";
import { useState } from "react";

function Todo({ todo, deleteTodo, toggleTodo }) {
  return (
    <div
      className={`${styles.todo} ${
        todo.isCompleted ? styles.completedTodo : ""
      }`}
    >
      <div className={styles.todoText}>{todo.text}</div>
      <RiEditFill className={styles.editIcon} />

      <RiDeleteBin2Line
        className={styles.deleteIcon}
        onClick={() => deleteTodo(todo.id)}
      />
      <FaCheck
        className={styles.checkIcon}
        onClick={() => toggleTodo(todo.id)}
      />
    </div>
  );
}

export default Todo;
