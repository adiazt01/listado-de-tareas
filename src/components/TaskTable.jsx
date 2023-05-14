/* eslint-disable react/prop-types */
import TaskRow from "./TaskRow";

function TaskTable({ tasks, toggleTask, showCompleted, tableName }) {
  const taskTableRow = (doneValue) =>
    tasks
    .filter(task => task.done==doneValue)
    .map((task) => (
      <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
    ));

  return (
    <table>
      <thead>
        <tr>
          <th>{tableName}</th>
        </tr>
      </thead>
      <tbody>{taskTableRow(showCompleted)}</tbody>
    </table>
  );
}

export default TaskTable;
