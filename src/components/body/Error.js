import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div>
      <h1>Oops! It's an error.</h1>
      <h4>{err.status}</h4>
    </div>
  );
};

export default Error;
