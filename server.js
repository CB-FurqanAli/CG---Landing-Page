// server.js
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
// Passenger provides PORT for you. Fall back to 3000 locally.
const port = parseInt(process.env.PORT, 10) || 3000
const host = '0.0.0.0'

const app = next({ dev }) // <-- don't pass hostname/port here
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true)
      await handle(req, res, parsedUrl) // handle all routes
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  }).listen(port, host, () => {
    console.log(
      `> Ready on https://${host}:${port} (NODE_ENV=${process.env.NODE_ENV})`,
    )
  })
})
