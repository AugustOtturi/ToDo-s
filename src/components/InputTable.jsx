import Form from "react-bootstrap/Form";
import { useState } from "react";

const InputTable = ({ newTaski }) => {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.length <= 2) return;
    setInputValue("");
    newTaski(inputValue);
  };

  return (
    <Form className="my-5" onSubmit={onSubmit}>
      <Form.Control
        type="text"
        id="InputTable"
        className="w-50 mx-auto"
        autoComplete="off"
        value={inputValue}
        onChange={onInputChange}
      />
    </Form>
  );
};

export default InputTable;
