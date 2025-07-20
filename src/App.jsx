import Header from "./components/Header";
import "./App.scss";
import { useRef, useState, useEffect } from "react";

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

  // Animación al hacer click en la flecha
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
        <section
          className={`routine-info-section${
            isRoutineSectionEnlarged ? " routine-info-section-enlarged" : ""
          }`}
        >
          <a
            className="routine-info-item"
            href="pages/hypertrophy-powerlifting.html"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              src="/src/assets/video/anrold.mp4"
            />
            <div className="routine-info-item-text">
              <h2>Hypertrophy / Powerlifting</h2>
              <p>
                Gain strength and muscle mass with a clear focus. Choose your
                path and take it to the maximum physical level.
              </p>
            </div>
          </a>
          <a
            className="routine-info-item"
            href="pages/calisthenics-streetlifting.html"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              src="/src/assets/video/calisthenics.webm"
            />
            <div className="routine-info-item-text">
              <h2>Calisthenics / Streetlifting</h2>
              <p>
                Master your body weight and add brutal strength. Challenge
                gravity with control, skill, and additional load.
              </p>
            </div>
          </a>
          <a className="routine-info-item" href="pages/martial-arts.html">
            <video
              autoPlay
              loop
              muted
              playsInline
              src="/src/assets/video/mma.webm"
            />
            <div className="routine-info-item-text">
              <h2>Combat Sports</h2>
              <p>
                Train like your ring idols. Forge body and mind to become a true
                modern warrior.
              </p>
            </div>
          </a>
          <a className="routine-info-item" href="#">
            <video
              autoPlay
              loop
              muted
              playsInline
              src="/src/assets/video/maxgrind-hero-720.mp4"
            />
            <div className="routine-info-item-text">
              <h2>Shall we combine?</h2>
              <p>
                Combine strength, technique, and endurance. Be complete like the
                professionals who master multiple disciplines to excel to the
                maximum.
              </p>
            </div>
          </a>
        </section>
        {/* Links informativos */}
        <section className="quick-links-section">
          <a className="quick-link" href="">
            <img src="img/logos/changelog-transparent.png" alt="Changelog" />
            <div className="quick-link-text">Changelog</div>
          </a>
          <a className="quick-link" href="">
            <img src="img/logos/merch-transparent.png" alt="Merch" />
            <div className="quick-link-text">Merch</div>
          </a>
          <a className="quick-link" href="">
            <img src="img/logos/community-transparent.png" alt="Community" />
            <div className="quick-link-text">Community</div>
          </a>
        </section>
        {/* Hero informativo al final */}
        <section className="about-section">
          <div className="about">
            <h2>What is MaXGrind?</h2>
            <p>
              MaXGrind is a comprehensive physical and mental training platform,
              designed for those seeking to progress with purpose, technique,
              and warrior mindset. Here you'll find routines, community, and
              resources to take your training to the next level.
            </p>
          </div>
        </section>
      </main>
      <footer>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <p style={{ margin: 0, fontSize: "1rem" }}>
            © 2025 MaXGrind. All rights reserved.
            <br />
            Comprehensive training platform: Hypertrophy, Powerlifting, Combat
            Sports, Calisthenics, and Mixed Routines.
            <br />
            Remember: real progress is built with training, mindful nutrition,
            and good rest.
            <br />
            Follow us on social media for more tips and updates.
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginTop: "0.5rem",
            }}
          >
            <img
              src="img/logos/af.png"
              alt="Afer Life Logo"
              style={{
                height: 28,
                width: 28,
                objectFit: "contain",
                borderRadius: 6,
              }}
            />
            <span style={{ fontSize: "0.95em", color: "#bbb" }}>
              Project carried out with participation from{" "}
              <strong>After Life</strong>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
