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
        <title>Infrastructure</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Modal visible={visible} setVisible={setVisible} />
        <Container>
          <Issue title={"Infrastructure"} imageSrc="/roads.png" />
        </Container>
      </div>
    </div>
  );
}
