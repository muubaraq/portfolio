const nodemailer = require('nodemailer')
require('dotenv').config()

export default function sendMail (req, res) {
  
  const transporter = nodemailer.createTransport({
    
    service: "gmail",
    auth: {
      user: "mubaraqlogic@gmail.com",
      pass: process.env.password,
    },
  
  })
  const mailData = {
    from: "mubaraqlogic@gmail.com",
    to: "mubaraqlogic@gmail.com",
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email + " | Phone: " + req.body.phone,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p><p>Phone: ${req.body.phone}`
  }
  transporter.sendMail(mailData, function (err, info) {
    if(err) {
      console.log(err)
      res.status(200).json(err)
    } else {
      console.log(info)
      res.status(200).json(info)
    }
  })
}
