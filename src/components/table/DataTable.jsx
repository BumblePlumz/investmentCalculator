import Tbody from "./tbody";

export default function DataTable({ investment }) {
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Initial investment</th>
          <th>Annual investment</th>
          <th>Interest</th>
          <th>Total</th>
        </tr>
      </thead>
      <Tbody data={investment} />
    </table>
  );
}
