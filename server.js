// Lightweight Next.js server without Express
const { createServer } = require('http')
const next = require('next')

const dev = false // production
const app = next({ dev })
const handle = app.getRequestHandler()

const PORT = process.env.PORT || 3000

app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res)
  }).listen(PORT, (err) => {
    if (err) throw err
    console.log(`> Ready on port ${PORT}`)
  })
})
