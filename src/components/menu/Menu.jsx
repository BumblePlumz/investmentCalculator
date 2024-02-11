import React, { useState } from "react";
import Label from "./Label";

export default function Menu({ investment, onChangeData }) {
  function handleEditing(event) {
    const { name, value } = event.target;
    onChangeData(name, value);
  }
  return (
    <menu id="user-input">
      <div className="input-group">
        <Label
          labelName="Initial investment"
          inputName="initialInvestment"
          value={investment.initialInvestment}
          onChange={handleEditing}
        />
        <Label
          labelName="Annual investment"
          inputName="annualInvestment"
          value={investment.annualInvestment}
          onChange={handleEditing}
        />
        <Label
          labelName="Expected return"
          inputName="expectedReturn"
          value={investment.expectedReturn}
          onChange={handleEditing}
        />
        <Label
          labelName="duration"
          inputName="duration"
          value={investment.duration}
          onChange={handleEditing}
        />
      </div>
    </menu>
  );
}
