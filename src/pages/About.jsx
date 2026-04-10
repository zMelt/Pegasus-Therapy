import './About.css'

const credentials = [
  { title: 'LPTA', desc: 'Licensed Physical Therapist Assistant' },
  { title: 'AHCB', desc: 'American Hippotherapy Certification Board - Certified Therapist' },
  { title: 'PATH', desc: 'Certified Therapeutic Riding Instructor (CTRI)' },
  { title: 'NDT', desc: 'Neurodevelopmental Treatment Trained — Pediatrics' },
  { title: 'Bilingual', desc: 'Fluent in English and Spanish' },
]

const timeline = [
  { year: '1991', event: 'Associates of Applied Science in Physical Therapist Assisting — Beginning career as LPTA' },
  { year: '1995', event: 'Started practicing hippotherapy as a LPTA — Began 25+ year tenure in pediatric care' },
  { year: '2015', event: 'Pursued and earned AHCB Certification in Hippotherapy and PATH Certified Therapeutic Riding Instructor credentials' },
  { year: 'Today', event: 'Founding Pegasus Therapy — bringing a lifetime of pediatric and hippotherapy expertise to private practice' },
]

export default function About() {
  return (
    <div className="about page-enter">

      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container page-hero__content">
          <p className="label">Our Story</p>
          <h1 className="page-hero__title">About Pegasus Therapy</h1>
          <div className="page-hero__line" />
        </div>
      </section>

      {/* ── Bio Section ── */}
      <section className="bio section-pad">
        <div className="container">
          <div className="bio__grid">
            <div className="bio__visual">
              <div className="bio__photo-frame">
                {/* REPLACE PLACEHOLDER WITH ACTUAL IMAGE */}
                <img 
                  src="/Iris.jpeg" 
                  alt="Iris Melton, LPTA - Founder of Pegasus Therapy" 
                  className="bio__photo"
                />
                <div className="bio__photo-accent" />
              </div>
              <div className="bio__credentials">
                {credentials.map(({ title, desc }) => (
                  <div key={title} className="bio__cred">
                    <span className="bio__cred-title">{title}</span>
                    <span className="bio__cred-desc">{desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bio__text">
              {/* ── NEW PARAGRAPH (Keller, TX mission) ── */}
              <p className="bio__location-mission">
                Located in Keller, Texas, Pegasus Therapy specializes in hippotherapy — using the healing 
                movement of horses to help special needs children unlock their full potential. Our mission is simple: to help every child become the best they can be, 
                improve their well-being, and achieve the best possible quality of life. Through the unique 
                bond between horse and rider, we create a therapeutic experience that transforms challenges 
                into milestones.
              </p>

              {/* ── Empty line (margin-bottom on the paragraph above handles this) ── */}
              
              <div className="bio__meet-wrapper">
                <div className="divider-red" />
                <p className="label">Meet Your Therapist</p>
                <div className="divider-red" />
                <h2 className="section-title">Iris Melton, LPTA</h2>
              </div>
              <div className="bio__body">
                
                {/* ── CONSOLIDATED BIO ── */}
                <p>
                  Iris Melton is a Licensed Physical Therapist Assistant with over 30 years of experience 
                  dedicated to improving the lives of children with special needs. She earned her Associate 
                  of Applied Science in Physical Therapist Assisting in 1991, started practicing Hippotherapy in 1995, 
                  and has specialized in pediatric patients since 1999 — building extraordinary 
                  clinical expertise working with children and families.
                </p>
                <p>
                  As an AHCB Certified Therapist and PATH Certified Therapeutic Riding Instructor (CTRI), 
                  Iris uses the rhythmic, three-dimensional movement of the horse as a therapeutic tool to 
                  address neurological function, sensory processing, balance, and motor development. Her NDT 
                  (Neurodevelopmental Treatment) training in pediatrics equips her to work with children facing 
                  a wide range of neurological and developmental conditions — always meeting each child where 
                  they are and celebrating every milestone.
                </p>
                <p>
                  Bilingual in English and Spanish, Iris ensures that every child and family feels heard, 
                  understood, and supported — in the language they are most comfortable with.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Michelle Hoemann (Supervising PT) Section ── */}
      <section className="supervising-pt section-pad">
        <div className="container">
          <div className="supervising-pt__inner">
            <div className="supervising-pt__header">
              <p className="label">Supervising Physical Therapist</p>
              <div className="divider-red" />
              <h2 className="section-title">Clinical Oversight</h2>
            </div>

            <div className="supervising-pt__grid">
              <div className="supervising-pt__image-wrapper">
                <img 
                  src="/Michelle.jpeg" 
                  alt="Michelle Hoemann, PT - Supervising Physical Therapist" 
                  width="240"
                  height="360"
                  className="supervising-pt__image"
                />
                <div className="supervising-pt__image-accent" />
              </div>
              <div className="supervising-pt__content">
                <h3 className="supervising-pt__name">Michelle Hoemann, PT</h3>
                <p className="supervising-pt__credentials">
                  Doctor of Physical Therapy | Early Childhood Specialist
                </p>
                <div className="supervising-pt__bio">
                  <p>
                    Michelle is a Physical Therapist with over 20 years of experience. She works closely with 
                    Iris to complete physical therapy evaluations and reassessments, carefully examining each 
                    child's specific needs and progress throughout their therapy journey.
                  </p>
                  <p>
                    Michelle earned her Doctorate in Physical Therapy from Rosalind Franklin University and 
                    currently works in the Early Childhood Intervention (ECI) setting — bringing specialized 
                    expertise in developmental milestones and early therapeutic intervention.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="timeline-section section-pad">
        <div className="container">
          <div style={{ marginBottom: '56px' }}>
            <p className="label">Career Journey</p>
            <div className="divider-red" />
            <h2 className="section-title">A Legacy of Excellence</h2>
          </div>
          <div className="timeline">
            {timeline.map(({ year, event }) => (
              <div key={year} className="timeline__item">
                <div className="timeline__year">{year}</div>
                <div className="timeline__dot" />
                <div className="timeline__event">{event}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="philosophy">
        <div className="philosophy__bg" />
        <div className="container philosophy__content">
          <p className="label" style={{ color: 'rgba(255,255,255,0.5)' }}>Our Mission</p>
          <div className="divider-red" />
          <blockquote className="philosophy__quote">
            "Pegasus is committed to empowering children through hippotherapy — blending clinical
            expertise with the movement of the horse to improve function, mobility, and participation
            in everyday activities."
          </blockquote>
          <p className="philosophy__attr">— Pegasus Therapy</p>
        </div>
      </section>

    </div>
  )
}