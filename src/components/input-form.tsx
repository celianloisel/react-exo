import React, {useRef, useState} from "react";
import {FaPlus} from "react-icons/fa";
import Divider from "./divider";

export default function InputForm() {
    const [tasks, setTasks] = useState<{ text: string; checked: boolean }[]>([]);
    const taskInputRef = useRef<HTMLInputElement | null>(null);

    const addTask = () => {
        if (taskInputRef.current) {
            const newTask = taskInputRef.current.value;
            if (newTask) {
                setTasks([...tasks, {text: newTask, checked: false}]);
                taskInputRef.current.value = "";
            }
        }
    };

    const toggleTask = (index: number) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].checked = !updatedTasks[index].checked;
        setTasks(updatedTasks);
    };

    const renderTaskList = (checked: boolean) => {
        return tasks.map((task, index) => {
            if (task.checked === checked) {
                return (
                    <div className="App-tasks-list-item" key={index}>
                        <input
                            type="checkbox"
                            checked={task.checked}
                            onChange={() => toggleTask(index)}
                        />
                        <p>{task.text}</p>
                    </div>
                );
            }
            return null;
        });
    };

    return (
        <div className="App-tasks">
            <div className="App-tasks-input">
                <input id="input-task" ref={taskInputRef}/>
                <button onClick={addTask}>
                    <FaPlus/>
                </button>
            </div>
            <div className="App-tasks-list">{renderTaskList(false)}</div>
            <Divider/>
            <div className="App-tasks-finish">{renderTaskList(true)}</div>
        </div>
    );
}
