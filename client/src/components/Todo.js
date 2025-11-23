import React from "react";
import {
  FormLabel,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";
import EditIcon from "@mui/icons-material/Edit";
//import { CheckCircle } from "@material-ui/icons";

import "./todo.css";

const Todo = ({ arr }) => {
  return (
    <List className="todo_list">
      <ListItem>
        <Checkbox {...FormLabel} />
        <ListItemAvatar />
        <ListItemText
          primary={arr.item.nameTodo}
          secondary={arr.item.nameTodo}
        />
        <EditIcon color="primary" fontSize="large" />
      </ListItem>
      <DeleteIcon
        fontSize="large"
        style={{ opacity: 0.7 }}
        
      />
    </List>
  );
};

export default Todo;
