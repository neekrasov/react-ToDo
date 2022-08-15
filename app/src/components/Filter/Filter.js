import './Filter.sass'

const Filter = () => {
    return (
        <div className="btn-group">
            <button className="btn btn-outline-info"
            type="button">All tasks</button>

            <button className="btn btn-outline-info"
            type="button">Important</button>

            <button className="btn btn-outline-info"
            type="button">Metric greater than 5</button>
        </div>
    )
}

export default Filter