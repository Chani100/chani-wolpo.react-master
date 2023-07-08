import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ROUTES from "../routes/ROUTES";

const ButtonCreatCom = ({ canCreate }) => {
  const navigate = useNavigate();

  const btnCraet = () => {
    navigate(ROUTES.CREATMENU);
  };
  return (
    <Container>
      {canCreate ? (
        <Button variant="warning" className="buttonCreatCom" onClick={btnCraet}>
          +
        </Button>
      ) : (
        " "
      )}
    </Container>
  );
};

export default ButtonCreatCom;
