import express from 'express'
import { json } from 'body-parser'
import 'express-async-errors'
import { errorHandler, NotFoundError, currentUser } from '@httickets/common'
import cookieSession from 'cookie-session'
import { createTicketRouter } from './routes/new'
import { showTicketRouter } from './routes/show'
import { updateTicketRouter } from './routes/update'
import { indexTicketRouter } from './routes'

const app = express()
app.set('trust proxy', true)
app.use(json())
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test',
  })
)

app.use(currentUser)

app.use(createTicketRouter)
app.use(showTicketRouter)
app.use(indexTicketRouter)
app.use(updateTicketRouter)

app.all('*', async (req, res) => {
  throw new NotFoundError()
})

app.use(errorHandler)

export { app }
