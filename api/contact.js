const requestCounts = new Map()
const RATE_LIMIT_WINDOW_MS = 60 * 1000
const RATE_LIMIT_MAX_REQUESTS = 5
const MAX_BODY_BYTES = 10 * 1024

const setSecurityHeaders = (response) => {
  response.setHeader('Cache-Control', 'no-store')
  response.setHeader('X-Content-Type-Options', 'nosniff')
  response.setHeader('Referrer-Policy', 'no-referrer')
}

const getClientKey = (request) => {
  const forwardedFor = request.headers['x-forwarded-for']
  return (forwardedFor ? forwardedFor.split(',')[0] : request.socket?.remoteAddress) || 'unknown'
}

const isAllowedOrigin = (request) => {
  const origin = request.headers.origin
  if (!origin) return false

  return process.env.ALLOWED_ORIGIN === origin
}

const parseRequestBody = (request) => {
  if (typeof request.body === 'object' && request.body !== null && !Array.isArray(request.body)) {
    return request.body
  }

  if (typeof request.body !== 'string' || Buffer.byteLength(request.body) > MAX_BODY_BYTES) {
    return null
  }

  try {
    const parsedBody = JSON.parse(request.body)
    return parsedBody && typeof parsedBody === 'object' && !Array.isArray(parsedBody) ? parsedBody : null
  } catch (error) {
    return null
  }
}

export default async function handler(request, response) {
  setSecurityHeaders(response)

  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST')
    return response.status(405).json({ error: 'Method not allowed' })
  }

  if (!isAllowedOrigin(request)) {
    return response.status(403).json({ error: 'Origin not allowed' })
  }

  const contentLength = Number(request.headers['content-length'] || 0)
  if (contentLength > MAX_BODY_BYTES || !request.headers['content-type']?.includes('application/json')) {
    return response.status(415).json({ error: 'Unsupported request' })
  }

  const now = Date.now()
  const clientKey = getClientKey(request)
  const previousRequest = requestCounts.get(clientKey)
  if (!previousRequest || now - previousRequest.startedAt >= RATE_LIMIT_WINDOW_MS) {
    requestCounts.set(clientKey, { startedAt: now, count: 1 })
  } else if (previousRequest.count >= RATE_LIMIT_MAX_REQUESTS) {
    response.setHeader('Retry-After', '60')
    return response.status(429).json({ error: 'Too many requests' })
  } else {
    previousRequest.count += 1
  }

  const requestBody = parseRequestBody(request)
  const { name, email, message, privacyConsent, website } = requestBody || {}
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (
    website ||
    privacyConsent !== 'accepted' ||
    typeof name !== 'string' || name.trim().length < 2 || name.length > 100 ||
    typeof email !== 'string' || !emailPattern.test(email) || email.length > 254 ||
    typeof message !== 'string' || message.trim().length < 5 || message.length > 3000
  ) {
    return response.status(400).json({ error: 'Invalid form data' })
  }

  const formEndpoint = process.env.FORM_ENDPOINT

  if (!formEndpoint) {
    return response.status(500).json({ error: 'Form endpoint is not configured' })
  }

  try {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 8000)

    let formResponse
    try {
      formResponse = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), message: message.trim() }),
        signal: controller.signal,
      })
    } finally {
      clearTimeout(timeout)
    }

    if (!formResponse.ok) {
      return response.status(502).json({ error: 'Unable to submit form' })
    }

    return response.status(200).json({ ok: true })
  } catch (error) {
    return response.status(502).json({ error: 'Unable to reach form provider' })
  }
}