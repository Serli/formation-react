import {Status} from "../../Model/StatusEnum.js";
import "./TodoFilters.css";
import {useState} from "react";
export const TodoFilters = (props) => {
    const [filterTodo, setFilterTodo] = useState(true);
    const [filterInProgress, setFilterInProgress] = useState(true);
    const [filterDone, setFilterDone] = useState(true);
    const [filterFromDate, setFilterFromDate] = useState('1990-01-01');
    const [filterToDate, setFilterToDate] = useState('2090-12-31');

    const onChangeFilterTodo = () => {
        // eslint-disable-next-line react/prop-types
        props.onFilterChange({ filterTodo: !filterTodo , filterInProgress, filterDone, filterFromDate, filterToDate });
        setFilterTodo(!filterTodo);
    }
    const onChangeFilterInProgress = () => {
        // eslint-disable-next-line react/prop-types
        props.onFilterChange({ filterTodo, filterInProgress: !filterInProgress, filterDone, filterFromDate, filterToDate });
        setFilterInProgress(!filterInProgress);
    }
    const onChangeFilterDone = () => {
        // eslint-disable-next-line react/prop-types
        props.onFilterChange({ filterTodo, filterInProgress, filterDone: !filterDone, filterFromDate, filterToDate });
        setFilterDone(!filterDone);
    }
    const onChangeFilterFromDate = (e) => {
        // eslint-disable-next-line react/prop-types
        props.onFilterChange({ filterTodo, filterInProgress, filterDone, filterFromDate: e.target.value, filterToDate });
        setFilterFromDate(e.target.value);
    }
    const onChangeFilterToDate = (e) => {
        // eslint-disable-next-line react/prop-types
        props.onFilterChange({ filterTodo, filterInProgress, filterDone, filterFromDate, filterToDate: e.target.value });
        setFilterToDate(e.target.value);
    }
    return (
        <>
            <h2>Filtres</h2>
            <div className="filter-grid">
                <div className="left-side-filter" >
                    <h3>Par état</h3>
                    <fieldset>
                        <div className="check-element">
                            <input type="checkbox" id="todoStatus" name="todoStatus" onChange={onChangeFilterTodo} value={filterTodo} defaultChecked="true"/>
                            <label htmlFor="todoStatus">{Status.todo}</label>
                        </div>
                        <div className="check-element">
                            <input type="checkbox" id="inProgressStatus" name="inProgressStatus" onChange={onChangeFilterInProgress} value={filterInProgress} defaultChecked="true"/>
                            <label htmlFor="inProgressStatus">{Status.inProgress}</label>
                        </div>
                        <div className="check-element">
                            <input type="checkbox" id="doneStatus" name="doneStatus" onChange={onChangeFilterDone} value={filterDone} defaultChecked="true"/>
                            <label htmlFor="doneStatus">{Status.done}</label>
                        </div>
                    </fieldset>
                </div>
                <div className="right-side-filter">
                    <h3>Par date</h3>
                    <div>
                        <p>
                            <span className="filter-date">du</span>
                            <input className="filter-date" type="date" id="fromDate" name="fromDate" onChange={onChangeFilterFromDate} value={filterFromDate}/>
                            <span className="filter-date">au</span>
                            <input className="filter-date" type="date" id="toDate" name="toDate" onChange={onChangeFilterToDate} value={filterToDate}/>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
