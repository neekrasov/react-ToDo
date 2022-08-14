import EmpListItem from "../EmpListItem/EmpListItem"
import './EmpList.sass'

const EmpList = () =>{
    return (
        <ul className="app-list list-group">
            <EmpListItem/>
            <EmpListItem/>
            <EmpListItem/>
        </ul>
    )
}

export default EmpList