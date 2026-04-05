import { Link } from 'react-router-dom'
import './Services.css'

const hippoDetails = [
  'AHCB Certified therapy sessions with Iris Melton, LPTA',
  'Neurological function and sensory processing support',
  'Balance, posture, and core strengthening',
  'Coordination and gross motor skill development',
  'Functional mobility toward independence',
  'Emotional regulation and behavioral therapeutic benefits',
]

const ptDetails = [
  'PATH Certified Therapeutic Riding Instructor (CTRI) guided sessions',
  'NDT (Neurodevelopmental Treatment) specialized approach',
  'Developmental milestone evaluation and support',
  'Early intervention programs',
  'Neurological condition management (cerebral palsy, spina bifida, and more)',
  'Family and caregiver education and home program instruction',
  'Full sessions available in English or Spanish',
]

export default function Services() {
  return (
    <div className="services-page page-enter">

      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container page-hero__content">
          <p className="label">What We Offer</p>
          <h1 className="page-hero__title">Our Services</h1>
          <div className="page-hero__line" />
        </div>
      </section>

      {/* ── Mission Intro ── */}
      <section className="services-intro section-pad">
        <div className="container">
          <div className="services-intro__inner">
            <p>
              Pegasus Therapy is dedicated to utilizing the movement of the horse to improve function,
              independence, and quality of life in special needs children. Through hippotherapy and
              specialized pediatric physical therapy — Pegasus Therapys' aim is to empower children to 
              move, grow, and participate more fully in everyday life.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 1: Hippotherapy ── */}
      <section className="svc-section section-pad">
        <div className="container">
          <div className="svc-section__grid">
            <div className="svc-section__intro">
              <p className="label">Section 01</p>
              <div className="divider-red" />
              <h2 className="section-title">Hippotherapy</h2>
              <p className="svc-section__lead">
                Derived from the ancient Greek word <em>"hippos"</em> meaning horse, hippotherapy
                consists of physical therapy as a tool using equine movement to improve sensory, 
                neuromotor, and cognitive functions in individuals with physical or mental disabilities.
              </p>
              <p className="svc-section__body">
                As an AHCB Certified Therapist, Iris uses the rhythmic, three-dimensional movement
                of the horse as a therapeutic tool for improving neurological function, sensory
                integration, motor control, and overall physical development in children with
                special needs. The horse's movement closely mimics the human walking gait, producing
                sensory input that is difficult to replicate in a traditional clinical setting.
              </p>
              <p className="svc-section__body">
                Pegasus is committed to empowering children through hippotherapy — blending clinical
                expertise with the movement of the horse to improve function, mobility, and
                participation in everyday activities.
              </p>
            </div>
            <div className="svc-section__details">
              <div className="svc-detail-card">
                <h3 className="svc-detail-card__title">What to Expect</h3>
                <ul className="svc-detail-list">
                  {hippoDetails.map((d) => (
                    <li key={d}>
                      <span className="svc-bullet">▸</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="svc-credential-strip">
                <span className="svc-cred-badge">AHCB Certified</span>
                <span className="svc-cred-badge">PATH CTRI</span>
                <span className="svc-cred-badge">30+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Pediatric PT ── */}
      <section className="svc-section svc-section--alt section-pad">
        <div className="container">
          <div className="svc-section__grid svc-section__grid--reversed">
            <div className="svc-section__details">
              <div className="svc-detail-card">
                <h3 className="svc-detail-card__title">What to Expect</h3>
                <ul className="svc-detail-list">
                  {ptDetails.map((d) => (
                    <li key={d}>
                      <span className="svc-bullet">▸</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="svc-credential-strip">
                <span className="svc-cred-badge">NDT Trained</span>
                <span className="svc-cred-badge">Pediatric Specialist</span>
                <span className="svc-cred-badge">Bilingual EN/ES</span>
              </div>
            </div>
            <div className="svc-section__intro">
              <p className="label">Section 02</p>
              <div className="divider-red" />
              <h2 className="section-title">Pediatric Physical Therapy</h2>
              <p className="svc-section__lead">
                Specialized therapy for children with neurological and developmental conditions,
                delivered with clinical precision and genuine compassion.
              </p>
              <p className="svc-section__body">
                With over 25 years at Cook Children's Medical Center and advanced NDT training,
                Iris understands the unique challenges children and their families face. Every
                treatment plan is built around each child's individual needs, goals, and abilities —
                whether they are working toward their first steps, improved coordination, or greater
                independence in daily tasks.
              </p>
              <p className="svc-section__body">
                Iris's bilingual capabilities mean that Spanish-speaking families receive the same
                complete, clear communication as English-speaking families — from the initial
                evaluation through every step of the treatment journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Conditions We Support ── */}
      <section className="conditions section-pad">
        <div className="container">
          <div style={{ marginBottom: '48px' }}>
            <p className="label">Who We Serve</p>
            <div className="divider-red" />
            <h2 className="section-title">Conditions We Work With</h2>
          </div>
          <div className="conditions__grid">
            {[
              'Cerebral Palsy',
              'Spina Bifida',
              'Autism Spectrum Disorder',
              'Sensory Processing Disorders',
              'Developmental Delays',
              'Down Syndrome',
              'Traumatic Brain Injury',
              'Neurological Conditions',
            ].map((c) => (
              <div key={c} className="condition-chip">
                <span className="svc-bullet" style={{ color: 'var(--red)' }}>▸</span>
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="services-cta">
        <div className="services-cta__bg" />
        <div className="container services-cta__content">
          <h2 className="services-cta__heading">Ready to Get Started?</h2>
          <p className="services-cta__sub">Download intake forms or reach out directly to schedule a consultation.</p>
          <div className="services-cta__actions">
            <Link to="/forms" className="btn-outline-white">Download Forms</Link>
            <Link to="/contact" className="btn-primary">Contact Us</Link>
          </div>
        </div>
      </section>

    </div>
  )
}
