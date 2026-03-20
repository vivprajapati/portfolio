import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Nav = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: var(--header-height);
  display: flex;
  align-items: center;
  padding: 0 5vw;
  background: ${({ $scrolled }) =>
    $scrolled ? 'rgba(10, 10, 10, 0.88)' : 'transparent'};
  backdrop-filter: ${({ $scrolled }) =>
    $scrolled ? 'blur(24px) saturate(1.4)' : 'none'};
  -webkit-backdrop-filter: ${({ $scrolled }) =>
    $scrolled ? 'blur(24px) saturate(1.4)' : 'none'};
  border-bottom: ${({ $scrolled }) =>
    $scrolled ? '1px solid rgba(202, 253, 0, 0.06)' : '1px solid transparent'};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`;

const NavInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Logo = styled.a`
  font-family: var(--font-headline);
  font-weight: 800;
  font-size: 1rem;
  letter-spacing: 0.2em;
  color: var(--color-on-surface) !important;
  text-decoration: none;
  text-transform: uppercase;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--color-primary);
    transition: width var(--transition-normal);
  }
  &:hover::after {
    width: 100%;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: var(--space-2xl);

  @media (max-width: 768px) {
    display: ${({ $open }) => ($open ? 'flex' : 'none')};
    position: fixed;
    top: var(--header-height);
    left: 0; right: 0; bottom: 0;
    flex-direction: column;
    justify-content: center;
    background: rgba(10, 10, 10, 0.98);
    backdrop-filter: blur(40px);
    gap: var(--space-2xl);
    z-index: 999;
    animation: fadeIn 0.3s ease;
  }
`;

const NavLink = styled.a`
  font-family: var(--font-body);
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-on-surface-variant) !important;
  text-decoration: none;
  transition: all var(--transition-normal);
  position: relative;

  &:hover {
    color: var(--color-on-surface) !important;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 1.5px;
    background: var(--color-primary);
    transition: width var(--transition-normal);
    border-radius: 1px;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    letter-spacing: 0.12em;
  }
`;

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  padding: 0.55rem 1.3rem;
  background: var(--color-primary);
  color: var(--color-on-primary) !important;
  font-family: var(--font-headline);
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 0.06em;
  border-radius: var(--radius-sm);
  text-decoration: none;
  transition: all var(--transition-normal);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: -100%;
    width: 100%; height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s ease;
  }
  &:hover::before { left: 100%; }
  &:hover {
    background: var(--color-primary-light);
    transform: translateY(-1px);
    box-shadow: 0 4px 20px rgba(202, 253, 0, 0.35);
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1.8rem;
    font-size: 0.85rem;
  }
`;

const Hamburger = styled.button`
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  z-index: 1001;

  span {
    display: block;
    width: 20px;
    height: 1.5px;
    background: var(--color-on-surface);
    border-radius: 1px;
    transition: all var(--transition-fast);
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <Nav $scrolled={scrolled}>
      <NavInner>
        <Logo href="#hero">Vivek Prajapati</Logo>
        <Hamburger onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span /><span /><span />
        </Hamburger>
        <NavLinks $open={menuOpen}>
          <NavLink href="#about" onClick={close}>About</NavLink>
          <NavLink href="#projects" onClick={close}>Projects</NavLink>
          <NavLink href="#experience" onClick={close}>Experience</NavLink>
          <NavLink href="#contact" onClick={close}>Contact</NavLink>
          <CTAButton href="#hire" onClick={close}>Hire Me →</CTAButton>
        </NavLinks>
      </NavInner>
    </Nav>
  );
};

export default Header;
