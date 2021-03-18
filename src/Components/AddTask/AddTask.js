import { React, useState } from "react";
import { useDispatch } from "react-redux";
import "./AddTask.css";

import { addTask } from "../../Redux/Action/Action";
import "bootstrap/dist/css/bootstrap.css";

const AddTask = () => {
  const [name, setName] = useState("");
  function handleChangeName(e) {
    setName(e.target.value);
  }

  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <section className="get-in-touch">
          <h1 className="title">Get in touch</h1>
          <form className="contact-form row">
            <div className="form-field col-lg-12">
              <input
                id="message"
                className="input-text js-input"
                type="text"
                value={name}
                onChange={handleChangeName}
                placeholder="Enter task title ..."
              />
            </div>
            <div className="form-field col-lg-12">
              <button
                type="button"
                className="btn btn-outline-primary btn-lg "
                onClick={(e) => {
                  let a = name;
                  if (a !== "") {
                    e.preventDefault();
                    dispatch(
                      addTask([{ id: Math.random(), name: name, done: false }])
                    );
                    setName("");
                  } else {
                    alert("you should enter the task name ");
                  }
                }}
              >
                Add
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AddTask;
