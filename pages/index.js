import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lake chad</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gray-900 text-center p-16">
        <h1 className="text-6xl font-bold text-primary">Lake Chad Basin</h1>
        <p className="text-4xl font-light text-gray-200">A Wicked Problem</p>
        <div className="flex justify-center mt-8">
          <iframe
            allowfullscreen
            style={{ width: "960px", height: "480px" }}
            frameborder="0"
            src="https://lucid.app/documents/embeddedchart/f5e284a9-b335-4e46-8616-bb94c86febe1"
            id="jD~hGLrcAitv"
          ></iframe>
        </div>
      </main>
    </div>
  );
}
