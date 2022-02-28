import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

const Counter = ({ id, value, onIncrease, onDecrease, onDelete }) => {
  let badgeValue = "Zero";
  let badgeType = "warning";
  let badgeText = "dark";

  if (value > 0) {
    badgeValue = value;
    badgeType = "primary";
    badgeText = "light";
  }

  return (
    <>
      <Col sm={1} className="mb-3">
        <Badge bg={badgeType} text={badgeText}>
          {badgeValue}
        </Badge>
      </Col>
      <Col sm={11} className="mb-3">
        <Button variant="secondary" onClick={() => onIncrease(id)}>
          +
        </Button>
        <Button
          variant="secondary"
          className="mx-3"
          onClick={() => onDecrease(id)}
          disabled={value === 0}
        >
          -
        </Button>
        <Button variant="danger" onClick={() => onDelete(id)}>
          X
        </Button>
      </Col>
    </>
  );
};

export default Counter;
