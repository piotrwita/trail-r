import { tasks as tasksData }  from '../data/tasks';
import { useState } from 'react';

export function TasksList() {
    const [tasks, setTasks] = useState(tasksData);
    const handleAddTask = (title: string) => {
        const newTasks = [...tasks];
        newTasks.push({
            title: title,
            description: 'desc8',
            completed: false
        })
        setTasks(newTasks);
        console.log(tasks);
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
            <button onClick={() => handleAddTask('new added task')}>Add new task</button>
            { tasks.length === 0 ? (
                <div>Empty tasks list.</div>
                ) : (
            <ul>
                {tasks.map(({title, completed}, index) => (
                    <li key={index} style={{textDecoration: completed ? 'line-through' : 'none'}}>
                        {title}
                        <button onClick={() => handleDeleteTask(index)}>Delete</button>
                        <button onClick={() => handleToggleTaskState(index)}>{completed ? 'Undo' : 'Complete'}</button>
                    </li>
                ))}
            </ul>
            )}
        </>
    )
}