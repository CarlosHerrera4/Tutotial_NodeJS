'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3002

app.use(bodyParser.urlencoded({
	extended: false
}))
app.use(bodyParser.json())

app.get('/hola', (req, res) => {
	res.send(200, {products: []})
})

app.listen(3002, () => {
	console.log(`API REST corriendo en http://localhost:${port}`)
})
