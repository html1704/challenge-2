import React from "react";
import PropTypes from "prop-types";
import { Form, Button, Card, Container, Row, Alert } from "react-bootstrap";
import { keys } from "regenerator-runtime";
const BN = require("bn.js");

const MintingTool = (props) => {
  const mintNFT = async () => {
    await window.contract.nft_mint(
      {
        token_id: `${window.accountId}-doraemon`,
        metadata: {
          title: "Doraemon",
          description: "Doraemon nft",
          media:
            "https://bafkreicktpoq4rnpmlxc2zrmx33peav5c6pggysy7ma77xmpkruj7e6yey.ipfs.nftstorage.link/",
        },
        receiver_id: window.accountId,
      },
      300000000000000, // attached GAS (optional)
      new BN("1000000000000000000000000")
    );
  };

  return (
      <div>
        <Row className='d-flex justify-content-center'>
          <Button
            disabled={props.userNFTStatus || window.accountId === ""}
            onClick={mintNFT}
            className={props.userNFTStatus || window.accountId === "" ? 'btn-warning' : 'btn-primary'}
            style={{ width: "50vw" }}
          >
            Mint NFT
          </Button>
        </Row>
        <Row className='d-flex justify-content-center'>
          {props.userNFTStatus ? (
            <Alert variant='success' style={{ marginTop: "2vh" }}>
              <p style={{ textAlign: "center" }}>
              Congratulations!!! You have an NFT already. You can see it{" "}
                <a href={"https://wallet.testnet.near.org/?tab=collectibles"}>
                  here!
                </a>
                :)
              </p>
            </Alert>
          ) : null}
        </Row>
      </div>
  );
};

MintingTool.propTypes = {};

export default MintingTool;
