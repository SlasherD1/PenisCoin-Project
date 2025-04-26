import React from "react";
import "./App.css"; // custom styling if needed
import "./assets/fonts/Fredoka.otf";
import Gambar1 from "./assets/images/Gambar-1.png";
import bgAlter1 from "./assets/images/Gambar-2.png";
import Background1 from "./assets/images/Background-1.png";
import Background2 from "./assets/images/bg_2.png";
import line from "./assets/images/line.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logoDex from "./assets/images/logo_dex.png";

const App = () => {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section
        id="hero"
        className="rajdhani relative bg-cover bg-center bg-no-repeat min-h-screen w-full text-white flex items-center justify-center px-6 md:px-16 lg:px-32 py-20 text-center overflow-hidden"
      >
        <img
          src={Background1}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />

        <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center gap-6 mt-[200px] sm:mt-[300px] md:mt-[400px] xl:mt-[700px]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl bg-orange-400 px-6 sm:px-8 md:px-10 py-6 sm:py-8 rounded-full font-boldoa">
            WELCUMS
          </h1>

          <h1 className="text-md md:text-2xl bg-yellow-500 text-center rounded-xl font-bold text-black xl:py-2 xl:px-4">
            CA : 4Lf3wTvFa5pkzkQpXTHovPyJWbyHTvTyTq228b1Hpump
          </h1>

          {/* Social Media Icons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-20 lg:gap-28 xl:gap-35 mt-20 flex-wrap text-center">
            {[
              {
                href: "https://t.me/BlobJack",
                icon: <FaTelegramPlane size={20} color="#ffffff" />,
              },
              {
                href: "https://x.com/BlobjackCoin",
                icon: <FaXTwitter size={20} color="#ffffff" />,
              },
              {
                href: "https://instagram.com",
                icon: (
                  <img src={logoDex} alt="Dex Logo" width={30} height={24} />
                ),
              },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 sm:gap-4"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-orange-400 flex items-center justify-center">
                  {item.icon}
                </div>
                <span className="text-2xl sm:text-3xl md:text-4xl font-boldoa">
                  PENISCOIN
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section
        className="rajdhani w-full h-[80px] md:h-[120px] lg:h-[150px]"
        style={{
          backgroundImage: `url(${line})`,
          backgroundRepeat: "repeat-x",
          backgroundPosition: "center",
          backgroundSize: "auto 110%",
        }}
      ></section>

      {/* Section: What is PenisCoin */}
      <section
        className="rajdhani text-white px-6 md:px-16 lg:px-32 pt-0 pb-20"
        style={{
          backgroundImage: `url(${Background2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col lg:flex-row items-center xl:gap-40 gap-10 justify-center text-center lg:text-left">
          {/* Gambar */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={Gambar1}
              alt="PenisCoin"
              className="w-full max-w-[800px] min-w-[300px] sm:min-w-[400px] md:min-w-[500px] h-auto drop-shadow-2xl rounded-sm object-contain"
            />
          </div>

          {/* Konten Teks */}
          <div className="flex flex-col gap-6 text-black w-full lg:w-1/2 px-4 md:px-8">
            <h1 className="text-[28px] sm:text-[40px] md:text-[60px] lg:text-[100px] leading-tight text-white font-boldoa">
              So...
            </h1>
            <h2 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[50px] leading-tight text-white font-boldoa">
              What Is a <span className="text-orange-400">Peniscoin</span>{" "}
              Really? Asking for a Friend.
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white font-regular">
              So, what the hell is a PenisCoin anyway? Great question, tiny
              genius. PenisCoin is the world’s girthiest meme coin — built to
              rise hard, fast, and strong, no pills needed. Whether you’re
              holding tight for dear life or just swinging by, it’s the biggest
              thing you’ll ever grab in crypto. Ask your friends. Or don't. Just
              stroke your curiosity and join.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Join the Fun */}
      <section
        className="rajdhani text-white px-6 md:px-16 lg:px-32 py-20"
        style={{
          backgroundImage: `url(${Background2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-16 xl:gap-32 text-center lg:text-left">
          {/* Konten Teks */}
          <div className="flex flex-col gap-6 w-full max-w-2xl">
            <h1 className="font-boldoa text-[28px] sm:text-[40px] md:text-[60px] lg:text-[80px] leading-tight lg:text-right">
              Be gentle
            </h1>
            <h1 className="font-boldoa text-[28px] sm:text-[40px] md:text-[60px] lg:text-[80px] leading-tight lg:text-right">
              while join the <span className="text-orange-400">FUN!</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-semibold text-white lg:text-left">
              Be gentle... or go rough — just make sure you’re in on the fun!
              PenisCoin isn’t just about gains, it’s about the thrill, the
              laughs, and being part of something longer and stronger than
              anything you've ever handled. So loosen up, join the madness, and
              let's blast off together. No protection needed — it's all raw
              passion here.
            </p>
            <p className="text-base sm:text-lg md:text-xl font-semibold text-white lg:text-left">
              Bigger. Harder. Faster.{" "}
              <span className="text-orange-400">PenisCoin.</span>
            </p>
          </div>

          {/* Gambar */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={bgAlter1}
              alt="Fun"
              className="w-full max-w-[600px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] object-contain drop-shadow-2xl rounded-md"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default App;
