import { Link } from 'react-router-dom'
import './Home.css'

const highlights = [
  { num: '30+', label: 'Years of Experience' },
  { num: 'AHCB', label: 'Certified Therapist' },
  { num: 'PATH', label: 'CTRI Certified' },
  { num: 'EN/ES', label: 'Bilingual Services' },
]

const serviceTeaser = [
  {
    icon: '⬡',
    title: 'Hippotherapy',
    desc: 'Derived from the ancient Greek word "hippos" meaning horse, hippotherapy uses physical therapy as the tool for rehabilitation through the rhythmic movement of the horse.',
  },
  {
    icon: '⬡',
    title: 'Pediatric Physical Therapy',
    desc: 'NDT-trained, specialized therapy for special needs children — supporting developmental milestones, mobility, and participation in everyday activities.',
  },
  {
    icon: '⬡',
    title: 'Bilingual Care',
    desc: 'Full sessions and family education available in both English and Spanish, ensuring every family feels understood and supported.',
  },
]

export default function Home() {
  return (
    <div className="home page-enter">

      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero__bg">
          <div className="hero__overlay" />
          <div className="hero__pattern" />
        </div>
        <div className="hero__content container">
          <div className="hero__text">
            <p className="label hero__label">Pegasus Therapy</p>
            <h1 className="hero__heading">
              Where Healing<br />
              <em>Takes Flight</em>
            </h1>
            <p className="hero__sub">
              Pegasus Therapy is devoted to utilizing the movement of the horse to improve
              function, independence, and quality of life in special needs children.
            </p>
            <div className="hero__actions">
              <Link to="/services" className="btn-primary">Our Services</Link>
              <Link to="/contact" className="btn-outline-white">Contact Us</Link>
            </div>
          </div>
          <div className="hero__badge">
            <div className="hero__badge-inner">
              <span className="hero__badge-num">30+</span>
              <span className="hero__badge-label">Years of<br />Excellence</span>
            </div>
          </div>
        </div>
        <div className="hero__scroll-hint">
          <span>Scroll</span>
          <span className="hero__scroll-line" />
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="stats">
        <div className="container">
          <div className="stats__grid">
            {highlights.map(({ num, label }) => (
              <div key={num} className="stats__item">
                <span className="stats__num">{num}</span>
                <span className="stats__label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="intro section-pad">
        <div className="container">
          <div className="intro__grid">
            <div className="intro__text">
              <p className="label">About Our Practice</p>
              <div className="divider-red" />
              <h2 className="section-title">
                Dedicated to Enhancing<br />Your Well-Being
              </h2>
              <p>
                Pegasus Therapy was founded by Iris Melton, LPTA — a Licensed Physical Therapist
                Assistant with over 30 years of experience, including a long-standing career at
                Cook Children's Medical Center.
              </p>
              <p>
                Pegasus is committed to empowering children through hippotherapy — blending clinical
                expertise with the movement of the horse to improve function, mobility, and
                participation in everyday activities.
              </p>
              <Link to="/about" className="btn-outline" style={{ marginTop: '28px' }}>
                Learn More
              </Link>
            </div>
            <div className="intro__visual">
              <div className="intro__card intro__card--1">
                <div className="intro__card-icon">🏇</div>
                <h3>Hippotherapy</h3>
                <p>Using the healing movement of horses as a therapeutic tool for special needs children</p>
              </div>
              <div className="intro__card intro__card--2">
                <div className="intro__card-icon">🤝</div>
                <h3>Personalized Care</h3>
                <p>Every treatment plan is built around the individual child and family</p>
              </div>
             
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Teaser ── */}
      <section className="services-teaser section-pad">
        <div className="container">
          <div className="services-teaser__header">
            <p className="label">What We Offer</p>
            <div className="divider-red" />
            <h2 className="section-title">Our Services</h2>
          </div>
          <div className="services-teaser__grid">
            {serviceTeaser.map(({ icon, title, desc }) => (
              <div key={title} className="st-card">
                <span className="st-card__icon">{icon}</span>
                <h3 className="st-card__title">{title}</h3>
                <p className="st-card__desc">{desc}</p>
                <Link to="/services" className="st-card__link">
                  Learn more <span>→</span>
                </Link>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/services" className="btn-primary">View All Services</Link>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="cta-banner">
        <div className="cta-banner__bg" />
        <div className="container cta-banner__content">
          <div>
            <h2 className="cta-banner__heading">Ready to Begin Your Journey?</h2>
            <p className="cta-banner__sub">Download intake forms or get in touch to schedule your first session.</p>
          </div>
          <div className="cta-banner__actions">
            <Link to="/forms" className="btn-outline-white">Download Forms</Link>
            <Link to="/contact" className="btn-primary">Contact Us</Link>
          </div>
        </div>
      </section>

    </div>
  )
}
