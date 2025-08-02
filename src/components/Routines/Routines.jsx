import "./Routines.scss";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Routines({ isRoutineSectionEnlarged }) {
  // this three lines are for the expansion of the routine info item when clicked
  const [expandedRoutineIndex, setExpandedRoutineIndex] = useState(null);
  const handleExpand = (index) => setExpandedRoutineIndex(index);

  const videoRefs = useRef([]);
  const handleCollapse = () => {
    if (videoRefs.current[expandedRoutineIndex]) {
      videoRefs.current[expandedRoutineIndex].pause();
      videoRefs.current[expandedRoutineIndex].currentTime = 0;
    }
    setExpandedRoutineIndex(null);
  };

  // array of routine info items
  const routineData = [
    {
      link: "pages/hypertrophy-powerlifting.html",
      video: "/src/assets/video/anrold.mp4",
      title: "Hypertrophy / Powerlifting",
      description:
        "Gain strength and muscle mass with a clear focus. Choose your path and take it to the maximum physical level.",
      card1title: "Hypertrophy",
      card1item1: "Body part split customization",
      card1item2: "Volume periodization tracking",
      card2title: "Powerlifting",
      card2item1: "1RM calculator and tracking",
      card2item2: "Squat/bench/deadlift form cues",
      card3title: "Powerbuilding",
      card3item1: "Strength + hypertrophy balance",
      card3item2: "Compound + isolation pairing",
    },
    {
      link: "pages/calisthenics-streetlifting.html",
      video: "/src/assets/video/calisthenics.webm",
      title: "Calisthenics / Streetlifting",
      description:
        "Master your body weight and add brutal strength. Challenge gravity with control, skill, and additional load.",
      card1title: "Calisthenics",
      card1item1: "Bodyweight progression tracking",
      card1item2: "Movement skill development",
      card2title: "Streetlifting",
      card2item1: "Weighted calisthenics calculator",
      card2item2: "Pull-up/dip/muscle-up form cues",
      card3title: "Freestyle",
      card3item1: "Skills + strength combination",
      card3item2: "Static + dynamic movement pairing",
    },
    {
      link: "pages/martial-arts.html",
      video: "/src/assets/video/mma.webm",
      title: "Combat Sports",
      description:
        "Train like your ring idols. Forge body and mind to become a true modern warrior.",
      card1title: "Striking",
      card1item1: "Punch/kick combination drills",
      card1item2: "Speed and power development",
      card2title: "Wrestling/Grappling",
      card2item1: "Takedown technique progression",
      card2item2: "Ground control and submission training",
      card3title: "MMA",
      card3item1: "Stand-up + ground game integration",
      card3item2: "Transition and clinch work pairing",
    },
    {
      link: "#",
      video: "/src/assets/video/maxgrind-hero-720.mp4",
      title: "Shall we combine?",
      description:
        "Combine strength, technique, and endurance. Be complete like the professionals who master multiple disciplines to excel to the maximum.",
    },
  ];

  return (
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
            onMouseEnter={(e) => {
              if (!isExpanded && videoRefs.current[idx]) {
                videoRefs.current[idx].currentTime = 0;
                videoRefs.current[idx].play().catch(() => {});
              }
            }}
            onMouseLeave={(e) => {
              if (!isExpanded && videoRefs.current[idx]) {
                videoRefs.current[idx].pause();
                videoRefs.current[idx].currentTime = 0;
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
              ref={(el) => (videoRefs.current[idx] = el)}
              muted
              playsInline
              preload={isExpanded ? "metadata" : "auto"}
              src={routine.video}
              autoPlay={isExpanded ? true : undefined}
              loop={isExpanded ? true : undefined}
              onMouseEnter={(e) => {
                if (!isExpanded) {
                  console.log("Hover play", idx);
                  e.currentTarget.load();
                  e.currentTarget.currentTime = 0;
                  e.currentTarget.play().catch(() => {});
                }
              }}
              onMouseLeave={(e) => {
                if (!isExpanded) {
                  e.currentTarget.pause();
                  e.currentTarget.currentTime = 0;
                }
              }}
            />
            <div className="routine-info-item-text">
              <h2>{routine.title}</h2>
              <p>{routine.description}</p>
              <div
                className={`expanded-content ${isExpanded ? "show" : "hide"}`}
              >
                <div className="routine-cards">
                  <p className="routine-card-title">{routine.card1title}</p>
                  {
                    <ul>
                      <li>{routine.card1item1}</li>
                      <li>{routine.card1item2}</li>
                    </ul>
                  }
                  <Link
                    className="get-started-btn"
                    to="/login-register"
                    onClick={() => setMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
                <div className="routine-cards">
                  <p className="routine-card-title">{routine.card2title}</p>
                  {
                    <ul>
                      <li>{routine.card2item1}</li>
                      <li>{routine.card2item2}</li>
                    </ul>
                  }
                  <Link
                    className="get-started-btn"
                    to="/login-register"
                    onClick={() => setMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
                <div className="routine-cards">
                  <p className="routine-card-title">{routine.card3title}</p>
                  {
                    <ul>
                      <li>{routine.card3item1}</li>
                      <li>{routine.card3item2}</li>
                    </ul>
                  }
                  <Link
                    className="get-started-btn"
                    to="/login-register"
                    onClick={() => setMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Routines;
