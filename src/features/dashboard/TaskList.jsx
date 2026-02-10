import { useReducer, useState, useRef, useEffect } from 'react'
import Card from '../../components/Card.jsx'
import useLocalStorage from '../../hooks/useLocalStorage.js'
import styles from './TaskList.module.css'

function taskReducer(state, action) {
  switch (action.type) {
    case 'add':
      return [
        ...state,
        { id: Date.now(), text: action.text, done: false },
      ]
    case 'toggle':
      return state.map((t) =>
        t.id === action.id ? { ...t, done: !t.done } : t,
      )
    case 'delete':
      return state.filter((t) => t.id !== action.id)
    case 'clear_done':
      return state.filter((t) => !t.done)
    default:
      return state
  }
}

export default function TaskList() {
  const [persisted, setPersisted] = useLocalStorage('tasks', [])
  const [tasks, dispatch] = useReducer(taskReducer, persisted)
  const [input, setInput] = useState('')
  const [lastAdded, setLastAdded] = useState(null)
  const inputRef = useRef(null)

  // Sync to localStorage on every change
  useEffect(() => {
    setPersisted(tasks)
  }, [tasks, setPersisted])

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = input.trim()
    if (!text) return
    dispatch({ type: 'add', text })
    setLastAdded(Date.now())
    setInput('')
    inputRef.current?.focus()
  }

  const remaining = tasks.filter((t) => !t.done).length
  const doneCount = tasks.length - remaining

  return (
    <Card title="Tasks" icon="☑">
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          className={styles.input}
          type="text"
          placeholder="Add a task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          aria-label="New task"
        />
        <button
          className={styles.addBtn}
          type="submit"
          disabled={!input.trim()}
        >
          Add
        </button>
      </form>

      {tasks.length === 0 ? (
        <div className={styles.empty}>No tasks yet. Add one above.</div>
      ) : (
        <ul className={styles.list} role="list">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`${styles.item} ${
                task.id === lastAdded ? styles.itemEnter : ''
              }`}
            >
              <input
                type="checkbox"
                className={styles.checkbox}
                checked={task.done}
                onChange={() => dispatch({ type: 'toggle', id: task.id })}
                aria-label={`Mark "${task.text}" as ${task.done ? 'not done' : 'done'}`}
              />
              <span
                className={`${styles.label} ${
                  task.done ? styles.labelDone : ''
                }`}
              >
                {task.text}
              </span>
              <button
                className={styles.deleteBtn}
                onClick={() => dispatch({ type: 'delete', id: task.id })}
                aria-label={`Delete "${task.text}"`}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}

      {tasks.length > 0 && (
        <div className={styles.footer}>
          <span>{remaining} remaining</span>
          {doneCount > 0 && (
            <button
              className={styles.clearBtn}
              onClick={() => dispatch({ type: 'clear_done' })}
            >
              Clear completed ({doneCount})
            </button>
          )}
        </div>
      )}
    </Card>
  )
}
