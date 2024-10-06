import './Filter-todo.css';


const Filter = ({filterType, setFilterType}) => {

    const showAllTodos = () => {
        setFilterType('all');
    };

    const showCompletedTodos = () => {
        setFilterType('completed');
    };

    return (
        <div className="app-filter">
            <button className={`button-all ${filterType === 'all' ? 'active' : ''}`} onClick={showAllTodos} >All Todos</button>
            <button className={`button-completed ${filterType === 'completed' ? 'active' : ''}`} onClick={showCompletedTodos} >Completed Todos</button>
        </div>
    )
}

export default Filter;