import React from "react";

function WaterDistributionMonitoringInstant() {
  const panel_list = [39, 43, 42, 44, 40, 45, 41, 46, 47];
  const panel_list1 = [40, 41, 42];
  return (
    <>
<<<<<<< HEAD
      <div className="grid grid-cols-3 grid-rows-3 gap-2 mt-5 justify-items-center">
        {panel_list1.map((panelId) => (
          <iframe
            src={`https://analytics.smartcitylivinglab.iiit.ac.in/d-solo/7hXZ52I4z/iudx-dashboard-panels?orgId=1&panelId=${panelId}`}
=======
      <div className="grid grid-cols-3 grid-rows-3 gap-2 justify-items-center mt-5">
        {panel_list1.map((panelId) => (
          <iframe
            src={`https://analytics.smartcitylivinglab.iiit.ac.in/d-solo/7hXZ52I4z/iudx-dashboard-panels?kiosk=&orgId=1&panelId=${panelId}`}
>>>>>>> 7c4c07ba1e5578ec4e204d996dc20e9fe5bfdf17
            width="350"
            height="200"
            frameborder="0"
          ></iframe>
        ))}
      </div>
    </>
  );
}

export default WaterDistributionMonitoringInstant;
