import { AiFillDelete } from "react-icons/ai";
import styles from "./Todo.module.css";

function Todo({ todo, deleteTodo }) {
  return (
    <div className={styles.todo}>
      <div className={styles.todoText}>{todo.text}</div>
      <AiFillDelete
        className={styles.deleteIcon}
        onClick={() => deleteTodo(todo.id)}
      />
    </div>
  );
}

export default Todo;
