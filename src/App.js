import './App.css';

//delacre string with "", number with {}
// function App() {
  //   return (
    //     <div className="App">
    //       <User name="Aiman" age={31} email="aiman@aiman.com" />
    //       <User name="Najiha" age={30} email="najiha@najiha.com"/>
    //       <User name="Anggun" age={3} email="anggun@anggun.com"/>
    //     </div>
    //   );
    // }
    
//creating component and props (component must start with Capital Letter)
// const User = (props) => {
  //   return (
    //     <div>
    //       <h1>{props.name}</h1>
    //       <h1>{props.age}</h1>
    //       <h1>{props.email}</h1>
    //     </div>
    //   )
    // }
    
    //exercise1
//     function App() {
//       return (
//     <div className="App">
//       <Job salary={9000} position="Senior SDE" company="Amazon" />
//       <Job salary={12000} position="Junior SDE" company="Google" />
//       <Job salary={10000} position="Project Manager" company="Netflix" />
//     </div>
//   );
// }

// const Job = (props) => {
//   return (
//     <div>
//     <h1>{props.salary}</h1>
//     <h1>{props.position}</h1>
//     <h1>{props.company}</h1>
//   </div>
// )
// }

// if else statement with Ternary Operator {var = ? (action) : (action)
// ? (action) is true(if) and : (action) is false(else)
// {var && (action)} use when you dont need else statement
// change isGreen to flase to see the changes
// function App() {
//    const age = 17;
//    const isGreen = true;
//
//     return (
//         <div className="App">
//           {age >= 18 ? (<h1> OVER AGE</h1>) : (<h1> UNDER AGE</h1>)}
//           <h1 style={{ color: isGreen ? "green" : "red"}}> THIS HAS COLOR</h1>
//           {isGreen && <button> THIS IS A BUTTON</button>}
//         </div>
//       );
//     }

// rendering/looping list of arrays using map() function
// for better documentation, you need to separate components into other file and import it here
// import {User} from "./User";


// function App() {
//    const users = [
//     { name: "Aiman", age: 31},
//     { name: "Fatin", age: 30},
//     { name: "Anggun", age: 3},
//     { name: "Iman", age: 1},
//    ];

//     return (
//         <div className="App">
//           {users.map((user) => {
//             return <User name={user.name} age={user.age}/>   
//           })}
//         </div>
//       );
//     }

  //exercise2
//   function App() {
//     const planets = [
//      { name: "Mars", isGasPlanet: false},
//      { name: "Earth", isGasPlanet: false},
//      { name: "Jupiter", isGasPlanet: true},
//      { name: "Venus", isGasPlanet: false},
//      { name: "Neptune", isGasPlanet: true},
//      { name: "Uranus", isGasPlanet: true},
//     ];

// //comment either one line 100 or 101 to see different result
//     return (
//       <div className="App">
//         {planets.map((planet) => 
//         // planet.isGasPlanet && <h1> {planet.name}</h1>
//         !planet.isGasPlanet && <h1> {planet.name}</h1>  
//         )}
//       </div>
//     );
//   }

// // useState Hook
// //example1
// import {useState} from "react";

// function App() {
//   const [age, setAge] = useState(0);

//   const increaseAge = () => {
//     setAge(age + 1)
//   }

//   return (
//     <div className="App">
//       {age}
//       <button onClick={increaseAge}> Increase Age</button>
//     </div>
//   )
// }

// //example2
// import {useState} from "react";

// function App() {
//   const [inputValue, setInputValue] = useState("");
// //for onChange event listener always return arguement to "event"
// //event.target.value is a selector to a value you put inside the input 
//   const hanldeInputChange = (event) => {
//     setInputValue(event.target.value);
//   }

//   return (
//     <div className="App">
//       <input type="text" onChange={hanldeInputChange}/>
//       {inputValue}
//     </div>
//   );
// }

// //example3
// import {useState} from "react";

// function App() {
//   const [showTex, setShowText] = useState(true);
// //declare function directly inside event listener
//   return (
//     <div className="App">
//       <button onClick={() => {setShowText(!showTex)}}> Show/Hide</button>
//       {showTex && <h1> HI MY NAME IS AIMAN</h1>}
//     </div>
//   );
// }

// //example4
// import {useState} from "react";

// function App() {
//   const [textColor, setTextColor] = useState("black");
// //always use style={{properties: value}} when styling css
//   return (
//     <div className="App">
//       <button 
//       onClick={() => {
//         setTextColor(textColor === "black" ? "red" : "black")
//         }}> 
//         Change Text Color
//         </button>
//       <h1 style={{color: textColor}}> HI MY NAME IS AIMAN</h1>
//     </div>
//   );
// }

// //exercise3
// import {useState} from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div className="App">
//       <button onClick={() => {
//         setCount(count + 1)
//       }}> Increase </button>

//       <button onClick={() => {
//         setCount(count - 1)
//       }}> Decrease </button>

//       <button onClick={() => {
//         setCount(0)
//       }}> Set to Zero </button>
//       {count}
//     </div>
//   );
// }

//exercise3
import {useState} from "react";
import {Task} from "./Task";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

//...(3 dots) keep all object inside the variable. in this case keep all the array list and add a new array.
//insert id to differenciate object because some of it may have a same value.
//conditional on id because in the beginning the array is empty. Need to add 1 value fisrt before adding another value.
  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList([...todoList, task]);
  };

  // const newTodoList = todoList.filter((task) => {
    //if (task === taskName) {
      //return false;
      //} else {
        //return true;
    // }
    // });
    //   setTodoList(newTodoList);
    // };
    //this is the simplest way to write. Actual code is up here
    //id in the arguement because we are deleting task according to their id.
  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
    };

  const completeTask = (id) => {
    setTodoList(todoList.map((task) => task.id === id ? {...task, completed: true} : task ))
  }

  return (
    <div className="App">
        <div className="addTask">
          <input onChange={handleChange} />
          <button onClick={addTask}> Add Task</button>
        </div>
        <div className="list">
        {todoList.map((task) => {
          return <Task 
          taskName={task.taskName}
          id={task.id}
          deleteTask={deleteTask}
          completed={task.completed}
          completeTask={completeTask}/>;
          })}
        </div>
    </div>
  );
}

export default App;
