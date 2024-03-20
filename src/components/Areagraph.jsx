/* eslint-disable react/prop-types */


import Chart from 'react-apexcharts';

const Areagraph = ({ data, legend = false ,text}) => {
  

  const options = {
    legend: {
        show: legend,
      },
    chart: {
      type: 'area', // Change chart type to area for Areagraph
      height: 250,
      foreColor: '#333', // Text color
      toolbar: {
        show: false // Hide the toolbar
      }
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth', // Use smooth curve for Areagraph
    },
    title: {
      text: 'Student Marks Trend',
      align: 'left',
    },
    xaxis: {
     
      title: {
        text: text,
      },
    },
    yaxis: {
      title: {
        text: 'Marks',
      },
    },
    grid: {
      borderColor: '#042F2E', // Border color
      strokeDashArray: 0, // Remove stroke dashes
      position: 'back', // Move the grid to the back
      xaxis: {
        lines: {
          show: false // Hide x-axis lines
        }
      },
      yaxis: {
        lines: {
          show: false // Hide y-axis lines
        }
      }
    },
  };

 

  return (
    <div className="size-40 border-4 border-purple-600 rounded-lg m-2 border-#042F2E">
      <Chart options={options} series={data} type="area" height={180} />
    </div>
  );
};

export default Areagraph;