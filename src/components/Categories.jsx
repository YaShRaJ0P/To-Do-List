import { TaskList } from './TaskList';
import { useSelector } from 'react-redux';
export const Categories = () => {
    // Getting tasks from the Redux store using the useSelector hook
    const tasks = useSelector((state) => state.taskList);
    return (
        <section className='flex flex-col gap-6 mt-12'>
            <div>
                <h2 className='text-2xl font-bold'>Pending Tasks</h2>
                {/* Rendering the TaskList components for the pending tasks */}
                {tasks.map((task) => (
                    !task.isCompleted && <TaskList task={task} key={task.id} fromHome={false} />
                ))}
                {/* if there is no pending tasks, show no pending tasks */}
                {tasks.filter((task) => !task.isCompleted).length === 0 && <p className=' text-slate-500 text-sm font-normal'>No pending tasks.</p>}
            </div>
            <div>
                <h2 className='text-2xl font-bold'>Completed Tasks</h2>
                {/* Rendering the TaskList components for the completed tasks */}

                {tasks.map((task) => (
                    task.isCompleted && <TaskList task={task} key={task.id} show={false} />
                ))}
                {/* if there is no completed tasks, show no completed tasks */}

                {tasks.filter((task) => task.isCompleted).length === 0 && <p className=' text-slate-500 text-sm font-normal'>No completed tasks.</p>}
            </div>
        </section>
    )
}
