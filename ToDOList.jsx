import React,{ userState } from "react"


function ToDoList(){


      //here we will have two state variables 1.Consts and tasks-tasks will be an array
      const[tasks, setTasks] = userState([]);
      const[newTask, setNewTask] = userState("");

      //next we will create a list of functions we will need throughout the program


      //we will need a function to handle input change
       //This function will be used by the text box we will use to input tasks


      function handleInputChange (event){
        setNewTask(event.target.value)

      }

      //next function is for adding the tasks
      function addTask (){

       //here we will now code the logic that is going to help a user insert a task...
       //in the block if we will be checking for blank entries thus a user cannot insert or add a blank


         if(newTask.trim()!==""){
            setTasks(t =>[...t,newTask]);
            setNewTask("")
         }

      }
      //next function is to delete task...here we will need to get the array item by index
      function deleteTask(index){
         const updateTasks = tasks.filter((element, i) => i  !== index);
           setTasks(updateTasks)
      }
     //next we will need a function to move task up.also here we will need to get item
      function moveTaskUp(index) {
         if(index>0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] =
            [updatedTasks[index - 1], updatedTasks[index]];

            setTasks(updatedTasks);
         }

      }
     //next we will need a function to move task down.also here we will need to get item

      function moveTaskDown (index){
         if(index<){
            const updatedTasks =[...tasks];
            [[index], updatedTasks[index=1]]=
            [updatedTasks[index=1],updatedTasks[index]];

            setTasks(updatedTasks);
         }

      }

      }
    return(
    <div className="to-do-list">
       <h1>To-Do-List</h1>

       <div>
          //this element will help us insert tasks to be added on your List
          //for readability we'LL have the attributes be put on seperate lines
          <input type="text"
          placeholder="Enter a Task....." 

          //Here we set the value of this textbox to be javascript const we declared earlier "new task"
          value={newTask}

          //  When we type within the new element we will use the onChange event handlerand it will be equal to a callback a function we created earler function handleInputChange
          
          onChange={handleInputChange}/>


          <button className="add-button" 
               onClick={addTask}>
                Add

          </button>

       </div>

       <ol>
         //here we will embed some javascript
         {tasks.map((task,index)=>
         <li key={index}>
            <span className="text">{task}</span>
            //this button will delete a task
            <button
             className="delete-button"
            onClick={ ()=>deleteTask(index)}>
               Delete
            </button>
            //this button will move a task up
            <button
             className="delete-button"
            onClick={ ()=>deleteTask(index)}>
               ☝️
               Delete
            </button>


            <button
             className="delete-button"
            onClick={ ()=>deleteTask(index)}>
               Delete
               👇
            </button>


         </li>
         )}
       </ol>
    </div>
        
    
    );
}


export default ToDoList