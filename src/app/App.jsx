import styles from './App.module.css'
import Dashboard from '../features/dashboard/Dashboard.jsx'

const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: 'grid' },
  { id: 'tasks', label: 'Tasks', icon: 'check-square' },
  { id: 'weather', label: 'Weather', icon: 'cloud' },
  { id: 'settings', label: 'Settings', icon: 'sliders' },
]

const ICON_MAP = {
  grid: '⊞',
  'check-square': '☑',
  cloud: '☁',
  sliders: '☰',
}

function App() {
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
            <span aria-hidden="true">{ICON_MAP[item.icon]}</span>
            {item.label}
          </button>
        ))}
      </aside>

      <header className={styles.header}>
        <h1 className={styles.headerTitle}>Dashboard</h1>
        <span className={styles.headerMeta}>Welcome back</span>
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
