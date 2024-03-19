import { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

const LineGraph = () => {
  const [studentName, setStudentName] = useState([]);
  const [studentMarks, setStudentMarks] = useState([]);

  useEffect(() => {
    const getStudentRecord = async () => {
      try {
        const dataReq = await fetch("http://localhost:3000/students");
        const dataRes = await dataReq.json();
        
        const names = dataRes.map(item => item.student_name);
        const marks = dataRes.map(item => item.student_marks);
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
      type: 'line',
      height: 250,
    },
    dataLabels: {
      enabled: true,
      offsetY: -20,
      style: {
        fontSize: '12px',
        colors: ['#333'],
      },
    },
    xaxis: {
      categories: studentName, // Assuming studentName is an array of student names
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
      show: false,
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: false
        }
      },
    }
  };

  const series = [{
    name: 'Marks',
    data: studentMarks // Assuming studentMarks is an array of student marks
  }];

  return (
    <div className="size-40 border-4 border-purple-600 rounded-lg m-2">
      <Chart options={options} series={series} type="line" height={180} />
    </div>
  );
};

export default LineGraph;