/* eslint-disable react/prop-types */
function TaskRow({ task, toggleTask }) {
  return (
    <tr key={task.name} className="task">
      <td>{task.name}</td>
      <td>
        <input
          className="taskCheck"
          type="checkbox"
          checked={task.done}
          onChange={() => toggleTask(task)}
        />
      </td>
    </tr>
  );
}

export default TaskRow;
