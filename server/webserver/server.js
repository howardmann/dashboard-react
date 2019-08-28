let express = require('express')
let bodyParser = require('body-parser') // handle req.body
let cors = require('cors')
const PORT = process.env.PORT || 8080

let app = express()

// cors
app.use(cors())

// body parser
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json())

// Require routes
app.use(require('./routes'))

// Custom 404 route not found handler
app.use((req, res) => {
  res.status(404).send('404 not found')
})

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
})