import Button from "../UI/Button";

function TodosActions({ resetTodos }) {
  return (
    <div className='button-clear'>
      <Button title='Clear All' onClick={resetTodos}>
        Clear All
      </Button>
    </div>
  );
}

export default TodosActions;
