import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleCompleteTask } from '../utils/taskList';
import { faSquareXmark, faTrashCan, faPenToSquare, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
export const TaskList = (props) => {
  const dispatch = useDispatch();
  // The editTask function to edit an existing task in the Redux store
  const editTask = (id, text) => {
    // Set the taskInput state and the editTaskObj state
    props.settaskInput(text);
    props.setedit({ id: id, text: text });
  }
  // The deleteTask function to delete an existing task in the Redux store
  const deleteTaskFunction = (id) => {
    dispatch(deleteTask(id));
    // Reset the editTaskObj state to null if fromHome is true
    props.fromHome && props.setedit(null);
  }
  // Toggle between showing the completed tasks or not
  const toggleCompleteTaskFunction = (id, isCompleted) => {
    dispatch(toggleCompleteTask({ id, isCompleted }));
  }
  return (
    <>
      <div className={` w-[35rem] max-sm:w-[95%] group ${props.task.isCompleted ? "bg-green-600" : "bg-red-600"} hover:bg-white min-h-8 rounded-md mt-2 font-normal text-base p-4 flex flex-row justify-between items-center`}>
        <p className='group-hover:text-[#5529dc] break-all'>{props.task.text}</p>
        <div className='flex flex-row gap-6 pl-1'>
          <button onClick={() => toggleCompleteTaskFunction(props.task.id, props.task.isCompleted)}>
            <FontAwesomeIcon icon={props.task.isCompleted ? faSquareCheck : faSquareXmark} color='white' className={`size-6 fa-2x ${props.task.isCompleted ? "group-hover:text-green-500" : "group-hover:text-red-500"} group-hover:cursor-pointer`} />
          </button>
          {/* If this component is rendered in home then shows the button else not */}
          {props.fromHome && <button onClick={() => editTask(props.task.id, props.task.text)}>
            <FontAwesomeIcon icon={faPenToSquare} color='white' className='size-6 fa-2x group-hover:text-blue-500 group-hover:cursor-pointer' />
          </button>}
          <button onClick={() => deleteTaskFunction(props.task.id)}>
            <FontAwesomeIcon icon={faTrashCan} color='white' className='size-6 fa-2x group-hover:text-rose-900  group-hover:cursor-pointer' />
          </button>
        </div>
      </div>
    </>
  )
}
