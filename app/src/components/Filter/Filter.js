import { useState } from 'react';
import './Filter.sass'

const Filter = ({setbuttonFilter}) => {
    const [button, setButton] = useState('');

    const buttonsInfo = [
        {name: '', label: 'All tasks', key: 1},
        {name: 'important', label: 'Important', key: 2},
        {name: 'star', label: 'Starred', key: 3},
        {name: 'complete', label: 'Completed', key: 4},
    ]

    const setFilter = (e) =>{
        setbuttonFilter(e.target.name);
        setButton(e.target.name);
    }

    const buttonsArr = buttonsInfo.map(item => {
        return(
            <button
            key={buttonsInfo.indexOf(item)}
            className={`btn ${button === item.name ? 'btn-info' : 'btn-outline-info'}`}
            type="button"
            name={item.name}
            onClick={(e)=>{setFilter(e)}}>{item.label}
            </button>
        )
    })



    return (
        <div className="btn-group">
            {buttonsArr}
        </div>
    )
}

export default Filter