import {useState} from 'react';
import InfoHeader from '../InfoHeader/InfoHeader';
import SearchPanel from '../SearchPanel/SearchPanel';
import Filter from '../Filter/Filter'
import TaskList from '../TaskList/TaskList';
import TaskCreateForm from '../CreateTaskForm/CreateTaskForm';
import './App.sass';

const App = () => {
    const [data, setData] = useState([
        {name: "Task 1", metric: 1, important: false, key: 1},
        {name: "Task 2", metric: 8, important: false, key: 2},
        {name: "Task 3", metric: 4, important: false, key: 3},
        {name: "Task 4", metric: 7, important: false, key: 4},
    ]);

    const [maxId, setMaxId] = useState(5);
    return (
        <div className="app">
                <InfoHeader/>
                <div className="search-panel">
                    <SearchPanel/>
                    <Filter/>
                </div>
                <TaskList 
                    data = {data}
                    onDelete={key => setData(data.filter(item=>item.key!==key))}/>
                <TaskCreateForm
                    onCreate={(name, metric) => {
                        let newData = data.slice();
                        newData.push({
                            name: name,
                            metric: metric,
                            important: false,
                            key: maxId});
                        
                        setData(newData);
                        setMaxId(maxId+1);
                        }}/>
        </div>
    )
}

export default App;