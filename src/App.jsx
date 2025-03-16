import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/**
 * The main component of the React ToDo App.
 * 
 * @component
 * @example
 * return (
 *   <App />
 * )
 * 
 * @returns {JSX.Element} The rendered component.
 */
function App() {
  // State to manage the input value
  const [input, setInput] = useState('');
  // State to manage the list of tasks
  const [tasks, setTasks] = useState([]);

  // Function to handle changes in the input field
  function handleInputChange(event) {
    setInput(event.target.value);
  }

  // Function to add a new task to the list
  function addTask() {
    if (input.trim()) {
      setTasks([...tasks, { text: input, done: false }]); // Add new task with 'done' property
      setInput(''); // Clear the input field
    }
  }

  // Function to remove a task from the list
  function removeTask(index) {
    const newTasks = [...tasks];
    newTasks.splice(index, 1); // Remove the task at the specified index
    setTasks(newTasks); // Update the state with the new list
  }

  // Function to toggle the 'done' status of a task
  function toggleTaskDone(index) {
    const newTasks = [...tasks];
    newTasks[index] = { ...newTasks[index], done: !newTasks[index].done }; // Toggle the 'done' status
    setTasks(newTasks); // Update the state with the new list
  }

  // Function to reset the list of tasks
  function resetTasks() {
    setTasks([]); // Clear the list of tasks
  }

  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '50px', border: '1px solid #ccc', padding: '20px', width: '400px', margin: '0 auto' }}>
        <h1>React-ToDo-App</h1>
        <input 
          type="text" 
          placeholder='Enter task'  
          value={input} 
          onChange={handleInputChange} 
          style={{ padding: '10px', width: '300px', marginRight: '10px' }}
        />
        <button 
          onClick={addTask} 
          style={{ padding: '10px 20px', cursor: 'pointer', marginTop: '10px' }}
        >
          Add Task
        </button>
        <button 
          onClick={resetTasks} 
          style={{ padding: '10px 20px', cursor: 'pointer', marginTop: '10px', marginLeft: '10px' }}
        >
          Reset
        </button>
        <div style={{ marginTop: '20px' }}>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {tasks.map((task, index) => (
              <li 
                key={index} 
                style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center', 
                  padding: '10px', 
                  borderBottom: '1px solid #ccc' 
                }}
              >
                <input 
                  type="checkbox" 
                  checked={task.done} 
                  onChange={() => toggleTaskDone(index)} 
                  style={{ marginRight: '10px' }}
                />
                <span style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
                  {task.text}
                </span>
                <button 
                  onClick={() => removeTask(index)} 
                  style={{ padding: '5px 10px', cursor: 'pointer' }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App;
