import TodoLIst from "./components/TodoLIst"
import "./App.css"
function App() {

  return (
    <div className="container">
      
      <div className="top">
        <h1>Tasks ToDo</h1>
      </div>
      
      <div className="bottom">
        <TodoLIst/>
      </div>
    
    </div>
  )
}

export default App
