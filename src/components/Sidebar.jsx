import React from "react";

function Sidebar({ currentvertical, setVertical }) {
  const verticals = [
    "Summary",
    "AirQualityMonitoring",
    "WeatherMonitoring",
    "WaterDistributionMonitoring",
    "WaterFlowMonitoring",
    "SolarEnergyProduced",
    "EnergyConsumed",
  ];
  return (
    <>
      <div class="min-h-screen flex flex-row bg-gray-100">
        <div class="flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden">
          <div class="flex items-center justify-center h-20 shadow-md">
            <h1 class="text-3xl uppercase text-indigo-500">Logo</h1>
          </div>
          <ul class="flex flex-col py-8">
            {verticals.map((vertical) => (
              <li>
                <button onClick={() => setVertical(vertical)}>
                  <span
                    class={`text-sm font-medium flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800 ${
                      vertical == currentvertical ? "text-sky-500" : ""
                    }`}
                  >
                    {vertical}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
