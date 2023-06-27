import React, {useState} from 'react';
import './ToDo.css'

function ToDo() {
    const [task, setTask] = useState("");
    const [allTasks, setAllTasks] = useState([]);

    function handleChange(e) {
        setTask(e.target.value);
    }

    function handleClick() {
        setAllTasks(prev => [task, ...prev]);
    }

    function handleDelete(i) {
        setAllTasks(prev =>(
            prev.filter(task => allTasks[i] !== task)
        ));
    };

    const tasks = allTasks.map((task, i) => {
        return (
            <div key={i} className='one-task'>
                <p>{task}</p>
                <button onClick={() => handleDelete(i)}>Delete</button>
            </div>
        );
    });

    return(
        <div className='container'>
            <div className='first-container'>
                <input onChange={handleChange} value={task} className='taskInput' placeholder='Enter a task...' />
                <button onClick={handleClick} className='addTask'>Add</button>
            </div>
            <div className='second-container'>
                {tasks}
            </div>
        </div>
    );
};

export default ToDo;