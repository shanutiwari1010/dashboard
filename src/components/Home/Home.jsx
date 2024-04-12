// import "./App.css";
import Header from "../Header";
import Bargraph from "../Bargraph"
import LineGraph from "../Linegraph";
import Areagraph from "../Areagraph";
import Explorer from "../Explorer";
import MapView from "../MapView";
import { useState, useEffect } from "react";

function Home() {
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

  console.log(reportingData, "data");
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
          legend={true}
          categories={["1 day", "7 days", "30 days"]}
          text={reportingData.reports[3].text}
        />

        <LineGraph
          data={reportingData.theft}
          type="Theft"
          text={"in theft/date"}
        />
        <Bargraph
          data={reportingData.deviceCount}
          legend={true}
          categories={["cus1", "cus2", "cus3"]}
          text={reportingData.deviceCount[2].text}
        />
        <Bargraph
          data={reportingData.vehicleCount}
          legend={true}
          categories={["cus1", "cus2", "cus3"]}
          text={reportingData.vehicleCount[2].text}
        />
        <Areagraph
          data={reportingData.deviceInfo}
          legend={true}
          text={"new/installed/active/total devices"}
        />
      </div>
      <Explorer />
      <MapView />

      <div className="flex justify-evenly items-center">
        <LineGraph
          data={reportingData.deviceBattery}
          type="deviceBattery"
          text={"device bettry"}
        />
        <LineGraph
          data={reportingData.vehicleBattery}
          type="vehicleBattery"
          text={"vehicle bettry"}
        />

        <Bargraph />
        <div className="text-white text-3xl max-w-72 ">
          Device and Vehicle details(SN, IMEI, VIN , Owner etc)
        </div>
      </div>
    </div>
  );
  }
  
  export default Home;
  