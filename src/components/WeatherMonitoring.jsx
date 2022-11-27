import WeatherMonitoringInstant from "./WeatherMonitoringInstant";
import React, { useEffect, useState } from "react";

import Chart from "react-apexcharts";

const Mycharts = () => {
  const [tds, settds] = useState([]);
  const [date, setDate] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const url =
        "https://iudx-rs-onem2m.iiit.ac.in/ngsi-ld/v1/temporal/entities?id=research.iiit.ac.in/4786f10afbf48ed5c8c7be9b4d38b33ca16c1d9a/iudx-rs-onem2m.iiit.ac.in/iiith-water-monitoring/WM-WD-VN00-00&limit=2000&time=2022-11-17T17:50:00Z&timerel=during&endtime=2022-11-24T17:50:00Z";
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
function WeatherMonitoring() {
  return (
    <>
      <div className="flex flex-col h-screen ml-10">
        <h1 className="text-center">WeatherMonitoring(Instantaneous)</h1>
        <div className="overflow-y-auto h-2/5">
          <WeatherMonitoringInstant />
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="text-center">Temporal display(TDS)</h1>

          <Mycharts />
        </div>
      </div>
    </>
  );
}

export default WeatherMonitoring;
