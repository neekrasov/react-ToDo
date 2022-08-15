import InfoHeader from '../InfoHeader/InfoHeader';
import SearchPanel from '../SearchPanel/SearchPanel';
import Filter from '../Filter/Filter'
import TaskList from '../TaskList/TaskList';
import TaskCreateForm from '../CreateTaskForm/CreateTaskForm';
import './App.sass';

const App = () => {

    const data = [
        {name: "Task 1", metric: 1, important: false, key: 1},
        {name: "Task 2", metric: 8, important: false, key: 2},
        {name: "Task 3", metric: 4, important: false, key: 3},
        {name: "Task 4", metric: 7, important: false, key: 4},
    ]

    return (
        <div className="app">
                <InfoHeader/>
                <div className="search-panel">
                    <SearchPanel/>
                    <Filter/>
                </div>
                <TaskList data = {data}/>
                <TaskCreateForm/>
        </div>
    )
}

export default App;