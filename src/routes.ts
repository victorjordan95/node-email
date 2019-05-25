import { Router } from 'express'
import nodemailer from 'nodemailer'

const routes = Router()

routes.post('/send', function (req, res): void {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.email,
      pass: process.env.password
    }
  })

  const mailOptions = {
    from: `${req.body.email}`,
    to: `${req.body.recipient}`,
    subject: `${req.body.subject}`,
    text: `${req.body.text}`,
    replyTo: `noreply@sgo.com`
  }

  transporter.sendMail(mailOptions)
    .then(email => {
      console.log(email)
      res.status(200).send(email)
    })
    .catch(err => {
      console.log(err)
      res.status(500).send(err)
    })
})

export default routes
