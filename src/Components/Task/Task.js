import { React } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, doneTask } from "../../Redux/Action/Action";
import { Button } from "react-bootstrap";

import "./Task.css";
import "bootstrap/dist/css/bootstrap.css";
import Edit from "../Edit";
const Task = (props) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <div className="task-card">
          <span className={props.task.done ? "done" : null}>
            {props.task.name}
          </span>
          <Edit task={props.task} />
          <Button
            variant="outline-primary"
            onClick={() => dispatch(deleteTask(props.task.id))}
          >
            Delete
          </Button>
          <Button
            variant="outline-primary"
            onClick={() => dispatch(doneTask(props.task.id))}
          >
            {props.task.done ? "undone" : "done"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Task;
