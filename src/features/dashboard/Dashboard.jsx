import Card from '../../components/Card.jsx'
import useClock from '../../hooks/useClock.js'
import WeatherCard from './WeatherCard.jsx'
import TaskList from './TaskList.jsx'
import styles from './Dashboard.module.css'

function getGreeting(hour) {
  if (hour < 6) return { text: 'Good night', emoji: '🌙', message: 'Burning the midnight oil? Remember to rest.' }
  if (hour < 12) return { text: 'Good morning', emoji: '☀️', message: 'A fresh start. Make it count.' }
  if (hour < 17) return { text: 'Good afternoon', emoji: '🌤', message: 'Stay focused, you\'re doing great.' }
  if (hour < 21) return { text: 'Good evening', emoji: '🌇', message: 'Wind down and reflect on the day.' }
  return { text: 'Good night', emoji: '🌙', message: 'Time to recharge for tomorrow.' }
}

function ClockCard() {
  const now = useClock()

  const hours = String(now.getHours()).padStart(2, '0')
  const minutes = String(now.getMinutes()).padStart(2, '0')
  const seconds = String(now.getSeconds()).padStart(2, '0')

  const dateStr = now.toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <Card title="Clock" icon="⏱">
      <div className={styles.time}>
        {hours}:{minutes}
        <span className={styles.seconds}>:{seconds}</span>
      </div>
      <div className={styles.date}>{dateStr}</div>
    </Card>
  )
}

function GreetingCard() {
  const now = useClock()
  const { text, emoji, message } = getGreeting(now.getHours())

  return (
    <Card title="Greeting" icon={emoji}>
      <div className={styles.greeting}>{text}</div>
      <div className={styles.greetingSub}>{message}</div>
    </Card>
  )
}

export default function Dashboard() {
  return (
    <>
      <ClockCard />
      <WeatherCard />
      <TaskList />
      <GreetingCard />
    </>
  )
}
