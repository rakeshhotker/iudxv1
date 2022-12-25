import WeatherMonitoringInstant from "./WeatherMonitoringInstant";
import React, { useEffect, useState } from "react";

import Chart from "react-apexcharts";

const Mycharts = ({ nodeid, parameter }) => {
  console.log(parameter);
  var results = {
    solarRadiation: [],
    airTemperature: [],
    relativeHumidity: [],
    dewPoint: [],
    pressure: [],
  };
  var dates = [];
  var enddate = new Date();
  var endstring = enddate.toISOString().substring(0, 10);
  for (let i = 1; i < 8; i++) {
    var startdate = new Date(new Date().setDate(new Date().getDate() - i));
    var startdatestring = startdate.toISOString().substring(0, 10);
    dates.push(startdatestring);
  }
  dates = dates.reverse();
  console.log(dates);
  const [param, setParam] = useState([]);
  useEffect(() => {
    const test = async () => {
      for (let i = 0; i < dates.length; i++) {
        const url = `https://iudx-rs-onem2m.iiit.ac.in/ngsi-ld/v1/temporal/entities?id=research.iiit.ac.in/4786f10afbf48ed5c8c7be9b4d38b33ca16c1d9a/iudx-rs-onem2m.iiit.ac.in/iiith-env-weather/${nodeid}&limit=2000&time=${
          dates[i]
        }T17:50:00Z&timerel=during&endtime=${dates[i + 1]}T17:50:00Z`;
        try {
          const response = await fetch(url);
          const data = await response.json();
          let temp = 0;
          let count = 0;
          for (let j = 0; j < data["results"].length; j++) {
            if (data["results"][j][parameter]["instValue"] === "nan") {
              count++;
              temp += 0.0;
            } else {
              temp += parseFloat(data["results"][j][parameter]["instValue"]);
            }
          }
          let average = parseFloat(temp / (2000 - count));
          if (
            results[parameter].at(-1) !== average ||
            results[parameter].length == 0
          ) {
            results[parameter].push(average);
          }
        } catch (e) {
          console.log(e);
        }
      }
      setParam(results[parameter]);
      console.log(results);
    };
    test();
  }, [nodeid, parameter]);
  console.log(dates);
  const series = [
    {
      name: parameter,
      data: param,
    },
  ];
  const options = {
    chart: { id: "bar-chart" },
    colors: ["#b84644"],
    xaxis: {
      categories: dates,
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
function WeatherMonitoring() {
  const [node, setNode] = useState("WE-VN04-00");
  const [parameter, setParameter] = useState("solarRadiation");
  return (
    <>
      <div className="flex flex-col h-screen ml-10">
        <h1 className="mt-1 text-2xl text-center text-blue-500">
          WeatherMonitoring(Instantaneous)
        </h1>
        <div className="overflow-y-auto h-3/6">
          <WeatherMonitoringInstant />
        </div>
        <div className="flex flex-col items-center justify-center w-full mt-4">
          <h1 className="text-xl text-center text-blue-500">
            Weekly data({parameter})&nbsp;{node}
          </h1>
          <div className="flex flex-row w-full mt-2 justify-evenly">
            <select
              onChange={(e) => setNode(e.target.value)}
              id="nodeid"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option disabled selected>
                Choose a NodeId
              </option>
              <option value="WE-VN04-00">WE-VN04-00</option>
            </select>
            <select
              onChange={(e) => setParameter(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/5 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option disabled selected>
                Choose a Parameter
              </option>
              <option value="solarRadiation">Solar Radiation</option>
              <option value="airTemperature">Air Temperature</option>
              <option value="relativeHumidity">Relative Humidity</option>
              <option value="dewPoint">Dew Point</option>
              <option value="pressure">Pressure</option>
            </select>
          </div>
          <Mycharts nodeid={node} parameter={parameter} />
        </div>
      </div>
    </>
  );
}

export default WeatherMonitoring;
