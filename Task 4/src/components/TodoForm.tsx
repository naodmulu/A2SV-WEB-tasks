import { useState,Dispatch,SetStateAction } from "react"
import TaskTypes from "../task"
import ToDoServeices from "../ToDoServices"
import "../components_CSS/TodoForm.css"

interface PropTypes {

    setTodos: Dispatch<SetStateAction<TaskTypes[]>>;
}

function TodoForm({ setTodos }) {

    const [newTaskText, setNewTaskText] = useState<string>("");

    // handle adding task to list
    const handleAddTask = () => {
        if (newTaskText.trim() !== "") {
            const newTask = ToDoServeices.addTask(newTaskText);
            const inputField = document.getElementById("taskInputForm")
            setTodos((previousTodo) => [...previousTodo, newTask]);
            inputField.value = "";
        };
    };

    return (
        <div className="inputForm">
            <input type="text" className="taskInput"
                onChange={(e) => setNewTaskText(e.target.value)} id = "taskInputForm"/>
            <button 
            onClick={() => {handleAddTask();
                            }}>
                Add</button>
        </div>
    );
}

export default TodoForm