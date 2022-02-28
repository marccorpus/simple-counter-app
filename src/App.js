import { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import Header from "./components/Header";
import Counters from "./components/Counters";

const App = () => {
  const [counters, setCounters] = useState([
    { id: 1, value: 1 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
    { id: 5, value: 0 },
  ]);

  const resetHandler = () => {
    setCounters((prevCounters) => {
      return prevCounters.map((prevCounter) => {
        prevCounter.value = 0;
        return prevCounter;
      });
    });
  };

  const increaseHandler = (id) => {
    const _counters = [...counters];
    const index = _counters.findIndex((_counter) => _counter.id === id);
    _counters[index].value += 1;

    setCounters(_counters);
  };

  const decreaseHandler = (id) => {
    const _counters = [...counters];
    const index = _counters.findIndex((_counter) => _counter.id === id);
    _counters[index].value -= 1;

    setCounters(_counters);
  };

  const deleteHandler = (id) => {
    setCounters((prevCounters) =>
      prevCounters.filter((prevCounter) => prevCounter.id !== id)
    );
  };

  return (
    <>
      <Header
        count={counters.filter((counter) => counter.value !== 0).length}
      />

      <Container>
        <Row>
          <Col>
            <Button variant="primary" className="my-3" onClick={resetHandler}>
              Reset
            </Button>
          </Col>
        </Row>

        <Counters
          counters={counters}
          onIncrease={increaseHandler}
          onDecrease={decreaseHandler}
          onDelete={deleteHandler}
        />
      </Container>
    </>
  );
};

export default App;
