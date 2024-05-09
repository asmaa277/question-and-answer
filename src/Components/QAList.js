import React from "react";
import { Accordion, Row } from "react-bootstrap";
import { question } from "../Data";

const QAList = ({ data, deleteOneItem }) => {
  const dataLocal = JSON.parse(localStorage.getItem("items"));
  const onDeleteItem = (ID) => {
    if (localStorage.getItem("items") != null) {
      const index = question.findIndex((item) => item.id === ID);
      question.splice(index, 1);
      deleteOneItem(question);
    }
  };
  return (
    <Row>
      <Accordion className="py-3">
        {localStorage.getItem("items") != null ? (
          dataLocal.map((item, index) => {
            return (
              <Accordion.Item key={index} eventKey={item.id}>
                <Accordion.Header>{item.q}</Accordion.Header>
                <Accordion.Body>
                  {item.a}
                  <button
                    onClick={() => onDeleteItem(item.id)}
                    className="btn-style mx-3"
                  >
                    مسح
                  </button>
                </Accordion.Body>
              </Accordion.Item>
            );
          })
        ) : (
          <h2 className="p-2 m-auto">لا توجد اسئلة </h2>
        )}
      </Accordion>
    </Row>
  );
};

export default QAList;
