import "./Routines.scss";
import { useRef, useState, useEffect } from "react";

function Routines() {
  // this three lines are for the expansion of the routine info item when clicked
  const [expandedRoutineIndex, setExpandedRoutineIndex] = useState(null);
  const handleExpand = (index) => setExpandedRoutineIndex(index);
  const handleCollapse = () => setExpandedRoutineIndex(null);
  const [isRoutineSectionEnlarged, setIsRoutineSectionEnlarged] =
    useState(false);
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
              {isExpanded && (
                <div className="expanded-content">
                  {/* Put any extra info, images, links, etc. here */}
                  <p>More details about {routine.title}!</p>
                  {/* Example: */}
                  {
                    <ul>
                      <li>Benefit 1</li>
                      <li>Benefit 2</li>
                    </ul>
                  }
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
