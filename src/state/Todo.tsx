import React, { useState } from 'react';

interface TaskInterface {
  day: string;
}

const Todo: React.FC = () => {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState<string[]>([]);

  const onClick = () => {
    setTaskList((oldArray) => [...oldArray, task]);
    setTask('');
  };

  return (
    <div>
      <h3>Todo list</h3>
      <ul>
        {taskList.map((each) => (
          <li key={each}>{each}</li>
        ))}
      </ul>
      <input onChange={(e) => setTask(e.target.value)} value={task} />
      <button onClick={onClick}>Save</button>
    </div>
  );
};

export default Todo;
