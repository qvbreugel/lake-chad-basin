import Head from "next/head";
import { useState } from "react";
import IssueCard from "../components/IssueCard";
import Modal from "../components/Modal";

export default function Home() {
  const [visible, setVisible] = useState(false);

  const issues = [
    "conflict",
    "infrastructure",
    "climate change",
    "lake chad",
    "refugees",
  ];

  return (
    <>
      <div>
        <Head>
          <title>Lake chad</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
          <Modal visible={visible} setVisible={setVisible} />
          <main className="min-h-screen bg-gray-900 text-center p-8 flex flex-col items-center">
            <h1 className="text-6xl font-bold text-primary">Lake Chad Basin</h1>
            <p className="text-4xl font-light text-gray-200">
              A Wicked Problem
            </p>

            <div className="mt-8">
              <iframe
                allowFullScreen
                style={{ width: "960px", height: "460px" }}
                frameBorder="0"
                src="https://lucid.app/documents/embeddedchart/f5e284a9-b335-4e46-8616-bb94c86febe1"
                id="jD~hGLrcAitv"
              ></iframe>
            </div>

            <button
              onClick={() => setVisible(true)}
              className="cursor-pointer rounded px-4 py-2 border border-primary w-48 mt-4 hover:bg-primary transition-colors ease-in-out duration-300"
            >
              <p className="text-gray-50 text-xl">Read more</p>
            </button>

            <div className="mt-12 flex w-2/3 justify-evenly">
              {issues.map((issue) => (
                <IssueCard issue={issue} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
