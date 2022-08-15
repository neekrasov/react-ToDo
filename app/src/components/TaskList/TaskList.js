import TaskListItem from "../TaskListItem/TaskListItem"
import './TaskList.sass'

const TaskList = ({data}) =>{
    return (
        <ul className="app-list list-group">
            {data.map(item => (<TaskListItem {...item}/>))}
        </ul>
    )
}

export default TaskList