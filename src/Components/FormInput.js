import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { question } from "../Data";

const FormInput = ({ onAdd, notify }) => {
  const [qu, setQu] = useState("");
  const [an, setAn] = useState("");
  const addNewItem = () =>
  {
    if ( qu === "" || an === "" ) {
    notify("من فضلك أكمل البيانات", "Error");
      return;
    }
    question.push({ id: Math.random(), q: qu, a: an });
    setAn("");
    setQu("");
    onAdd();
    console.log(question);
  };
  return (
    <Row>
      <Col sm="5">
        <Form.Control
          value={qu}
          onChange={(e) => setQu(e.target.value)}
          className="w-100"
          type="text"
          placeholder="أدخل السؤال"
        ></Form.Control>
      </Col>
      <Col sm="5">
        <Form.Control
          value={an}
          onChange={(e) => setAn(e.target.value)}
          className="w-100"
          type="text"
          placeholder="أدخل الأجابة"
        ></Form.Control>
      </Col>
      <Col sm="2">
        <button
          onClick={addNewItem}
          className="btn-style w-100 p-1"
          variant="primary"
          type="submit"
        >
          إضافة
        </button>
      </Col>
    </Row>
  );
};

export default FormInput;
