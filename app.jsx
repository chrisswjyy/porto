import React, { useState, useEffect, useRef } from 'react';

const ProfileSection = ({ onImageClick }) => {
  return (
    <section id="home" className="profile-section">
      <div className="profile-content">
        <div className="profile-image-wrapper">
          <div className="profile-image" onClick={onImageClick}>
            <img 
              src="https://c.termai.cc/i77/heGS.jpg" 
              alt="Christoper - Full-stack Developer"
              loading="eager"
            />
            <div className="image-overlay"></div>
          </div>
          <div className="status-indicator">
            <span className="status-dot"></span>
            <span className="status-text">Available for work</span>
          </div>
        </div>
        
        <div className="profile-info">
          <h1 className="name">Christoper</h1>
          <p className="location">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            Sumatera Utara, Indonesia
          </p>
          <p className="bio">
            I am Chris, a Full Stack Developer from North Sumatra, focusing on both back-end and front-end development. 
            I enjoy solitude as it allows me to concentrate and refine my skills, yet I dislike loneliness because I value 
            the presence of meaningful connections. My approach combines independence and collaboration, enabling me to create 
            digital solutions that are functional, scalable, and user-friendly.
          </p>
          
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">1+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">17+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">97%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Navigation = ({ activeSection }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="main-nav">
      <ul className="nav-list">
        <li>
          <a 
            href="#home" 
            className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
          >
            Home
          </a>
        </li>
        <li>
          <a 
            href="#skills" 
            className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}
          >
            Skills
          </a>
        </li>
        <li>
          <a 
            href="#projects" 
            className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
          >
            Projects
          </a>
        </li>
        <li>
          <a 
            href="#contact" 
            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

const SkillsSection = () => {
  const skills = [
    {
      title: 'Frontend Developer',
      description: 'React, Vue.js, TypeScript, Tailwind CSS',
      level: 90,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    },
    {
      title: 'Backend Developer',
      description: 'Node.js, Python, PostgreSQL',
      level: 85,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4.93 4.93C3.12 6.74 2 9.24 2 12s1.12 5.26 2.93 7.07L12 12 4.93 4.93zm14.14 0L12 12l7.07 7.07C20.88 17.26 22 14.76 22 12s-1.12-5.26-2.93-7.07z"/>
        </svg>
      )
    },
    {
      title: 'Digital Creator',
      description: 'Alight Motion, Final Cut Pro, Figma',
      level: 80,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="section-header">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">Technologies and tools I use to bring ideas to life</p>
      </div>
      
      <div className="skills-container">
        {skills.map((skill, index) => (
          <article key={index} className="skill-item" tabIndex="0">
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-content">
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
              <div className="skill-level">
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

const ProjectsSection = ({ onProjectClick }) => {
  const projects = [
    {
      title: 'Spotify Downloader',
      category: 'Media Downloader',
      status: 'ACTIVE',
      year: '2024',
      description: 'untuk yang mau download lagu spotify spotify azaaaa.',
      tags: ['html', 'css', 'JavaScript'],
      metrics: [
        { value: '99.9%', label: 'Uptime' },
        { value: '1.2s', label: 'Load Time' }
      ],
      link: 'https://chrisswjyy.github.io/spotify-downloader/'
    },
    {
      title: 'Mobile Legends Winrate Calculator',
      category: 'E-commerce Platform',
      status: 'DEPLOYED',
      year: '2024',
      description: 'Mau hitung winrate ml? disini ajaa.',
      tags: ['html', 'Css', 'JavaScript'],
      metrics: [
        { value: '1k+', label: 'Users' },
        { value: '4.5★', label: 'Rating' }
      ],
      link: 'https://chrisswjyy.github.io/hitung-winrate/'
    },
    {
      title: 'Buy Panel Pterodactyl',
      category: 'Pterodactyl',
      status: 'deployed',
      year: '2025',
      description: 'High-performance Panel Pterodactyl With Private Vps And Intel Premium Processor 2 - 8 cores.',
      tags: ['React', 'Html', 'Css', 'JavaScript'],
      metrics: [
        { value: 'Private Vps', label: 'High Performance' },
        { value: '50ms', label: 'Response' }
      ],
      link: '#'
    },
    {
      title: 'Whatsapp Bot',
      category: 'ai and tools for whatsapp',
      status: 'Deployed',
      year: '2024',
      description: 'Ai tools untuk whatsapp agar bisa menghibur kesepianmu dan menjaga grupmu:V.',
      tags: ['Nodejs', 'MongoDB', 'Baileys'],
      metrics: [
        { value: '10k+', label: 'user' },
        { value: '100%', label: 'Respond' }
      ],
      link: 'https://sewa-bot-wa.vercel.app/'
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="section-header">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">A showcase of my recent work and contributions</p>
      </div>
      
      <div className="projects-container">
        {projects.map((project, index) => (
          <article 
            key={index} 
            className="project-item" 
            tabIndex="0"
            onClick={() => onProjectClick(project.link)}
          >
            <div className="project-header">
              <div className="project-title-group">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-category">{project.category}</span>
              </div>
              <div className="project-meta">
                <span className="project-status status-active">{project.status}</span>
                <span className="project-year">{project.year}</span>
              </div>
            </div>
            
            <p className="project-desc">{project.description}</p>
            
            <div className="project-details">
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
              
              <div className="project-metrics">
                {project.metrics.map((metric, i) => (
                  <div key={i} className="metric">
                    <span className="metric-value">{metric.value}</span>
                    <span className="metric-label">{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

const ContactSection = ({ onContactClick }) => {
  const contacts = [
    {
      platform: 'Telegram',
      description: 'Quick messaging and file sharing',
      handle: '@chriswijaya',
      icon: <img src="https://c.termai.cc/i48/tAMcA.jpg" alt="" loading="lazy" />,
      responseTime: 'Usually responds within 1 hour',
      link: 'https://t.me/chriswijaya',
      active: true
    },
    {
      platform: 'WhatsApp',
      description: 'Direct messaging and voice calls',
      handle: '+62 895-3264-26758',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
        </svg>
      ),
      responseTime: 'Available 9 AM - 6 PM WIB',
      link: 'https://wa.me/62895326426758',
      active: true
    },
    {
      platform: 'Email',
      description: 'Professional inquiries and proposals',
      handle: 'chistopherwijaya@gmail.com',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
      responseTime: 'Usually responds within 24 hours',
      link: 'mailto:chistopherwijaya@gmail.com',
      active: false
    }
  ];

  return (
    <section className="contact-section" id="contact">
      <div className="section-header">
        <h2 className="section-title">Let's Work Together</h2>
        <p className="section-subtitle">Ready to bring your ideas to life? Let's connect and discuss your project</p>
      </div>
      
      <div className="contact-container">
        {contacts.map((contact, index) => (
          <article 
            key={index} 
            className="contact-item" 
            tabIndex="0"
            onClick={() => onContactClick(contact.link)}
          >
            <div className="contact-icon">{contact.icon}</div>
            <div className="contact-info">
              <h3>{contact.platform}</h3>
              <p>{contact.description}</p>
              <span className="contact-handle">{contact.handle}</span>
              <div className="response-time">
                <span className={`response-indicator ${contact.active ? 'active' : ''}`}></span>
                {contact.responseTime}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p className="footer-text">© 2025 Chris.</p>
        <div className="footer-links">
          <a href="#home" className="footer-link">Privacy</a>
          <a href="#home" className="footer-link">Terms</a>
          <a href="#home" className="footer-link">Sitemap</a>
        </div>
      </div>
      <div className="footer-badge">
        <span>orang yang gagal adalah orang yang tidak berani memulai</span>
      </div>
    </footer>
  );
};

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [imageScale, setImageScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleImageClick = () => {
    setImageScale(1.1);
    setTimeout(() => setImageScale(1), 300);
  };

  const handleProjectClick = (url) => {
    window.open(url, '_blank');
  };

  const handleContactClick = (url) => {
    if (url.startsWith('mailto:')) {
      window.location.href = url;
    } else {
      window.open(url, '_blank');
    }
  };

  return (
    <div className="portfolio-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=SF+Pro+Display:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');

        :root {
          --bg: #0a0a0a;
          --surface: #141414;
          --text: #ffffff;
          --text-dim: #a0a0a0;
          --accent: #ffffff;
          --glow: rgba(255, 255, 255, 0.1);
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
          background: var(--bg);
          color: var(--text);
          line-height: 1.6;
          overflow-x: hidden;
        }

        .portfolio-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .profile-section {
          padding: 120px 0 80px;
          text-align: center;
        }

        .profile-image {
          width: 120px;
          height: 120px;
          border-radius: 60px;
          margin: 0 auto 30px;
          overflow: hidden;
          border: 2px solid var(--surface);
          transition: all 0.3s ease;
          cursor: pointer;
          transform: scale(${imageScale});
        }

        .profile-image:hover {
          border-color: var(--glow);
        }

        .profile-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .image-overlay {
          display: none;
        }

        .status-indicator {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-bottom: 20px;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          background: #10b981;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .status-text {
          font-size: 14px;
          color: var(--text-dim);
        }

        .name {
          font-size: 48px;
          font-weight: 700;
          margin-bottom: 8px;
          letter-spacing: -0.02em;
        }

        .location {
          font-size: 18px;
          color: var(--text-dim);
          font-weight: 400;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .bio {
          max-width: 600px;
          margin: 20px auto;
          color: var(--text-dim);
          line-height: 1.7;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          max-width: 500px;
          margin: 30px auto 0;
        }

        .stat-item {
          background: var(--surface);
          padding: 20px;
          border-radius: 12px;
          border: 1px solid transparent;
          transition: all 0.3s ease;
        }

        .stat-item:hover {
          border-color: var(--glow);
          transform: translateY(-2px);
        }

        .stat-number {
          display: block;
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .stat-label {
          display: block;
          font-size: 12px;
          color: var(--text-dim);
        }

        .main-nav {
          position: sticky;
          top: 0;
          background: var(--bg);
          z-index: 100;
          padding: 20px 0;
          margin-bottom: 40px;
          border-bottom: 1px solid var(--surface);
        }

        .nav-list {
          display: flex;
          justify-content: center;
          gap: 40px;
          list-style: none;
        }

        .nav-link {
          color: var(--text-dim);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .nav-link:hover,
        .nav-link.active {
          color: var(--text);
        }

        .skills-section,
        .projects-section,
        .contact-section {
          padding: 60px 0;
        }

        .section-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .section-title {
          font-size: 32px;
          font-weight: 600;
          margin-bottom: 10px;
          letter-spacing: -0.01em;
        }

        .section-subtitle {
          color: var(--text-dim);
          font-size: 16px;
        }

        .skills-container {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .skill-item {
          background: var(--surface);
          padding: 24px 32px;
          border-radius: 12px;
          border: 1px solid transparent;
          transition: all 0.3s ease;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .skill-item:hover {
          border-color: var(--glow);
          transform: translateY(-2px);
        }

        .skill-icon {
          flex-shrink: 0;
        }

        .skill-content {
          flex: 1;
        }

        .skill-item h3 {
          font-size: 20px;
          font-weight: 600;
          font-family: 'JetBrains Mono', monospace;
          margin-bottom: 8px;
        }

        .skill-item p {
          color: var(--text-dim);
          font-size: 14px;
          margin-bottom: 12px;
        }

        .skill-level {
          width: 100%;
        }

        .skill-bar {
          width: 100%;
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
          overflow: hidden;
        }

        .skill-progress {
          height: 100%;
          background: var(--accent);
          border-radius: 2px;
          transition: width 1.5s ease;
        }

        .projects-container {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .project-item {
          background: var(--surface);
          padding: 32px;
          border-radius: 16px;
          border: 1px solid transparent;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .project-item:hover {
          border-color: var(--glow);
          transform: translateY(-3px);
        }

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 16px;
          flex-wrap: wrap;
          gap: 12px;
        }

        .project-title {
          font-size: 24px;
          font-weight: 600;
          font-family: 'JetBrains Mono', monospace;
          margin-bottom: 4px;
        }

        .project-category {
          font-size: 14px;
          color: var(--text-dim);
        }

        .project-meta {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .project-status {
          background: var(--accent);
          color: var(--bg);
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .project-year {
          color: var(--text-dim);
          font-size: 14px;
        }

        .project-desc {
          color: var(--text-dim);
          margin-bottom: 20px;
          font-size: 16px;
          line-height: 1.7;
        }

        .project-details {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .project-tags {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .tag {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 500;
          color: var(--text-dim);
        }

        .project-metrics {
          display: flex;
          gap: 24px;
        }

        .metric {
          display: flex;
          flex-direction: column;
        }

        .metric-value {
          font-weight: 600;
          font-size: 16px;
        }

        .metric-label {
          font-size: 12px;
          color: var(--text-dim);
        }

        .contact-container {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .contact-item {
          background: var(--surface);
          padding: 20px 24px;
          border-radius: 12px;
          border: 1px solid transparent;
          transition: all 0.3s ease;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .contact-item:hover {
          border-color: var(--glow);
          transform: translateY(-2px);
        }

        .contact-icon {
          width: 44px;
          height: 44px;
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .contact-icon img,
        .contact-icon svg {
          width: 20px;
          height: 20px;
          color: var(--text);
        }

        .contact-info {
          flex: 1;
        }

        .contact-info h3 {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 4px;
        }

        .contact-info p {
          font-size: 14px;
          color: var(--text-dim);
          margin-bottom: 4px;
        }

        .contact-handle {
          display: block;
          font-size: 14px;
          color: var(--text);
          font-weight: 500;
          margin-bottom: 8px;
        }

        .response-time {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: var(--text-dim);
        }

        .response-indicator {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--text-dim);
        }

        .response-indicator.active {
          background: #10b981;
          animation: pulse 2s infinite;
        }

        .site-footer {
          border-top: 1px solid var(--surface);
          padding: 40px 0;
          margin-top: 60px;
          text-align: center;
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          flex-wrap: wrap;
          gap: 20px;
        }

        .footer-text {
          color: var(--text-dim);
          font-size: 14px;
        }

        .footer-links {
          display: flex;
          gap: 20px;
        }

        .footer-link {
          color: var(--text-dim);
          text-decoration: none;
          font-size: 14px;
          transition: color 0.3s ease;
        }

        .footer-link:hover {
          color: var(--text);
        }

        .footer-badge {
          padding: 12px 24px;
          background: var(--surface);
          border-radius: 8px;
          display: inline-block;
        }

        .footer-badge span {
          color: var(--text-dim);
          font-size: 13px;
          font-style: italic;
        }

        @media (min-width: 640px) {
          .portfolio-container {
            padding: 0 40px;
          }
          
          .profile-image {
            width: 140px;
            height: 140px;
            border-radius: 70px;
          }
          
          .name {
            font-size: 56px;
          }
          
          .skills-container {
            flex-direction: row;
            justify-content: space-between;
          }
          
          .skill-item {
            flex: 1;
            flex-direction: column;
            text-align: center;
          }

          .skill-icon {
            margin: 0 auto 16px;
          }
          
          .projects-container {
            gap: 32px;
          }
          
          .contact-container {
            flex-direction: row;
            justify-content: space-between;
          }
          
          .contact-item {
            flex: 1;
            flex-direction: column;
            text-align: center;
            padding: 28px 20px;
          }

          .contact-icon {
            margin: 0 auto 16px;
          }
          
          .contact-info h3 {
            margin-bottom: 4px;
          }

          .response-time {
            justify-content: center;
          }
        }

        @media (min-width: 768px) {
          .profile-section {
            padding: 140px 0 100px;
          }
          
          .name {
            font-size: 64px;
          }
          
          .location {
            font-size: 20px;
          }
          
          .section-title {
            font-size: 36px;
          }
        }

        .skill-item::before,
        .project-item::before,
        .contact-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.03), transparent);
          transition: left 0.5s ease;
        }

        .skill-item,
        .project-item,
        .contact-item {
          position: relative;
          overflow: hidden;
        }

        .skill-item:hover::before,
        .project-item:hover::before,
        .contact-item:hover::before {
          left: 100%;
        }

        ::selection {
          background: rgba(255, 255, 255, 0.1);
          color: var(--text);
        }

        .skill-item:focus,
        .project-item:focus,
        .contact-item:focus {
          outline: none;
          border-color: var(--glow);
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      <ProfileSection onImageClick={handleImageClick} />
      <Navigation activeSection={activeSection} />
      <SkillsSection />
      <ProjectsSection onProjectClick={handleProjectClick} />
      <ContactSection onContactClick={handleContactClick} />
      <Footer />
    </div>
  );
};

export default Portfolio;