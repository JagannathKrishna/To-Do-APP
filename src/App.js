import './App.css';
import {useState} from 'react'
import { Button } from 'react-bootstrap';



function App() {
  const [toDos,setToDos] = useState([])
  const [toDo,setToDo] = useState('')
  const deleteTodo = idToDelete => setToDos(currentTodos => currentTodos.filter(toDo => toDo.id !== idToDelete))

  return (
    <div className="app">
     
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <Button>Test Button</Button>
      <div className="subHeading">
        <br />
        <h2>W</h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setToDos([...toDos,{id:Date.now() ,text: toDo, status: false}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDos.map((obj)=>{
          return(
            <div className="todo">
              <div className="left">
                <input onChange={(e)=>{
                  console.log(e.target.checked);
                  console.log(obj);
                  setToDos(toDos.filter(obj2=>{
                    if(obj2.id===obj.id){
                      obj2.status=e.target.checked
                    }
                    return obj2
                  }))
                }} value={obj.status} type="checkbox" name="" id="" />
                <p className='todoName' >{obj.text}</p>
              </div>
              
              <div className="right">
                <i onClick ={() => deleteTodo(obj.id)} className="fas fa-trash"></i>
              </div>
            </div>)
        }) }
        
        
        {
          toDos.map((obj)=>{
            if(obj.status){
              return(<h1 className="finished" >{obj.text}</h1>)
            }
            return null
          })
        }
        
        
        
      </div>
    </div>
  );
}



export default App;
