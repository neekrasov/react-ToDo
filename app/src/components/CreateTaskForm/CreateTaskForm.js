import './CreateTaskForm.sass';
const EmpCreateForm = () => {
    return (
        <div className="app-add-form">
            <h3>Add a new task</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Name" />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="Metric" />

                <button type="submit"
                        className="btn btn-outline-info">Add</button>
            </form>
        </div>
    )
}

export default EmpCreateForm