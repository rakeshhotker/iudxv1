import React from "react";

function WaterMonitoringInstant() {
  const panel_list = [39, 43, 42, 44, 40, 45, 41, 46, 47];
  return (
    <>
      <div className="grid h-screen grid-cols-3 grid-rows-3 gap-2 mt-16 justify-items-center">
        {panel_list.map((panelId) => (
          <iframe
            src={`https://analytics.smartcitylivinglab.iiit.ac.in/d-solo/7hXZ52I4z/iudx-dashboard-panels?kiosk=&orgId=1&panelId=${panelId}`}
            width="350"
            height="200"
            frameborder="0"
          ></iframe>
        ))}
      </div>
    </>
  );
}

export default WaterMonitoringInstant;
