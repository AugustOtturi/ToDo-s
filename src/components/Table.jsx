import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const TableGrid = ({ data, onCheckboxChange }) => {
  const [taskDoIt, setTaskDoIt] = useState([]);

  return (
    <Table bordered variant="light" className="w-75">
      <thead>
        <tr className="text-center">
          <th>#</th>
          <th className="w-100">Task</th>
          <th>Done?</th>
        </tr>
      </thead>
      <tbody>
        {data.map((data, i) => {
          console.log(data);
          return (
            <tr key={data.id} className="text-center">
              <td>{i + 1}</td>
              <td
                className={data.checked ? "task-text-green" : "task-text-black"}
              >
                {data.name}
              </td>
              <td>
                <Form.Check
                  type="checkbox"
                  checked={data.checked}
                  onChange={() => onCheckboxChange(data.id)}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default TableGrid;
