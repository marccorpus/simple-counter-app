import Row from "react-bootstrap/Row";

import Counter from "./Counter";

const Counters = ({ counters, onIncrease, onDecrease, onDelete }) => {
  return (
    <Row>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          {...counter}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
          onDelete={onDelete}
        />
      ))}
    </Row>
  );
};

export default Counters;
