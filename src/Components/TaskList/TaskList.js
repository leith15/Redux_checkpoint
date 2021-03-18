import { React, useState } from "react";
import Task from "../Task/Task";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./TaskList.css";

const TaskList = () => {
  const taskList = useSelector((state) => state.taskList);

  const [filter, setfilter] = useState(0);

  return (
    <div>
      <h1> Your Tasks</h1>
      <div className="buttons">
        <Button variant="outline-danger" onClick={() => setfilter(1)}>
          Done Tasks
        </Button>
        <Button variant="outline-danger" onClick={() => setfilter(2)}>
          None Done Tasks
        </Button>
        <Button variant="outline-danger" onClick={() => setfilter(0)}>
          All Tasks{" "}
        </Button>
      </div>
      <div className="list">
        <ol className="gradient-list">
          {filter === 1
            ? taskList
                .filter((el) => el.done === true)
                .map((el) => <Task task={el} key={el.id} />)
            : filter === 2
            ? taskList
                .filter((el) => el.done === false)
                .map((el) => <Task task={el} key={el.id} />)
            : taskList.map((el) => <Task task={el} key={el.id} />)}
        </ol>
      </div>
    </div>
  );
};

export default TaskList;
