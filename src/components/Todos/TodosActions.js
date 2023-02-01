import Button from "../UI/Button";

function TodosActions({ resetTodos }) {
  return (
    <>
      <Button title='Reset Todos' onClick={resetTodos}>
        Clear All
      </Button>
    </>
  );
}

export default TodosActions;
