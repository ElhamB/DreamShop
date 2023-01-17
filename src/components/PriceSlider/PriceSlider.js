import React, { Fragment,useState } from "react";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export const PriceSlider = () => {
  const [[min, max], setState] = useState ([0, 5000]);

  const onSliderChange = (value) => {
    console.log(value);
    setState(value);
  };

 const onMinChange = (e) => {
    setState([
      +e.target.value || 0,
      max
    ]);
  };

  const onMaxChange = (e) => {
    setState([
      min,
      +e.target.value || 5000,
    ]);
  }

  return (
    <Fragment>
         <div>
        <label>Min: </label>
        <input type="number" value={min} onChange={onMinChange} />
        <br />
        <label>Max: </label>
        <input type="number" value={max} onChange={onMaxChange} />
        <br />
        <br />
        <Slider
          range
          defaultValue={[50, 750]}
          min={0}
          max={5000}
          step={50}
          onChange={onSliderChange}
          value={[min,max]}
        />
      </div>
    
    </Fragment>
  );
};



