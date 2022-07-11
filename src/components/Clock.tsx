import React from "react";
import useClock from "../hooks/useClock";

export type Props = {
  //  TODO
  
  label? : string,
  hours? : number,
  minutes? : number,
  seconds? : number
};

export const Clock = (props: Props) => {
  const { label,hours, minutes, seconds } = props
  return (
    <div data-testid="clock">
      <h4 data-testid="clock-label">
        {label}
      </h4>
      <span data-testid="clock-hours">
        {hours}
        </span>
        :
      <span data-testid="clock-minutes">
        {minutes}
      </span>
       :
      <span data-testid="clock-seconds">
        {seconds}
        </span>
    </div>
  );
};
