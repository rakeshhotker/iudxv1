import WaterMonitoringInstant from "./WaterMonitoringInstant";
import React, { useEffect, useState } from "react";

import Chart from "react-apexcharts";

const Mycharts = ({ nodeid }) => {
  const [tds, settds] = useState([]);
  const [date, setDate] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const url = `https://iudx-rs-onem2m.iiit.ac.in/ngsi-ld/v1/temporal/entities?id=research.iiit.ac.in/4786f10afbf48ed5c8c7be9b4d38b33ca16c1d9a/iudx-rs-onem2m.iiit.ac.in/iiith-water-monitoring/${nodeid}&limit=2000&time=2022-11-17T17:50:00Z&timerel=during&endtime=2022-11-24T17:50:00Z`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data["results"]);
        settds(
          data["results"]?.map((item) => item.tdsCompensated["instValue"])
        );
        setDate(
          data["results"]?.map((item) => item.observationDateTime.split("T")[0])
        );
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  const series = [
    {
      name: "Compensated TDS",
      data: tds,
    },
  ];
  const options = {
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
        width="800px"
        height="350px"
      />
    </div>
  );
};
function WaterMonitoring() {
  return (
    <>
      <div className="flex flex-col h-screen ml-10">
        <h1 className="text-center">WaterMonitoring(Instantaneous)</h1>
        <div className="overflow-y-auto h-2/5">
          <WaterMonitoringInstant />
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <label
            for="nodeid"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select an option
          </label>
          <select
            id="nodeid"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose a NodeId</option>
            <option value="WM-WD-VN00-00">WM-WD-VN00-00</option>
            <option value="WM-WD-VN90-00">WM-WD-VN90-00</option>
            <option value="WM-WD-VN01-01">WM-WD-VN01-01</option>
            <option value="WM-WD-VN00-00">WM-WD-VN00-00</option>
          </select>

          <h1 className="text-center">Temporal display(TDS)</h1>
          <Mycharts nodeid={"WM-WD-VN00-00"} />
        </div>
      </div>
    </>
  );
}

export default WaterMonitoring;
