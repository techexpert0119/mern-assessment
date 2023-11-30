import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskForm from "../../../components/TaskForm";
import { selectTaskLoading } from "../slice/selector";
import { createTask } from "../slice/reducer";

const TaskCreateContainer = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectTaskLoading);

  const requestCreate = (payload) => {
    dispatch(createTask(payload));
  };

  return <TaskForm isLoading={loading} requestCreate={requestCreate} />;
};

export default TaskCreateContainer;
