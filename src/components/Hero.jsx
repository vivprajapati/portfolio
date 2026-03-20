import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

/* ——— Animations ——— */
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(50px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const fadeRight = keyframes`
  from { opacity: 0; transform: translateX(60px) scale(0.97); }
  to   { opacity: 1; transform: translateX(0) scale(1); }
`;

const countIn = keyframes`
  from { opacity: 0; transform: translateY(15px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const pulseGlow = keyframes`
  0%, 100% { opacity: 1; box-shadow: 0 0 12px rgba(202, 253, 0, 0.3); }
  50% { opacity: 0.7; box-shadow: 0 0 20px rgba(202, 253, 0, 0.5); }
`;

const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

/* ——— Styled Components ——— */
const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: calc(var(--header-height) + var(--space-2xl)) !important;
  padding-bottom: var(--space-2xl) !important;
  position: relative;
  overflow: hidden;
`;

/* Subtle glowing orb in background */
const BgOrb = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(202, 253, 0, 0.04) 0%, transparent 70%);
  filter: blur(80px);
  top: 10%;
  left: -10%;
  pointer-events: none;
  animation: ${gradientShift} 8s ease infinite;
`;

const BgOrbRight = styled(BgOrb)`
  left: auto;
  right: -15%;
  top: 40%;
  background: radial-gradient(circle, rgba(202, 253, 0, 0.03) 0%, transparent 70%);
  animation-delay: 4s;
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: var(--space-3xl);
  align-items: center;
  width: 100%;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: var(--space-2xl);
    text-align: center;
  }
`;

const HeroContent = styled.div`
  @media (max-width: 960px) {
    order: 2;
  }
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0.4rem 1rem;
  background: rgba(202, 253, 0, 0.06);
  border: 1px solid rgba(202, 253, 0, 0.15);
  border-radius: var(--radius-full);
  margin-bottom: var(--space-xl);
  opacity: 0;
  animation: ${fadeUp} 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;

  .dot {
    width: 7px;
    height: 7px;
    background: var(--color-primary);
    border-radius: 50%;
    animation: ${pulseGlow} 2s ease-in-out infinite;
  }

  .text {
    font-size: 0.72rem;
    font-weight: 600;
    color: var(--color-primary);
    letter-spacing: 0.1em;
  }
`;

const Headline = styled.h1`
  margin-bottom: var(--space-xl);
  line-height: 1.0;
  opacity: 0;
  animation: ${fadeUp} 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards;

  .accent {
    color: var(--color-primary);
    display: inline;
  }

  @media (max-width: 960px) {
    font-size: clamp(2.5rem, 6vw, 4rem);
  }
`;

const SubText = styled.p`
  font-size: 1rem;
  line-height: 1.75;
  color: var(--color-on-surface-variant);
  max-width: 500px;
  margin-bottom: var(--space-2xl);
  opacity: 0;
  animation: ${fadeUp} 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards;

  @media (max-width: 960px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: var(--space-md);
  flex-wrap: wrap;
  opacity: 0;
  animation: ${fadeUp} 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.8s forwards;

  @media (max-width: 960px) {
    justify-content: center;
  }
`;

const Stats = styled.div`
  display: flex;
  gap: var(--space-2xl);
  margin-top: var(--space-3xl);
  padding-top: var(--space-xl);
  border-top: 1px solid var(--color-outline-variant);

  @media (max-width: 960px) {
    justify-content: center;
  }
  @media (max-width: 480px) {
    gap: var(--space-xl);
  }
`;

const StatItem = styled.div`
  opacity: 0;
  animation: ${countIn} 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${({ $delay }) => $delay || '1s'} forwards;

  .number {
    font-family: var(--font-headline);
    font-size: 2.2rem;
    font-weight: 800;
    color: var(--color-primary);
    line-height: 1;
  }
  .label {
    font-size: 0.7rem;
    color: var(--color-on-surface-variant);
    margin-top: 4px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: 600;
  }
`;

const PortraitWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  opacity: 0;
  animation: ${fadeRight} 1s cubic-bezier(0.16, 1, 0.3, 1) 0.5s forwards;

  @media (max-width: 960px) {
    order: 1;
  }
`;

const PortraitImage = styled.div`
  width: 100%;
  max-width: 440px;
  aspect-ratio: 3 / 4;
  border-radius: var(--radius-xl);
  overflow: hidden;
  position: relative;
  background: var(--color-surface-container);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(15%) contrast(1.05);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover img {
    filter: grayscale(0%) contrast(1.08);
    transform: scale(1.03);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      transparent 30%,
      rgba(10, 10, 10, 0.85) 100%
    );
    pointer-events: none;
  }
`;

const ExperienceBadge = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  z-index: 2;
  padding: 0.65rem 1.1rem;
  background: rgba(202, 253, 0, 0.12);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(202, 253, 0, 0.25);
  border-radius: var(--radius-md);
  animation: ${pulseGlow} 3s ease-in-out infinite;

  .big {
    font-family: var(--font-headline);
    font-weight: 800;
    font-size: 1.4rem;
    color: var(--color-primary);
    line-height: 1;
  }
  .small {
    font-size: 0.65rem;
    font-weight: 600;
    color: var(--color-primary-light);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
`;

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <HeroSection id="hero">
      <BgOrb />
      <BgOrbRight />

      <HeroGrid>
        <HeroContent>
          <Badge>
            <span className="dot" />
            <span className="text">OPEN TO WORK</span>
          </Badge>

          <Headline>
            I BUILD<br />
            <span className="accent">APPS THAT<br />SCALE</span><br />
            AND<br />PERFORM.
          </Headline>

          <SubText>
            Senior Software Developer who loves turning ideas into real products.
            I write clean code, ship fast, and build apps used by millions — 
            from Android SDKs to full-stack web platforms.
          </SubText>

          <ButtonGroup>
            <a href="#projects" className="btn-primary">See My Work</a>
            <a href="#contact" className="btn-outline">Let's Talk</a>
          </ButtonGroup>

          <Stats>
            <StatItem $delay="1s">
              <div className="number">4+</div>
              <div className="label">Years Coding</div>
            </StatItem>
            <StatItem $delay="1.1s">
              <div className="number">50+</div>
              <div className="label">Apps Built</div>
            </StatItem>
            <StatItem $delay="1.2s">
              <div className="number">1M+</div>
              <div className="label">Users Reached</div>
            </StatItem>
          </Stats>
        </HeroContent>

        <PortraitWrapper>
          <PortraitImage>
            <img
              src={`${process.env.PUBLIC_URL}/portrait.png`}
              alt="Vivek Prajapati — Senior Software Developer"
            />
            <ExperienceBadge>
              <div className="big">4+</div>
              <div className="small">Years Experience</div>
            </ExperienceBadge>
          </PortraitImage>
        </PortraitWrapper>
      </HeroGrid>
    </HeroSection>
  );
};

export default Hero;
