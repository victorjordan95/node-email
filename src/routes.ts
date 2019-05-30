import { Router } from 'express'
import nodemailer from 'nodemailer'
import emailTemplates from './email-templates/emailTemplates'

const routes = Router()

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.email || 'sistema.sgo.ccb@gmail.com',
    pass: process.env.password || 'retratofalado'
  }
})

routes.post('/api/send', (req, res): void => {
  const mailOptions = {
    from: process.env.email,
    to: `${req.body.recipient}`,
    subject: `${req.body.subject}`,
    text: `${req.body.text}`,
    replyTo: process.env.email
  }

  transporter.sendMail(mailOptions)
    .then((email): void => {
      console.log(email)
      res.status(200).send(email)
    })
    .catch((err): void => {
      console.log(err)
      res.status(500).send(err)
    })
})
routes.post('/api/send-email-order', (req, res): void => {
  const mailOptions = {
    from: process.env.email,
    to: `${req.body.recipient}`,
    subject: `${req.body.subject}`,
    html: emailTemplates.CREATE_OS,
    replyTo: process.env.email
  }

  transporter.sendMail(mailOptions)
    .then((email): void => {
      console.log(email)
      res.status(200).send(email)
    })
    .catch((err): void => {
      console.log(err)
      res.status(500).send(err)
    })
})

export default routes
