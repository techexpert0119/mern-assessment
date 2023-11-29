import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTasks, getTasksLoading } from "./slice/selector";
import { getAllTasks } from "./slice/reducer";

const TasksContainer = () => {
  const dispatch = useDispatch();

  const data = useSelector(getTasks);
  const loading = useSelector(getTasksLoading);

  useEffect(() => {
    dispatch(getAllTasks());
  }, [dispatch]);

  console.log(`data: `, data);
  console.log(`loading: `, loading);

  return (
    <>
      <h1>Tasks</h1>
    </>
  );
};

export default TasksContainer;
