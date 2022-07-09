import React from "react";
import PropTypes from "prop-types";
import { Alert, Card, Button, Row } from "react-bootstrap";
import { login, logout } from "../utils";

const InfoBubble = (props) => {
  return (
    <div style={{ padding: "3vh" }}>
      <div className='d-flex justify-content-center'>
        <Button
          className="shadow"
          style={{ width: "50vw" }}
          onClick={window.walletConnection.isSignedIn() ? logout : login}
        >
          {window.walletConnection.isSignedIn() ? "Logout" : "Login"}
        </Button>
      </div>
    </div>
  );
};

InfoBubble.propTypes = {};

export default InfoBubble;
