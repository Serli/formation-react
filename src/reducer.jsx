import {todoDB} from "./Model/TodoDB.js";
import {Status} from "./Model/StatusEnum.js";

export const reducer = (state, action) => {
    switch (action.type) {
        case "add-todo" :
            return {
                ...state,
                todoList: [...state.todoList, action.todo]
            };
        case "filter-todo" :
            return handleFilterChange(action, state);
    }
    throw Error('Unknown action.');
}

const handleFilterChange = (previous, state) => {
    const filter = previous.filterList;
    return {
        ...state,
        filterList: {...filter},
        todoList: todoDB.filter((todo) => {
            const betweenDate = formatDate(filter.filterFromDate) <= todo.createdAt
                && todo.createdAt <= formatDate(filter.filterToDate);
            const statusOk = (filter.filterTodo && todo.status === Status.todo)
                || (filter.filterInProgress && todo.status === Status.inProgress)
                || (filter.filterDone && todo.status === Status.done);
            return betweenDate && statusOk;
        })
    }

}

const formatDate = (date) => {
    const fragDate = date.split("-");
    return fragDate[2]+ "/"+ fragDate[1] +"/" + fragDate[0];
}
