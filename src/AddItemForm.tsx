import { ChangeEvent, useState, KeyboardEvent } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export type AddItemFormPropsType = {
  addItem: (title: string) => void;
};

export function AddItemForm(props: AddItemFormPropsType) {
  const [title, setTitle] = useState("");
  const [error, setError] = useState<string | null>(null);
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };
  const addItem = () => {
    if (title.trim() !== "") {
      props.addItem(title.trim());
      setTitle("");
    } else {
      setError("Field is required");
    }
  };
  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    setError(null);
    if (e.charCode === 13) {
      addItem();
    }
  };

  return (
    <div>
      <TextField
        id='standard-basic'
        variant='standard'
        onKeyPress={onKeyPressHandler}
        value={title}
        onChange={onChangeHandler}
        error={!!error}
        helperText={error}
      />
      <IconButton onClick={addItem} color='secondary'>
        <AddCircleOutlineIcon />
      </IconButton>
    </div>
  );
}
