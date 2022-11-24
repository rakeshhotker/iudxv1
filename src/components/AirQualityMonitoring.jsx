import React, { useEffect, useState } from 'react'

import Chart from "react-apexcharts";
import AirQualityMonitoringInstant from './AirQualityMonitoringInstant';
const Mycharts=()=>{
  const [aqi,setaqi]=useState([]);
  const [date,setDate]=useState([]);
  useEffect(()=>{
    const getData=async ()=>{
      const url='https://iudx-rs-onem2m.iiit.ac.in/ngsi-ld/v1/temporal/entities?id=research.iiit.ac.in/4786f10afbf48ed5c8c7be9b4d38b33ca16c1d9a/iudx-rs-onem2m.iiit.ac.in/iiith-env-aqm/AQ-AN00-00&limit=40&time=2022-11-17T17:50:00Z&timerel=during&endtime=2022-11-20T17:50:00Z'
      try {
        const response=await fetch(url)
        const data=await response.json();
        console.log(data["results"]);
        setaqi(data["results"]?.map((item)=>item.airQualityIndex));
        setDate(data["results"]?.map((item)=>item.observationDateTime));
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  },[]);
  const series=[
    {
      name:"AQI",
      data:aqi
    }
  ];
  const options={
    chart:{id:'bar-chart'},
    xaxis:{
      categories:date
    },
    plotOptions:{
      bar:{
        horizontal:true
      }
    }
  }
  return(
    <div>
      <Chart options={options} series={series} type="line" width="800px"/>
    </div>
  )
}
function AirQualityMonitoring() {
  return (
    <>
    <div className='flex flex-col ml-10'>
      <h1 className='text-center'>AirQualityMonitoring</h1>
      <div>
      <AirQualityMonitoringInstant/>
      </div>
      <div className='flex flex-col items-center justify-center w-full'>
        <h1 className='text-center'>Temporal display(AQI)</h1>
        <Mycharts/>
      </div>
    </div>
    </>
  )
}

export default AirQualityMonitoring