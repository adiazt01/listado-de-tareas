import {FaTrash} from 'react-icons/fa'

/* eslint-disable react/prop-types */
function VisibiltyControl({ setShowCompleted, cleanTask, isChecked }) {
  function HandleDelete() {
    if (window.confirm("are you sure you want to delete it")) {
      cleanTask();
    }
  }

  return (
    <div className='VisibiltyControl'>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setShowCompleted(e.target.checked)}
      />
      <label>Show Tasks Done</label>
      <button onClick={HandleDelete}><FaTrash/></button>
    </div>
  );
}

export default VisibiltyControl;
