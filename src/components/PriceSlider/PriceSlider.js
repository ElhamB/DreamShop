import React, { useState } from "react";
import ReactSlider from "react-slider";
const PriceSlider = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(5000);
  return (
    <div>
      <ReactSlider
        defaultValue={[min, max]}
        className="slider"
        trackClassName="tracker"
        min={0}
        max={5000}
        minDistance={50}
        step={50}
        withTracks={true}
        pearling={true}
        renderThumb={(props) => {
          return <div {...props} className="thumb"></div>;
        }}
        renderTrack={(props) => {
          return <div {...props} className="track"></div>;
        }}
        onChange={([min, max]) => {
          setMin(min);
          setMax(max);
        }}
      />
      <div className="values-wrapper">
        <div>min:{min}</div>
        <div>max:{max}</div>
      </div>
    </div>
  );
};

export default PriceSlider;
