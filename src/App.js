import React from "react";
import { useState } from "react";
import "./App.css"; // gunakan untuk CSS tambahan jika perlu
import "./assets/fonts/Fontspring.otf";
import Gambar1 from "./assets/images/Gambar-1.png";
import bgAlter1 from "./assets/images/Gambar-2.png";
import decorative1 from "./assets/images/decorative-1.png";
import decorative2 from "./assets/images/decorative-2.png";
import Background1 from "./assets/images/Background-1.png";
import Background3 from "./assets/images/Gambar-3.png";
import Logo_1 from "./assets/images/logo_1.png";
import bg2 from "./assets/images/bg_2.png";
import bg3 from "./assets/images/Background-2.png";
import Navbar from "./Navbar";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <section
        id="hero"
        className="rajdhani relative bg-cover bg-center bg-no-repeat min-h-screen w-full text-white flex items-center justify-center px-6 md:px-16 lg:px-32 py-20 text-center overflow-hidden"
      >
        {/* Background Image */}
        <img
          src={Background1}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />

        {/* Hero Content */}
        <div className="max-w-5xl w-full flex flex-col items-center justify-center gap-6 mt-[500px] xl:mt-[600px]">
          <h1 className="text-5xl md:text-6xl lg:text-8xl text-black font-boldoa1 font-extrabold leading-tigh ">
            Hello Kittens &lt;3_
          </h1>

          {/* Optional subtitle */}

          <h2 className="text-base md:text-xl text-sm bg-yellow-500 rounded-xl font-bold text-black px-4 py-2">
            CA : BBCL8cnqNwqQGoc3xJeM88oJmFAC2srnE2YUMHLMAHMm
          </h2>
        </div>
      </section>

      <br></br>

      {/* <div className="relative z-10 -mt-[80px] mb-[-40px] w-full text-center">
        <h2 className="font-boldoa3 text-white text-5xl md:text-6xl xl:text-8xl font-extrabold drop-shadow-xl inline-block px-6 py-3 rounded-xl">
          WELCOME DOOMERS
        </h2>
      </div> */}

      <section className="rajdhani text-white px-6 md:px-16 lg:px-32 py-20">
        <div className="flex flex-col lg:flex-row items-center xl:gap-40 gap-10 justify-center mb-10 text-center lg:text-left">
          {/* Gambar */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={Gambar1}
              alt="Logo"
              className="w-full max-w-[800px] min-w-[300px] sm:min-w-[400px] md:min-w-[500px] h-auto drop-shadow-2xl rounded-sm object-contain"
            />
          </div>

          {/* Konten Teks */}
          <div className="flex flex-col gap-4 text-black w-full lg:w-1/2">
            <div className="h-[2px] w-full max-w-[720px] bg-black mb-2 mx-auto lg:mx-0" />
            <h1 className="font-semibold text-[28px] md:text-[36px] leading-tight">
              user123 Replied :
            </h1>
            <h1 className="font-semibold text-[28px] md:text-[36px] leading-tight">
              What's blobjack coins, Kittens?
            </h1>
            <p className="text-base md:text-lg font-regular">
              Blobjack Coin is more than just digital currency — it’s a
              lifestyle. Earn by being based, trade with fellow mods, and
              collect rare moments of pure sigma energy. No gas fees. No L’s.
              Just pure unfiltered power.
            </p>
            <p className="text-base md:text-lg font-regular">
              Join the cult, stack your coins, and make the keyboard masters
              cope harder every day.
            </p>
          </div>
        </div>
      </section>

      <section
        className="rajdhani text-white px-6 md:px-16 lg:px-32 py-20 relative overflow-hidden"
        style={{
          backgroundImage: `url(${Background3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-center gap-20 xl:gap-40 text-center lg:text-left">
          {/* Konten Teks */}
          <div className="flex flex-col gap-4 max-w-xl w-full">
            <h1 className="font-semibold text-[28px] md:text-[36px] leading-tight">
              Join in, and defeat Keyboard Masters
            </h1>
            <p className="text-base md:text-lg font-semibold">
              Unleash your inner Sigma. Step into the digital warzone and rise
              above the keyboard warriors. This isn't just about memes — it's
              about dominance, status, and knowing the catgirls are watching.
            </p>
          </div>

          {/* Gambar */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={bgAlter1}
              alt="Logo"
              className="w-full max-w-[800px] min-w-[300px] sm:min-w-[400px] md:min-w-[500px] h-auto object-contain drop-shadow-2xl rounded-sm"
            />
          </div>
        </div>

        {/* Dekorasi Kiri & Kanan (Optional, bisa aktifkan kalau perlu) */}
        {/*
  <img
    src={decorative2}
    alt="Decorative Left"
    className="absolute bottom-0 left-10 md:left-20 w-[80px] md:w-[150px]"
  />
  <img
    src={decorative1}
    alt="Decorative Right"
    className="absolute bottom-0 right-10 md:right-20 w-[80px] md:w-[150px]"
  />
  */}
      </section>

      <br></br>
      <Footer />
    </>
  );
};

export default App;
