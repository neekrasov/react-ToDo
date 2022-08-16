import TaskListItem from "../TaskListItem/TaskListItem"
import './TaskList.sass'

const TaskList = ({data, onDelete, onCreate}) =>{
    return (
        <ul className="app-list list-group">
            {data.map(item => (
                        <TaskListItem {...item}
                        onDelete={() => onDelete(item.key)}/>
                    ))}
        </ul>
    )
}

export default TaskList