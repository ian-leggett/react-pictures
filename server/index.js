require('dotenv').config()
const express = require('express')
const path = require('path')
const axios = require('axios')

const app = express()

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')))

app.get('/api/:term', async (req, res, next) => {
  const { term } = req.params
  const results = await axios.get('https://api.unsplash.com/search/photos', {
    params: { query: term },
    headers: {
      Authorization: process.env.CLIENT_KEY
    }
  })
  res.send(results.data)
})

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

const port = process.env.PORT || 5000
app.listen(port)

console.log('App is listening on port ' + port)