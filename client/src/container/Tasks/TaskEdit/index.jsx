import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskForm from "../../../components/TaskForm";
import { selectTask, selectTaskLoading } from "../slice/selector";
import { getTask, updateTask } from "../slice/reducer";

const TaskEditContainer = ({ _id }) => {
  const dispatch = useDispatch();

  const task = useSelector(selectTask);
  const loading = useSelector(selectTaskLoading);

  useEffect(() => {
    dispatch(getTask({ _id }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
  const requestUpdate = (payload) => {
    dispatch(updateTask(payload));
  };

  return (
    <TaskForm task={task} isLoading={loading} requestUpdate={requestUpdate} />
  );
};

export default TaskEditContainer;
