import { useState } from "react";

export default function Label({ labelName, inputName, value, onChange }) {
  return (
    <label>
      {labelName}
      <input
        type="number"
        name={inputName}
        value={value}
        onChange={(event) => onChange(event)}
      />
    </label>
  );
}
