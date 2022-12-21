import React from "react";

function WeatherMonitoringInstant() {
  const panel_list = [35, 36];
  return (
    <>
      <div className="grid h-screen grid-cols-2 grid-rows-1 gap-1 mt-16 justify-items-center">
        {panel_list.map((panelId) => (
          <iframe
            src={`https://analytics.smartcitylivinglab.iiit.ac.in/d-solo/7hXZ52I4z/iudx-dashboard-panels?&orgId=1&panelId=${panelId}`}
            width="350"
            height="200"
            frameborder="0"
          ></iframe>
        ))}
      </div>
    </>
  );
}

export default WeatherMonitoringInstant;
