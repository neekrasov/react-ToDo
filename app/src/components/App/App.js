import InfoHeader from '../InfoHeader/InfoHeader';
import SearchPanel from '../SearchPanel/SearchPanel';
import Filter from '../Filter/Filter'
import EmpList from '../EmpList/EmpList';
import EmpCreateForm from '../EmpCreateForm/EmpCreateForm';
import './App.sass';

const App = () => {
    return (
        <div className="app">
                <InfoHeader/>
                <div className="search-panel">
                    <SearchPanel/>
                    <Filter/>
                </div>
                <EmpList/>
                <EmpCreateForm/>
        </div>
    )
}

export default App;