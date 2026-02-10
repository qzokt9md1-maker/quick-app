import styles from './App.module.css'
import Dashboard from '../features/dashboard/Dashboard.jsx'
import useTheme from '../hooks/useTheme.js'

const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: '⊞' },
  { id: 'tasks', label: 'Tasks', icon: '☑' },
  { id: 'weather', label: 'Weather', icon: '☁' },
  { id: 'settings', label: 'Settings', icon: '☰' },
]

function App() {
  const { theme, toggle } = useTheme()

  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarBrand}>Quick App</div>
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            className={`${styles.navItem} ${
              item.id === 'dashboard' ? styles.navItemActive : ''
            }`}
          >
            <span aria-hidden="true">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </aside>

      <header className={styles.header}>
        <h1 className={styles.headerTitle}>Dashboard</h1>
        <div className={styles.headerRight}>
          <span className={styles.headerMeta}>Welcome back</span>
          <button
            className={styles.themeToggle}
            onClick={toggle}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.mainGrid}>
          <Dashboard />
        </div>
      </main>
    </div>
  )
}

export default App
