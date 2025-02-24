import React from "react";
import { Select, MenuItem, Typography } from "@mui/material";

const TaskFilter = ({ filter, setFilter }) => {
  return (
    <>
      <Typography variant="subtitle1" sx={{ mt: 3 }}>
        Filter by Category
      </Typography>
      <Select
        fullWidth
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <MenuItem value="All">All</MenuItem>
        <MenuItem value="Personal">Personal</MenuItem>
        <MenuItem value="Work">Work</MenuItem>
        <MenuItem value="Other">Other</MenuItem>
      </Select>
    </>
  );
};

export default TaskFilter;
