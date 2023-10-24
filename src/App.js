import Form from "./Form";
import List from "./List";
import Buttons from "./Buttons";
import Section from "./Section";
import Container from "./Container";

let tasks = [
  { id: 1, content: "przykład nr 1", done: false },
  { id: 2, content: "przykład nr 2", done: true },
];

let hideCompletedTasks = false;

function App() {
  return (
    <Container>

        <h1>Lista Zadań</h1>

        <Section 
        title="Dodaj nowe zadanie" 
        body={<Form />} />

        <Section 
        title="Lista zadań" 
        body={<List tasks={tasks} hideCompletedTasks={hideCompletedTasks} />} 
        extraHeaderContent={<Buttons tasks={tasks} hideCompletedTasks={hideCompletedTasks} />} />

    </Container>
  );
}

export default App;
