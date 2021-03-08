import Head from "next/head";
import { useState } from "react";
import Modal from "../components/Modal";
import Container from "../components/Container";
import Issue from "../views/Issue";

export default function ClimateChange() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Head>
        <title>Climate Change</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Modal visible={visible} setVisible={setVisible} />
        <Container>
          <Issue
            title={"Climate Change"}
            embedSrc={
              "https://lucid.app/documents/embeddedchart/d438c2df-1573-4f92-9e17-75bedebc889f"
            }
            embedId={"o6jiAqE9nPim"}
          />
        </Container>
      </div>
    </div>
  );
}
