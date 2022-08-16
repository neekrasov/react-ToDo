import TaskListItem from "../TaskListItem/TaskListItem"
import './TaskList.sass'

const TaskList = ({data, onDelete, toggleProp}) =>{
    return (
        <ul className="app-list list-group">
            {data.map(item => (
                        <TaskListItem {...item}
                        onDelete={() => onDelete(item.key)}
                        toggleImportant={()=> toggleProp('important',item.key)}
                        toggleStar={()=>toggleProp('star', item.key)}
                        toggleComplete={()=>toggleProp('complete', item.key)}/>
                    ))}
        </ul>
    )
}

export default TaskList