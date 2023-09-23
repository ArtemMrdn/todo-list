import { ChangeEvent, useState } from "react";
import TextField from "@mui/material/TextField";

type EditableSpanPropsType = {
  title: string;
  onChange: (newValue: string) => void;
};
export function EditableSpan(props: EditableSpanPropsType) {
  let [editMode, setEditMode] = useState(false);
  let [title, setTitle] = useState(props.title);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const activateViewMode = () => {
    setEditMode(false);
    props.onChange(title);
  };

  const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  return editMode ? (
    <TextField
      variant='standard'
      color='secondary'
      value={title}
      onBlur={activateViewMode}
      onChange={onChangeTitleHandler}
      autoFocus
    />
  ) : (
    <span onDoubleClick={activateEditMode}>{props.title}</span>
  );
}
