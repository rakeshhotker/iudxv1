import SolarEnergyInstant from "./SolarEnergyInstant";
import React, { useEffect, useState } from "react";

import Chart from "react-apexcharts";

const Mycharts = () => {
  const [eac_today, seteacToday] = useState([]);
  const [date, setDate] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const url =
        "https://iudx-rs-onem2m.iiit.ac.in/ngsi-ld/v1/temporal/entities?id=research.iiit.ac.in/4786f10afbf48ed5c8c7be9b4d38b33ca16c1d9a/iudx-rs-onem2m.iiit.ac.in/iiith-solar-panel/SL-VN03-00&limit=300&time=2022-11-17T17:50:00Z&timerel=during&endtime=2022-11-24T17:50:00Z";
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data["results"]);
        seteacToday(
          data["results"]?.map((item) => item.Eac_today["instValue"])
        );
        setDate(data["results"]?.map((item) => item.Timestamp.split("T")[0]));
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  const series = [
    {
      name: "EAC_Today",
      data: eac_today.reverse(),
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
        width="800px"
        height="350px"
      />
    </div>
  );
};
function SolarEnergyProduced() {
  return (
    <>
      <div className="flex flex-col h-screen ml-10">
        <h1 className="text-center">
          Solar Energy Generated Today(Instantaneous)
        </h1>
        <div className="overflow-y-auto h-2/5">
          <SolarEnergyInstant />
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="text-center">Temporal display(EAC_Today)</h1>
          <Mycharts />
        </div>
      </div>
    </>
  );
}

export default SolarEnergyProduced;
