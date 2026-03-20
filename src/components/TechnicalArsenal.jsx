import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';

const borderPulse = keyframes`
  0%, 100% { border-color: var(--color-outline-variant); }
  50% { border-color: rgba(202, 253, 0, 0.2); }
`;

const Section = styled.section``;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-lg);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  padding: var(--space-2xl) var(--space-xl);
  background: var(--color-surface-container);
  border: 1px solid var(--color-outline-variant);
  border-radius: var(--radius-lg);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--color-primary), transparent);
    opacity: 0;
    transition: opacity var(--transition-normal);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at 50% 0%,
      rgba(202, 253, 0, 0.03) 0%,
      transparent 60%
    );
    opacity: 0;
    transition: opacity var(--transition-normal);
  }

  &:hover {
    background: var(--color-surface-container-high);
    border-color: rgba(202, 253, 0, 0.15);
    transform: translateY(-6px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4), 0 0 40px rgba(202, 253, 0, 0.04);
  }
  &:hover::before { opacity: 1; }
  &:hover::after { opacity: 1; }

  /* Idle glow animation on middle card */
  &:nth-child(2) {
    animation: ${borderPulse} 4s ease-in-out infinite;
  }
`;

const IconWrap = styled.div`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(202, 253, 0, 0.06);
  border: 1px solid rgba(202, 253, 0, 0.12);
  border-radius: var(--radius-md);
  margin-bottom: var(--space-lg);
  font-size: 1.1rem;
  color: var(--color-primary);
  transition: all var(--transition-normal);

  ${Card}:hover & {
    background: rgba(202, 253, 0, 0.12);
    border-color: rgba(202, 253, 0, 0.25);
    transform: scale(1.1) rotate(5deg);
  }
`;

const CardTitle = styled.h3`
  margin-bottom: var(--space-sm);
  font-size: 1.1rem;
  font-weight: 700;
`;

const CardDesc = styled.p`
  font-size: 0.88rem;
  line-height: 1.7;
  color: var(--color-on-surface-variant);
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
  margin-top: var(--space-lg);
`;

const skills = [
  {
    icon: '◇',
    title: 'App Architecture',
    desc: 'I design and build scalable apps using MVVM, Clean Architecture, and modular patterns that keep codebases maintainable as they grow.',
    techs: ['MVVM', 'Clean Architecture', 'Modularization'],
  },
  {
    icon: '⬡',
    title: 'Frontend Dev',
    desc: 'I build responsive, interactive UIs with React and Jetpack Compose — from pixel-perfect designs to smooth animations.',
    techs: ['React', 'Jetpack Compose', 'Material Design'],
  },
  {
    icon: '△',
    title: 'Android Development',
    desc: 'I write native Android apps with Kotlin — performance-tuned, well-tested, and shipped to millions of users on the Play Store.',
    techs: ['Kotlin', 'Android SDK', 'Firebase'],
  },
];

const TechnicalArsenal = () => {
  const [titleRef, titleVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useStaggerReveal();

  return (
    <Section id="about">
      <div ref={titleRef} className={`reveal ${titleVisible ? 'visible' : ''}`}>
        <span className="section-label">What I Work With</span>
        <h2 className="section-title">MY TECH STACK</h2>
      </div>

      <Grid ref={gridRef} className={`stagger-children ${gridVisible ? 'visible' : ''}`}>
        {skills.map((skill, i) => (
          <Card key={i}>
            <IconWrap>{skill.icon}</IconWrap>
            <CardTitle>{skill.title}</CardTitle>
            <CardDesc>{skill.desc}</CardDesc>
            <TechList>
              {skill.techs.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </TechList>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default TechnicalArsenal;
