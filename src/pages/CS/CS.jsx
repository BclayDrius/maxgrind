import "./CS.scss";

function CS() {
  return (
    <main>
      <section className="cs-hero">
        <h1>Calisthenics / Streetlifting</h1>
        <p>
          Master your body. Develop strength and control with exercises that
          challenge gravity.
        </p>
      </section>
      <section className="cs-routine-categories">
        <div className="cs-routine-category">
          <h2>Calisthenics</h2>
          <div className="cs-routine-container">
            <div className="cs-routine">
              <h3>Basic Calisthenics</h3>
              <p>
                Start your journey in the world of calisthenics with fundamental
                exercises.
              </p>
              <ul>
                <li>3-4 days per week</li>
                <li>Gradual progression</li>
                <li>Focus on technique</li>
              </ul>
              <button>Get Started</button>
            </div>
            <div className="cs-routine">
              <h3>Advanced Streetlifting</h3>
              <p>Intensive program to master the most challenging exercises.</p>
              <ul>
                <li>4-5 days per week</li>
                <li>Advanced elements</li>
                <li>Strength training</li>
              </ul>
              <button>Get Started</button>
            </div>
            <div className="cs-routine">
              <h3>Freestyle Calisthenics</h3>
              <p>Learn to combine movements and create fluid routines.</p>
              <ul>
                <li>5-6 days per week</li>
                <li>Choreography</li>
                <li>Transitions</li>
              </ul>
              <button>Get Started</button>
            </div>
          </div>
          <div className="cs-routine-category">
            <h2>Streetlifting</h2>
            <div className="cs-routine-container">
              <div className="cs-routine">
                <h3>Basic Calisthenics</h3>
                <p>
                  Start your journey in the world of calisthenics with
                  fundamental exercises.
                </p>
                <ul>
                  <li>3-4 days per week</li>
                  <li>Gradual progression</li>
                  <li>Focus on technique</li>
                </ul>
                <button>Get Started</button>
              </div>
              <div className="cs-routine">
                <h3>Advanced Streetlifting</h3>
                <p>
                  Intensive program to master the most challenging exercises.
                </p>
                <ul>
                  <li>4-5 days per week</li>
                  <li>Advanced elements</li>
                  <li>Strength training</li>
                </ul>
                <button>Get Started</button>
              </div>
              <div className="cs-routine">
                <h3>Freestyle Calisthenics</h3>
                <p>Learn to combine movements and create fluid routines.</p>
                <ul>
                  <li>5-6 days per week</li>
                  <li>Choreography</li>
                  <li>Transitions</li>
                </ul>
                <button>Get Started</button>
              </div>
            </div>
            <div className="cs-routine-category">
              <h2>Mix</h2>
              <div className="cs-routine-container">
                <div className="cs-routine">
                  <h3>Basic Calisthenics</h3>
                  <p>
                    Start your journey in the world of calisthenics with
                    fundamental exercises.
                  </p>
                  <ul>
                    <li>3-4 days per week</li>
                    <li>Gradual progression</li>
                    <li>Focus on technique</li>
                  </ul>
                  <button>Get Started</button>
                </div>
                <div className="cs-routine">
                  <h3>Advanced Streetlifting</h3>
                  <p>
                    Intensive program to master the most challenging exercises.
                  </p>
                  <ul>
                    <li>4-5 days per week</li>
                    <li>Advanced elements</li>
                    <li>Strength training</li>
                  </ul>
                  <button>Get Started</button>
                </div>
                <div className="cs-routine">
                  <h3>Freestyle Calisthenics</h3>
                  <p>Learn to combine movements and create fluid routines.</p>
                  <ul>
                    <li>5-6 days per week</li>
                    <li>Choreography</li>
                    <li>Transitions</li>
                  </ul>
                  <button>Get Started</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cs-additional">
        <h2>Additional Resources</h2>
        <div className="cs-additional-grid">
          <div className="cs-additional-card">
            <h3>Nutrition Guide</h3>
            <p>Optimize your nutrition for calisthenics performance.</p>
          </div>
          <div className="cs-additional-card">
            <h3>Exercise Technique</h3>
            <p>Detailed videos of the correct technique for each movement.</p>
          </div>
          <div className="cs-additional-card">
            <h3>Community</h3>
            <p>Join our community of athletes and share your progress.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default CS;
