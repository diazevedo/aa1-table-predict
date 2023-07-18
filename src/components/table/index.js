import texts from "../../data/text";

const Table = ({ body }) => {
  return (
    <table>
      <thead>
        <tr>
          {texts.headers.map((h, index) => {
            return <th key={index}>{h}</th>;
          })}
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );
};

export default Table;
