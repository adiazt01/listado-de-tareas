import { useState, useEffect } from "react";
import TaskCreator from "./components/TaskCreator";
import TaskTable from "./components/TaskTable";
import VisibiltyControl from "./components/VisibiltyControl";
import './styles/app.css'

function App() {
  const [tasksItems, setTasksItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  function createTask(taskName) {
    if (!tasksItems.find((task) => task.name === taskName)) {
      setTasksItems([...tasksItems, { name: taskName, done: false }]);
    }
  }

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTasksItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksItems));
  }, [tasksItems]);

  function toggleTask(task) {
    setTasksItems(
      tasksItems.map((t) => (t.name == task.name ? { ...t, done: !t.done } : t))
    );
  }

  function cleanTask() {
    setTasksItems(tasksItems.filter((task) => !task.done));
    setShowCompleted(false);
  }

  return (
    <div className="app">
      <TaskCreator createNewTask={createTask} />
      <TaskTable
        tasks={tasksItems}
        toggleTask={toggleTask}
        showCompleted={false}
        tableName='List Task'
      />
      <VisibiltyControl
        setShowCompleted={(checked) => setShowCompleted(checked)}
        cleanTask={cleanTask}
        isChecked={showCompleted}
      />

      {showCompleted === true && (
        <TaskTable
          tasks={tasksItems}
          toggleTask={toggleTask}
          showCompleted={showCompleted}
          tableName='List task done'
        />
      )}
    </div>
  );
}

export default App;
