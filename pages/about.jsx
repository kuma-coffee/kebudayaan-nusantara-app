import Head from "next/head";

export default function about() {
  return (
    <>
      <Head>
        <title>Kebudayaan Nusantara | About</title>
        <meta name="description" content="About Kebudayaan Nusantara" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex justify-center w-screen">
        <div className="container flex flex-col items-center justify-center h-screen px-64">
          <h1 className="text-6xl font-semibold text-center">About</h1>
        </div>
      </main>
    </>
  );
}
