import {Status} from "../../Model/StatusEnum.js";
// ./components/PieChart.js
// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import Chart from "chart.js/auto";
import {Pie} from "react-chartjs-2";

export const TodoStats = (props) => {
    const labels = [Status.todo, Status.inProgress, Status.done]

    function giveMeStats(props) {
        let nbTodo = 0;
        let nbInProgress = 0;
        let nbDone = 0;

        // eslint-disable-next-line react/prop-types
        props.todoList.forEach( (todo) => {
            switch (todo.status) {
                case Status.todo:
                    nbTodo++;
                    break;
                case Status.inProgress:
                    nbInProgress++;
                    break;
                case Status.done:
                    nbDone++;
                    break;
            }
        });

        return [nbTodo,nbInProgress,nbDone];
    }

    const statsData = giveMeStats(props);

    const data = {
        labels: labels,
        datasets: [
            {
                label: "Stats Todo",
                backgroundColor: [
                    "#007D9C",
                    "#244D70",
                    "#D123B3",
                    "#F7E018",
                    "#fff",
                    "#FE452A",
                ],
                borderColor: [
                    "rgba(255,99,132,1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
                data: statsData,
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
