import React from "react";

function WaterFlowMonitoringInstant() {
  const panel_list = [39, 43, 44, 45, 46, 47];
  return (
    <>
      <div className="grid grid-cols-3 grid-rows-3 gap-2 mt-5 justify-items-center">
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

export default WaterFlowMonitoringInstant;
