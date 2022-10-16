import React from "react";
import VerticalType from "./VerticalType";

function NavbarResources({ setCurrentVertical, verticalType }) {
  return (
    <div className="flex justify-evenly mt-5">
      <VerticalType
        verticalName={"Insights"}
        setCurrentVertical={setCurrentVertical}
        verticalType={verticalType}
      />
      <VerticalType
        verticalName="Energy Monitoring"
        setCurrentVertical={setCurrentVertical}
        verticalType={verticalType}
      />
      <VerticalType
        verticalName="Water Monitoring"
        setCurrentVertical={setCurrentVertical}
        verticalType={verticalType}
      />
      <VerticalType
        verticalName="Weather Monitoring"
        setCurrentVertical={setCurrentVertical}
        verticalType={verticalType}
      />
      <VerticalType
        verticalName="Air Quality Monitoring"
        setCurrentVertical={setCurrentVertical}
        verticalType={verticalType}
      />
    </div>
  );
}

export default NavbarResources;
