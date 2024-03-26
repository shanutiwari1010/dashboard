/* eslint-disable react/prop-types */

import Chart from "react-apexcharts";

const Areagraph = ({ data, legend = false, text }) => {
  const options = {
    legend: {
      show: legend,
    },
    chart: {
      type: "area",
      height: 250,
      foreColor: "#333",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },

    xaxis: {
      
      title: {
        text: text,
      },
    },

    grid: {
      borderColor: "#042F2E",
      strokeDashArray: 0,
      position: "back",
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
    <div className="size-40 border-4 border-purple-600 rounded-lg m-2 border-#042F2E">
      <Chart options={options} series={data} type="area" height={180} />
    </div>
  );
};

export default Areagraph;


