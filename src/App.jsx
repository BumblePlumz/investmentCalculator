import { useState } from "react";
import Header from "./components/Header";
import Menu from "./components/menu/Menu";
import DataTable from "./components/table/DataTable";

const INITIAL_INVESTMENT = {
  duration: 12,
  initialInvestment: 10000,
  annualInvestment: 300,
  expectedReturn: 5.5,
};

function App() {
  const [investmentData, setInvestmentData] = useState(INITIAL_INVESTMENT);

  const isInputValid = investmentData.duration >= 1;

  function handleInvestmentData(key, newData) {
    setInvestmentData((prevData) => {
      return {
        ...prevData,
        [key]: +newData,
      };
    });
  }

  return (
    <>
      <Header />
      <Menu investment={investmentData} onChangeData={handleInvestmentData} />
      {isInputValid && <DataTable investment={investmentData} />}
      {!isInputValid && <p className="center">Please enter a duration greater than 0.</p>}
    </>
  );
}

export default App;
