import { TextField, Button } from "@mui/material";
import { AddTodo, input, setInput } from "../Routes/Home";

<AddTodo />;

export function EditToDo() {
  return (
    <form>
      <TextField
        id="update"
        label="Update ToDo"
        variant="outlined"
        style={{ margin: "0px 5px" }}
        size="small"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div>
        <Button
          variant="contained"
          style={{ margin: "10px 10px" }}
          size="small"
          color="primary"
          onClick={AddTodo}
        >
          Update ToDo
        </Button>
      </div>
    </form>
  );
}
