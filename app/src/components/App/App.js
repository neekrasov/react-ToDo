import InfoHeader from '../InfoHeader/InfoHeader';
import SearchPanel from '../SearchPanel/SearchPanel';
import Filter from '../Filter/Filter'
import EmpList from '../EmpList/EmpList';
import EmpCreateForm from '../EmpCreateForm/EmpCreateForm';
import './App.sass';

const App = () => {

    const data = [
        {name: "Alex", salary: 10, increase: true},
        {name: "John", salary: 100, increase: false},
        {name: "Nika", salary: 1000, increase: true},
        {name: "Vasya", salary: 1000, increase: false},
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