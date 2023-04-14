import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

//! Componententes
import Title from "./components/Title";
import InputTable from "./components/InputTable";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import TableGrid from "./components/Table";

const App = () => {
  const [listaTODO, setListaTODO] = useState([]);

  // Leer la lista del localstorage al cargar la aplicación
  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("ListaTODO"));
    if (storedList) {
      setListaTODO(storedList);
    }
  }, []);

  const onAddTask = (taskInputValue) => {
    //TODOS Ver objeto
    const newTodo = {
      id: uuidv4(),
      name: taskInputValue,
      checked: false,
    };

    setListaTODO((prev) => {
      const newTodos = [...prev, newTodo];
      saveTodosInLocalStorage(newTodos);
      return newTodos;
    });
  };

  // Esta función recibe un id, busca el todo con el id recibido y cambia el valor de "checked" a su valor opuesto
  const onCheckboxChange = (todoId) => {
    setListaTODO((prev) => {
      const newTodos = prev.map((todo) =>
        todo.id === todoId ? { ...todo, checked: !todo.checked } : todo
      );
      saveTodosInLocalStorage(newTodos);
      return newTodos;
    });
  };

  const resetBtn = () => {
    setListaTODO([]);
    saveTodosInLocalStorage([]);
  };

  const saveTodosInLocalStorage = (listaTODO) => {
    localStorage.setItem("ListaTODO", JSON.stringify(listaTODO));
  };

  return (
    <div>
      <Title></Title>
      <InputTable newTaski={(value) => onAddTask(value)} />

      <Container className="">
        <Row className="d-flex justify-content-center">
          <TableGrid data={listaTODO} onCheckboxChange={onCheckboxChange} />
        </Row>
      </Container>

      <button onClick={resetBtn} className="btnReset">
        reset
      </button>
    </div>
  );
};

export default App;
