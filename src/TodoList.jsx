import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){

    const [todos,setTodos]=useState([{task: "sample task",id: uuidv4(),isDone:false }]);
    const [newTodo,setNewTodo]=useState("");
    

    const addNewTask=()=>{
        setTodos([...todos,{task: newTodo,id: uuidv4(),isDone:false}]);
        setNewTodo("");
    }

    const updateTodoValue=(event)=>{
        setNewTodo(event.target.value);
    }

    const deleteTodo= (id) =>{
        setTodos(prevTodos=> todos.filter((prevTodos)=>prevTodos.id!=id));
    }
    
    // const UppercaseAll=()=>{
    //     setTodos((todos)=>
    //     todos.map((todo)=>{
    //         return{
    //             ...todo,
    //             task:todo.task.toUpperCase(),
    //         };

    //     })

    //     );
    // }

     const MarkAllDone=()=>{
        setTodos((prevTodos)=>
        prevTodos.map((todo)=>{
            return{
                ...todo,
                isDone:true,
            };

        })

        );
    }
    const  MarkAsDone=(id)=>{
        setTodos((prevTodos)=>
        prevTodos.map((todo)=>{
            if(todo.id==id){
                return{
                ...todo,
                isDone: true,
            };
        }else{
            return todo;
    }
})
);

};



    return(
        <div>
        <h1 style={{color:"green"}}>Angel Todo App</h1>
        <input placeholder="Add Task" value={newTodo} onChange={updateTodoValue}></input>
        <button onClick={addNewTask}>Add task</button>
<hr></hr>
        <h2>Task List</h2>

        <ol>

{todos.map((todo) => (
<li key={todo.id}>
    <span style={todo.isDone?{textDecorationLine:"line-through",textDecorationColor:"red"}:{}}>{todo.task}</span>
    <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
    <button onClick={()=>MarkAsDone(todo.id)}>MarkAsDone</button>
 


    </li>
))}
        </ol>
        <button onClick={MarkAllDone}>Mark All Done</button>
        </div>
    );
}
