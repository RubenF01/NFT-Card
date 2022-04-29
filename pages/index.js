import Head from "next/head";
import Price from "../components/Price";
import TimeLeft from "../components/TimeLeft";

export default function Home() {
  return (
    <div>
      <Head>
        <title>NFT Card</title>
        <meta name="description" content="Created by Rubén Frías" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-veryDarkBlueMain h-screen flex flex-col justify-center">
        <div className="bg-veryDarkBlueCard rounded-xl">
          <div>
            <img
              className="rounded"
              src="/image-equilibrium.jpg"
              alt="Equilibrium"
            />
          </div>
          <h1 className="text-white">Equilibrium #3429</h1>
          <p className="text-softBlue">
            Our Equilibrium collection promotes balance and calm.
          </p>
          <div className="flex justify-between">
            <Price />
            <TimeLeft />
          </div>
          <hr className="solid" />
          <div className="flex items-center">
            <img src="/image-avatar.png" alt="Avatar" />
            <p>
              Creation of <span>Jules Wyvern</span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
