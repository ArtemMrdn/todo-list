import Button from "../UI/Button";

function TodosActions({ clearTodos }) {
  return (
    <div className='button-clear'>
      <Button title='Clear All' onClick={clearTodos}>
        Clear All
      </Button>
    </div>
  );
}

export default TodosActions;
