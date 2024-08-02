import TaskTypes from "./task";

const LS_key = "tasklist"
const Index_key = "index";

const ToDoServeices ={

    // get index
    getIndex: (): number =>{
        const index = localStorage.getItem(Index_key);
        return index ? parseInt(index,10): 0;
    },

    // getList
    getList: (): TaskTypes[] =>{
        const todoStorage = localStorage.getItem(LS_key);
        return todoStorage ? JSON.parse(todoStorage): [];

    },

    // add tasks to list
    addTask: (text:string): TaskTypes => {
        const taskList = ToDoServeices.getList();
        const index = ToDoServeices.getIndex();
        const newTask: TaskTypes = {id:index, text, status: false}; 
        const updatedList = [...taskList,newTask];
        localStorage.setItem(Index_key,(index +1).toString())
        localStorage.setItem(LS_key,JSON.stringify(updatedList))
        
        return newTask
    },
    
    // update task form list
    updateTask: (task:TaskTypes): TaskTypes => {
        const taskList = ToDoServeices.getList();
        const updatedList = taskList.map((t) => t.id === task.id ? taskList : t);

        localStorage.setItem(LS_key,JSON.stringify(updatedList));
        
        return task
    },
    
    // Delete task form getList
    deleteTask: (id:number): void =>{
        const taskList = ToDoServeices.getList();
        const updatedList = taskList.filter((t) => t.id !== id)
        
        localStorage.setItem(LS_key,JSON.stringify(updatedList));


    } 


}

export default ToDoServeices