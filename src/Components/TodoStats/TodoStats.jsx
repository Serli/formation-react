import {Status} from "../../Model/StatusEnum.js";
// eslint-disable-next-line no-unused-vars
import React, {useContext} from "react";
// eslint-disable-next-line no-unused-vars
import Chart from "chart.js/auto";
import {Pie} from "react-chartjs-2";
import {TodoListContext} from "../../router.jsx";
import "./TodoStats.css";

export const TodoStats = () => {
    const labels = [Status.todo, Status.inProgress, Status.done];

    const state = useContext(TodoListContext);

    function giveMeStats() {
        // eslint-disable-next-line react/prop-types
        return state.todoList.reduce((res, todo) => {
            switch (todo.status) {
                case Status.todo:
                    res[0]++;
                    break;
                case Status.inProgress:
                    res[1]++;
                    break;
                case Status.done:
                    res[2]++;
                    break;
            }
            return res;
        },[0,0,0]);
    }

    const data = {
        labels: labels,
        datasets: [
            {
                label: "Stats Todo",
                backgroundColor: [
                    "#f72585",
                    "#480ca8",
                    "#4895ef",
                ],
                borderColor: [
                    "rgba(54, 162, 235, 1)",
                    "rgba(255,99,132,1)",
                    "rgb(104,213,118)",
                ],
                borderWidth: 1,
                // eslint-disable-next-line react/prop-types
                data: state.todoList ? giveMeStats() : undefined,
            },
        ],
    };
    return (
        <div>
            <h2>Statistiques</h2>
            <Pie data={data} />
        </div>
    );
}
