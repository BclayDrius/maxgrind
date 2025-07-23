import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import "./App.scss";
import { useRef, useState, useEffect } from "react";
import boxingImg from "./assets/img/boxing.jpg";

function App() {
  // this three lines are for the expansion of the routine info item when clicked
  const [expandedRoutineIndex, setExpandedRoutineIndex] = useState(null);
  const handleExpand = (index) => setExpandedRoutineIndex(index);
  const handleCollapse = () => setExpandedRoutineIndex(null);
  // array of routine info items
  const routineData = [
    {
      link: "pages/hypertrophy-powerlifting.html",
      video: "/src/assets/video/anrold.mp4",
      title: "Hypertrophy / Powerlifting",
      description:
        "Gain strength and muscle mass with a clear focus. Choose your path and take it to the maximum physical level.",
    },
    {
      link: "pages/calisthenics-streetlifting.html",
      video: "/src/assets/video/calisthenics.webm",
      title: "Calisthenics / Streetlifting",
      description:
        "Master your body weight and add brutal strength. Challenge gravity with control, skill, and additional load.",
    },
    {
      link: "pages/martial-arts.html",
      video: "/src/assets/video/mma.webm",
      title: "Combat Sports",
      description:
        "Train like your ring idols. Forge body and mind to become a true modern warrior.",
    },
    {
      link: "#",
      video: "/src/assets/video/maxgrind-hero-720.mp4",
      title: "Shall we combine?",
      description:
        "Combine strength, technique, and endurance. Be complete like the professionals who master multiple disciplines to excel to the maximum.",
    },
  ];

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

  document.querySelectorAll(".routine-info-item").forEach((item) => {
    const video = item.querySelector("video");
    const videoSrc = video.dataset.src; // or direct src attribute

    // Set video source and preload
    if (videoSrc && !video.src) {
      video.src = videoSrc;
      video.load();
    }

    item.addEventListener("mouseenter", () => {
      video.currentTime = 0; // Start from beginning
      video.play().catch((e) => console.log("Video play failed"));
    });

    item.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0; // Reset to first frame
    });
  });
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
          {routineData.map((routine, idx) => {
            const isExpanded = expandedRoutineIndex === idx;
            const isFaded =
              expandedRoutineIndex !== null && expandedRoutineIndex !== idx;
            return (
              <div
                key={idx}
                className={`routine-info-item${isExpanded ? " expanded" : ""}${
                  isFaded ? " faded" : ""
                }${expandedRoutineIndex === null ? " before-expand" : ""}`}
                onClick={(e) => {
                  if (expandedRoutineIndex === null) {
                    e.preventDefault();
                    handleExpand(idx);
                  }
                }}
              >
                {isExpanded && (
                  <button
                    className="close-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCollapse();
                    }}
                  >
                    ×
                  </button>
                )}
                <video
                  muted
                  playsInline
                  preload="metadata"
                  src={routine.video}
                  autoPlay={isExpanded}
                  loop={isExpanded}
                />
                <div className="routine-info-item-text">
                  <h2>{routine.title}</h2>
                  <p>{routine.description}</p>
                </div>
              </div>
            );
          })}
        </section>
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
