import React, { Fragment, useState } from "react";
import ReactSlider from "react-slider";
import styled from "styled-components";

const PriceSlider = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(5000);
  const StyledSlider = styled(ReactSlider)`
    width: 100%;
    height: 10px;
  `;

  const StyledThumb = styled.div`
    height: 25px;
    line-height: 25px;
    width: 25px;
    text-align: center;
    background-color: #fff;
    border: 1px solid #f1b437;
    color: #2b2b2b;
    border-radius: 50%;
    cursor: grab;
    top: -6px;
  `;

  const Thumb = (props, state) => (
    <StyledThumb {...props}>{state.valueNow}</StyledThumb>
  );

  const StyledTrack = styled.div`
    top: 0;
    bottom: 0;
    background: ${(props) =>
      props.index === 2 ? "#ddd" : props.index === 1 ? "#F1B437" : "#ddd"};
    border-radius: 999px;
  `;

  const Track = (props, state) => (
    <StyledTrack {...props} index={state.index} />
  );
  return (
    <Fragment>
      <StyledSlider
        min="0"
        max="5000"
        defaultValue={[min, max]}
        renderTrack={Track}
        renderThumb={Thumb}
        onChange={([min, max]) => {
                setMin(min);
                 setMax(max);
              }}
      />
      <div className="values-wrapper">
        <div>min:{min}</div>
        <div>max:{max}</div>
      </div>
    </Fragment>
  );
};
// const PriceSlider = () => {
//   const [min, setMin] = useState(0);
//   const [max, setMax] = useState(5000);
//   return (
//     <div>

//       <ReactSlider
//         defaultValue={[min, max]}
//         className="slider"
//         trackClassName="tracker"
//         min={0}
//         max={5000}
//         minDistance={50}
//         step={50}
//         withTracks={true}
//         pearling={true}
//         renderThumb={(props) => {
//           return <div {...props} className="thumb"></div>;
//         }}
//         renderTrack={(props) => {
//           return <div {...props} className="track"></div>;
//         }}
//         onChange={([min, max]) => {
//           setMin(min);
//           setMax(max);
//         }}
//       />
//       <div className="values-wrapper">
//         <div>min:{min}</div>
//         <div>max:{max}</div>
//       </div>
//     </div>
//   );
// };

export default PriceSlider;
