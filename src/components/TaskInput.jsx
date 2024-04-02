import { faEdit, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TaskList } from "./TaskList";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask, removeAll } from "../utils/taskList";
import toDo from '../images/to-do-list.png';

export const TaskInput = () => {
    //Value of Input
    const [taskInput, settaskInput] = useState("");
    //Getting the tasks to filter from store
    const [editTaskObj, seteditTaskObj] = useState(null);
    const dispatch = useDispatch();
    // Getting all tasks from store
    const tasks = useSelector((state) => state.taskList);
    // Function for adding task
    const addTaskFunction = () => {
        if (taskInput.trim() === "") return;
        dispatch(addTask({ text: taskInput, isCompleted: false }));
        settaskInput("");
    };
    // Function for editing task
    const editTaskFunction = () => {
        dispatch(editTask({ id: editTaskObj.id, text: taskInput }));
        settaskInput("");
        seteditTaskObj(null);
    }
    // Function for removing all tasks
    const removeAllFunction = () => {
        dispatch(removeAll());
    }
    return (
        <>
            <figure className="flex flex-col gap-3 mt-24 justify-center items-center">
                <img src={toDo} alt="to-do-list" className="size-20" />
                <figcaption className='font-normal text-xl'>Add Task Here</figcaption>
            </figure>
            <form action="/" onSubmit={(e) => { e.preventDefault() }} className="flex flex-row bg-white h-14 k mt-4 mb-11 rounded-md shadow-sm font-normal leading-4 w-[35rem] max-sm:w-[95%]">
                <input
                    type="text"
                    placeholder="Add Task"
                    value={taskInput}
                    onChange={(e) => settaskInput(e.target.value)}
                    className="w-full placeholder:text-slate-400 text-black pl-6 pr-2 focus:outline-none rounded-l-md"
                />
                {!editTaskObj ? (
                    <button onClick={() => addTaskFunction()}>
                        <FontAwesomeIcon
                            icon={faPlus}
                            color="black"
                            className="fa-2x ease-linear duration-150 hover:text-green-500 pr-2"
                        />
                    </button>
                ) : (
                    <button onClick={() => editTaskFunction()}>
                        <FontAwesomeIcon
                            icon={faEdit}
                            color="black"
                            className="fa-2x ease-linear duration-150 hover:text-green-500 pr-2"
                        />
                    </button>
                )}
            </form >
            {
                //rendering all tasks
                tasks.map((task) => (
                    <TaskList task={task} key={task.id} settaskInput={settaskInput} setedit={seteditTaskObj} fromHome={true} />
                ))
            }
            < div className="flex h-12 justify-center gap-x-6 mt-4 dark:text-white" >
                <button onClick={() => removeAllFunction()} className="flex h-min items-center justify-center ring-none rounded-lg shadow-lg font-semibold py-2 px-4 font-dm focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-violet-500 border-b-violet-700 ring-white text-white border-b-4 hover:border-0 hover:mt-1 duration-75 ease-linear focus-visible:outline-violet-500 text-sm sm:text-base">
                    Remove All
                </button>
            </div >
        </>
    );
};
