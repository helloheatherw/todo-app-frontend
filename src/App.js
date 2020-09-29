import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Header from './components/Header';
import TaskInput from './components/TaskInput';
import TaskCounter from './components/TaskCounter';
import TaskListing from './components/TaskListing';

function App() {

  const [tasks, setTasks] = useState([
    { taskDescription: "Buy some milk", completed: false },
    { taskDescription: "Walk the dog", completed: false},
    { taskDescription: "Empty the dishwasher", completed: false},
    { taskDescription: "Write some react", completed: false},
    { taskDescription: "Remember hooks!!!!", completed: true},
    { taskDescription: "Changing state", completed: false}
  ]);

  const addTask = text => {
    const newTask = {
      taskDescription: text,
      completed: false
    }

    const updatedTasks = [ ...tasks, newTask];

    setTasks(updatedTasks);
  }
  
  return (
    <Container maxWidth="md">
      <Header />
      <TaskInput addTask={ addTask }/>
      <TaskCounter tasksOutstanding={tasks.length} />
      <TaskListing taskData={tasks} />
    </Container>
  );
}

export default App;
