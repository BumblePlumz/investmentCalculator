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

  // console.log(investmentData);

  function handleInvestmentData(key, newData) {
    setInvestmentData((prevData) => {
      return {
        ...prevData,
        [key]: parseInt(newData),
      };
    });
  }

  return (
    <>
      <Header />
      <Menu investment={investmentData} onChangeData={handleInvestmentData} />
      <DataTable investment={investmentData} />
    </>
  );
}

export default App;
