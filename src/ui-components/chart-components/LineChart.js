import React from 'react'
import { Line } from 'react-chartjs-2';



const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        fillColor : "green", // Put the gradient here as a fill color
        strokeColor : "#ff6c23",
        pointColor : "#fff",
        pointStrokeColor : "#ff6c23",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "#ff6c23",
        data : [25.0,32.4,22.2,39.4,34.2,22.0,23.2,24.1,20.0,18.4,19.1,17.4]
      },
    ],
  };
  
  const options = {
    responsive: true,
    hoverMode: 'index',

    scales: {
      xAxes: [{
        ticks: { display: false },
        gridLines: {
            display: false,
            drawBorder: false
        }
      }],
      yAxes: [{
          ticks: { display: false },
          gridLines: {
              display: false,
              drawBorder: false
          }
      }]
    }
  };


const LineChart = () => {
    return(
        <div className = "p-10 mt-10 bg-white rounded shadow">
            <Line data={data} options={options} />
        </div>
    )
}

export default LineChart
