import React from 'react';
import styled from 'styled-components';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';

const Section = styled.section``;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-lg);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  display: flex;
  gap: var(--space-lg);
  padding: var(--space-xl) var(--space-2xl);
  background: var(--color-surface-container);
  border: 1px solid var(--color-outline-variant);
  border-radius: var(--radius-lg);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: var(--color-surface-container-high);
    border-color: ${({ $color }) => $color || 'var(--color-outline)'};
    transform: translateY(-4px);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 480px) {
    flex-direction: column;
    padding: var(--space-xl);
  }
`;

const Accent = styled.div`
  flex-shrink: 0;
  width: 3px;
  border-radius: 2px;
  background: ${({ $color }) => $color || 'var(--color-primary)'};
  transition: height 0.4s ease, box-shadow 0.4s ease;

  ${Card}:hover & {
    box-shadow: 0 0 12px ${({ $color }) => $color || 'var(--color-primary)'}40;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 3px;
  }
`;

const CardBody = styled.div``;

const CardLabel = styled.span`
  font-size: 0.68rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${({ $color }) => $color || 'var(--color-primary)'};
`;

const CardTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  margin: 6px 0 8px;
`;

const CardDesc = styled.p`
  font-size: 0.88rem;
  line-height: 1.7;
  color: var(--color-on-surface-variant);
`;

const EvolveCTA = styled.div`
  margin-top: var(--space-4xl);
  padding: var(--space-3xl) var(--space-2xl);
  background: var(--color-surface-container);
  border: 1px solid var(--color-outline-variant);
  border-radius: var(--radius-xl);
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%; left: -50%;
    width: 200%; height: 200%;
    background: radial-gradient(circle, rgba(202, 253, 0, 0.03) 0%, transparent 50%);
    animation: float 6s ease-in-out infinite;
    pointer-events: none;
  }

  h2 {
    position: relative;
    z-index: 1;
    margin-bottom: var(--space-md);
  }

  p {
    position: relative;
    z-index: 1;
    max-width: 500px;
    margin: 0 auto var(--space-xl);
  }

  a {
    position: relative;
    z-index: 1;
  }
`;

const services = [
  {
    label: 'WEB',
    title: 'Web Apps',
    desc: 'I build full-stack web apps with React, modern CSS, and solid backend integrations. Fast, responsive, and accessible.',
    color: '#cafd00',
  },
  {
    label: 'MOBILE',
    title: 'Android Apps',
    desc: 'I develop native Android apps with Kotlin and Jetpack Compose — production-grade, well-architected, and built to scale.',
    color: '#ece856',
  },
  {
    label: 'API & BACKEND',
    title: 'APIs & Integrations',
    desc: 'I design and build RESTful APIs, WebSocket services, Firebase backends, and cloud-ready microservice architectures.',
    color: '#ff7351',
  },
  {
    label: 'DEVOPS',
    title: 'CI/CD Pipelines',
    desc: 'I set up automated build pipelines with GitHub Actions, optimize Gradle builds, and implement quality gates that catch issues early.',
    color: '#67e8f9',
  },
];

const ServiceExcellence = () => {
  const [titleRef, titleVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useStaggerReveal();
  const [ctaRef, ctaVisible] = useScrollReveal();

  return (
    <Section>
      <div ref={titleRef} className={`reveal ${titleVisible ? 'visible' : ''}`}>
        <span className="section-label">What I Do</span>
        <h2 className="section-title">THINGS I BUILD</h2>
      </div>

      <Grid ref={gridRef} className={`stagger-children ${gridVisible ? 'visible' : ''}`}>
        {services.map((s, i) => (
          <Card key={i} $color={s.color}>
            <Accent $color={s.color} />
            <CardBody>
              <CardLabel $color={s.color}>{s.label}</CardLabel>
              <CardTitle>{s.title}</CardTitle>
              <CardDesc>{s.desc}</CardDesc>
            </CardBody>
          </Card>
        ))}
      </Grid>

      <div ref={ctaRef} className={`reveal-scale ${ctaVisible ? 'visible' : ''}`}>
        <EvolveCTA>
          <h2>GOT A <span style={{ color: 'var(--color-primary)' }}>PROJECT?</span></h2>
          <p>
            I'm always up for building something cool. If you have an idea 
            or need a developer, let's make it happen.
          </p>
          <a href="#contact" className="btn-primary">Let's Build Together →</a>
        </EvolveCTA>
      </div>
    </Section>
  );
};

export default ServiceExcellence;
