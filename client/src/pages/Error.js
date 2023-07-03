import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <h3>Route not found</h3>
        <p>Validate the URL</p>
        <Link to="/">back home</Link>
      </div>
    </Wrapper>
  );
};
export default Error;
