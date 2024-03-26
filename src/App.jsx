import "./App.css";
import Header from "./components/Header";
import Bargraph from "./components/Bargraph";
import LineGraph from "./components/Linegraph";
import Areagraph from "./components/Areagraph";
import Explorer from "./components/Explorer";
import MapView from "./components/MapView";
import { useState, useEffect } from "react";

function App() {
  const [reportingData, setReportingData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getReportingData = async () => {
      try {
        const dataReq = await fetch("http://localhost:3000/data");
        if (!dataReq.ok) {
          throw new Error("Failed to fetch data");
        }
        const dataRes = await dataReq.json();
        setReportingData(dataRes);
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

  return (
    <div className=" border-x-2 border-sky-700">
      <Header />
      <div className="flex justify-evenly">
        <Bargraph
          data={reportingData.reports}
          legend={false}
          categories={["1 day", "7 days", "30 days"]}
          text={"reporting/1/7/30 days"}
        />

        <LineGraph data={reportingData.theft} text={"in theft/date"} />
        <Bargraph
          data={reportingData.deviceCount}
          legend={false}
          categories={["cus1", "cus2", "cus3"]}
          text={"device/customer"}
        />
        <Bargraph
          data={reportingData.vehicleCount}
          legend={false}
          categories={["cus1", "cus2", "cus3"]}
          text={"vehicle/customer"}
        />
        <Areagraph
          data={reportingData.deviceInfo}
          legend={true}
          text={"new/installed/active/total devices"}
        />
      </div>
      <Explorer />
      <MapView />
      <div className="flex">
        <LineGraph data={reportingData.theft} text={"device bettry"} />
        <LineGraph data={reportingData.theft} text={"vehicle bettry"} />
      </div>
    </div>
  );
}

export default App;
