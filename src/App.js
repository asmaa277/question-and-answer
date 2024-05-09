import { Col, Container, Row } from "react-bootstrap";
import Ask from "./Components/Ask";
import FormInput from "./Components/FormInput";
import QAList from "./Components/QAList";
import { question } from "./Data";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [data, setData] = useState(question);
  const addItem = () => {
    localStorage.setItem("items", JSON.stringify([...question]));
    setData([...question]);
    notify("تمت الإضافة بنجاح", "Success");
  };
  const deleteAllItems = () => {
    localStorage.removeItem("items");
    question.splice(0, question.length);
    setData([]);
    notify("تم حذف الكل بنجاح", "Success");
  };
  const deleteOneItem = (items) => {
    localStorage.setItem("items", JSON.stringify([...items]));
    setData([...items]);
    if (items.length <= 0) {
      deleteAllItems();
      notify("تم حذف السؤال بنجاح", "Success");
    }
  };

  const notify = (message, type) => {
    if (type === "Error") toast.error(message);
    else if (type === "Success") toast.success(message);
  };
  return (
    <div className="font text-center">
      <Container className="py-4">
        <Row className="justify-content-center">
          <Col sm="4">
            <Ask></Ask>
          </Col>
          <Col sm="8">
            <FormInput onAdd={addItem} notify={notify}></FormInput>
            <QAList data={data} deleteOneItem={deleteOneItem}></QAList>
            {localStorage.getItem("items") != null ? (
              <button onClick={deleteAllItems} className="btn-style w-100">
                {" "}
                مسح الكل
              </button>
            ) : null}
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </div>
  );
}

export default App;
