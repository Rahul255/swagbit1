import React,{useState} from 'react';
import './App.css'

function App() {
  const [toDos,setTodos] = useState([])
  const [todo,setTodo] = useState('')
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + '/' + dd + '/' + yyyy;


  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Today's Date: {today}</h2>
      </div>
      
      <div className="input">
        <input value={todo} onChange={(event) => setTodo(event.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setTodos([...toDos,{id:Date.now(), text: todo, status:false}])} className="fas fa-plus"></i> 
      </div>
      <div className="todos">
        {
          
          toDos.map((obj)=>{
            return(
            <div className="todo">
              <div className="left">
                <input onChange={(event)=>{
                  console.log(event.target.checked)
                  console.log(obj)
                  setTodos(toDos.filter(obj2=>{
                    if(obj2.id === obj.id){
                      obj2.status = event.target.checked
                    }
                    return obj2
                  }))
                }} value={obj.status} type="checkbox" name="" id="" />
                <p>{obj.text}</p>
              </div>
              <div className="right">
              
                <i onClick={deleteTodo} className="fas fa-times"></i>
              </div>
            </div>
            )
          })
        
        }
        {
          toDos.map((obj)=>{
            if(obj.status){
              return(<h1>{obj.text}</h1>)
            }
            return null
          })
        }
      </div>
    </div>
  );
}

export default App;
