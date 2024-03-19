import { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

const Areagraph = () => {
  const [studentName, setStudentName] = useState([]);
  const [studentMarks, setStudentMarks] = useState([]);

  useEffect(() => {
    const getStudentRecord = async () => {
      try {
        const dataReq = await fetch("http://localhost:3000/students");
        const dataRes = await dataReq.json();
        const names = dataRes.map(item => item.student_name);
        const marks = dataRes.map(item => parseFloat(item.student_marks)); // Convert marks to float
        setStudentName(names);
        setStudentMarks(marks);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getStudentRecord();
  }, []);

  const options = {
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
      categories: studentName,
      title: {
        text: 'Students',
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

  const series = [{
    name: 'Marks',
    data: studentMarks,
  }];

  return (
    <div className="size-40 border-4 border-purple-600 rounded-lg m-2 border-#042F2E">
      <Chart options={options} series={series} type="area" height={180} />
    </div>
  );
};

export default Areagraph;