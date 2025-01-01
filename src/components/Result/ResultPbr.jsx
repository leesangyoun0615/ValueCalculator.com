import "../Result/Result.css";
import {
  calculatePriceBookValueRatio,
  calculateDiscountRate,
} from "../../util/investment.js";

export default function ResultPbr({ input, selectedTopic }) {
  const resultsPbrData = calculatePriceBookValueRatio(input);
  const resultsAnnualYieldData = calculateDiscountRate(input);

  let result;
  if (selectedTopic === "PBR") {
    result = (
      <table className="result">
        <thead>
          <tr>
            <th className="targetValue">PBR</th>
            <th>DiscountRate(%)</th>
            <th>ROE(%)</th>
            <th>Expected Sustainability Period(year)</th>
          </tr>
        </thead>
        <tbody className="center">
          <tr>  
            <td>{resultsPbrData}</td>
            <td>{input.discountRate}</td>
            <td>{input.returnOnEquity}</td>
            <td>{input.expectedSustainabilityPeriod}</td>
          </tr>
        </tbody>
      </table>
    );
  } else if (selectedTopic === "Annual Yield") {
    result = (
      <table className="result">
        <thead>
          <tr>
            <th className="targetValue">Annualized Return(%)</th>
            <th>PBR</th>
            <th>ROE(%)</th>
            <th>Expected Sustainability Period(year)</th>
          </tr>
        </thead>
        <tbody className="center">
          <tr>
            <td>{resultsAnnualYieldData}</td>
            <td>{input.priceBookValueRatio}</td>
            <td>{input.returnOnEquity}</td>
            <td>{input.expectedSustainabilityPeriod}</td>
          </tr>
        </tbody>
      </table>
    );
  }
  return <>{result}</>;
}
