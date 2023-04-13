import React,{useState} from 'react'
import TodoList from './TodoList';


const App = () => {
  const [task,setTask] = useState('');
  const [todos,setTodos] = useState([]);
  const handler = e => {
    setTask(e.target.value)
  }

  const submitHandler = e =>{
    e.preventDefault();
    const newtodos = [...todos, task]
    setTodos(newtodos);
    setTask('');
  }
  const deleteHandler = (indexValue) => {
    const newtodos = todos.filter((todos,index) => index !== indexValue);
    setTodos(newtodos);

  }
  return (
    <div>
      <center>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title"> TODO Management Application</h5>
            <form onSubmit={submitHandler}>
              <input size="50" type="text" name="task" value={task} onChange={handler}/> &nbsp;&nbsp;
              <input type="submit" name="add"/>
            </form>
            <TodoList TodosList = {todos} deleteHandlet = {deleteHandler}/>
          </div>
        </div>
      </center>
      
    </div>
  )
}

export default App
