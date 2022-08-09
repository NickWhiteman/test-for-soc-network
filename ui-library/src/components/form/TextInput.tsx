import React from "react";
import { TextInputType } from "./types";

const {forwardRef} = React;

export const TextInput: React.FC<TextInputType> = forwardRef((props, ref) => {
  return (
    <input {...props} ref={ref} className="text-input"></input>
  )
});