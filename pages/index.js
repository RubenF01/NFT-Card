import Head from "next/head";
import Price from "../components/Price";
import TimeLeft from "../components/TimeLeft";
import ImageOverlay from "../components/ImageOverlay";
import { useState } from "react";

export default function Home() {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div>
      <Head>
        <title>NFT Card</title>
        <meta name="description" content="Created by Rubén Frías" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-veryDarkBlueMain h-screen flex flex-col justify-center">
        <div className="bg-veryDarkBlueCard rounded-xl max-w-xs mx-auto shadow-xl">
          <div
            className="p-6 relative cursor-pointer"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <img
              className="rounded-md"
              src="/image-equilibrium.jpg"
              alt="Equilibrium"
            />
            {isHovering && <ImageOverlay />}
          </div>
          <div className="px-6 flex flex-col gap-y-4">
            <h1 className="text-white text-xl font-bold cursor-pointer hover:text-cyan">
              Equilibrium #3429
            </h1>
            <p className="text-softBlue text-base font-light">
              Our Equilibrium collection promotes balance and calm.
            </p>
            <div className="flex justify-between">
              <Price />
              <TimeLeft />
            </div>
            <hr className="solid border-softBlue h-[1px]" />
            <div className="flex items-center pb-5 gap-x-4">
              <img
                className="w-9 border-white border-[1px] rounded-full"
                src="/image-avatar.png"
                alt="Avatar"
              />
              <p className="text-softBlue">
                Creation of{" "}
                <span className="text-white hover:text-cyan cursor-pointer">
                  Jules Wyvern
                </span>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
