import useTheme from '../../hooks/useTheme.js'
import styles from './LandingPage.module.css'

const SIGNUP_URL = 'https://forms.gle/rAJw4sTQDX3MiWo27'
const WAITLIST_COUNT = 248

const PROBLEMS = [
  {
    icon: '📚',
    title: '教材がバラバラ',
    desc: '教科書、問題集、講義ノート——全部バラバラで、統一された計画がない。',
  },
  {
    icon: '😰',
    title: '試験への不安',
    desc: 'どこまで終わって何が残っているか見えず、常にストレスを抱えてしまう。',
  },
  {
    icon: '🔄',
    title: '無駄な復習',
    desc: '間隔反復がないと、覚えていることを繰り返し、忘れたことを放置してしまう。',
  },
]

const STEPS = [
  {
    title: 'シラバスを取り込む',
    desc: '試験範囲やカリキュラムを貼り付けるだけ。StudyPilotが自動でトピックに分解します。',
  },
  {
    title: '学習計画を受け取る',
    desc: '試験日・得意分野・苦手分野をもとに、適応型のスケジュールが自動生成されます。',
  },
  {
    title: '進捗を記録＆調整',
    desc: 'トピックの完了や演習スコアを記録すると、計画がリアルタイムで最適化されます。',
  },
]

const FEATURES = [
  { icon: '🗓', title: '適応型スケジュール', desc: '遅れても進みすぎても、計画が自動で調整されます。' },
  { icon: '🧠', title: '間隔反復', desc: '最適なタイミングで復習を促し、重要トピックを長期記憶に定着させます。' },
  { icon: '📊', title: '進捗ダッシュボード', desc: 'カバー率・苦手分野・合格予測をひと目で確認できます。' },
  { icon: '🤝', title: 'スタディグループ', desc: '仲間と計画を共有して、お互いの学習をサポートできます。' },
  { icon: '🎯', title: '問題集との連携', desc: '問題集を紐づけて、どのトピックを演習済みか自動で追跡します。' },
  { icon: '📱', title: 'モバイル対応', desc: 'どこからでも計画の確認や進捗の記録ができます。' },
]

const FAQS = [
  {
    q: '大学ごとにカリキュラムが違うけど使える？',
    a: '使えます。大学ではなく「試験」を登録して逆算する設計なので、試験回数が多い大学でも、範囲が広く回数が少ない大学でも対応できます。',
  },
  {
    q: '過去問ゲーでも意味ある？',
    a: '意味あります。過去問中心の勉強を前提に、いつ何をやるかを逆算して「直前に詰め込めない」を防ぎます。',
  },
  {
    q: '予定が多くて毎日同じ時間勉強できない',
    a: '大丈夫です。カレンダー/予定から勉強可能時間を見積もり、遅れが出たら自動で計画を組み直します。',
  },
  {
    q: 'β版は無料？いつまで？',
    a: 'β版は無料です。正式版は月980円を予定しています（先行ユーザーは優遇予定）。',
  },
  {
    q: '個人情報やPDF資料は安全？',
    a: 'β版はまず予定・試験情報中心で、必要最小限のデータのみ扱います。資料アップロード機能は後日、削除可能・最小権限で実装します。',
  },
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
      <div className={styles.heroWrapper}>
        <section className={styles.hero}>
          <span className={styles.badge}>β版 — 先行ユーザーは無料</span>
          <h1 className={styles.heroTitle}>
            医学生のための{' '}
            <span className={styles.heroTitleHighlight}>試験対策OS</span>
          </h1>
          <p className={styles.heroSub}>
            StudyPilotはシラバスから適応型の学習計画を自動作成。
            すべてのトピックをカバーし、最適なタイミングで復習し、
            自信を持って試験に臨めます。
          </p>
          <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer" className={styles.cta}>
            β版に登録する
            <span className={styles.ctaArrow}>→</span>
          </a>
          <p className={styles.waitlist}>
            <span className={styles.waitlistDot} />
            <strong>{WAITLIST_COUNT.toLocaleString()}+</strong> 人がウェイトリストに登録済み
          </p>
        </section>
      </div>

      {/* Problem */}
      <section className={styles.section}>
        <p className={styles.sectionLabel}>課題</p>
        <h2 className={styles.sectionTitle}>試験勉強が「勘頼み」になっていませんか？</h2>
        <p className={styles.sectionDesc}>
          多くの医学生がスプレッドシートや感覚で学習計画を立てています。
          それでは科目が増えるほど破綻します。
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
        <p className={styles.sectionLabel}>使い方</p>
        <h2 className={styles.sectionTitle}>3ステップでスマートな学習計画を</h2>
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
        <p className={styles.sectionLabel}>機能</p>
        <h2 className={styles.sectionTitle}>必要なものだけ、過不足なく</h2>
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

      {/* FAQ */}
      <section className={styles.section}>
        <p className={styles.sectionLabel}>FAQ</p>
        <h2 className={styles.sectionTitle}>よくある質問</h2>
        <div className={styles.faqList}>
          {FAQS.map((faq) => (
            <details key={faq.q} className={styles.faqItem}>
              <summary className={styles.faqQuestion}>{faq.q}</summary>
              <p className={styles.faqAnswer}>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaSectionTitle}>もっと賢く勉強しませんか？</h2>
        <p className={styles.ctaSectionDesc}>
          β版に登録して、いち早くアクセスを手に入れましょう。
          先行ユーザーは無料でご利用いただけます。
        </p>
        <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer" className={styles.cta}>
          無料で登録する
          <span className={styles.ctaArrow}>→</span>
        </a>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} StudyPilot — 医学生による、医学生のためのサービス
      </footer>
    </div>
  )
}
