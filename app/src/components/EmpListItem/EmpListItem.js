import './EmpListItem.sass'

const EmpListItem = ({name, metric, important}) => {
    return (
        <li className={`list-group-item d-flex justify-content-between${important? " increase": ''}`}>
            <span className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={metric}/>
            <div className='d-flex justify-content-center align-items-center'>
                <div className="checkbox">
                    <input type="checkbox" class="form-check-input"/>
                </div>
                <button type="button"
                    className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmpListItem