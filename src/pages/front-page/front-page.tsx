import React from "react";
import { Button } from "../../components";
import { Link } from "react-router-dom";

const FrontPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Link to="/base-components">
        <Button.Semantic
          variant="primary"
          size="regular"
          label="Base Components"
        />
      </Link>
    </div>
  );
};

export default FrontPage;
