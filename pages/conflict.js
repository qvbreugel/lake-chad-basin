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
        <title>Conflict</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Modal visible={visible} setVisible={setVisible} />
        <Container>
          <Issue
            title={"Conflict"}
            embedSrc={
              "https://lucid.app/documents/embeddedchart/13e84a5c-636c-4262-92e8-d99392f37ea7"
            }
            embedId="PhkiDr39oIUj"
          />
        </Container>
      </div>
    </div>
  );
}
