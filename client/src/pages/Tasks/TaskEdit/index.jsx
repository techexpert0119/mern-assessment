import React from "react";
import { useParams } from "react-router-dom";
import { TaskEditContainer } from "../../../container";

const TaskEditPage = () => {
  const { _id } = useParams();
  return <TaskEditContainer _id={_id} />;
};

export default TaskEditPage;
