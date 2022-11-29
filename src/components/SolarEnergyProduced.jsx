import SolarEnergyInstant from "./SolarEnergyInstant";
import React, { useEffect, useState } from "react";

import Chart from "react-apexcharts";

const Mycharts = ({ nodeid, parameter }) => {
  const [param, setParam] = useState([]);
  const [date, setDate] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const url = `https://iudx-rs-onem2m.iiit.ac.in/ngsi-ld/v1/temporal/entities?id=research.iiit.ac.in/4786f10afbf48ed5c8c7be9b4d38b33ca16c1d9a/iudx-rs-onem2m.iiit.ac.in/iiith-solar-panel/${nodeid}&limit=500&time=2022-11-17T17:50:00Z&timerel=during&endtime=2022-11-24T17:50:00Z`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data["results"]);
        setParam(data["results"]?.map((item) => item[parameter]["instValue"]));
        setDate(data["results"]?.map((item) => item.Timestamp.split("T")[0]));
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [nodeid, parameter]);
  const series = [
    {
      name: parameter,
      data: param.reverse(),
    },
  ];
  const options = {
    chart: { id: "bar-chart" },
    xaxis: {
      categories: date.reverse(),
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
function SolarEnergyProduced() {
  const [node, setNode] = useState("SL-VN03-00");
  const [parameter, setParameter] = useState("Eac_today");
  return (
    <>
      <div className="flex flex-col h-screen ml-10">
        <h1 className="mt-1 text-2xl text-center">
          Solar Energy Generated Today(Instantaneous)
        </h1>
        <div className="overflow-y-auto h-3/6">
          <SolarEnergyInstant />
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="text-xl text-center">
            Temporal display({parameter}){node}
          </h1>
          <div className="flex flex-row w-full mt-2 justify-evenly">
            <select
              onChange={(e) => setNode(e.target.value)}
              id="nodeid"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option disabled selected>
                Choose a NodeId
              </option>
              <option value="SL-VN03-00">SL-VN03-00</option>
              <option value="SL-VN02-00">SL-VN02-00</option>
              <option value="SL-VN95-00">SL-VN95-00</option>
              <option value="SL-NI03-00">SL-NI03-00</option>
              <option value="SL-VN02-01">SL-VN02-01</option>
              <option value="SL-NI03-01">SL-NI03-01</option>
            </select>
            <select
              onChange={(e) => setParameter(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/5 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option disabled selected>
                Choose a Parameter
              </option>
              <option value="Eac_today">EAC_TODAY</option>
              <option value="Eac_total">EAC_TOTAL</option>
            </select>
          </div>
          <Mycharts nodeid={node} parameter={parameter} />
        </div>
      </div>
    </>
  );
}

export default SolarEnergyProduced;
