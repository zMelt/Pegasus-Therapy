import './Contact.css'

const contactItems = [
  { icon: '📞', label: 'Phone', value: '(817) 781-7157', href: 'tel:8177817157' },
  { icon: '✉', label: 'Email', value: 'Pegasus.Therapy@outlook.com', href: 'mailto:Pegasus.Therapy@outlook.com' },
  { icon: '🌐', label: 'Languages', value: 'English & Spanish', href: null },
]

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const phone = form.phone.value
    const service = form.service.value
    const message = form.message.value

    const subject = encodeURIComponent(`New Inquiry from ${name} — Pegasus Therapy`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService of Interest: ${service}\n\nMessage:\n${message}`
    )
    window.location.href = `mailto:Pegasus.Therap@outlook.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="contact-page page-enter">

      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container page-hero__content">
          <p className="label">Reach Out</p>
          <h1 className="page-hero__title">Contact Us</h1>
          <div className="page-hero__line" />
        </div>
      </section>

      {/* ── Contact Grid ── */}
      <section className="contact-main section-pad">
        <div className="container">
          <div className="contact-grid">

            {/* ── Info Side ── */}
            <div className="contact-info">
              <p className="label">Get in Touch</p>
              <div className="divider-red" />
              <h2 className="section-title">We'd Love to<br />Hear From You</h2>
              <p className="contact-info__body">
                Whether you're a family looking to schedule a consultation, have questions about
                our hippotherapy or pediatric therapy services, or want to learn more about what
                Pegasus Therapy can do for your child — Iris is here to help. Reach out in
                English or Spanish.
              </p>

              <div className="contact-items">
                {contactItems.map(({ icon, label, value, href }) => (
                  <div key={label} className="contact-item">
                    <span className="contact-item__icon">{icon}</span>
                    <div>
                      <span className="contact-item__label">{label}</span>
                      {href
                        ? <a href={href} className="contact-item__value">{value}</a>
                        : <span className="contact-item__value">{value}</span>
                      }
                    </div>
                  </div>
                ))}
              </div>

              <div className="contact-creds">
                <p className="label" style={{ marginBottom: '12px' }}>Credentials</p>
                {[
                  'LPTA — Licensed Physical Therapist Assistant',
                  'AHCB Certified Hippotherapy Clinical Specialist',
                  'PATH Certified Therapeutic Riding Instructor (CTRI)',
                  'NDT Trained — Pediatrics',
                  '30+ Years Clinical Experience',
                ].map(c => (
                  <div key={c} className="contact-cred-item">
                    <span style={{ color: 'var(--red)', flexShrink: 0 }}>▸</span>
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Form Side ── */}
            <div className="contact-form-wrap">
              <div className="contact-form-card">
                <h3 className="contact-form-card__title">Send a Message</h3>
                <p className="contact-form-card__sub">
                  Fill out the form below and your email app will open with your message
                  pre-filled and ready to send directly to Iris.
                </p>
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input type="text" id="name" name="name" required placeholder="Jane Smith" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input type="tel" id="phone" name="phone" placeholder="(817) 555-0100" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input type="email" id="email" name="email" required placeholder="jane@example.com" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="service">Service of Interest</label>
                    <select id="service" name="service">
                      <option value="">Select a service...</option>
                      <option value="Hippotherapy">Hippotherapy</option>
                      <option value="Pediatric Physical Therapy">Pediatric Physical Therapy</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us a little about your child and what you're looking for..."
                    />
                  </div>
                  <button type="submit" className="btn-primary contact-submit">
                    Send Message via Email →
                  </button>
                  <p className="contact-form__note">
                    * Clicking send will open your default email app with this message ready to go.
                  </p>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
