import React, { useState } from 'react';
import styled from 'styled-components';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Section = styled.section``;

const TopGrid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: var(--space-2xl);

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }
`;

/* ——— Form ——— */
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-md);

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  label {
    font-size: 0.68rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--color-on-surface-variant);
  }
`;

const Input = styled.input`
  padding: 0.8rem var(--space-md);
  background: var(--color-surface-container);
  border: 1px solid var(--color-outline-variant);
  border-radius: var(--radius-sm);
  color: var(--color-on-surface);
  font-family: var(--font-body);
  font-size: 0.88rem;
  transition: all 0.3s ease;
  outline: none;

  &:focus {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(202, 253, 0, 0.08);
  }
  &::placeholder { color: var(--color-outline); }
`;

const TextArea = styled.textarea`
  padding: 0.8rem var(--space-md);
  background: var(--color-surface-container);
  border: 1px solid var(--color-outline-variant);
  border-radius: var(--radius-sm);
  color: var(--color-on-surface);
  font-family: var(--font-body);
  font-size: 0.88rem;
  min-height: 130px;
  resize: vertical;
  transition: all 0.3s ease;
  outline: none;

  &:focus {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(202, 253, 0, 0.08);
  }
  &::placeholder { color: var(--color-outline); }
`;

const SubmitRow = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-lg);
  flex-wrap: wrap;
  margin-top: var(--space-sm);

  .note {
    font-size: 0.72rem;
    color: var(--color-outline);
  }
`;

/* ——— Sidebar ——— */
const InfoSidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
`;

const InfoCard = styled.div`
  padding: var(--space-xl);
  background: var(--color-surface-container);
  border: 1px solid var(--color-outline-variant);
  border-radius: var(--radius-lg);
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(202, 253, 0, 0.12);
  }
`;

const InfoTitle = styled.h4`
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-on-surface-variant);
  margin-bottom: var(--space-lg);
`;

const AvailabilityRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: var(--space-md);

  .dot {
    width: 9px;
    height: 9px;
    background: var(--color-primary);
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(202, 253, 0, 0.4);
    animation: pulse 2s ease-in-out infinite;
  }

  .status {
    font-family: var(--font-headline);
    font-weight: 700;
    font-size: 0.95rem;
    color: var(--color-primary);
  }
`;

const ResponseTime = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.82rem;
  color: var(--color-on-surface-variant);
  .icon { color: var(--color-primary); }
`;

const DirectChannel = styled.div`
  margin-bottom: var(--space-md);
  &:last-of-type { margin-bottom: 0; }

  .label {
    font-size: 0.65rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--color-outline);
    margin-bottom: 2px;
  }

  a {
    font-size: 0.92rem;
    font-weight: 500;
    color: var(--color-on-surface) !important;
    transition: color var(--transition-fast);
    &:hover { color: var(--color-primary) !important; }
  }
`;

const SocialRow = styled.div`
  display: flex;
  gap: var(--space-sm);
  margin-top: var(--space-md);
`;

const SocialLink = styled.a`
  padding: 0.4rem 0.9rem;
  background: var(--color-surface-container-high);
  border: 1px solid var(--color-outline-variant);
  border-radius: var(--radius-sm);
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-on-surface-variant) !important;
  transition: all 0.25s ease;

  &:hover {
    border-color: var(--color-primary);
    color: var(--color-primary) !important;
    transform: translateY(-2px);
  }
`;

/* Visual card (3D abstract) */
const VisualGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-sm);
  margin-top: var(--space-md);
`;

const VisualTile = styled.div`
  aspect-ratio: 1;
  background: var(--color-surface-container-high);
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-outline-variant);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: all 0.4s ease;

  img {
    width: 60%;
    height: 60%;
    object-fit: contain;
    opacity: 0.6;
    transition: all 0.4s ease;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(202, 253, 0, 0.2);
    box-shadow: 0 4px 12px rgba(202, 253, 0, 0.05);
  }

  &:hover img {
    opacity: 1;
    transform: scale(1.1);
  }
`;

const VisualCaption = styled.div`
  text-align: center;
  margin-top: var(--space-sm);
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-primary);
  opacity: 0.7;
`;

/* ——— Bottom Section ——— */
const BottomSection = styled.div`
  margin-top: var(--space-4xl);
  padding: var(--space-2xl) var(--space-2xl);
  background: var(--color-surface-container);
  border: 1px solid var(--color-outline-variant);
  border-radius: var(--radius-xl);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-2xl);
  align-items: center;
  transition: all 0.4s ease;

  &:hover {
    border-color: rgba(202, 253, 0, 0.1);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: var(--space-xl);
  }
`;

const BottomText = styled.div`
  h3 {
    font-size: 1.3rem;
    margin-bottom: var(--space-sm);
    letter-spacing: 0.05em;
  }
  p {
    font-size: 0.88rem;
    line-height: 1.7;
    color: var(--color-on-surface-variant);
  }
`;

const BottomVisual = styled.div`
  height: 220px;
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--color-outline-variant);
  position: relative;
  background: var(--color-surface-container-highest);

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    filter: invert(90%) hue-rotate(180deg) grayscale(80%) contrast(1.2);
    opacity: 0.7;
    transition: opacity 0.3s ease;
  }

  &:hover iframe {
    opacity: 1;
  }
`;

const BottomSocials = styled.div`
  display: flex;
  gap: var(--space-md);
  margin-top: var(--space-lg);
`;

const BottomSocial = styled.a`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-surface-container);
  border: 1px solid var(--color-outline-variant);
  border-radius: var(--radius-sm);
  font-size: 0.9rem;
  transition: all 0.25s ease;

  &:hover {
    border-color: var(--color-primary);
    background: rgba(202, 253, 0, 0.06);
    transform: translateY(-2px);
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    entity: '', name: '', email: '', scope: '', details: '',
  });
  const [titleRef, titleVisible] = useScrollReveal();
  const [formRef, formVisible] = useScrollReveal();
  const [sideRef, sideVisible] = useScrollReveal();
  const [bottomRef, bottomVisible] = useScrollReveal();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Project Inquiry from ${formData.name}${formData.entity ? ` — ${formData.entity}` : ''}`;
    const body = [
      `Hi Vivek,`,
      ``,
      `I'd like to discuss a project with you.`,
      ``,
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      formData.entity ? `Organization: ${formData.entity}` : null,
      formData.scope ? `Project Scope: ${formData.scope}` : null,
      ``,
      `Project Details:`,
      formData.details || '(No details provided)',
      ``,
      `Looking forward to hearing from you.`,
    ].filter(Boolean).join('\n');

    window.location.href = `mailto:vivprajapati1520@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <Section id="contact">
      <div ref={titleRef} className={`reveal ${titleVisible ? 'visible' : ''}`}>
        <span className="section-label">Say Hello</span>
        <h2 className="section-title">
          LET'S BUILD SOMETHING{' '}
          <span style={{ color: 'var(--color-primary)' }}>GREAT.</span>
        </h2>
      </div>

      <TopGrid>
        <div ref={formRef} className={`reveal-left ${formVisible ? 'visible' : ''}`}>
          <Form onSubmit={handleSubmit}>
            <FormRow>
              <InputGroup>
                <label htmlFor="contact-entity">Entity / Name</label>
                <Input id="contact-entity" name="entity" placeholder="Company or individual" value={formData.entity} onChange={handleChange} />
              </InputGroup>
              <InputGroup>
                <label htmlFor="contact-name">Full Name</label>
                <Input id="contact-name" name="name" placeholder="Your full name" value={formData.name} onChange={handleChange} required />
              </InputGroup>
            </FormRow>
            <FormRow>
              <InputGroup>
                <label htmlFor="contact-email">Email</label>
                <Input id="contact-email" name="email" type="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} required />
              </InputGroup>
              <InputGroup>
                <label htmlFor="contact-scope">Project Scope</label>
                <Input id="contact-scope" name="scope" placeholder="e.g. Mobile App, SDK" value={formData.scope} onChange={handleChange} />
              </InputGroup>
            </FormRow>
            <InputGroup>
              <label htmlFor="contact-details">Project Details</label>
              <TextArea id="contact-details" name="details" placeholder="Describe your project, goals, and timeline..." value={formData.details} onChange={handleChange} />
            </InputGroup>
            <SubmitRow>
              <button type="submit" className="btn-primary">Transmit Inquiry →</button>
              <span className="note">Opens your email client with details pre-filled</span>
            </SubmitRow>
          </Form>
        </div>

        <div ref={sideRef} className={`reveal-right ${sideVisible ? 'visible' : ''}`}>
          <InfoSidebar>
            <InfoCard>
              <InfoTitle>Current Availability</InfoTitle>
              <AvailabilityRow>
                <span className="dot" />
                <span className="status">Open to Work</span>
              </AvailabilityRow>
              <ResponseTime>
                <span className="icon">⚡</span>
                Standard Response Time: Within 12 working hours
              </ResponseTime>
            </InfoCard>

            <InfoCard>
              <InfoTitle>Direct Channels</InfoTitle>
              <DirectChannel>
                <div className="label">Email</div>
                <a href="mailto:vivprajapati1520@gmail.com">vivprajapati1520@gmail.com</a>
              </DirectChannel>
              <DirectChannel>
                <div className="label">Location</div>
                <a href="#contact">Mumbai, India</a>
              </DirectChannel>
              <SocialRow>
                <SocialLink href="https://www.linkedin.com/in/vivek-prajapati-839261181/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</SocialLink>
                <SocialLink href="https://github.com/vivekCometChat" target="_blank" rel="noopener noreferrer">GitHub ↗</SocialLink>
              </SocialRow>
            </InfoCard>

            <InfoCard>
              <VisualGrid>
                <VisualTile><img src={`${process.env.PUBLIC_URL}/images/tile-code.png`} alt="Code" /></VisualTile>
                <VisualTile><img src={`${process.env.PUBLIC_URL}/images/tile-mobile.png`} alt="Mobile" /></VisualTile>
                <VisualTile><img src={`${process.env.PUBLIC_URL}/images/tile-api.png`} alt="API" /></VisualTile>
                <VisualTile><img src={`${process.env.PUBLIC_URL}/images/tile-design.png`} alt="Design" /></VisualTile>
                <VisualTile><img src={`${process.env.PUBLIC_URL}/images/tile-deploy.png`} alt="Deploy" /></VisualTile>
                <VisualTile><img src={`${process.env.PUBLIC_URL}/images/tile-database.png`} alt="Database" /></VisualTile>
              </VisualGrid>
              <VisualCaption>Engineered for Excellence.</VisualCaption>
            </InfoCard>
          </InfoSidebar>
        </div>
      </TopGrid>

      <div ref={bottomRef} className={`reveal ${bottomVisible ? 'visible' : ''}`}>
        <BottomSection>
          <BottomText>
            <h3>BASED IN MUMBAI</h3>
            <p>
              I work remotely and am happy to collaborate across time zones. 
              Always up for a coffee chat or a video call to discuss ideas.
            </p>
            <BottomSocials>
              <BottomSocial href="https://github.com/vivekCometChat" target="_blank" rel="noopener noreferrer">⌘</BottomSocial>
              <BottomSocial href="https://www.linkedin.com/in/vivek-prajapati-839261181/" target="_blank" rel="noopener noreferrer">▦</BottomSocial>
            </BottomSocials>
          </BottomText>
          <BottomVisual>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609959632!2d72.74109995738879!3d19.08219783850756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1711000000000!5m2!1sen!2sin"
              title="Map of Mumbai"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </BottomVisual>
        </BottomSection>
      </div>
    </Section>
  );
};

export default Contact;
