import { useState } from 'react';
import { useEffect } from 'react';
import Form from "./Form";
import List from "./List";
import Buttons from "./Buttons";
import Section from "./Section";
import Container from "./Container";

function App() {
  const [hideCompleted, setHideCompleted] = useState(false);

  const savedTasks = localStorage.getItem("localList");

  const [tasks, setTasks] = useState(
     savedTasks ? JSON.parse(savedTasks) : [{ id: 1, content: "przykład", done: false }]
  );

  const toggleHideCompleted = () => {
    setHideCompleted(hideCompleted => !hideCompleted);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }
      return task;
    }));
  };

  const markAllDone = () => {
    setTasks(tasks => tasks.map(task => ({
      ...task, done: true,
    })));
  };

  const addNewTask = (newTaskContent) => {
    setTasks(tasks => [
      ...tasks,
      {
        content: newTaskContent,
        done: false,
        id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
      },
    ]);
  };

  useEffect(() => {
    localStorage.setItem("localList", JSON.stringify(tasks));
  }, [tasks]);

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
