import React from "react";

function SolarEnergyInstant() {
  const panel_list = [16, 14, 2, 49, 50, 51];
  return (
    <>
      <div className="grid h-screen grid-cols-3 grid-rows-2 gap-2 mt-16 justify-items-center">
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

export default SolarEnergyInstant;
