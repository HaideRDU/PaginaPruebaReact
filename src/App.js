import React, { useState } from 'react';
import './App.css';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [message, setMessage] = useState('');

  const generateNumber = () => {
    const randomNumber = Math.floor(Math.random() * 11) + 1;
    const newTasks = [...tasks, { text: randomNumber }];
    setTasks(newTasks);
    const total = newTasks.reduce((acc, task) => acc + task.text, 0);
    if (total === 21) {
      setMessage('¡Ganaste!');
    } else if (total > 21) {
      setMessage(`Perdiste sacaste ${total}`);
    }
  };

  const resetGame = () => {
    setTasks([]);
    setMessage('');
  };

  return (
    <div className="App">
      <h1>Juego de Sumar a 21</h1>
      <button onClick={generateNumber} disabled={message !== ''}>Generar Número</button>
      <TaskList tasks={tasks} />
      {message && (
        <div>
          <h2>{message}</h2>
          <button onClick={resetGame}>Limpiar Lista</button>
        </div>
      )}
    </div>
  );
}

export default App;
