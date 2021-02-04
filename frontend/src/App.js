import "./App.scss";
import { useState } from "react";

const todoItems = [
  {
    id: 1,
    title: "Go to Market",
    description: "Buy ingredients to prepare dinner",
    completed: true,
  },
  {
    id: 2,
    title: "Study",
    description: "Read Algebra and History textbook for upcoming test",
    completed: false,
  },
  {
    id: 3,
    title: "Sally's books",
    description: "Go to library to rent sally's books",
    completed: true,
  },
  {
    id: 4,
    title: "Article",
    description: "Write article on how to use django with react",
    completed: false,
  },
];

const App = () => {
  const [viewCompleted, setViewCompleted] = useState(false);
  const [todoList, setTodoList] = useState(todoItems);

  const displayCompleted = (status) => {
    if (status) {
      return setViewCompleted(true);
    }
    return setViewCompleted(false);
  };

  const renderTabList = () => {
    return (
      <div className="my-5 tab-list">
        <span
          onClick={() => displayCompleted(true)}
          className={viewCompleted ? "active" : ""}
        >
          complete
        </span>
        <span
          onClick={() => displayCompleted(false)}
          className={viewCompleted ? "" : "active"}
        >
          incomplete
        </span>
      </div>
    );
  };

  const renderItems = () => {
    const newItems = todoList.filter(
      (item) => item.completed === viewCompleted
    );

    return newItems.map((item) => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span
          className={`todo-title mr-2 ${viewCompleted ? "completed-todo" : ""}`}
        >
          {item.title}
        </span>

        <span>
          <button className="btn btn-secondary mr-2">Edit</button>
          <button className="btn btn-danger">Delete</button>
        </span>
      </li>
    ));
  };

  return (
    <main className="content">
      <h1 className="text-white text-uppercase text-center my-4">Todo app</h1>
      <div className="row">
        <div className="col-md-6 col-sm-10 mx-auto p-0">
          <div className="card p-3">
            <button className="btn btn-primary">Add task</button>
          </div>
          {renderTabList()}
          <ul className="list-group list-group-flush">{renderItems()}</ul>
        </div>
      </div>
    </main>
  );
};

export default App;
