export class ApiError extends Error {
  constructor(message, status) {
    super(message)
    this.name = 'ApiError'
    this.status = status
  }
}

export async function fetchJson(url, options) {
  const res = await fetch(url, options)
  if (!res.ok) {
    throw new ApiError(`${res.status} ${res.statusText}`, res.status)
  }
  return res.json()
}
