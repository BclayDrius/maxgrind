import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import Routines from "./components/Routines/Routines";
import "./App.scss";
import { useRef, useState, useEffect } from "react";
import boxingImg from "./assets/img/boxing.jpg";

function App() {
  const [showContent, setShowContent] = useState(false);
  const [isRoutineSectionEnlarged, setIsRoutineSectionEnlarged] =
    useState(false);
  const heroRef = useRef(null);
  // Escucha scroll y muestra/oculta el hero según la posición
  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = heroRef.current?.offsetHeight || 0;

      console.log(
        "Scroll position:",
        scrollPosition,
        "Hero height:",
        heroHeight
      );

      if (scrollPosition > heroHeight * 0.75) {
        console.log("Setting enlarged to true");
        setShowContent(true);
        setIsRoutineSectionEnlarged(true);
      } else {
        console.log("Setting enlarged to false");
        setShowContent(false);
        setIsRoutineSectionEnlarged(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scrolldown button
  const handleArrowClick = () => {
    console.log("Button clicked!");
    setShowContent(true);
    setIsRoutineSectionEnlarged(true);
    console.log("States set, scrolling to:", heroRef.current.offsetHeight);
    window.scrollTo({
      top: heroRef.current.offsetHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <link
        rel="icon"
        href="/src/assets/img/logos/500x500-maxgrind-bg-logo.png"
        type="image/png"
      />
      <title>MaXGrind</title>
      <div className="overlay" />
      <Header />
      <main>
        <section
          className={`hero${showContent ? " hero-hide" : ""}`}
          ref={heroRef}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            src="/src/assets/video/maxgrind-hero-720.mp4"
          />
          <div className="hero-text">
            <h1>
              <span>MaXGrind:</span> The grind is eternal
            </h1>
            <p>
              MaXGrind is complete physical conditioning, don't let a single
              discipline limit you.
            </p>
            <button className="hero-btn" onClick={handleArrowClick}>
              Start Training
            </button>
          </div>
        </section>

        <Routines />

        {/* Links informativos */}
        <section className="quick-links-section">
          <Card
            link="https://legacy.reactjs.org/docs/components-and-props.html"
            img={boxingImg}
            name="Boxing"
          />
          <Card
            link="https://legacy.reactjs.org/docs/components-and-props.html"
            img={boxingImg}
            name="Boxing"
          />
          <Card
            link="https://legacy.reactjs.org/docs/components-and-props.html"
            img={boxingImg}
            name="Boxing"
          />
        </section>
        {/* Hero informativo al final */}
      </main>
      <Footer />
    </>
  );
}

export default App;
