import './Forms.css'

const forms = [
  { id: 'intake-pediatric', title: 'Pegasus Registration Form', desc: 'For new patients. Includes the patient/guardian information.', file: '/forms/Pegasus-registration.pdf', tag: 'New Patient' },
  { id: 'hippo-consent', title: 'Medical History and Consents Form', desc: 'Required for all hippotherapy patients. Covers history, safety protocols/risks, and patient consents.', file: '/forms/releases-physician.pdf', tag: 'Hippotherapy' },
  { id: 'hippo-intake', title: 'Emergency Medical Treatment Form', desc: 'Authorization for Emergency Medical Treatment', file: '/forms/auth-for-med-treatment.pdf', tag: 'Hippotherapy' },
  { id: 'hipaa', title: 'Rules and Regulations', desc: '', file: '/forms/hipaa-authorization.pdf', tag: 'Required' },
]

export default function Forms() {
  return (
    <div className="forms-page page-enter">
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container page-hero__content">
          <p className="label">New Patients</p>
          <h1 className="page-hero__title">Patient Forms</h1>
          <div className="page-hero__line" />
        </div>
      </section>

      <section className="forms-instructions section-pad">
        <div className="container">
          <div className="forms-instructions__grid">
            <div className="forms-step">
              <span className="forms-step__num">01</span>
              <div>
                <h3 className="forms-step__title">Download Your Forms</h3>
                <p>Click the download button next to the forms that apply to your visit. Print and complete them at home, or fill them out digitally.</p>
              </div>
            </div>
            <div className="forms-step__divider">→</div>
            <div className="forms-step">
              <span className="forms-step__num">02</span>
              <div>
                <h3 className="forms-step__title">Fill Them Out</h3>
                <p>Complete all fields as thoroughly as possible. If you have questions about any section, don't hesitate to reach out before your visit.</p>
              </div>
            </div>
            <div className="forms-step__divider">→</div>
            <div className="forms-step">
              <span className="forms-step__num">03</span>
              <div>
                <h3 className="forms-step__title">Send to Us</h3>
                <p>Email completed forms to <a href="mailto:Pegasus.Therapy@outlook.com" className="forms-email-link">Pegasus.Therapy@outlook.com</a> before your first appointment, or bring them with you on the day of your visit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="forms-list section-pad">
        <div className="container">
          <div style={{ marginBottom: '48px' }}>
            <p className="label">Available Downloads</p>
            <div className="divider-red" />
            <h2 className="section-title">Patient Forms</h2>
            <p className="forms-list__note">Forms are available for download here. Please contact us with any other inquires and we'll get back to you promptly.</p>
          </div>
          <div className="forms-cards">
            {forms.map(({ id, title, desc, file, tag }) => (
              <div key={id} className="form-card">
                <div className="form-card__left">
                  <span className="form-card__tag">{tag}</span>
                  <div className="form-card__icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                    </svg>
                  </div>
                </div>
                <div className="form-card__body">
                  <h3 className="form-card__title">{title}</h3>
                  <p className="form-card__desc">{desc}</p>
                </div>
                <div className="form-card__action">
                  <a href={file} download className="btn-primary form-card__btn">
                    ↓ Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="forms-contact">
        <div className="container forms-contact__inner">
          <div className="forms-contact__icon">✉</div>
          <div>
            <h3 className="forms-contact__heading">Need Help With Forms?</h3>
            <p className="forms-contact__sub">
              If you have questions about which forms you need, or prefer to receive forms via email,
              contact Iris directly at <a href="mailto:Pegasus.Therapy@outlook.com">Pegasus.Therapy@outlook.com</a> or call <a href="tel:8177817157">(817) 781-7157</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
