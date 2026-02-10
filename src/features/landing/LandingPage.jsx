import useTheme from '../../hooks/useTheme.js'
import styles from './LandingPage.module.css'

const SIGNUP_URL = 'https://forms.gle/PLACEHOLDER'

const PROBLEMS = [
  {
    icon: '📚',
    title: 'Scattered resources',
    desc: 'Textbooks, question banks, lecture notes — all in different places with no unified plan.',
  },
  {
    icon: '😰',
    title: 'Exam anxiety',
    desc: 'No clear picture of what you\'ve covered vs. what\'s left leads to constant stress.',
  },
  {
    icon: '🔄',
    title: 'Wasted review cycles',
    desc: 'Without spaced repetition, you re-study what you already know and forget what you don\'t.',
  },
]

const STEPS = [
  {
    title: 'Import your syllabus',
    desc: 'Paste your exam syllabus or curriculum. StudyPilot breaks it into topics automatically.',
  },
  {
    title: 'Get your study plan',
    desc: 'An adaptive schedule is generated based on your exam date, strengths, and weak spots.',
  },
  {
    title: 'Track & adapt',
    desc: 'Mark topics as done, log practice scores, and watch your plan adjust in real time.',
  },
]

const FEATURES = [
  { icon: '🗓', title: 'Adaptive scheduling', desc: 'Plans shift automatically when you fall behind or get ahead.' },
  { icon: '🧠', title: 'Spaced repetition', desc: 'Built-in review prompts so high-yield topics stick long-term.' },
  { icon: '📊', title: 'Progress dashboard', desc: 'See coverage, weak areas, and predicted readiness at a glance.' },
  { icon: '🤝', title: 'Study groups', desc: 'Share plans with classmates and keep each other accountable.' },
  { icon: '🎯', title: 'Question bank sync', desc: 'Link your QBank and auto-track which topics you\'ve practiced.' },
  { icon: '📱', title: 'Mobile-first', desc: 'Review your plan and log progress from anywhere.' },
]

export default function LandingPage() {
  const { theme, toggle } = useTheme()

  return (
    <div className={styles.page}>
      {/* Nav */}
      <nav className={styles.nav}>
        <div className={styles.logo}>
          Study<span className={styles.logoAccent}>Pilot</span>
        </div>
        <button
          className={styles.themeToggle}
          onClick={toggle}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 36,
            height: 36,
            fontSize: '1.125rem',
            background: 'var(--color-accent-soft)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-sm)',
            cursor: 'pointer',
          }}
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </nav>

      {/* Hero */}
      <section className={styles.hero}>
        <span className={styles.badge}>Beta — Free for early users</span>
        <h1 className={styles.heroTitle}>
          The exam planning OS for medical students
        </h1>
        <p className={styles.heroSub}>
          StudyPilot turns your syllabus into an adaptive study plan so you
          cover every topic, review at the right time, and walk into exams
          confident.
        </p>
        <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer" className={styles.cta}>
          Join the beta
          <span className={styles.ctaArrow}>→</span>
        </a>
      </section>

      {/* Problem */}
      <section className={styles.section}>
        <p className={styles.sectionLabel}>The problem</p>
        <h2 className={styles.sectionTitle}>Studying for boards shouldn't feel like guesswork</h2>
        <p className={styles.sectionDesc}>
          Most medical students rely on spreadsheets or gut feeling to plan
          their studying. It doesn't scale.
        </p>
        <div className={styles.problemGrid}>
          {PROBLEMS.map((p) => (
            <div key={p.title} className={styles.problemCard}>
              <div className={styles.problemIcon}>{p.icon}</div>
              <div className={styles.problemCardTitle}>{p.title}</div>
              <div className={styles.problemCardDesc}>{p.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className={styles.section}>
        <p className={styles.sectionLabel}>How it works</p>
        <h2 className={styles.sectionTitle}>Three steps to a smarter study plan</h2>
        <div className={styles.steps}>
          {STEPS.map((s, i) => (
            <div key={s.title} className={styles.step}>
              <div className={styles.stepNumber}>{i + 1}</div>
              <div className={styles.stepTitle}>{s.title}</div>
              <div className={styles.stepDesc}>{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className={styles.section}>
        <p className={styles.sectionLabel}>Features</p>
        <h2 className={styles.sectionTitle}>Everything you need, nothing you don't</h2>
        <div className={styles.features}>
          {FEATURES.map((f) => (
            <div key={f.title} className={styles.feature}>
              <div className={styles.featureIcon}>{f.icon}</div>
              <div>
                <div className={styles.featureTitle}>{f.title}</div>
                <div className={styles.featureDesc}>{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaSectionTitle}>Ready to study smarter?</h2>
        <p className={styles.ctaSectionDesc}>
          Sign up for the beta and be the first to get access. It's free while
          we're in early access.
        </p>
        <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer" className={styles.cta}>
          Sign up for free
          <span className={styles.ctaArrow}>→</span>
        </a>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} StudyPilot. Built for medical students, by medical students.
      </footer>
    </div>
  )
}
