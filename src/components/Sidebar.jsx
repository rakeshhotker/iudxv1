import React from "react";
import scrcLogo from "../images/SMART_CITY_LOGO.png";
import iudxLogo from "../images/iudx-ideal.png";
function Sidebar({ currentvertical, setVertical }) {
  const verticals = [
    // "Summary",
    "AirQualityMonitoring",
    "WeatherMonitoring",
    "WaterDistributionMonitoring",
    "WaterFlowMonitoring",
    "SolarEnergyProduced",
    // "EnergyConsumed",
  ];
  return (
    <>
      <div class="min-h-screen flex flex-row bg-gray-100">
        <div class="flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden">
          <div class="flex items-center justify-evenly h-20 shadow-md">
            <img src={iudxLogo} className="w-20 h-10" />
            <img src={scrcLogo} className="w-24 h-16" />
          </div>
          <ul class="flex flex-col py-8">
            {verticals.map((vertical) => (
              <li>
                <button onClick={() => setVertical(vertical)}>
                  <span
                    class={`text-base font-medium flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800 ${
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
