import React from "react";

function WeatherMonitoring() {
  return (
    <>
      <div className="grid grid-cols-2 grid-rows-1 gap-2 h-screen mt-10 justify-items-center h-screen">
        <iframe
          src="https://smartcitylivinglab.iiit.ac.in/grafana/d-solo/7hXZ52I4z/iudx-dashboard-panels?orgId=3&panelId=35"
          width="450"
          height="250"
          frameborder="0"
        ></iframe>
        <iframe
          src="https://smartcitylivinglab.iiit.ac.in/grafana/d-solo/7hXZ52I4z/iudx-dashboard-panels?orgId=3&panelId=36"
          width="450"
          height="250"
          frameborder="0"
        ></iframe>
      </div>
    </>
  );
}

export default WeatherMonitoring;
