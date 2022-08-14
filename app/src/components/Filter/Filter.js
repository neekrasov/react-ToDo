import './Filter.sass'

const Filter = () => {
    return (
        <div className="btn-group">
            <button className="btn btn-dark"
            type="button">All employees</button>

            <button className="btn btn-outline-dark"
            type="button">For promotion</button>

            <button className="btn btn-outline-dark"
            type="button">Salary over 1000$</button>
        </div>
    )
}

export default Filter