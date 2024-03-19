import { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

const Bargraph = () => {
  const [reportingData, setReportingData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getReportingData = async () => {
      try {
        const dataReq = await fetch("http://localhost:3000/reporting");
        if (!dataReq.ok) {
          throw new Error('Failed to fetch data');
        }
        const dataRes = await dataReq.json();
        setReportingData(dataRes.reporting);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching data:", error);
      }
    };
    getReportingData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!reportingData || reportingData.length === 0) {
    return <div>Loading...</div>;
  }

  const options = {
    legend: {
      show:true,
    },
    chart: {
      type: 'bar',
      height: 250,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        dataLabels: {
          position: 'top',
        },
      },
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
      categories: reportingData.map(item => item.days),
      title: {
        text: 'Reporting Days',
      },
    },
    yaxis: {
      title: {
        text: 'Reports',
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
    name: 'Reports',
    data: reportingData.map(item => parseInt(item.reporting))
  }];

  return (
    <div className="size-40 border-4 border-purple-600 rounded-lg m-2">
      <Chart options={options} series={series} type="bar" height={180} />
    </div>
  );
};

export default Bargraph;