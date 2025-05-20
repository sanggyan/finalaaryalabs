import React, { useState, useEffect, useRef } from "react";
import "./Impact.css";
import about_img from "../../assets/about.svg";

const About = () => {
  const [achievements, setAchievements] = useState([
    { value: 0, target: 20, text: "PROJECTS COMPLETED" },
    { value: 0, target: 7, text: "YEARS OF EXPERIENCE" },
    { value: 0, target: 10, text: "HAPPY ACTIVE CLIENTS" },
  ]);

  const impactRef = useRef(null);
  const [impactVisible, setImpactVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setImpactVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (impactRef.current) {
      observer.observe(impactRef.current);
    }

    return () => {
      if (impactRef.current) {
        observer.unobserve(impactRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!impactVisible) return;

    const duration = 2000; // Animation duration in ms
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      setAchievements((prev) =>
        prev.map((item, index) => {
          // Stagger the animations slightly
          const itemProgress = Math.max(
            0,
            Math.min(1, (progress - index * 0.1) * 1.3)
          );
          return {
            ...item,
            value: Math.floor(itemProgress * item.target),
          };
        })
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [impactVisible]);

  return (
    <div id="about" className="about-section">
      <div className="section-header">
        <h1 className="section-title">About Us</h1>
      </div>

      <div className="about-content">
        <div className="about-image-container">
          <img
            src={about_img}
            alt="Organic farming illustration"
            className="about-image"
          />
          <div className="image-overlay"></div>
        </div>

        <div className="about-text">
          <div className="mission-card">
            <h2>Who We Are</h2>
            <p>
              We’re AaryaLabs—a creative bunch of designers, developers, and
              digital marketers who love bringing ideas to life online. Think of
              us as your go-to team for all things web and digital. We believe
              good design and smart strategy can take any brand to the next
              level, and we’re here to help make that happen—without the jargon
              or fluff.
            </p>
          </div>

          <div className="vision-card">
            <h2>What We Do</h2>
            <p>
              At AaryaLabs, we build websites that don’t just look good—they
              actually work. Fast, responsive, and easy to use. Whether you're
              launching a new brand or upgrading your online presence, we’ve got
              the tools and the team to make it smooth. But we don’t stop at
              websites. We help businesses grow through SEO, content creation,
              social media, and targeted ads. It’s all about making sure the
              right people find you—and remember you.
            </p>
          </div>
        </div>
      </div>

      <div className="about-quote">
        <h2>"Empowering brands, Elevating design, Driving growth"</h2>
      </div>

      <div className="impact-section" ref={impactRef}>
        <div className="section-header">
          <h1 className="section-title">Our Impact</h1>
        </div>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <div className="achievement-value">
                <span className="countup">{achievement.value}+</span>
              </div>
              <div className="achievement-text">
                <p>{achievement.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
