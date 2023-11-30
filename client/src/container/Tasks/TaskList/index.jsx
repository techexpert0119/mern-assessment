import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTasks, selectTasksLoading } from "../slice/selector";
import { getAllTasks, deleteTask } from "../slice/reducer";
import TaskTable from "../../../components/TaskTable";

const TaskListContainer = () => {
  const dispatch = useDispatch();

  const tasks = useSelector(selectTasks);
  const loading = useSelector(selectTasksLoading);

  useEffect(() => {
    dispatch(getAllTasks());
  }, [dispatch]);

  const requestDelete = (payload) => {
    dispatch(deleteTask(payload));
  };

  return (
    <TaskTable data={tasks} isLoading={loading} requestDelete={requestDelete} />
  );
};

export default TaskListContainer;
