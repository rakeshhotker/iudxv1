import React from "react";

function AirQualityMonitoringInstant() {
  const panel_list = [33, 29, 28, 27, 26, 25, 22];
  return (
    <>
      <div className="grid grid-cols-3 grid-rows-3 gap-1 mt-5 justify-items-center">
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

export default AirQualityMonitoringInstant;
