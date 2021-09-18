import React from 'react'
import {useState} from 'react'


function Body() {
    const [toDos,setToDos] = useState([])
  const [toDo,setToDo] = useState('')
  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      setToDos([...toDos,{id:Date.now() ,text: toDo, status: false}])
      setToDo("");
    }
}
  const addTask = ()=>{
    setToDos([...toDos,{id:Date.now() ,text: toDo, status: false}])
      setToDo("");
  }

  const deleteTodo = idToDelete => setToDos(currentTodos => currentTodos.filter(toDo => toDo.id !== idToDelete))
    return (
        <div className="bodyoftodo"> 
          <div className="input">
         
        <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." onKeyPress={handleKeyPress} />
        <i onClick={addTask} className="fas fa-plus" ></i>
    
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
    )
}

export default Body
