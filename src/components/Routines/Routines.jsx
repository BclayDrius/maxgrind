import "./Routines.scss";
import { useRef, useState, useEffect } from "react";

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
              {isExpanded && (
                <div className="expanded-content">
                  <div className="routine-cards">
                    <p>More details about {routine.title}!</p>
                    {
                      <ul>
                        <li>{routine.item1}</li>
                        <li>{routine.item2}</li>
                      </ul>
                    }
                  </div>
                  <div className="routine-cards">
                    <p>More details about {routine.title}!</p>
                    {
                      <ul>
                        <li>{routine.item1}</li>
                        <li>{routine.item2}</li>
                      </ul>
                    }
                  </div>
                  <div className="routine-cards">
                    <p>More details about {routine.title}!</p>
                    {
                      <ul>
                        <li>{routine.item1}</li>
                        <li>{routine.item2}</li>
                      </ul>
                    }
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Routines;
