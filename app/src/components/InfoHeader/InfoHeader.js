import './InfoHeader.sass';

const InfoHeader = ({countProp}) => {
    return (
        <div className="app-info">
            <h1>To-do list</h1>
            <h2>Total {countProp('all')} tasks</h2>
            <h2>{countProp('important')} important tasks</h2>
            <h2>{countProp('star')} starred tasks:  </h2>
            <h2>{countProp('complete')} completed tasks:  </h2>
        </div>
    )
}

export default InfoHeader