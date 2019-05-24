import { Router } from 'express'
import nodemailer from 'nodemailer'

const routes = Router()

routes.post('/send', function (req, res): void {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'victor.jordan@gauge.com.br',
      pass: 'viku1995'
    }
  })
  const mailOptions = {
    from: `${req.body.email}`,
    to: `${req.body.recipient}`,
    subject: `${req.body.subject}`,
    text: `${req.body.text}`,
    replyTo: `victorjordan95@gmail.com`
  }
  transporter.sendMail(mailOptions, function (err, res): any {
    if (err) {
      console.error('there was an error: ', err)
      return res.status(400).send(err)
    }
    console.log(res)
  })
  return res.status(200).send(res)
})

export default routes
