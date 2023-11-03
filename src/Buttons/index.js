import "./style.css";

const Buttons = ({ tasks, hideCompleted, toggleHideCompleted }) => {
    if (tasks.length === 0) {
        return null;
    }

    return (
        <div className="buttons">
            <button onClick={toggleHideCompleted} className="buttons__button"> 
            {hideCompleted ? "Pokaż ukończone" : "Ukryj ukończone"}
            </button>
            <button className="buttons__button" disabled={tasks.every(({ done }) => done)}>
                Ukończ wszystkie
            </button>
        </div>
    )
};

export default Buttons;