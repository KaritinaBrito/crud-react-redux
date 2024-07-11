import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../features/tasks/taskSlice';
import { Link } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

const TaskList = () => {
    const tasks = useSelector(state => state.tasks);
    const [] = useState();
    const dispatch = useDispatch();

    const handleDelte = (id) => {
        dispatch(deleteTask(id));
    }

    return (
        <div className='w-4/6'>
            <header className='flex justify-between items-center py-4 mb-4'>
                <h1 className='font-bold text-lg text-purple-base'>Task {tasks.length}</h1>
                <Link to='/create-task' className='text-center py-1 px-3 border-2 border-purple-base rounded-md hover:bg-purple-base hover:text-white'>Create Task</Link>
            </header>
            <div className='w-full grid gap-3 lg:auto-cols-max lg:justify-between lg:grid-cols-3'>
                {tasks.map((task) => (
                    <section key={task.id} className='p-4 bg-blue-card rounded-tr-lg drop-shadow-xl'>
                        <div className='flex justify-end gap-4'>
                            <button onClick={() => handleDelte(task.id)} className='p-1 rounded-md hover:bg-white'>
                                <MdDelete className='text-gray-zinc hover:text-gray-base' />
                            </button>
                            <Link to={`/edit-task/${task.id}`} className='hover:bg-white p-1 rounded-md'>
                                <MdEdit className='text-gray-zinc hover:text-gray-base' />
                            </Link>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h3 className='font-bold text-lg'>{task.title}</h3>
                            <p>{task.description}</p>
                        </div>
                    </section>
                ))}
            </div>
        </div>
    )
}

export default TaskList;