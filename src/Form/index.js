import "./style.css";

const Form = () => (
    <form className="form">
        <input className="form__input" name="tasks" placeholder="Co jest do zrobienia?" autofocus />
        <button className="form__addTaskButton">Dodaj zadanie</button>
    </form>
);

export default Form;