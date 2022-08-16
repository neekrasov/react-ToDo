import './TaskListItem.sass';

const TaskListItem = ({name, metric, important, star, complete, onDelete, toggleImportant, toggleStar, toggleComplete}) => {

    return (
        <li className={`list-group-item d-flex justify-content-between${important? " increase": ''}${star? " like": ''}`}>
            <span className="list-group-item-label" onClick={toggleStar}>{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={metric}/>
            <div className='d-flex justify-content-center align-items-center'>
                <div className="checkbox">
                    <input 
                    type="checkbox" 
                    className="form-check-input"
                    onClick={toggleComplete}
                    defaultChecked={complete}/>
                </div>
                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick={toggleImportant}>
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete} >
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default TaskListItem