"use client";
import { useState } from "react";
import "./page.css";
const Page = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, description }]);
    setTitle("");
    setDescription("");
    console.log(mainTask);
  };

  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i);
    setMainTask(copyTask);
  };

  let renderTask = <h2>No Task Available</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="col">
          <div className="tasks">
            <h4 id="title">
              {i + 1}. {t.title}
            </h4>
            <h5 id="description">{t.description}</h5>
          </div>
          <button
            onClick={() => {
              deleteHandler(i);
            }}
            id="delBtn"
          >
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="input"
          placeholder="Enter Title Here"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>

        <input
          id="des"
          type="text"
          className="input"
          placeholder="Enter Description Here"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></input>

        <button className="addBtn">Add Task</button>
      </form>

      <hr />
      <div className="div">
        <ul>{renderTask}</ul>
      </div>
    </div>
  );
};

export default Page;
