import { useState } from 'react';
import Form from "./Form";
import List from "./List";
import Buttons from "./Buttons";
import Section from "./Section";
import Container from "./Container";

function App() {
  const [hideCompleted, setHideCompleted] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, content: "przykład nr 1", done: false },
    { id: 2, content: "przykład nr 2", done: true },
  ]);

  const toggleHideCompleted = () => {
    setHideCompleted(hideCompleted => !hideCompleted);
  }

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  }

  return (
    <Container>

      <h1>Lista Zadań</h1>

      <Section
        title="Dodaj nowe zadanie"
        body={<Form />} />

      <Section
        title="Lista zadań"
        body={
          <List
            tasks={tasks}
            hideCompleted={hideCompleted}
            removeTask={removeTask}
          />}
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideCompleted={hideCompleted}
            toggleHideCompleted={toggleHideCompleted}
          />}
      />

    </Container>
  );
}

export default App;
