/* eslint-disable react/prop-types */

import Chart from "react-apexcharts";

const Bargraph = ({ data, legend = false, categories ,text}) => {

  const options = {
    legend: {
      show: legend,
    },
    chart: {
      type: "bar",
      height: 250,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        dataLabels: {
          position: "top",
        },
      },
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
      categories: categories || [],
      title: {
        text: text,
      },
    },
    yaxis: {
      title: {
        text: "Reports",
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

  return (
    <div className="size-40 border-4 border-purple-600 rounded-lg m-2">
      <Chart options={options} series={data} type="bar" height={180} />
    </div>
  );
};

export default Bargraph;
