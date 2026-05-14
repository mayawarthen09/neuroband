import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Activity,
  Award,
  BatteryCharging,
  BookOpen,
  Brain,
  ChevronRight,
  CircleDot,
  Coffee,
  GraduationCap,
  HeartPulse,
  LineChart,
  Mail,
  Moon,
  Phone,
  Radio,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
  Vibrate,
  Watch,
  Waves
} from "lucide-react";

export default function App() {
  const features = [
    {
      icon: <Vibrate size={26} />,
      title: "Personalized haptic cues",
      text: "NeuroBand uses gentle wrist vibrations as refocus cues, then helps users discover which timing patterns work best for them."
    },
    {
      icon: <Brain size={26} />,
      title: "Mini SART focus testing",
      text: "Users complete short sustained-attention tasks to measure reaction time variability and attention patterns over time."
    },
    {
      icon: <LineChart size={26} />,
      title: "Daily focus logging",
      text: "Students, users, or teachers can quickly log focus observations so progress becomes visible instead of invisible."
    },
    {
      icon: <Coffee size={26} />,
      title: "Context tracking",
      text: "Sleep, caffeine, effort, and other daily factors can be logged alongside attention results to reveal useful patterns."
    },
    {
      icon: <Trophy size={26} />,
      title: "Rewards system",
      text: "Users can set personal benchmarks and attach meaningful rewards, turning focus goals into motivation they actually care about."
    },
    {
      icon: <ShieldCheck size={26} />,
      title: "Student-centered design",
      text: "Built to be subtle, low-cost, classroom-friendly, and supportive for people who may not always have access to medication or accommodations."
    }
  ];

  const researchStats = [
    ["Participants", "30–35", "11th and 12th grade students"],
    ["Sessions", "2", "Control and vibration conditions"],
    ["Task length", "30 min", "Sustained Attention to Response Task"],
    ["Cue pattern", "600 ms", "Gentle biphasic vibration cue"]
  ];

  return (
    <main className="site">
      <section className="hero" id="top">
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
            <a href="#creator">Creator</a>
            <a href="#research">Research</a>
            <a href="#contact">Contact</a>
          </div>

          <a className="navButton" href="#contact">Contact</a>
        </nav>

        <div className="heroGrid">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="eyebrow">
              <span />
              Haptic cues • Focus tracking • ADHD support
            </div>

            <h1>Tune your mind. Elevate your life. Built by Maya.</h1>

            <p className="heroText">
              NeuroBand is a student-built wearable and companion app designed
              to help people understand their attention patterns, receive gentle
              refocus cues, and build focus habits that are personalized to real
              life.
            </p>

            <div className="heroButtons">
              <a className="primaryButton" href="#research">
                View the research <ChevronRight size={18} />
              </a>
              <a className="secondaryButton" href="#features">
                Explore features
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
                  <span>Personal Focus Session</span>
                </div>
                <span className="activePill">Active</span>
              </div>

              <div className="markArea">
                <NeuroBandMark />
              </div>

              <div className="focusCard">
                <div className="focusTop">
                  <div>
                    <p>Focus stability</p>
                    <strong>96%</strong>
                    <span>Refocus cue delivered</span>
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
                <Stat label="Sleep" value="7.5 hr" />
                <Stat label="Caffeine" value="Yes" />
                <Stat label="Cue timing" value="Jittered" />
                <Stat label="Reward" value="Starbucks" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="keywordStrip">
        {[
          [<Waves size={22} />, "Brainwaves"],
          [<CircleDot size={22} />, "Focus"],
          [<Vibrate size={22} />, "Haptics"],
          [<BookOpen size={22} />, "Students"],
          [<Watch size={22} />, "Wearable"],
          [<Sparkles size={22} />, "Growth"]
        ].map(([icon, label]) => (
          <div className="keyword" key={label}>
            {icon}
            {label}
          </div>
        ))}
      </section>

      <section id="features" className="section">
        <div className="sectionIntro">
          <p className="label">What NeuroBand does</p>
          <h2>A focus system that adapts to the person wearing it.</h2>
          <p>
            NeuroBand is different because it does not treat focus like one
            fixed problem with one fixed solution. It combines attention testing,
            haptic cue timing, daily reflection, context tracking, and
            self-chosen rewards so users can learn what actually helps them stay
            on task.
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

      <section className="section splitSection">
        <div className="appCard">
          <BatteryCharging size={42} />
          <p className="label">How it works</p>
          <h2>Test. Cue. Log. Learn. Reward.</h2>
          <p>
            A user starts with a mini SART-style attention task. NeuroBand then
            explores gentle vibration timing and lets the user record focus
            quality, teacher observations, sleep, caffeine, and daily context.
            Over time, the app turns those logs into patterns the user can act
            on.
          </p>
        </div>

        <div className="timeline">
          <Step
            number="01"
            title="Mini attention check"
            text="Reaction time variability gives a quick snapshot of sustained attention."
          />
          <Step
            number="02"
            title="Gentle vibration cue"
            text="A non-disruptive wrist vibration acts as a physical reminder to reset attention."
          />
          <Step
            number="03"
            title="Daily reflection"
            text="Users or teachers can log focus observations in a quick, simple format."
          />
          <Step
            number="04"
            title="Reward loop"
            text="Benchmarks connect focus progress to self-selected rewards and motivation."
          />
        </div>
      </section>

      <section id="creator" className="creatorSection">
        <div className="creatorPhotoWrap">
          <img
            src="/maya-warthen.jpg"
            alt="Maya Warthen, founder of NeuroBand"
            className="creatorPhoto"
          />
        </div>

        <div className="creatorCopy">
          <p className="label">Meet the creator</p>
          <h2>Maya Warthen</h2>
          <p className="creatorTitle">
            Founder • Lead Researcher • Scholar With Distinction • Student
            Innovator
          </p>

          <p>
            I created NeuroBand because I know what it feels like to struggle
            with ADHD and still want to succeed, focus, and be understood. Not
            everyone can access medication, extra time, or the support they need
            at the moment they need it. NeuroBand is my way of building
            something more personal, more accessible, and more empowering.
          </p>

          <p>
            My mission is to increase awareness of ADHD and help more people
            become stronger students, more focused individuals, and more
            confident learners — especially in a world where attention is
            constantly being pulled away.
          </p>

          <blockquote>
            “If you use NeuroBand, I want you to know that I am here for you. I
            am building this for people who have felt distracted, misunderstood,
            or unsupported — and who still deserve tools that help them thrive.”
          </blockquote>

          <div className="creatorBadges">
            <span>
              <GraduationCap size={16} /> Tower Hill School
            </span>
            <span>
              <HeartPulse size={16} /> Future Health Careers
            </span>
            <span>
              <Award size={16} /> Research & leadership
            </span>
          </div>
        </div>
      </section>

      <section id="research" className="researchSection">
        <div className="sectionIntro centered">
          <p className="label">Current research</p>
          <h2>
            Studying whether gentle haptic cues can support sustained attention.
          </h2>
          <p>
            Maya’s current study investigates whether subtle wrist vibrations
            can reduce attentional lapses during sustained cognitive tasks in
            high school students. The study compares a control condition with a
            vibration condition while measuring reaction time, reaction time
            variability, lapse rate, and self-reported focus.
          </p>
        </div>

        <div className="researchGrid">
          {researchStats.map(([label, value, text]) => (
            <div className="researchStat" key={label}>
              <p>{label}</p>
              <strong>{value}</strong>
              <span>{text}</span>
            </div>
          ))}
        </div>

        <div className="researchCards">
          <ResearchCard
            icon={<Target size={26} />}
            title="Research question"
            text="Can gentle haptic vibration feedback reduce attention lapses and reaction time variability during a sustained attention task?"
          />
          <ResearchCard
            icon={<Radio size={26} />}
            title="Experimental design"
            text="Participants complete two sessions: one without vibration and one with NeuroBand vibration cues delivered at randomized intervals."
          />
          <ResearchCard
            icon={<Moon size={26} />}
            title="Context matters"
            text="The study records sleep and caffeine as covariates so attention data can be interpreted with real-world factors in mind."
          />
        </div>
      </section>

      <section id="contact" className="contactSection">
        <div>
          <p className="label">Contact</p>
          <h2>Connect with NeuroBand.</h2>
          <p>
            For research questions, collaboration opportunities, or updates
            about NeuroBand, reach out directly.
          </p>
        </div>

        <div className="contactCards">
          <a href="mailto:mayawarthen@icloud.com" className="contactCard">
            <Mail size={24} />
            <div>
              <span>Email</span>
              <strong>mayawarthen@icloud.com</strong>
            </div>
          </a>

          <a href="tel:3024150632" className="contactCard">
            <Phone size={24} />
            <div>
              <span>Phone</span>
              <strong>302-415-0632</strong>
            </div>
          </a>
        </div>
      </section>

      <section className="waitlist">
        <div className="waitlistCard">
          <NeuroBandMark small />
          <p className="label">Join the mission</p>
          <h2>Help build a more personal future for focus support.</h2>
          <p>
            NeuroBand is being built for students, people with ADHD, educators,
            and anyone who wants a better way to understand and support
            attention.
          </p>

          <KitWaitlistForm />
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

function Step({ number, title, text }) {
  return (
    <div className="step">
      <span>{number}</span>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

function ResearchCard({ icon, title, text }) {
  return (
    <div className="researchCard">
      <div className="featureIcon">{icon}</div>
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
function KitWaitlistForm() {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[data-uid="b2784fa021"]'
    );

    if (existingScript) return;

    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-uid", "b2784fa021");
    script.src = "https://neuroband.kit.com/b2784fa021/index.js";

    document.getElementById("kit-waitlist-form").appendChild(script);
  }, []);

  return <div id="kit-waitlist-form" className="kitFormWrap" />;
}