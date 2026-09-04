export default async function handler(request, response) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' })
  }

  const formEndpoint = process.env.FORM_ENDPOINT

  if (!formEndpoint) {
    return response.status(500).json({ error: 'Form endpoint is not configured' })
  }

  try {
    // Get the request body - it might already be parsed or might need parsing
    let requestBody
    try {
      // If request.body is already an object (parsed JSON), use it directly
      if (typeof request.body === 'object' && request.body !== null) {
        requestBody = request.body
      } else {
        // If it's a string, try to parse it as JSON
        requestBody = JSON.parse(request.body)
      }
    } catch (parseError) {
      // If JSON parsing fails, treat as URL-encoded form data
      requestBody = request.body
    }

    const formResponse = await fetch(formEndpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })

    const responseBody = await formResponse.text()
    const contentType = formResponse.headers.get('content-type')

    if (contentType) {
      response.setHeader('Content-Type', contentType)
    }

    return response.status(formResponse.status).send(responseBody)
  } catch (error) {
    return response.status(502).json({ error: 'Unable to reach form provider' })
  }
}