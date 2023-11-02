import "./style.css";

const Buttons = ({ tasks, hideCompletedTasks }) => {
    if (tasks.length === 0) {
        return null;
    }

    return (
        <div className="buttons">
            <button className="buttons__button"> {hideCompletedTasks ? "Pokaż ukończone" : "Ukryj ukończone"}</button>
            <button className="buttons__button" disabled={tasks.every(({ done }) => done)}>
                Ukończ wszystkie
            </button>
        </div>
    )
};

export default Buttons;