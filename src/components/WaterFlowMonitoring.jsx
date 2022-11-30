import React, { useEffect, useState } from "react";

import Chart from "react-apexcharts";
import WaterFlowMonitoringInstant from "./WaterFlowMonitoringInstant";
const Mycharts = ({ nodeid, parameter }) => {
  const [param, setParam] = useState([]);
  const [date, setDate] = useState([]);
  useEffect(() => {
    var enddate = new Date();
      var endstring=enddate.toISOString().substring(0,10)
      var startdate=new Date(new Date().setDate(new Date().getDate()-7))
      var startdatestring=startdate.toISOString().substring(0,10)
    const getData = async () => {
      const url = `https://iudx-rs-onem2m.iiit.ac.in/ngsi-ld/v1/temporal/entities?id=research.iiit.ac.in/4786f10afbf48ed5c8c7be9b4d38b33ca16c1d9a/iudx-rs-onem2m.iiit.ac.in/iiith-water-monitoring/${nodeid}&limit=500&time=${endstring}T17:50:00Z&timerel=during&endtime=${startdatestring}T17:50:00Z`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data["results"]);
        setParam(data["results"]?.map((item) => item[parameter]["instValue"]));
        setDate(
          data["results"]?.map((item) => item.observationDateTime.split("T")[0])
        );
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [nodeid, parameter]);
  const series = [
    {
      name: parameter,
      data: param,
    },
  ];
  const options = {
    colors:['#b84644'],
    chart: { id: "bar-chart" },
    xaxis: {
      categories: date,
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
  };
  return (
    <div>
      <Chart
        options={options}
        series={series}
        type="line"
        width="1000px"
        height="350px"
      />
    </div>
  );
};
function WaterFlowMonitoring() {
  const [node, setNode] = useState("WM-WF-PH03-02");
  const [parameter, setParameter] = useState("waterFlowTotal");
  return (
    <>
      <div className="flex flex-col h-screen ml-10">
        <h1 className="mt-1 text-2xl text-center text-blue-500">
          WaterFlowMonitoring(Instantaneous)
        </h1>
        <div className="overflow-y-auto h-3/6">
          <WaterFlowMonitoringInstant />
        </div>
        <div className="flex flex-col items-center justify-center w-full mt-4">
          <h1 className="text-xl text-center text-blue-500">
            Weekly data({parameter})&nbsp;{node}
          </h1>
          <div className="flex w-full mt-2 justify-evenly">
            <select
              onChange={(e) => setNode(e.target.value)}
              id="nodeid"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option disabled selected>
                Choose a NodeId
              </option>
              <option value="WM-WF-VN01-00">WM-WF-VN01-00</option>
              <option value="WM-WF-PH01-00">WM-WF-PH01-00</option>
              <option value="WM-WF-PH03-00">WM-WF-PH03-00</option>
              <option value="WM-WF-PH03-01">WM-WF-PH03-01</option>
              <option value="WM-WF-PH03-03">WM-WF-PH03-03</option>
              <option value="WM-WF-PH03-02">WM-WF-PH03-02</option>
            </select>
            <select
              onChange={(e) => setParameter(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/5 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option disabled selected>
                Choose a Parameter
              </option>
              <option value="waterFlowTotal">Total Water Flow</option>
              <option value="waterFlowRate">Water Flow Rate</option>
              <option value="waterPressure">Water Pressure</option>
              <option value="waterPressureVoltage">
                Water Pressure Voltage
              </option>
            </select>
          </div>
          <Mycharts nodeid={node} parameter={parameter} />
        </div>
      </div>
    </>
  );
}

export default WaterFlowMonitoring;
