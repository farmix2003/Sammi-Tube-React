import { Button } from "@mui/material";
import { Link, useParams } from "react-router-dom";

const Channel = () => {
  const { id } = useParams();
  return (
    <Link to={"/"}>
      <Button>Home</Button>
    </Link>
  );
};

export default Channel;
