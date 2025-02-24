import React, { useState } from "react";
import { Container, Box, Typography } from "@mui/material";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import TaskFilter from "./TaskFilter";

const TaskManagement = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  const addTask = (text, category) => {
    setTasks([...tasks, { text, category }]);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const filteredTasks =
    filter === "All" ? tasks : tasks.filter((t) => t.category === filter);

  return (
    <Container maxWidth="sm">
      <Box sx={{ p: 3, bgcolor: "#f5f5f5", borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom>
          Task Management
        </Typography>
        <TaskForm addTask={addTask} />
        <TaskFilter filter={filter} setFilter={setFilter} />
        <TaskList tasks={filteredTasks} deleteTask={deleteTask} />
      </Box>
    </Container>
  );
};

export default TaskManagement;
