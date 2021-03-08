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
        <title>Lake chad</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Modal visible={visible} setVisible={setVisible} />
        <Container>
          <Issue
            title={"Lake Chad"}
            embedSrc={
              "https://lucid.app/documents/embeddedchart/133590cd-4ed1-4922-a1bc-255fd2a32970"
            }
            embedId={"KakiPE8dg_db"}
          />
        </Container>
      </div>
    </div>
  );
}
