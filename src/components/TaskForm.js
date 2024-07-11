import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { useNavigate, useParams, Link } from 'react-router-dom';

import { addTask, editTask } from '../features/tasks/taskSlice';


const TaskForm = () => {
    const [task, setTask] = useState({
        title: "",
        description: ""
    });

    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks);
    const navigate = useNavigate();
    const params = useParams();

    const handleChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value,
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        if (params.id) {
            dispatch(editTask({ ...task, id: params.id }));
        } else {
            dispatch(addTask({
                ...task,
                id: uuid(),
            }));
        }
        navigate('/');
    }

    useEffect(() => {
        if (params.id) {
            setTask(tasks.find((task) => task.id === params.id));
            console.log(task);
        }
    }, [params, tasks]);

    return (
        <div className='flex flex-col w-full h-full justify-center items-center'>
            <form onSubmit={handleSubmit} className='flex flex-col w-1/3'>
                <input
                    name='title'
                    type='text'
                    placeholder='Title'
                    onChange={handleChange}
                    value={task.title}
                    autoFocus
                    className='text-lg font-bold w-full'
                />
                <textarea
                    name='description'
                    placeholder='Write a description'
                    onChange={handleChange}
                    value={task.description}
                    className='text-base w-full h-'
                ></textarea>
                <div className='flex justify-between mt-6 gap-3'>
                    <button className='w-full text-center px-1 py-2 bg-purple-base border-none text-gray-base hover:text-white rounded-md'>Save</button>
                    <Link to={'/'} className='w-full text-center px-1 py-2 bg-gray-zinc hover:bg-purple-base hover:text-white rounded-md'>Cancel</Link>
                </div>

            </form>
        </div>
    )
}

export default TaskForm;