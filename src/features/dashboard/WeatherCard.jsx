import { useState, useEffect, useCallback } from 'react'
import Card from '../../components/Card.jsx'
import { fetchJson } from '../../lib/api.js'
import useLocalStorage from '../../hooks/useLocalStorage.js'
import styles from './WeatherCard.module.css'

const WEATHER_URL =
  'https://api.open-meteo.com/v1/forecast?latitude=35.6762&longitude=139.6503&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&timezone=auto'

const WMO_CODES = {
  0: 'Clear sky',
  1: 'Mainly clear',
  2: 'Partly cloudy',
  3: 'Overcast',
  45: 'Foggy',
  48: 'Rime fog',
  51: 'Light drizzle',
  53: 'Moderate drizzle',
  55: 'Dense drizzle',
  61: 'Slight rain',
  63: 'Moderate rain',
  65: 'Heavy rain',
  71: 'Slight snow',
  73: 'Moderate snow',
  75: 'Heavy snow',
  80: 'Slight showers',
  81: 'Moderate showers',
  82: 'Violent showers',
  95: 'Thunderstorm',
}

function weatherIcon(code) {
  if (code === 0 || code === 1) return '☀️'
  if (code <= 3) return '⛅'
  if (code <= 48) return '🌫️'
  if (code <= 55) return '🌦️'
  if (code <= 65) return '🌧️'
  if (code <= 75) return '❄️'
  if (code <= 82) return '🌧️'
  return '⛈️'
}

function Skeleton() {
  return (
    <div className={styles.skeleton}>
      <div className={`${styles.skeletonLine} ${styles.skeletonLarge}`} />
      <div className={`${styles.skeletonLine} ${styles.skeletonMedium}`} />
      <div className={`${styles.skeletonLine} ${styles.skeletonSmall}`} />
    </div>
  )
}

function ErrorState({ message, onRetry }) {
  return (
    <div>
      <div className={styles.error}>{message}</div>
      <button className={styles.retryBtn} onClick={onRetry}>
        Retry
      </button>
    </div>
  )
}

export default function WeatherCard() {
  const [cached, setCached] = useLocalStorage('weather-cache', null)
  const [loading, setLoading] = useState(!cached)
  const [error, setError] = useState(null)
  const [data, setData] = useState(cached)

  const fetchWeather = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const json = await fetchJson(WEATHER_URL)
      const result = {
        temp: json.current.temperature_2m,
        humidity: json.current.relative_humidity_2m,
        wind: json.current.wind_speed_10m,
        code: json.current.weather_code,
        fetchedAt: Date.now(),
      }
      setData(result)
      setCached(result)
    } catch (err) {
      setError(err.message || 'Failed to fetch weather')
    } finally {
      setLoading(false)
    }
  }, [setCached])

  useEffect(() => {
    const stale = !cached || Date.now() - cached.fetchedAt > 10 * 60 * 1000
    if (stale) fetchWeather()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const icon = data ? weatherIcon(data.code) : '☁'

  return (
    <Card title="Weather — Tokyo" icon={icon}>
      {loading && !data && <Skeleton />}
      {error && !data && <ErrorState message={error} onRetry={fetchWeather} />}
      {data && (
        <>
          <div className={styles.temp}>
            {Math.round(data.temp)}
            <span className={styles.unit}>°C</span>
          </div>
          <div className={styles.condition}>
            {WMO_CODES[data.code] || 'Unknown'}
          </div>
          <div className={styles.details}>
            <div className={styles.detail}>
              <span className={styles.detailLabel}>Humidity</span>
              <span className={styles.detailValue}>{data.humidity}%</span>
            </div>
            <div className={styles.detail}>
              <span className={styles.detailLabel}>Wind</span>
              <span className={styles.detailValue}>{data.wind} km/h</span>
            </div>
          </div>
        </>
      )}
    </Card>
  )
}
