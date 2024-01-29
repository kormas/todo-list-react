import { ButtonsContainer, Button } from "./styled";

const Buttons = ({ tasks, hideCompleted, toggleHideCompleted, markAllDone }) => {
    if (tasks.length === 0) {
        return null;
    }

    return (
        <ButtonsContainer>
            <Button
                onClick={toggleHideCompleted}
            >
                {hideCompleted ? "Pokaż ukończone" : "Ukryj ukończone"}
            </Button>
            <Button
                onClick={markAllDone}
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </Button>
        </ButtonsContainer>
    )
};

export default Buttons;