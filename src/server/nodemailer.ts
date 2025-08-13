import nodemailer from 'nodemailer'
import { config } from 'dotenv'

config()

const email = process.env.SMTP_USER
const pass = process.env.SMTP_PASS

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: email,
    pass: pass
  }
})

export const mailOptions = {
  to: email,
}