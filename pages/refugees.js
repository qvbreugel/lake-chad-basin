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
        <title>Refugees</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Modal visible={visible} setVisible={setVisible} />
        <Container>
          <Issue
            title="Refugees"
            embedSrc={
              "https://lucid.app/documents/embeddedchart/a75bfcb3-e995-445a-b554-492732602b77"
            }
            embedId="Cmki3pgTWJQa"
          />
        </Container>
      </div>
    </div>
  );
}
