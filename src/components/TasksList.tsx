import { tasks as tasksData }  from '../data/tasks';
import { useRef, useState } from 'react';

export function TasksList() {
    const [tasks, setTasks] = useState(tasksData);
    const titleRef = useRef<HTMLInputElement | null>(null);
    const descriptionRef = useRef<HTMLInputElement | null>(null);
    const handleAddTask = () => {
        const newTasks = [...tasks];
        newTasks.push({
            title: titleRef.current?.value ?? '',
            description: descriptionRef.current?.value ?? '',
            completed: false
        })
        setTasks(newTasks);
        console.log(tasks);
        console.log(titleRef);
    };
    const handleToggleTaskState = (index: number) => {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    };
    const handleDeleteTask = (index: number) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    return (
        <>
            <input type='text' id='title' ref={titleRef}/>
            <input type='text' id='description' ref={descriptionRef}/>
            <button onClick={handleAddTask}>Add new task</button>
            {tasks.length === 0 ? (
                <div>Empty tasks list.</div>
            ) : (
                <ul>
                    {tasks.map(({title, description, completed}, index) => (
                        <li key={index} style={{textDecoration: completed ? 'line-through' : 'none'}}>
                            {title} {description}
                            <button onClick={() => handleDeleteTask(index)}>Delete</button>
                            <button
                                onClick={() => handleToggleTaskState(index)}>{completed ? 'Undo' : 'Complete'}</button>
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}