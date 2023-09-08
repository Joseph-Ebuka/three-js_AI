import React from "react";
import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";

import state from "../store";

const Colorpicker = () => {
  const snap = useSnapshot(state);

  return (
  <div className="absolute left-5 ml-12">
    <SketchPicker 
    color={snap.color}
    disableAlpha
    presetColors={[
      "#FF6900", 
      "#2980B9",
      "#7BDCB5", 
      "#27AE60 ",
      "#3498DB",
      "#F0B27A",
      "#FFC300",
      "#8E44AD ",
      "#2ECC71 ",
      "#F39C12 ",
      "#E74C3C",
      "#1ABC9C",
      "#9B59B6"
    ]}
    onChange={(color)=> state.color = color.hex}
    />
  </div>
  )
};

export default Colorpicker;
