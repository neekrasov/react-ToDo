import './InfoHeader.sass';

const InfoHeader = ({countProp}) => {
    return (
        <div className="app-info">
            <h1>To-do list</h1>
            <h2>Number of tasks: {countProp('all')}</h2>
            <h2>Number of important tasks: {countProp('important')}</h2>
            <h2>Number of starred tasks: {countProp('star')} </h2>
            <h2>Number of completed tasks: {countProp('complete')} </h2>
        </div>
    )
}

export default InfoHeader