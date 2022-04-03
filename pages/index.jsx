import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kebudayaan Nusantara | Home</title>
        <meta name="description" content="Kebudayaan Nusantara" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="h-screen flex flex-col justify-center px-64">
          <h1 className="text-center text-6xl font-semibold">
            Kebudayaan Nusantara
          </h1>
        </div>
      </main>
    </>
  );
}
