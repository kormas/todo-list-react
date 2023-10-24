import "./style.css";

const List = ({tasks, hideCompletedTasks}) => (
    <ul className="list">
        {tasks.map(task => (
            <li 
            className={`list__block ${task.done && hideCompletedTasks ? "list__block--hidden" : ""}`}
            key={task.id}>
                <div className="list__button">
                        <p className="list__leftParagraph">
                            <button className="list__markButton">{task.done ? "✓" : ""}</button>
                        </p>
                    </div>
                    <div className="list__item">
                        <p className={`list__content ${task.done ? "list__content--done" : ""}`}>
                            {task.content}
                        </p>
                    </div>
                    <div className="list__button">
                        <p className="list__rightParagraph">
                            <button className="list__binButton"><span>🗑️</span></button>
                        </p>
                    </div>
            </li>
        ))}
    </ul>
);

export default List;