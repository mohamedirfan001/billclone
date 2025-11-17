import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ChartComponent = ({ bills, payments }) => {
  const data = {
    labels: ["Bills", "Payments"],
    datasets: [
      {
        label: "Amount ($)",
        data: [bills, payments],
        backgroundColor: ["rgba(255, 99, 132, 0.5)", "rgba(53, 162, 235, 0.5)"],
      },
    ],
  };

  return <Bar data={data} />;
};

export default ChartComponent;
