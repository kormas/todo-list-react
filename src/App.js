import { useState } from 'react';
import Form from "./Form";
import List from "./List";
import Buttons from "./Buttons";
import Section from "./Section";
import Container from "./Container";
import { useTasks } from "./useTasks";

function App() {
  const [hideCompleted, setHideCompleted] = useState(false);

  const toggleHideCompleted = () => {
    setHideCompleted(hideCompleted => !hideCompleted);
  };

  const {
    tasks,
    removeTask,
    toggleTaskDone,
    markAllDone,
    addNewTask,
  } = useTasks();

  return (
    <Container>

      <h1>Lista Zadań</h1>

      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />

      <Section
        title="Lista zadań"
        body={
          <List
            tasks={tasks}
            hideCompleted={hideCompleted}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />}
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideCompleted={hideCompleted}
            toggleHideCompleted={toggleHideCompleted}
            markAllDone={markAllDone}
          />}
      />

    </Container>
  );
};

export default App;
