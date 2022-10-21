import React from "react";

function Summary() {
  return (
    <>
      <div className="flex justify-evenly mt-16 h-screen">
        <div className="grid grid-row-3 grid-cols-2 gap-2 h-full">
          <iframe
            src="https://smartcitylivinglab.iiit.ac.in/grafana/d-solo/7hXZ52I4z/iudx-dashboard-panels?orgId=3&panelId=8"
            width="450"
            height="200"
            frameborder="0"
          ></iframe>
          <iframe
            src="https://smartcitylivinglab.iiit.ac.in/grafana/d-solo/7hXZ52I4z/iudx-dashboard-panels?orgId=3&panelId=26"
            width="450"
            height="200"
            frameborder="0"
          ></iframe>
          <iframe
            src="https://smartcitylivinglab.iiit.ac.in/grafana/d-solo/7hXZ52I4z/iudx-dashboard-panels?orgId=3&panelId=36"
            width="450"
            height="200"
            frameborder="0"
          ></iframe>
          <iframe
            src="https://smartcitylivinglab.iiit.ac.in/grafana/d-solo/7hXZ52I4z/iudx-dashboard-panels?orgId=3&panelId=44"
            width="450"
            height="200"
            frameborder="0"
          ></iframe>
          <iframe
            src="https://smartcitylivinglab.iiit.ac.in/grafana/d-solo/7hXZ52I4z/iudx-dashboard-panels?orgId=3&panelId=41"
            width="450"
            height="200"
            frameborder="0"
          ></iframe>
        </div>
        <div>
          <div>Insights</div>
        </div>
      </div>
    </>
  );
}

export default Summary;
