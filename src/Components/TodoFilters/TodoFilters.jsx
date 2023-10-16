import {Status} from "../../Model/StatusEnum.js";
import "./TodoFilters.css";
export const TodoFilters = () => {
    return (
        <>
            <h2>Filtres</h2>
            <div className="filter-grid">
                <div className="left-side-filter" >
                    <h3>Par état</h3>
                    <fieldset>
                        <div className="check-element">
                            <input type="checkbox" id="todoStatus" name="todoStatus"/>
                            <label htmlFor="todoStatus">{Status.todo}</label>
                        </div>
                        <div className="check-element">
                            <input type="checkbox" id="inProgressStatus" name="inProgressStatus" />
                            <label htmlFor="inProgressStatus">{Status.inProgress}</label>
                        </div>
                        <div className="check-element">
                            <input type="checkbox" id="doneStatus" name="doneStatus" />
                            <label htmlFor="doneStatus">{Status.done}</label>
                        </div>
                    </fieldset>
                </div>
                <div className="right-side-filter">
                    <h3>Par date</h3>
                    <div>
                        <p>
                            <span className="filter-date">du</span>
                            <input className="filter-date" type="date" id="fromDate" name="fromDate"/>
                            <span className="filter-date">au</span>
                            <input className="filter-date" type="date" id="toDate" name="toDate"/>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
