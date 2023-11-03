import { useState } from 'react';
import Form from "./Form";
import List from "./List";
import Buttons from "./Buttons";
import Section from "./Section";
import Container from "./Container";

let tasks = [
  { id: 1, content: "przykład nr 1", done: false },
  { id: 2, content: "przykład nr 2", done: true },
];

function App() {
  const [hideCompleted, setCompleted] = useState(false);

  return (
    <Container>

        <h1>Lista Zadań</h1>

        <Section 
        title="Dodaj nowe zadanie" 
        body={<Form />} />

        <Section 
        title="Lista zadań" 
        body={<List tasks={tasks} hideCompleted={hideCompleted} />} 
        extraHeaderContent={<Buttons tasks={tasks} hideCompleted={hideCompleted} />} />

    </Container>
  );
}

export default App;
