import {Status} from "../../Model/StatusEnum.js";
import "./TodoFilters.css";
import {useContext} from "react";
import {isNullOrUndef} from "chart.js/helpers";
import {TodoListContext} from "../../router.jsx";

// eslint-disable-next-line react/prop-types
export const TodoFilters = ({dispatch}) => {
    let {filterList} = useContext(TodoListContext);

    const onChangeFilter = (typeFilter, e = null) => {
        let filterData;
        const value = !isNullOrUndef(e) ? e.target.value : null;
        switch (typeFilter) {
            case "todo-filter":
                filterData = {filterTodo: !filterList.filterTodo};
                break;
            case "in-progress-filter":
                filterData = {filterInProgress: !filterList.filterInProgress};
                break;
            case "done-filter":
                filterData = {filterDone: !filterList.filterDone};
                break;
            case "from-date-filter":
                filterData = {filterFromDate: value};
                break;
            case "to-date-filter":
                filterData = {filterToDate: value};
                break;
        }
        dispatch({ type: 'filter-todo', filterList: {...filterList, ...filterData}});
    }
    return (
        <>
            <h2>Filtres</h2>
            <div className="filter-grid">
                <div className="left-side-filter" >
                    <h3>Par état</h3>
                    <fieldset>
                        <div className="check-element">
                            <input type="checkbox" id="todoStatus" name="todoStatus" onChange={() => onChangeFilter("todo-filter")} checked={filterList.filterTodo}/>
                            <label htmlFor="todoStatus">{Status.todo}</label>
                        </div>
                        <div className="check-element">
                            <input type="checkbox" id="inProgressStatus" name="inProgressStatus" onChange={() => onChangeFilter("in-progress-filter")} checked={filterList.filterInProgress} />
                            <label htmlFor="inProgressStatus">{Status.inProgress}</label>
                        </div>
                        <div className="check-element">
                            <input type="checkbox" id="doneStatus" name="doneStatus" onChange={() => onChangeFilter("done-filter")} checked={filterList.filterDone} />
                            <label htmlFor="doneStatus">{Status.done}</label>
                        </div>
                    </fieldset>
                </div>
                <div className="right-side-filter">
                    <h3>Par date</h3>
                    <div>
                        <p>
                            <span className="filter-date">du</span>
                            <input className="filter-date" type="date" id="fromDate" name="fromDate" onChange={(event) => onChangeFilter("from-date-filter", event)} value={filterList.filterFromDate}/>
                            <span className="filter-date">au</span>
                            <input className="filter-date" type="date" id="toDate" name="toDate" onChange={(event) => onChangeFilter("to-date-filter", event)} value={filterList.filterToDate}/>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
