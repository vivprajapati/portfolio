import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';

const pulseGlow = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(202, 253, 0, 0.15); }
  50% { box-shadow: 0 0 40px rgba(202, 253, 0, 0.3); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
`;

const Section = styled.section``;

const TopBanner = styled.div`
  text-align: center;
  margin-bottom: var(--space-3xl);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-xl);
  margin-bottom: var(--space-3xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  padding: var(--space-2xl);
  background: var(--color-surface-container);
  border: 1px solid var(--color-outline-variant);
  border-radius: var(--radius-xl);
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: ${({ $accent }) => $accent || 'var(--color-primary)'};
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-6px);
    border-color: ${({ $accent }) => $accent || 'rgba(202, 253, 0, 0.2)'};
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
  }
  &:hover::before { opacity: 1; }
`;

const CardIcon = styled.div`
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ $bg }) => $bg || 'rgba(202, 253, 0, 0.08)'};
  border: 1px solid ${({ $border }) => $border || 'rgba(202, 253, 0, 0.15)'};
  border-radius: var(--radius-lg);
  font-size: 1.5rem;
  margin-bottom: var(--space-lg);
  transition: all 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.1) rotate(5deg);
    animation: ${float} 2s ease-in-out infinite;
  }
`;

const CardLabel = styled.span`
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: ${({ $color }) => $color || 'var(--color-primary)'};
  display: block;
  margin-bottom: 6px;
`;

const CardTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 800;
  margin-bottom: var(--space-sm);
`;

const CardDesc = styled.p`
  font-size: 0.88rem;
  line-height: 1.75;
  color: var(--color-on-surface-variant);
  margin-bottom: var(--space-lg);
`;

const CheckList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CheckItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.82rem;
  color: var(--color-on-surface-variant);

  .check {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(202, 253, 0, 0.08);
    border: 1px solid rgba(202, 253, 0, 0.15);
    border-radius: 50%;
    font-size: 0.6rem;
    color: var(--color-primary);
    flex-shrink: 0;
  }
`;

const ResumeSection = styled.div`
  padding: var(--space-3xl);
  background: var(--color-surface-container);
  border: 1px solid var(--color-outline-variant);
  border-radius: var(--radius-xl);
  display: flex;
  align-items: center;
  gap: var(--space-3xl);
  position: relative;
  overflow: hidden;
  animation: ${pulseGlow} 4s ease-in-out infinite;

  &::before {
    content: '';
    position: absolute;
    top: -50%; right: -20%;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(202, 253, 0, 0.04) 0%, transparent 60%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: var(--space-2xl);
  }
`;

const ResumeContent = styled.div`
  flex: 1;
  position: relative;
  z-index: 1;

  h3 {
    font-size: 1.5rem;
    font-weight: 800;
    margin-bottom: var(--space-sm);
  }

  p {
    font-size: 0.92rem;
    line-height: 1.7;
    color: var(--color-on-surface-variant);
    max-width: 480px;
  }
`;

const ResumeActions = styled.div`
  display: flex;
  gap: var(--space-md);
  flex-shrink: 0;
  position: relative;
  z-index: 1;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
  }
`;

const DownloadBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0.85rem 1.8rem;
  background: var(--color-primary);
  color: var(--color-on-primary) !important;
  font-family: var(--font-headline);
  font-weight: 700;
  font-size: 0.82rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border-radius: var(--radius-md);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none !important;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 32px rgba(202, 253, 0, 0.3);
  }

  .icon {
    font-size: 1.1rem;
  }
`;

const ContactBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0.85rem 1.8rem;
  background: transparent;
  border: 1px solid var(--color-outline-variant);
  color: var(--color-on-surface) !important;
  font-family: var(--font-headline);
  font-weight: 700;
  font-size: 0.82rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border-radius: var(--radius-md);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none !important;

  &:hover {
    border-color: var(--color-primary);
    color: var(--color-primary) !important;
    transform: translateY(-3px);
  }
`;

const StatusBar = styled.div`
  display: flex;
  gap: var(--space-xl);
  justify-content: center;
  flex-wrap: wrap;
  margin-top: var(--space-2xl);
`;

const StatusItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--color-on-surface-variant);

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ $color }) => $color || 'var(--color-primary)'};
    box-shadow: 0 0 8px ${({ $color }) => $color || 'var(--color-primary)'}60;
  }
`;

const HireMe = () => {
  const [titleRef, titleVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useStaggerReveal();
  const [resumeRef, resumeVisible] = useScrollReveal();

  return (
    <Section id="hire">
      <div ref={titleRef} className={`reveal ${titleVisible ? 'visible' : ''}`}>
        <TopBanner>
          <span className="section-label">Work With Me</span>
          <h2 className="section-title">
            LET'S <span style={{ color: 'var(--color-primary)' }}>TEAM UP.</span>
          </h2>
          <p className="section-subtitle" style={{ maxWidth: 580, margin: '0 auto' }}>
            Whether you need a full-time developer or someone to build your next 
            project — I'm available and ready to ship great software.
          </p>
        </TopBanner>
      </div>

      <Grid ref={gridRef} className={`stagger-children ${gridVisible ? 'visible' : ''}`}>
        <Card $accent="#cafd00">
          <CardIcon $bg="rgba(202, 253, 0, 0.08)" $border="rgba(202, 253, 0, 0.15)">
            💼
          </CardIcon>
          <CardLabel $color="#cafd00">Full-Time Opportunity</CardLabel>
          <CardTitle>Hire Me Full-Time</CardTitle>
          <CardDesc>
            Looking for a senior developer who can hit the ground running? 
            I bring 4+ years of shipping production apps, leading teams, 
            and building SDKs used by millions.
          </CardDesc>
          <CheckList>
            <CheckItem>
              <span className="check">✓</span>
              Android & Web development expertise
            </CheckItem>
            <CheckItem>
              <span className="check">✓</span>
              Team leadership & code review experience
            </CheckItem>
            <CheckItem>
              <span className="check">✓</span>
              Remote-ready, self-driven, ship-first mindset
            </CheckItem>
            <CheckItem>
              <span className="check">✓</span>
              Strong communication & collaboration skills
            </CheckItem>
          </CheckList>
        </Card>

        <Card $accent="#67e8f9">
          <CardIcon $bg="rgba(103, 232, 249, 0.08)" $border="rgba(103, 232, 249, 0.15)">
            🚀
          </CardIcon>
          <CardLabel $color="#67e8f9">Freelance / Contract</CardLabel>
          <CardTitle>Hire For Your Project</CardTitle>
          <CardDesc>
            Have an app idea or need a developer for a specific project? 
            I take on freelance work and build end-to-end — from 
            architecture to deployment.
          </CardDesc>
          <CheckList>
            <CheckItem>
              <span className="check">✓</span>
              Mobile apps (Android, Kotlin, Jetpack Compose)
            </CheckItem>
            <CheckItem>
              <span className="check">✓</span>
              Web apps (React, Node.js, full-stack)
            </CheckItem>
            <CheckItem>
              <span className="check">✓</span>
              API development & third-party integrations
            </CheckItem>
            <CheckItem>
              <span className="check">✓</span>
              Fixed-price or hourly — flexible engagement
            </CheckItem>
          </CheckList>
        </Card>
      </Grid>

      <div ref={resumeRef} className={`reveal-scale ${resumeVisible ? 'visible' : ''}`}>
        <ResumeSection>
          <ResumeContent>
            <h3>GRAB MY RESUME</h3>
            <p>
              Everything you need to know about my skills, experience, and what 
              I bring to the table — all in one document.
            </p>
          </ResumeContent>
          <ResumeActions>
            <DownloadBtn
              href={`${process.env.PUBLIC_URL}/resume.pdf`}
              download="Vivek_Prajapati_Resume.pdf"
            >
              <span className="icon">↓</span>
              Download Resume
            </DownloadBtn>
            <ContactBtn href="#contact">
              Contact Me →
            </ContactBtn>
          </ResumeActions>
        </ResumeSection>

        <StatusBar>
          <StatusItem $color="#cafd00">
            <span className="dot" />
            Open to full-time roles
          </StatusItem>
          <StatusItem $color="#67e8f9">
            <span className="dot" />
            Available for freelance
          </StatusItem>
          <StatusItem $color="#ff7351">
            <span className="dot" />
            Remote & on-site
          </StatusItem>
        </StatusBar>
      </div>
    </Section>
  );
};

export default HireMe;
