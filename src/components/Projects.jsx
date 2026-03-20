import React, { useState } from 'react';
import styled from 'styled-components';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';

const Section = styled.section``;

const Filters = styled.div`
  display: flex;
  gap: var(--space-sm);
  margin-bottom: var(--space-2xl);
  flex-wrap: wrap;
`;

const FilterBtn = styled.button`
  padding: 0.45rem 1.2rem;
  font-family: var(--font-body);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  border-radius: var(--radius-full);
  border: 1px solid ${({ $active }) =>
    $active ? 'var(--color-primary)' : 'var(--color-outline-variant)'};
  background: ${({ $active }) =>
    $active ? 'var(--color-primary)' : 'transparent'};
  color: ${({ $active }) =>
    $active ? 'var(--color-on-primary)' : 'var(--color-on-surface-variant)'};
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border-color: var(--color-primary);
    color: ${({ $active }) =>
      $active ? 'var(--color-on-primary)' : 'var(--color-primary)'};
    transform: translateY(-1px);
  }
`;

/* Bento-style grid matching Stitch: first row 2 large, second row 3 smaller */
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  gap: var(--space-lg);

  & > *:nth-child(1) {
    grid-column: span 2;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    & > *:nth-child(1) { grid-column: span 1; }
  }
`;

const Card = styled.div`
  background: var(--color-surface-container);
  border: 1px solid var(--color-outline-variant);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: var(--radius-lg);
    padding: 1px;
    background: linear-gradient(135deg, rgba(202,253,0,0), rgba(202,253,0,0.15), rgba(202,253,0,0));
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity var(--transition-normal);
    pointer-events: none;
  }

  &:hover {
    border-color: transparent;
    transform: translateY(-6px);
    box-shadow: 0 24px 64px rgba(0, 0, 0, 0.4);
  }
  &:hover::before { opacity: 1; }
`;

const CardImage = styled.div`
  height: 220px;
  background: ${({ $bg }) => $bg ? `url(${$bg}) center/cover no-repeat` : `linear-gradient(
    135deg,
    var(--color-surface-container-high) 0%,
    var(--color-surface-container-highest) 50%,
    var(--color-surface-container-high) 100%
  )`};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease;

  ${Card}:hover & {
    transform: scale(1.05);
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      transparent 40%,
      rgba(10, 10, 10, 0.8) 100%
    );
    z-index: 1;
  }

  /* Animated grid pattern */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(202, 253, 0, 0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(202, 253, 0, 0.02) 1px, transparent 1px);
    background-size: 40px 40px;
    opacity: 0.5;
  }

  .project-icon {
    font-size: 2.5rem;
    opacity: 0.3;
    z-index: 1;
    transition: all 0.4s ease;
  }

  ${Card}:hover .project-icon {
    opacity: 0.5;
    transform: scale(1.15) rotate(10deg);
  }
`;

const RoleBadge = styled.span`
  position: absolute;
  top: var(--space-md);
  right: var(--space-md);
  padding: 0.25rem 0.65rem;
  background: rgba(202, 253, 0, 0.12);
  backdrop-filter: blur(8px);
  color: var(--color-primary);
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border-radius: var(--radius-sm);
  border: 1px solid rgba(202, 253, 0, 0.2);
  z-index: 2;
`;

const TypeBadge = styled.span`
  position: absolute;
  top: var(--space-md);
  left: var(--space-md);
  padding: 0.25rem 0.65rem;
  background: var(--color-surface-container-high);
  color: var(--color-on-surface-variant);
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-outline-variant);
  z-index: 2;
`;

const CardBody = styled.div`
  padding: var(--space-xl);
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 800;
  margin-bottom: 6px;
  letter-spacing: -0.02em;
`;

const CardDesc = styled.p`
  font-size: 0.85rem;
  line-height: 1.7;
  color: var(--color-on-surface-variant);
  margin-bottom: var(--space-md);
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: var(--space-md);
`;

const CardLink = styled.a`
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--color-primary);
  display: inline-flex;
  align-items: center;
  gap: 4px;
  transition: all var(--transition-fast);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 1px;
    background: var(--color-primary);
    transition: width var(--transition-normal);
  }
  &:hover::after { width: 100%; }
  &:hover { color: var(--color-primary-light); }
`;

const CTASection = styled.div`
  margin-top: var(--space-4xl);
  padding: var(--space-3xl);
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
    background: radial-gradient(circle, rgba(202,253,0,0.02) 0%, transparent 50%);
    animation: float 8s ease-in-out infinite;
    pointer-events: none;
  }

  h2, p, a { position: relative; z-index: 1; }

  p {
    max-width: 520px;
    margin: 0 auto var(--space-xl);
  }
`;

const projects = [
  {
    title: 'CometChat UI Kit v5',
    desc: 'Complete Android UI Kit for chat applications built with Jetpack Compose. Real-time messaging, group chat, multimedia support, and extensive customization.',
    techs: ['Kotlin', 'Jetpack Compose', 'MVVM'],
    role: 'Lead Architect',
    type: 'SDK Product',
    category: 'mobile',
    link: 'https://github.com/cometchat/cometchat-uikit-android',
    icon: '⬡',
    image: `${process.env.PUBLIC_URL}/images/project-uikit.png`,
  },
  {
    title: 'CometChat Android SDK',
    desc: 'Core Android SDK for real-time messaging with encryption, offline sync, and WebSocket architecture.',
    techs: ['Java', 'WebSocket', 'REST API'],
    role: 'Core Engineer',
    type: 'SDK Infrastructure',
    category: 'mobile',
    link: 'https://github.com/cometchat/chat-sdk-android',
    icon: '◈',
    image: `${process.env.PUBLIC_URL}/images/project-sdk.png`,
  },
  {
    title: 'Builder App',
    desc: 'Demo application showcasing CometChat SDK with various chat features and UI customizations.',
    techs: ['Kotlin', 'Material Design', 'Firebase'],
    role: 'Full Stack',
    type: 'Mobile App',
    category: 'mobile',
    link: 'https://play.google.com/store/apps/details?id=com.cometchat.builder.java&pcampaignid=web_share',
    icon: '◉',
    image: `${process.env.PUBLIC_URL}/images/project-builder.png`,
  },
  {
    title: 'Portfolio v5',
    desc: 'A precision-crafted dark portfolio featuring scroll-reveal animations, bento grid layouts, and an editorial design language built with React & Styled Components.',
    techs: ['React', 'Styled Comp.', 'CSS'],
    role: 'Designer & Dev',
    type: 'Web App',
    category: 'web',
    link: '#',
    icon: '△',
    image: `${process.env.PUBLIC_URL}/images/project-portfolio.png`,
  },
  {
    title: 'Notebook',
    desc: 'A beautifully designed notebook app for capturing ideas, journaling, and organizing thoughts — simple, fast, and built for everyday use.',
    techs: ['Kotlin', 'Firebase', 'Material Design'],
    role: 'Developer',
    type: 'Mobile App',
    category: 'mobile',
    link: 'https://play.google.com/store/apps/details?id=com.sarasva.education&pcampaignid=web_share',
    icon: '◎',
    image: `${process.env.PUBLIC_URL}/images/project-sarasva.png`,
  },
];

const filters = ['All Projects', 'Mobile', 'Web'];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All Projects');
  const [titleRef, titleVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useStaggerReveal();
  const [ctaRef, ctaVisible] = useScrollReveal();

  const filtered = activeFilter === 'All Projects'
    ? projects
    : projects.filter((p) => p.category === activeFilter.toLowerCase());

  return (
    <Section id="projects">
      <div ref={titleRef} className={`reveal ${titleVisible ? 'visible' : ''}`}>
        <span className="section-label">My Work</span>
        <h2 className="section-title">
          STUFF I'VE <span style={{ color: 'var(--color-primary)' }}>BUILT</span>
        </h2>
        <p className="section-subtitle">
          A mix of SDKs, apps, and side projects I've worked on. 
          Each one taught me something new and pushed me to write 
          better code.
        </p>
      </div>

      <Filters>
        {filters.map((f) => (
          <FilterBtn key={f} $active={activeFilter === f} onClick={() => setActiveFilter(f)}>
            {f}
          </FilterBtn>
        ))}
      </Filters>

      <Grid ref={gridRef} className={`stagger-children ${gridVisible ? 'visible' : ''}`}>
        {filtered.map((p, i) => (
          <Card key={p.title}>
            <CardImage $bg={p.image}>
              <TypeBadge>{p.type}</TypeBadge>
              <RoleBadge>{p.role}</RoleBadge>
            </CardImage>
            <CardBody>
              <CardTitle>{p.title}</CardTitle>
              <CardDesc>{p.desc}</CardDesc>
              <Tags>
                {p.techs.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </Tags>
              <CardLink href={p.link} target="_blank" rel="noopener noreferrer">
                View Project →
              </CardLink>
            </CardBody>
          </Card>
        ))}
      </Grid>

      <div ref={ctaRef} className={`reveal-scale ${ctaVisible ? 'visible' : ''}`}>
        <CTASection>
          <h2>WANT SOMETHING <span style={{ color: 'var(--color-primary)' }}>BUILT?</span></h2>
          <p>
            I'm currently taking on new projects. Whether it's an app, 
            an SDK, or a web platform — let's talk.
          </p>
          <a href="#contact" className="btn-primary">Get In Touch →</a>
        </CTASection>
      </div>
    </Section>
  );
};

export default Projects;
