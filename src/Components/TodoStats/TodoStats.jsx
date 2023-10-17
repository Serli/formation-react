import {Status} from "../../Model/StatusEnum.js";
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
       /* props.todoList.forEach( (todo) => {
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

        return [nbTodo,nbInProgress,nbDone];*/

        // eslint-disable-next-line react/prop-types
        return props.todoList.reduce((res, todo) => {
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
                data: giveMeStats(props),
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
