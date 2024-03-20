/* eslint-disable react/prop-types */

import Chart from "react-apexcharts";

const LineGraph = ({data,text}) => {
 
  const options = {
    chart: {
      type: "line",
      height: 250,
    },
    dataLabels: {
      enabled: true,
      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["#333"],
      },
    },
    xaxis: {
      categories: data.find(item => item.name === "Date").data,
      title: {
        text: text,
      },
    },
    yaxis: {
      title: {
        text: "theft",
      },
    },
    grid: {
      show: false,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
  };

  const series = [
    {
      name: "Theft",
      data: data.find(item => item.name === "Theft").data,
    },
  ];


  return (
    <div className="size-40 border-4 border-purple-600 rounded-lg m-2">
      <Chart options={options} series={series} type="line" height={180} />
    </div>
  );
};

export default LineGraph;