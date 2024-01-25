import { useState, useRef } from "react";
import { StyledForm, Input, AddButton } from "./styled"

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent.trim() !== "") {
            addNewTask(newTaskContent.trim());
        }
        setNewTaskContent("");
    }

    const focusInput = () => {
        inputRef.current && inputRef.current.focus();
    }

    return (
        <StyledForm className="form" onSubmit={onFormSubmit}>
            <Input
                value={newTaskContent}
                className="form__input"
                name="tasks"
                placeholder="Co jest do zrobienia?"
                autoFocus
                onChange={({ target }) => setNewTaskContent(target.value)}
                ref={inputRef}
            />
            <AddButton onClick={focusInput}>
                Dodaj zadanie
            </AddButton>
        </StyledForm>
    );
};

export default Form;