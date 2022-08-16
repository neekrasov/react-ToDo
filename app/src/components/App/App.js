import {useState} from 'react';
import InfoHeader from '../InfoHeader/InfoHeader';
import SearchPanel from '../SearchPanel/SearchPanel';
import Filter from '../Filter/Filter'
import TaskList from '../TaskList/TaskList';
import TaskCreateForm from '../CreateTaskForm/CreateTaskForm';
import './App.sass';

const App = () => {
    const [data, setData] = useState([
        {name: "Task 1", metric: 1, important: false, star: false, complete: false, key: 1},
        {name: "Task 2", metric: 8, important: false, star: false, complete: false, key: 2},
        {name: "Task 3", metric: 4, important: false, star: false, complete: false, key: 3},
        {name: "Task 4", metric: 7, important: false, star: false, complete: false, key: 4},
    ]);

    const [inputFilter, setTaskFilter] = useState('');
    const [buttonFilter, setbuttonFilter] = useState('');

    const [maxId, setMaxId] = useState(5);

    const toggleProp = (propName, key) => setData(data.map(item => {
            if (item.key === key){
                item[propName] = !item[propName];
            }
            return item
    }));

    const countProp = (propName) => data.filter((item)=> propName === 'all'? data.length :item[propName] === true).length;

    const onSerchByButtons = (prop, items) => {
        if (prop === '') return items
        return items.filter(item=> item[prop] === true)
    };

    const searchBySearchInput = (items, filter) => {
        if (filter.length !== 0) {
            return items.filter(item=> item.name.indexOf(filter) !== -1);
        }
        return items;
    }

    const displayData = onSerchByButtons(buttonFilter, searchBySearchInput(data, inputFilter))
    return (
        <div className="app">
                <InfoHeader
                countProp={countProp}/>
                <div className="search-panel">
                    <SearchPanel
                        updateSearch = {setTaskFilter}/>
                    <Filter
                        setbuttonFilter = {setbuttonFilter}/>
                </div>
                <TaskList 
                    data = {displayData}
                    onDelete={key => setData(data.filter(item=>item.key!==key))}
                    toggleProp={toggleProp}/>
                <TaskCreateForm
                    onCreate={(name, metric) => {
                        let newData = data.slice();
                        newData.push({
                            name: name,
                            metric: metric,
                            important: false,
                            star: false,
                            complete: false,
                            key: maxId});
                        
                        setData(newData);
                        setMaxId(maxId+1);
                        }}/>
        </div>
    )
}

export default App;