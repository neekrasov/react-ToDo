import { useState } from 'react';
import './SearchPanel.sass'

const SearchPanel = ({updateSearch}) => {
    const [inputValue, setInputValue] = useState('');

    const updatetaskFilter = (e) => {
        setInputValue(e.target.value);
        updateSearch(e.target.value);
    }
    return (
        <input type="text"
        className="form-control search-input"
        placeholder="find a task"
        onChange={(e)=>updatetaskFilter(e)}
        value={inputValue} />
    )
}

export default SearchPanel;