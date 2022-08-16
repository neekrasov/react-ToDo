import { useState } from 'react';
import './Filter.sass'

const Filter = ({setbuttonFilter}) => {

    const [button, setButton] = useState('');

    const setFilter = (e) =>{
        setbuttonFilter(e.target.name);
        setButton(e.target.name);
    }

    return (
        <div className="btn-group">
            <button 
            className="btn btn-outline-info"
            type="button"
            name="all"
            onClick={(e)=>{setFilter(e)}}>All tasks</button>

            <button 
            className="btn btn-outline-info"
            type="button"
            name="important"
            onClick={(e)=>{setFilter(e)}}>Important</button>

            <button 
            className="btn btn-outline-info"
            type="button"
            name="metric"
            onClick={(e)=>{setFilter(e)}}>Metric greater than 5</button>

            <button 
            className="btn btn-outline-info"
            type="button"
            name="star"
            onClick={(e)=>{setFilter(e)}}>Starred</button>

            <button 
            className="btn btn-outline-info"
            type="button"
            name="complete"
            onClick={(e)=>{setFilter(e)}}>Completed</button>
        </div>
    )
}

export default Filter