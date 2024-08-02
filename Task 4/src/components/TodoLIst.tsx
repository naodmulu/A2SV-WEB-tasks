import { useState } from 'react';
import TaskTypes from '../task';
import ToDoServices from '../ToDoServices';
import TodoForm from './TodoForm';
import "../components_CSS/TodoList.css"

const TodoList = () => {

    const [todos, setTodos] = useState<TaskTypes[]>(ToDoServices.getList());
    const [taskEditedId, setTaskEditedId] = useState<number | null>(null);
    const [taskEditedText, setTaskEditedText] = useState<string>("");

    // handle Editing
    const handleEditStart = (id: number, text: string) => {
        setTaskEditedId(id);
        setTaskEditedText(text);
    };
    
    const handleEditCancel = () => {
        setTaskEditedId(null);
        setTaskEditedText("");
    };

    const handleEditSave = (id: number) => {
        if (taskEditedText.trim() !== "") {
            const updatedTodo = ToDoServices.updateTask({ id, text: taskEditedText, status: false });

            setTodos((previousTodo) => previousTodo.map((todo) => (todo.id === id ? updatedTodo : todo)));

            setTaskEditedId(null);
            setTaskEditedText("");
        }
    };

    // handle deleting
    const handleDelete = (id: number) => {
        ToDoServices.deleteTask(id);
        setTodos((previousTodo) => previousTodo.filter((todo) => (todo.id !== id)));
    };

    return (
        <div className="todoContainer">
            <div className="todoInput">
                <TodoForm setTodos={setTodos} />
            </div>

            {todos.map((task) => (
                <div className="items" key={task.id}>
                    {taskEditedId === task.id ? (
                        <div className="editedText">
                            <input 
                                type="text" 
                                value={taskEditedText} 
                                onChange={(e) => setTaskEditedText(e.target.value)}
                                autoFocus={true} 
                            />
                            <button onClick={() => handleEditSave(task.id)}>Save</button>
                            <button onClick={handleEditCancel}>Cancel</button>
                        </div>
                    ) : (
                        <div className="taskItem">
                            <span>{task.text}</span>
                            <div className="buttonGroup">
                                <button onClick={() => handleEditStart(task.id, task.text)}>Edit</button>
                                <button onClick={() => handleDelete(task.id)}>Delete</button>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default TodoList;
