import {useState} from 'react';
import './TaskListItem.sass';

const TaskListItem = ({name, metric, onDelete}) => {
    let [important, setImportant] = useState(false);
    let [starred, setStar] = useState(false);

    return (
        <li className={`list-group-item d-flex justify-content-between${important? " increase": ''}${starred? " like": ''}`}>
            <span className="list-group-item-label"
            onClick={() => setStar(!starred)}>{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={metric}/>
            <div className='d-flex justify-content-center align-items-center'>
                <div className="checkbox">
                    <input type="checkbox" className="form-check-input"/>
                </div>
                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick={() => setImportant(!important)}>
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