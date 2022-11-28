import React from "react";
import AirQualityMonitoring from "./AirQualityMonitoring";
import EnergyConsumed from "./EnergyConsumed";
import SolarEnergyProduced from "./SolarEnergyProduced";
import Summary from "./Summary";
import WaterDistributionMonitoring from "./WaterDistributionMonitoring";
import WaterFlowMonitoring from "./WaterFlowMonitoring";
import WeatherMonitoring from "./WeatherMonitoring";

function Home({ currentvertical }) {
  return (
    <>
      {/* {currentvertical == "Summary" && <Summary />} */}
      {currentvertical == "AirQualityMonitoring" && <AirQualityMonitoring />}
      {currentvertical == "WeatherMonitoring" && <WeatherMonitoring />}
      {currentvertical == "WaterDistributionMonitoring" && (
        <WaterDistributionMonitoring />
      )}
      {currentvertical == "WaterFlowMonitoring" && <WaterFlowMonitoring />}
      {currentvertical == "EnergyConsumed" && <EnergyConsumed />}
      {currentvertical == "SolarEnergyProduced" && <SolarEnergyProduced />}
    </>
  );
}

export default Home;
