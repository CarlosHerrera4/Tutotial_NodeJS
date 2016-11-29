'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3001

app.use(bodyParser.urlencoded({
	extended: false
}))
app.use(bodyParser.json())

app.get('/api/product', (req, res) => {
	res.send(200, {products: []})
})

app.listen(3001, () => {
	console.log(`API REST corriendo en http://localhost:${port}`)
} )