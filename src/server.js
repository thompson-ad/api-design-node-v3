import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()
const router = express.Router() // when it comes to routing, the router and the app are basically the same thing like router.get() etc but it won't actuall y do anything yet as you need to register it on the root router which is app

app.disable('x-powered-by')

app.use(cors()) // cross origin resource sharing - allows API to be used by other domains
app.use(json()) // allows us to use things like req.body
app.use(urlencoded({ extended: true })) // allows us to attach parameters to url
app.use(morgan('dev')) // does all the logging for us

// app.use('/api', router) - for any route that comes in on /api use the router created above

// create a route that accepts JSON
// use the app object that is created by express
// a route based on a get request
// responds at the root of our sever '/'

// app.get('/', (req, res) => {
//   res.send({ message: 'hello' })
// })

// app.post('/', (req, res) => {
//   console.log(req.body)
//   res.send({ message: 'hello' })
// })

// middleware is the exact same syntax as the controllers - functions that take a req ans a res
// next moves on to the next middleware
// can just be put into the get request after the route definition
// then it will run the middleware before the controller
// if you wanted it to run for the entire sever you could use app.us(log)
// could you multiple middleware after the route [log, log, log] and they will run in sequence

const log = (req, res, next) => {
  console.log('logging')
  next()
}

// make a get request to /data this time

app.get('/data', log, (req, res) => {
  res.send({ data: [1, 2, 3] })
})

app.post('/data', (req, res) => {
  console.log(req.body)
  res.send({ ok: true }) // the body that is being sent on the post request is attached to the body property on the request
})

export const start = () => {
  app.listen(3000, () => {
    console.log('server is on 3000')
  })
}
