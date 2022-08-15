import EmpListItem from "../TaskListItem/TaskListItem"
import './TaskList.sass'

const EmpList = ({data}) =>{
    return (
        <ul className="app-list list-group">
            {data.map(item => (<EmpListItem {...item}/>))}
        </ul>
    )
}

export default EmpList