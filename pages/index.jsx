import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kebudayaan Nusantara | Home</title>
        <meta name="description" content="Kebudayaan Nusantara" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="flex flex-col items-center justify-center h-screen px-64">
          <div className="flex items-center justify-center w-96 h-96">
            <Image
              src="/kebudayaan.png"
              width="600px"
              height="500px"
              className="cover"
            />
          </div>
          <h1 className="text-6xl font-semibold text-center">
            Kebudayaan Nusantara
          </h1>
        </div>
      </main>
    </>
  );
}
