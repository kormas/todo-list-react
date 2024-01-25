import { StyledList, TaskBlock, TaskItem, TaskMark, TaskContent, TaskBin, MarkButton, BinButton } from "./styled";

const List = ({ tasks, hideCompleted, removeTask, toggleTaskDone }) => (
    <StyledList>
        {tasks.map(task => (
            <TaskBlock
                key={task.id}
                hidden={task.done && hideCompleted}
            >
                <TaskMark>
                    <MarkButton
                        onClick={() => toggleTaskDone(task.id)}
                    >
                        {task.done ? "✓" : ""}
                    </MarkButton>
                </TaskMark>
                <TaskItem>
                    <TaskContent
                        done={task.done}
                    >
                        {task.content}
                    </TaskContent>
                </TaskItem>
                <TaskBin>
                    <BinButton
                        onClick={() => removeTask(task.id)}
                    >
                        🗑️
                    </BinButton>
                </TaskBin>
            </TaskBlock>
        ))}
    </StyledList>
);


export default List;