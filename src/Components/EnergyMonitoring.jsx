import React from "react";

function EnergyMonitoring() {
  return (
    <>
      <div className="grid gap-0 grid-cols-3 grid-rows-2 mt-10 h-screen justify-items-center">
        <iframe
          src="https://smartcitylivinglab.iiit.ac.in/grafana/d-solo/7hXZ52I4z/iudx-dashboard-panels?orgId=3&panelId=16"
          width="450"
          height="250"
          frameBorder="0"
        ></iframe>
        <iframe
          src="https://smartcitylivinglab.iiit.ac.in/grafana/d-solo/7hXZ52I4z/iudx-dashboard-panels?orgId=3&panelId=14"
          width="450"
          height="250"
          frameBorder="0"
        ></iframe>
        <iframe
          src="https://smartcitylivinglab.iiit.ac.in/grafana/d-solo/7hXZ52I4z/iudx-dashboard-panels?orgId=3&panelId=2"
          width="450"
          height="250"
          frameBorder="0"
        ></iframe>
        <iframe
          src="https://smartcitylivinglab.iiit.ac.in/grafana/d-solo/7hXZ52I4z/iudx-dashboard-panels?orgId=3&panelId=6"
          width="450"
          height="250"
          frameBorder="0"
        ></iframe>
        <iframe
          src="https://smartcitylivinglab.iiit.ac.in/grafana/d-solo/7hXZ52I4z/iudx-dashboard-panels?orgId=3&panelId=4"
          width="450"
          height="250"
          frameBorder="0"
        ></iframe>
        <iframe
          src="https://smartcitylivinglab.iiit.ac.in/grafana/d-solo/7hXZ52I4z/iudx-dashboard-panels?orgId=3&panelId=8"
          width="450"
          height="250"
          frameBorder="0"
        ></iframe>
      </div>
    </>
  );
}

export default EnergyMonitoring;
