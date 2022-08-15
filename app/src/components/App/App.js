import InfoHeader from '../InfoHeader/InfoHeader';
import SearchPanel from '../SearchPanel/SearchPanel';
import Filter from '../Filter/Filter'
import EmpList from '../EmpList/EmpList';
import EmpCreateForm from '../EmpCreateForm/EmpCreateForm';
import './App.sass';

const App = () => {

    const data = [
        {name: "Alex", salary: 10, increase: true, key: 1},
        {name: "John", salary: 100, increase: false, key: 2},
        {name: "Nika", salary: 1000, increase: true, key: 3},
        {name: "Vasya", salary: 1000, increase: false, key: 4},
    ]

    return (
        <div className="app">
                <InfoHeader/>
                <div className="search-panel">
                    <SearchPanel/>
                    <Filter/>
                </div>
                <EmpList data = {data}/>
                <EmpCreateForm/>
        </div>
    )
}

export default App;