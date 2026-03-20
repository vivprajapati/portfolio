import React from 'react';
import styled from 'styled-components';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';

const Section = styled.section``;

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: var(--space-3xl);

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: var(--space-2xl);
  }
`;

/* ——— Timeline ——— */
const Timeline = styled.div`
  position: relative;
  padding-left: var(--space-2xl);

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(
      180deg,
      var(--color-primary) 0%,
      rgba(202, 253, 0, 0.3) 50%,
      var(--color-outline-variant) 100%
    );
  }
`;

const Entry = styled.div`
  position: relative;
  margin-bottom: var(--space-3xl);
  &:last-child { margin-bottom: 0; }

  &::before {
    content: '';
    position: absolute;
    left: calc(-1 * var(--space-2xl) - 5px);
    top: 6px;
    width: 12px;
    height: 12px;
    background: var(--color-primary);
    border-radius: 50%;
    border: 3px solid var(--color-background);
    box-shadow: 0 0 12px rgba(202, 253, 0, 0.3);
    transition: box-shadow 0.4s ease;
  }

  &:hover::before {
    box-shadow: 0 0 24px rgba(202, 253, 0, 0.6);
  }
`;

const YearBadge = styled.span`
  display: inline-block;
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-primary);
  margin-bottom: 6px;
`;

const Role = styled.h3`
  font-size: 1.4rem;
  font-weight: 800;
  margin-bottom: 2px;
  letter-spacing: -0.02em;
`;

const Company = styled.p`
  font-size: 0.88rem;
  font-weight: 500;
  color: var(--color-on-surface-variant);
  margin-bottom: var(--space-md);
`;

const Desc = styled.p`
  font-size: 0.88rem;
  line-height: 1.8;
  color: var(--color-on-surface-variant);
  margin-bottom: var(--space-lg);
`;

const AchievementGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-sm);
  margin-top: var(--space-md);

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  padding: var(--space-md) var(--space-lg);
  background: var(--color-surface-container);
  border: 1px solid var(--color-outline-variant);
  border-radius: var(--radius-md);
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(202, 253, 0, 0.2);
    background: var(--color-surface-container-high);
  }

  .stat-value {
    font-family: var(--font-headline);
    font-weight: 800;
    font-size: 1rem;
    color: var(--color-primary);
    margin-bottom: 2px;
  }
  .stat-label {
    font-size: 0.75rem;
    color: var(--color-on-surface-variant);
    line-height: 1.4;
  }
`;

const Achievements = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  margin-top: var(--space-md);
`;

const Achievement = styled.div`
  display: flex;
  gap: var(--space-md);
  padding: var(--space-md) var(--space-lg);
  background: var(--color-surface-container);
  border: 1px solid var(--color-outline-variant);
  border-radius: var(--radius-md);
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(202, 253, 0, 0.15);
    transform: translateX(4px);
  }

  .marker {
    flex-shrink: 0;
    font-family: var(--font-headline);
    font-weight: 800;
    font-size: 0.82rem;
    color: var(--color-primary);
    padding-top: 1px;
  }
  .text {
    font-size: 0.82rem;
    line-height: 1.6;
    color: var(--color-on-surface-variant);
  }
`;

/* ——— Sidebar ——— */
const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
`;

const PhilosophyCard = styled.div`
  padding: var(--space-2xl);
  background: var(--color-surface-container);
  border: 1px solid var(--color-outline-variant);
  border-radius: var(--radius-lg);
  transition: all 0.4s ease;

  &:hover {
    border-color: rgba(202, 253, 0, 0.15);
  }
`;

const PhilosophyTitle = styled.h3`
  font-size: 1.05rem;
  margin-bottom: var(--space-xl);
  color: var(--color-on-surface);
`;

const Quote = styled.div`
  margin-bottom: var(--space-lg);
  padding-bottom: var(--space-lg);
  border-bottom: 1px solid var(--color-outline-variant);

  &:last-child { margin-bottom: 0; padding-bottom: 0; border-bottom: none; }

  .label {
    font-size: 0.68rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--color-primary);
    margin-bottom: 6px;
  }
  .value {
    font-size: 0.85rem;
    line-height: 1.7;
    color: var(--color-on-surface-variant);
    font-style: italic;
  }
`;

const TechStack = styled.div`
  padding: var(--space-2xl);
  background: var(--color-surface-container);
  border: 1px solid var(--color-outline-variant);
  border-radius: var(--radius-lg);
`;

const TechTitle = styled.h3`
  font-size: 1.05rem;
  margin-bottom: var(--space-lg);
`;

const TechGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const TechPill = styled.span`
  padding: 0.35rem 0.9rem;
  background: var(--color-surface-container-high);
  color: var(--color-on-surface-variant);
  font-size: 0.78rem;
  font-weight: 500;
  border-radius: var(--radius-full);
  border: 1px solid var(--color-outline-variant);
  transition: all 0.25s ease;

  &:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
    background: rgba(202, 253, 0, 0.06);
    transform: translateY(-2px);
  }
`;

const HireCTA = styled.div`
  padding: var(--space-2xl);
  background: var(--color-primary);
  border-radius: var(--radius-lg);
  color: var(--color-on-primary);
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 48px rgba(202, 253, 0, 0.25);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0; right: 0;
    width: 120px; height: 120px;
    background: rgba(255,255,255,0.08);
    border-radius: 50%;
    transform: translate(30%, -30%);
  }

  h3 {
    color: var(--color-on-primary);
    margin-bottom: 6px;
    font-size: 1.1rem;
    position: relative;
  }
  p {
    color: var(--color-on-primary);
    opacity: 0.75;
    font-size: 0.85rem;
    position: relative;
  }
`;

const Experience = () => {
  const [titleRef, titleVisible] = useScrollReveal();
  const [timelineRef, timelineVisible] = useStaggerReveal();
  const [sidebarRef, sidebarVisible] = useScrollReveal();

  return (
    <Section id="experience">
      <div ref={titleRef} className={`reveal ${titleVisible ? 'visible' : ''}`}>
        <span className="section-label">My Journey</span>
        <h2 className="section-title">
          WHERE I'VE <span style={{ color: 'var(--color-primary)' }}>WORKED.</span>
        </h2>
      </div>

      <Layout>
        <Timeline ref={timelineRef} className={`stagger-children ${timelineVisible ? 'visible' : ''}`}>
          <Entry>
            <YearBadge>2025 — Present</YearBadge>
            <Role>Senior Software Developer</Role>
            <Company>CometChat Inc.</Company>
            <Desc>
              Building and maintaining the Android Chat SDK and UI Kit used by thousands 
              of developers worldwide. Leading architecture decisions, code reviews, 
              and shipping major releases.
            </Desc>
            <AchievementGrid>
              <StatCard>
                <div className="stat-value">SDK Architecture</div>
                <div className="stat-label">Redesigned the Android UI Kit with Jetpack Compose, improving developer adoption by 3x.</div>
              </StatCard>
              <StatCard>
                <div className="stat-value">Performance</div>
                <div className="stat-label">Optimized SDK initialization and message rendering, cutting load times by 45%.</div>
              </StatCard>
            </AchievementGrid>
          </Entry>

          <Entry>
            <YearBadge>2024 — 2025</YearBadge>
            <Role>Software Developer</Role>
            <Company>CometChat Inc.</Company>
            <Desc>
              Developed core features for the Android Chat SDK — real-time messaging, 
              media handling, and extensible UI components. Shipped updates used by 
              millions of end users.
            </Desc>
            <Achievements>
              <Achievement>
                <span className="marker">D1.</span>
                <span className="text">Built reusable components adopted across multiple product lines, used by 100+ developers.</span>
              </Achievement>
              <Achievement>
                <span className="marker">D2.</span>
                <span className="text">Mentored junior developers and helped 4 team members grow into senior roles.</span>
              </Achievement>
            </Achievements>
          </Entry>

          <Entry>
            <YearBadge>2021 — 2023</YearBadge>
            <Role>Associate Software Developer</Role>
            <Company>CometChat Inc.</Company>
            <Desc>
              Started as an Associate Developer building demo apps, fixing bugs, and 
              learning the codebase inside out. Grew into owning full features and 
              shipping production code.
            </Desc>
          </Entry>
        </Timeline>

        <div ref={sidebarRef} className={`reveal-right ${sidebarVisible ? 'visible' : ''}`}>
          <Sidebar>
            <PhilosophyCard>
              <PhilosophyTitle>How I Work</PhilosophyTitle>
              <Quote>
                <div className="label">01 — Keep It Simple</div>
                <div className="value">
                  I write code that's easy to read, easy to change, and easy 
                  to delete. No over-engineering.
                </div>
              </Quote>
              <Quote>
                <div className="label">02 — Ship & Iterate</div>
                <div className="value">
                  Done is better than perfect. I ship early, get feedback, 
                  and improve with real user data.
                </div>
              </Quote>
              <Quote>
                <div className="label">03 — Own The Outcome</div>
                <div className="value">
                  I don't just write code — I care about the product. If it 
                  breaks at 3am, I'll fix it at 3am.
                </div>
              </Quote>
            </PhilosophyCard>

            <TechStack>
              <TechTitle>Tools I Use</TechTitle>
              <TechGrid>
                {['Kotlin', 'Java', 'TypeScript', 'JavaScript', 'React',
                  'Jetpack Compose', 'Node.js', 'Python',
                  'Firebase', 'Git', 'REST APIs', 'WebSockets',
                  'Gradle', 'GitHub Actions',
                ].map((tech) => (
                  <TechPill key={tech}>{tech}</TechPill>
                ))}
              </TechGrid>
            </TechStack>

            <HireCTA>
              <h3>LET'S WORK TOGETHER</h3>
              <p>Open to new opportunities and exciting projects in 2026.</p>
            </HireCTA>
          </Sidebar>
        </div>
      </Layout>
    </Section>
  );
};

export default Experience;
