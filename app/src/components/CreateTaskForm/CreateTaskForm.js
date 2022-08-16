import './CreateTaskForm.sass';
import { useState } from 'react';

const TaskCreateForm = ({onCreate}) => {
    const [name, setName] = useState('');
    const [metric, setMetric] = useState('');

    return (
        <div className="app-add-form">
            <h3>Add a new task</h3>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    onCreate(name, metric)}}
                className="add-form d-flex">
                <input type="text"
                    name='name'
                    className="form-control new-post-label"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
                <input type="number"
                    name='metric'
                    className="form-control new-post-label"
                    placeholder="Metric"
                    value={metric}
                    onChange={(e) => setMetric(e.target.value)} />

                <button type="submit"
                        className="btn btn-outline-info"
                        >Add</button>
            </form>
        </div>
    )
}

export default TaskCreateForm