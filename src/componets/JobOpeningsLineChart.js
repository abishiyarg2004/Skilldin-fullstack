import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const JobOpeningsLineChart = ({ jobOpenings, title, salary }) => {
  // Labels for the X-axis (Years)
  const labels = ['2021', '2022', '2023'];

  // Data configuration
  const data = {
    labels,
    datasets: [
      {
        label: `${title} (Salary: ${salary})`,
        data: jobOpenings,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4,
        pointRadius: 5,
      },
    ],
  };

  // Options for the chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Job Openings Trends (2021 - 2023)',
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default JobOpeningsLineChart;
