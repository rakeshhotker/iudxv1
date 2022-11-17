import React from 'react'
import AirQualityMonitoring from './AirQualityMonitoring'
import EnergyConsumed from './EnergyConsumed'
import SolarEnergyProduced from './SolarEnergyProduced'
import Summary from './Summary'
import WaterMonitoring from './WaterMonitoring'
import WeatherMonitoring from './WeatherMonitoring'

function Home({currentvertical}) {
  return (
    <>
    {currentvertical=="Summary" && <Summary/>}
    {currentvertical=="AirQualityMonitoring" && <AirQualityMonitoring/>}
    {currentvertical=="WeatherMonitoring"&& <WeatherMonitoring/>}
    {currentvertical=="WaterMonitoring" && <WaterMonitoring/>}
    {currentvertical=="EnergyConsumed"&& <EnergyConsumed/>}
    {currentvertical=="SolarEnergyProduced" &&<SolarEnergyProduced/>}
    </>
  )
}

export default Home