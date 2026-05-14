import React from "react";
import { motion } from "framer-motion";
import {
  Activity,
  ChevronRight,
  CircleDot,
  Headphones,
  Radio,
  Smartphone,
  TrendingUp,
  Watch,
  Waves
} from "lucide-react";

export default function App() {
  const features = [
    {
      icon: <Waves size={28} />,
      title: "Brainwave awareness",
      text: "See focus, calm, and cognitive load signals translated into simple daily guidance."
    },
    {
      icon: <CircleDot size={28} />,
      title: "Focus tracking",
      text: "Measure your best mental windows and learn when to work, pause, or recover."
    },
    {
      icon: <Radio size={28} />,
      title: "Connected feedback",
      text: "A subtle wearable experience that keeps your mind, body, and habits in sync."
    },
    {
      icon: <TrendingUp size={28} />,
      title: "Elevation over time",
      text: "Build better routines with trend reports that show progress across focus and recovery."
    }
  ];

  return (
    <main className="site">
      <section className="hero">
        <div className="glow glowOne" />
        <div className="glow glowTwo" />

        <nav className="nav">
          <a className="brand" href="#top">
            <NeuroBandMark small />
            <div>
              <div className="brandName">NeuroBand</div>
              <div className="brandTag">Tune your mind</div>
            </div>
          </a>

          <div className="navLinks">
            <a href="#features">Features</a>
            <a href="#app">App</a>
            <a href="#waitlist">Waitlist</a>
          </div>

          <a className="navButton" href="#waitlist">Early Access</a>
        </nav>

        <div id="top" className="heroGrid">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="eyebrow">
              <span />
              Brainwaves • Focus • Wearable
            </div>

            <h1>Tune your mind. Elevate your life.</h1>

            <p className="heroText">
              NeuroBand is a sleek neurotech wearable designed to help you
              understand focus, stress, and recovery through real-time
              brainwave-inspired insights.
            </p>

            <div className="heroButtons">
              <a className="primaryButton" href="#waitlist">
                Join Waitlist <ChevronRight size={18} />
              </a>
              <a className="secondaryButton" href="#features">
                Explore Tech
              </a>
            </div>
          </motion.div>

          <motion.div
            className="dashboardWrap"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="dashboard">
              <div className="dashboardTop">
                <div className="miniBrand">
                  <NeuroBandMark small />
                  <span>Live Session</span>
                </div>
                <span className="activePill">Active</span>
              </div>

              <div className="markArea">
                <NeuroBandMark />
              </div>

              <div className="focusCard">
                <div className="focusTop">
                  <div>
                    <p>Focus</p>
                    <strong>96%</strong>
                    <span>Excellent</span>
                  </div>
                  <Activity size={42} />
                </div>

                <svg viewBox="0 0 420 88" className="waveLine" fill="none">
                  <path
                    d="M0 50 C 22 28, 44 28, 66 50 S 110 72, 132 50 S 176 28, 198 50 S 242 72, 264 50 S 308 28, 330 50 S 374 72, 420 42"
                    stroke="#00E0FF"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M0 50 C 22 28, 44 28, 66 50 S 110 72, 132 50 S 176 28, 198 50 S 242 72, 264 50 S 308 28, 330 50 S 374 72, 420 42"
                    stroke="#2563FF"
                    strokeWidth="12"
                    strokeLinecap="round"
                    opacity="0.18"
                  />
                </svg>
              </div>

              <div className="statGrid">
                <Stat label="Session" value="45:00" />
                <Stat label="Calm" value="High" />
                <Stat label="Load" value="Low" />
                <Stat label="Recovery" value="Good" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="keywordStrip">
        {[
          [<Activity size={22} />, "Brainwaves"],
          [<CircleDot size={22} />, "Focus"],
          [<Radio size={22} />, "Connection"],
          [<Headphones size={22} />, "Neurotech"],
          [<Watch size={22} />, "Wearable"],
          [<TrendingUp size={22} />, "Elevation"]
        ].map(([icon, label]) => (
          <div className="keyword" key={label}>
            {icon}
            {label}
          </div>
        ))}
      </section>

      <section id="features" className="section">
        <div className="sectionIntro">
          <p className="label">Core System</p>
          <h2>Designed around clarity, connection, and control.</h2>
          <p>
            The NeuroBand experience uses deep navy surfaces, electric cyan
            accents, and signal-inspired motion to create a premium futuristic
            brand presence.
          </p>
        </div>

        <div className="features">
          {features.map((feature) => (
            <div className="featureCard" key={feature.title}>
              <div className="featureIcon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="app" className="appSection">
        <div className="appCard">
          <Smartphone size={42} />
          <p className="label">Companion App</p>
          <h2>Your focus dashboard, simplified.</h2>
          <p>
            NeuroBand turns complex signals into clean visuals, readiness
            scores, and micro-prompts that help users tune their day.
          </p>
        </div>

        <div className="appGrid">
          <MiniCard
            title="Morning readiness"
            text="Start each day with a clear snapshot of mental energy and recovery."
          />
          <MiniCard
            title="Focus sessions"
            text="Track deep work windows and see when your attention is strongest."
          />
          <MiniCard
            title="Stress alerts"
            text="Receive gentle haptic nudges before overload turns into burnout."
          />
          <MiniCard
            title="Trend reports"
            text="Understand long-term patterns across sleep, stress, and performance."
          />
        </div>
      </section>

      <section id="waitlist" className="waitlist">
        <div className="waitlistCard">
          <NeuroBandMark small />
          <p className="label">Reserve Early Access</p>
          <h2>Be first to wear the future of focus.</h2>
          <p>
            Join the NeuroBand waitlist for launch updates, beta testing
            opportunities, and founder-only access.
          </p>

          <form className="form">
            <input type="email" placeholder="Enter your email" />
            <button type="button">Join Waitlist</button>
          </form>
        </div>
      </section>
    </main>
  );
}

function Stat({ label, value }) {
  return (
    <div className="stat">
      <p>{label}</p>
      <strong>{value}</strong>
    </div>
  );
}

function MiniCard({ title, text }) {
  return (
    <div className="miniCard">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function NeuroBandMark({ small = false }) {
  return (
    <div className={small ? "mark smallMark" : "mark"}>
      <span className="dot" />
      <span className="arc arc1" />
      <span className="arc arc2" />
      <span className="arc arc3" />
      <span className="arc arc4" />
    </div>
  );
}