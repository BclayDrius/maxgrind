import Header from "./components/Header";
import "/src/styles/styles.scss";

function App() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT"
        crossOrigin="anonymous"
      />
      <link
        rel="icon"
        href="/src/assets/img/logos/500x500-maxgrind-bg-logo.png"
        type="image/png"
      />
      <title>MaXGrind</title>
      <div className="overlay" />
      <Header />
      <main>
        <section className="hero">
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
          </div>
        </section>
        <section className="routine-info-section">
          <a
            className="routine-info-item"
            href="pages/hypertrophy-powerlifting.html"
          >
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
            <div className="routine-info-item-text">
              <h2>Calisthenics / Streetlifting</h2>
              <p>
                Master your body weight and add brutal strength. Challenge
                gravity with control, skill, and additional load.
              </p>
            </div>
          </a>
          <a className="routine-info-item" href="pages/martial-arts.html">
            <div className="routine-info-item-text">
              <h2>Combat Sports</h2>
              <p>
                Train like your ring idols. Forge body and mind to become a true
                modern warrior.
              </p>
            </div>
          </a>
          <a className="routine-info-item" href="#">
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
