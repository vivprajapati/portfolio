import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* ============================================
     DESIGN SYSTEM: The Precision Monolith
     ============================================ */

  :root {
    /* — Color Tokens — */
    --color-background:        #0a0a0a;
    --color-surface:           #0a0a0a;
    --color-surface-container-lowest: #000000;
    --color-surface-container-low:    #111111;
    --color-surface-container:        #161616;
    --color-surface-container-high:   #1c1c1b;
    --color-surface-container-highest:#222222;
    --color-surface-variant:   #222222;
    --color-surface-bright:    #2a2a2a;

    --color-primary:           #cafd00;
    --color-primary-light:     #f3ffca;
    --color-primary-dim:       #beee00;
    --color-on-primary:        #1a2600;
    --color-on-primary-container: #4a5e00;
    --color-primary-container: #cafd00;

    --color-secondary:         #ece856;
    --color-secondary-dim:     #ddda49;

    --color-on-surface:        #f5f5f5;
    --color-on-surface-variant:#8a8a8a;
    --color-on-background:     #f5f5f5;

    --color-outline:           #555555;
    --color-outline-variant:   #2a2a2a;

    --color-error:             #ff7351;
    --color-error-dim:         #d53d18;

    /* — Typography — */
    --font-headline: 'Manrope', sans-serif;
    --font-body:     'Inter', sans-serif;

    /* — Spacing — */
    --space-xs:  0.25rem;
    --space-sm:  0.5rem;
    --space-md:  1rem;
    --space-lg:  1.5rem;
    --space-xl:  2rem;
    --space-2xl: 3rem;
    --space-3xl: 4rem;
    --space-4xl: 6rem;
    --space-5xl: 8rem;

    /* — Radii — */
    --radius-sm:  8px;
    --radius-md:  12px;
    --radius-lg:  16px;
    --radius-xl:  24px;
    --radius-full:9999px;

    /* — Transitions — */
    --transition-fast:   0.15s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-normal: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-slow:   0.6s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-spring: 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);

    /* — Layout — */
    --max-width: 1240px;
    --header-height: 64px;
  }

  /* ============================================
     RESET & BASE
     ============================================ */

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
  }

  body {
    font-family: var(--font-body);
    background-color: var(--color-background);
    color: var(--color-on-surface);
    line-height: 1.6;
    overflow-x: hidden;
  }

  /* Scrollbar */
  ::-webkit-scrollbar { width: 5px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb {
    background: var(--color-outline-variant);
    border-radius: var(--radius-full);
  }
  ::-webkit-scrollbar-thumb:hover { background: var(--color-outline); }

  /* Selection */
  ::selection {
    background: rgba(202, 253, 0, 0.25);
    color: var(--color-on-surface);
  }

  /* ============================================
     TYPOGRAPHY
     ============================================ */

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-headline);
    font-weight: 800;
    line-height: 1.05;
    letter-spacing: -0.03em;
    color: var(--color-on-surface);
  }

  h1 { font-size: clamp(3.2rem, 7vw, 6rem); }
  h2 { font-size: clamp(2.2rem, 4.5vw, 3.8rem); }
  h3 { font-size: clamp(1.15rem, 2vw, 1.5rem); }
  h4 { font-size: clamp(1rem, 1.5vw, 1.15rem); }

  p {
    color: var(--color-on-surface-variant);
    font-size: 0.95rem;
    line-height: 1.7;
  }

  a {
    color: var(--color-primary);
    text-decoration: none;
    transition: color var(--transition-fast);
  }
  a:hover { color: var(--color-primary-light); }

  ul, ol { list-style: none; }
  img { max-width: 100%; display: block; }

  /* ============================================
     LAYOUT
     ============================================ */

  section {
    padding: var(--space-5xl) 5vw;
    width: 100%;
    position: relative;
  }

  /* ============================================
     BUTTONS
     ============================================ */

  .btn-primary {
    display: inline-flex;
    align-items: center;
    gap: var(--space-sm);
    padding: 0.9rem 2rem;
    background: var(--color-primary);
    color: var(--color-on-primary);
    font-family: var(--font-headline);
    font-weight: 700;
    font-size: 0.85rem;
    border: none;
    border-radius: var(--radius-sm);
    cursor: pointer;
    transition: all var(--transition-normal);
    text-decoration: none;
    letter-spacing: 0.03em;
    position: relative;
    overflow: hidden;
  }
  .btn-primary::before {
    content: '';
    position: absolute;
    top: 0; left: -100%;
    width: 100%; height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
    transition: left 0.5s ease;
  }
  .btn-primary:hover::before { left: 100%; }
  .btn-primary:hover {
    background: var(--color-primary-light);
    color: var(--color-on-primary);
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(202, 253, 0, 0.3);
  }

  .btn-outline {
    display: inline-flex;
    align-items: center;
    gap: var(--space-sm);
    padding: 0.9rem 2rem;
    background: transparent;
    color: var(--color-on-surface);
    font-family: var(--font-headline);
    font-weight: 700;
    font-size: 0.85rem;
    border: 1px solid var(--color-outline-variant);
    border-radius: var(--radius-sm);
    cursor: pointer;
    transition: all var(--transition-normal);
    text-decoration: none;
    letter-spacing: 0.03em;
  }
  .btn-outline:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(202, 253, 0, 0.1);
  }

  /* ============================================
     LABELS & TAGS
     ============================================ */

  .section-label {
    display: inline-block;
    font-family: var(--font-body);
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--color-primary);
    margin-bottom: var(--space-md);
  }

  .section-title {
    margin-bottom: var(--space-lg);
  }

  .section-subtitle {
    color: var(--color-on-surface-variant);
    max-width: 560px;
    margin-bottom: var(--space-2xl);
    font-size: 1rem;
    line-height: 1.7;
  }

  .tag {
    display: inline-flex;
    align-items: center;
    padding: 0.3rem 0.75rem;
    background: var(--color-surface-container-high);
    color: var(--color-on-surface-variant);
    font-size: 0.75rem;
    font-weight: 500;
    border-radius: var(--radius-full);
    border: 1px solid var(--color-outline-variant);
    transition: all var(--transition-fast);
  }
  .tag:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
  }

  .tag-accent {
    background: rgba(202, 253, 0, 0.08);
    color: var(--color-primary);
    border-color: rgba(202, 253, 0, 0.15);
  }

  /* ============================================
     SCROLL REVEAL ANIMATIONS
     ============================================ */

  .reveal {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .reveal-left {
    opacity: 0;
    transform: translateX(-60px);
    transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .reveal-left.visible {
    opacity: 1;
    transform: translateX(0);
  }

  .reveal-right {
    opacity: 0;
    transform: translateX(60px);
    transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .reveal-right.visible {
    opacity: 1;
    transform: translateX(0);
  }

  .reveal-scale {
    opacity: 0;
    transform: scale(0.92);
    transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .reveal-scale.visible {
    opacity: 1;
    transform: scale(1);
  }

  /* Stagger children */
  .stagger-children.visible > * {
    animation: staggerIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }
  .stagger-children > * {
    opacity: 0;
    transform: translateY(24px);
  }
  .stagger-children.visible > *:nth-child(1) { animation-delay: 0s; }
  .stagger-children.visible > *:nth-child(2) { animation-delay: 0.08s; }
  .stagger-children.visible > *:nth-child(3) { animation-delay: 0.16s; }
  .stagger-children.visible > *:nth-child(4) { animation-delay: 0.24s; }
  .stagger-children.visible > *:nth-child(5) { animation-delay: 0.32s; }
  .stagger-children.visible > *:nth-child(6) { animation-delay: 0.40s; }

  /* ============================================
     KEYFRAME ANIMATIONS
     ============================================ */

  @keyframes staggerIn {
    from {
      opacity: 0;
      transform: translateY(24px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  @keyframes slideInLeft {
    from { opacity: 0; transform: translateX(-40px); }
    to   { opacity: 1; transform: translateX(0); }
  }

  @keyframes slideInRight {
    from { opacity: 0; transform: translateX(40px); }
    to   { opacity: 1; transform: translateX(0); }
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  @keyframes glow {
    0%, 100% { box-shadow: 0 0 20px rgba(202, 253, 0, 0.08); }
    50% { box-shadow: 0 0 50px rgba(202, 253, 0, 0.15); }
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
  }

  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }

  @keyframes typewriter {
    from { width: 0; }
    to   { width: 100%; }
  }

  @keyframes borderGlow {
    0%, 100% { border-color: var(--color-outline-variant); }
    50% { border-color: rgba(202, 253, 0, 0.3); }
  }

  @keyframes rotateIn {
    from { opacity: 0; transform: rotate(-5deg) scale(0.95); }
    to   { opacity: 1; transform: rotate(0deg) scale(1); }
  }

  @keyframes countUp {
    from { opacity: 0; transform: translateY(10px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ============================================
     NOISE TEXTURE OVERLAY
     ============================================ */

  body::before {
    content: '';
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='256' height='256' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
    background-repeat: repeat;
    pointer-events: none;
    z-index: 9999;
    opacity: 0.4;
  }

  /* ============================================
     RESPONSIVE
     ============================================ */

  @media (max-width: 768px) {
    section {
      padding: var(--space-3xl) 4vw;
    }
    :root {
      --header-height: 56px;
    }
  }
`;

export default GlobalStyle;
