import React, { useState } from "react";
import { TextField, Button, MenuItem, Select, Box } from "@mui/material";

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = () => {
    if (task.trim() && category) {
      addTask(task, category);
      setTask("");
      setCategory("");
    }
  };

  return (
    <Box>
      <TextField
        fullWidth
        label="New Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        margin="normal"
      />
      <Select
        fullWidth
        value={category}
        displayEmpty
        onChange={(e) => setCategory(e.target.value)}
      >
        <MenuItem value="" disabled>
          Category
        </MenuItem>
        <MenuItem value="Personal">Personal</MenuItem>
        <MenuItem value="Work">Work</MenuItem>
        <MenuItem value="Other">Other</MenuItem>
      </Select>
      <Button
        fullWidth
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
        onClick={handleSubmit}
      >
        ADD TASK
      </Button>
    </Box>
  );
};

export default TaskForm;
