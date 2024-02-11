import { calculateInvestmentResults, formatter } from "/src/util/investment.js";

export default function Tbody({ data }) {
  const calculInvestment = calculateInvestmentResults(data);
  // parseInt was used in the handleInvestmentData function in App.jsx
  // let initCapital = parseInt(data.initialInvestment);
  // let annualInvestment = parseInt(data.annualInvestment);
  // let investedCapital = initCapital + annualInvestment;

  let investedCapital = data.annualInvestment + data.initialInvestment;

  function handleInvestedCapital(annualInvestment) {
    investedCapital += annualInvestment;
    return handleFormat(investedCapital);
  }

  function handleFormat(value) {
    return formatter.format(value);
  }

  return (
    <tbody>
      {calculInvestment.map((item, index) => (
        <tr key={index}>
          {index === 0 && (
            <>
              <td>{item.year}</td>
              <td>{handleFormat(item.valueEndOfYear)}</td>
              <td>{handleFormat(item.annualInvestment)}</td>
              <td>{handleFormat(item.interest)}</td>
              <td>{handleFormat(investedCapital)}</td>
            </>
          )}
          {index != 0 && (
            <>
              <td>{item.year}</td>
              <td>{handleFormat(item.valueEndOfYear)}</td>
              <td>{handleFormat(item.annualInvestment)}</td>
              <td>{handleFormat(item.interest)}</td>
              <td>{handleInvestedCapital(item.annualInvestment)}</td>
            </>
          )}
        </tr>
      ))}
    </tbody>
  );
}
