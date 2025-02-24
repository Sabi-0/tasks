import React from "react";
import { List, ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <List>
      {tasks.map((t, index) => (
        <ListItem
          key={index}
          secondaryAction={
            <IconButton edge="end" onClick={() => deleteTask(index)}>
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemText
            primary={t.text}
            secondary={`Category: ${t.category}`}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default TaskList;
