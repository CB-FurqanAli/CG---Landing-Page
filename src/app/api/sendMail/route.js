import nodemailer from 'nodemailer'

export async function POST(req) {
  try {
    const body = await req.json()

    // Gmail SMTP transporter (App Password use karna hoga)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER, // apna Gmail ID
        pass: process.env.MAIL_PASS, // Gmail App Password
      },
    })

    await transporter.sendMail({
      from: `"CallGauge Demo Form" <${process.env.MAIL_USER}>`,
      to: 'furqan.ali@callgauge.ai', // <-- yahan aapka email
      subject: 'New Demo Request from CallGauge Website',
      html: `
        <h2>New Demo Request</h2>
        <p><b>Name:</b> ${body.firstName} ${body.lastName}</p>
        <p><b>Email:</b> ${body.email}</p>
        <p><b>Company:</b> ${body.company}</p>
        <p><b>Phone:</b> ${body.phone}</p>
        <p><b>Use Case:</b> ${body.useCase}</p>
        <p><b>Team Size:</b> ${body.teamSize}</p>
      `,
    })

    return new Response(JSON.stringify({ success: true }), { status: 200 })
  } catch (error) {
    console.error('Email error:', error)
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 },
    )
  }
}
