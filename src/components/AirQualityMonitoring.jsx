import React, { useEffect, useState } from "react";

import Chart from "react-apexcharts";
import AirQualityMonitoringInstant from "./AirQualityMonitoringInstant";
const Mycharts = ({ nodeid, parameter }) => {
  const [param, setParam] = useState([]);
  const [date, setDate] = useState([]);
  useEffect(() => {
    const getData = async () => {
      var enddate = new Date();
      var endstring = enddate.toISOString().substring(0, 10);
      var startdate = new Date(new Date().setDate(new Date().getDate() - 7));
      var startdatestring = startdate.toISOString().substring(0, 10);
      const url = `https://iudx-rs-onem2m.iiit.ac.in/ngsi-ld/v1/temporal/entities?id=research.iiit.ac.in/4786f10afbf48ed5c8c7be9b4d38b33ca16c1d9a/iudx-rs-onem2m.iiit.ac.in/iiith-env-aqm/${nodeid}&limit=100&time=${startdatestring}T17:50:00Z&timerel=during&endtime=${endstring}T17:50:00Z`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data["results"]);
        {
          parameter == "airQualityIndex"
            ? setParam(data["results"]?.map((item) => item.airQualityIndex))
            : setParam(
                data["results"]?.map((item) =>
                  item[parameter]["instValue"] != NaN
                    ? item[parameter]["instValue"]
                    : 0
                )
              );
        }
        setDate(
          data["results"]?.map((item) => item.observationDateTime.split("T")[0])
        );
        console.log(param.length === date.length);
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
    colors: ["#b84644"],
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
function AirQualityMonitoring() {
  const [node, setNode] = useState("AQ-AN00-00");
  const [parameter, setParameter] = useState("pm2p5");

  return (
    <>
      <div className="flex flex-col h-screen ml-10">
        <h1 className="mt-1 text-2xl text-center text-blue-500">
          AirQualityMonitoring(Instantaneous)
        </h1>
        <div className="overflow-y-auto h-3/6">
          <AirQualityMonitoringInstant />
        </div>
        <div className="flex flex-col items-center justify-center w-full mt-8">
          <h1 className="text-xl text-center text-blue-500">
            Weekly data({parameter})&nbsp;{node}
          </h1>
          <div className="flex flex-row w-full mt-2 justify-evenly">
            <select
              onChange={(e) => setNode(e.target.value)}
              id="nodeid"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/5 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option disabled selected>
                Choose a NodeId
              </option>
              <option value="AQ-VN90-00">Vindhya Block</option>
              <option value="AQ-AN00-00">Anand Nivas</option>
              <option value="AQ-KH00-00">Kohli Block</option>
              <option value="AQ-MG00-00">Main Gate</option>
              <option value="AQ-PL00-00">Palash Nivas</option>
              <option value="AQ-SN00-00">Sahana Atidhi Nivas</option>
              <option value="AQ-FG00-00">Football Ground</option>
            </select>
            <select
              onChange={(e) => setParameter(e.target.value)}
              id="nodeid"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/5 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option disabled selected>
                Choose a Parameter
              </option>
              <option value="airQualityIndex">AQI</option>
              <option value="pm10">pm10</option>
              <option value="pm2p5">pm2.5</option>
              <option value="airTemperature">Temperature</option>
              <option value="relativeHumidity">Relative Humidity</option>
            </select>
          </div>
          <Mycharts nodeid={node} parameter={parameter} />
        </div>
      </div>
    </>
  );
}

export default AirQualityMonitoring;
