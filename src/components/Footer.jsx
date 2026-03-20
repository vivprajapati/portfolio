import React from 'react';
import styled from 'styled-components';

const FooterWrap = styled.footer`
  padding: var(--space-xl) 5vw;
  border-top: 1px solid var(--color-outline-variant);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 50%;
    transform: translateX(-50%);
    width: 200px;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--color-primary), transparent);
    opacity: 0.5;
  }
`;

const Inner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-md);
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-lg);
  flex-wrap: wrap;

  .copyright {
    font-size: 0.72rem;
    color: var(--color-outline);
    letter-spacing: 0.02em;
  }

  .tagline {
    font-size: 0.7rem;
    color: var(--color-outline-variant);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-weight: 600;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-xl);

  a {
    font-size: 0.72rem;
    color: var(--color-outline) !important;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    font-weight: 500;
    transition: all 0.25s ease;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 1px;
      background: var(--color-primary);
      transition: width 0.3s ease;
    }

    &:hover {
      color: var(--color-primary) !important;
    }
    &:hover::after {
      width: 100%;
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrap>
      <Inner>
        <Left>
          <span className="copyright">
            © {new Date().getFullYear()} Vivek Prajapati. Built with ❤️ and lots of ☕
          </span>
          <span className="tagline">VP</span>
        </Left>
        <Right>
          <a href="https://www.linkedin.com/in/vivek-prajapati-839261181/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/vivekCometChat" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:vivprajapati1520@gmail.com">Email</a>
        </Right>
      </Inner>
    </FooterWrap>
  );
};

export default Footer;
