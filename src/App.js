import "regenerator-runtime/runtime";
import React, { useEffect, useState } from "react";
import { login, logout } from "./utils";

// React Bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

// React Bootstraps imports
import { Nav, Navbar, Container, Row, Card, Alert } from "react-bootstrap";

import MintingTool from "./Components/MintingTool";
import InfoBubble from "./Components/InfoBubble";

// assets
import Logo from "./assets/logo-white.svg";

import getConfig from "./config";
const { networkId } = getConfig("development");

export default function App() {
  const [userHasNFT, setuserHasNFT] = useState(false);


  useEffect(() => {
    const receivedNFT = async () => {
      if (window.accountId !== "") {
        setuserHasNFT(
          await window.contract.nft_token({
            token_id: `${window.accountId}-doraemon`
          })
        );
      }
    };
    receivedNFT();
  }, []);
  return (
    <React.Fragment>
      <div className="d-flex justify-content-center my-3">

        <div className="bg-dark text-light d-flex align-items-center p-5 rounded-pill shadow">
          <img
            alt=''
            src={Logo}
            width='60'
            height='60'
            className='d-inline-block align-top'
          />{" "}
        </div>
      </div>
      <Container >
        {" "}
        <Row>
          <Alert className="shadow d-flex justify-content-between">
            <h1>Hello <b className="text-info">{window.accountId || ''}</b>! We are going to mint a DORAEMON NFT and have it appear in your wallet !!!</h1>
            <img 
            style={{ width: "130px" }}
            src="https://bafkreicktpoq4rnpmlxc2zrmx33peav5c6pggysy7ma77xmpkruj7e6yey.ipfs.nftstorage.link/" />
          </Alert>
        </Row>
        <Row>
          <InfoBubble />
        </Row>
        <Row>
          <MintingTool userNFTStatus={userHasNFT} />
        </Row>
      </Container>
    </React.Fragment>
  );
}