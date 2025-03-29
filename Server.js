const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');

const app = express();
const PORT = process.env.PORT || 5000;

sgMail.setApiKey('HIDDEN');

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to the SendGrid Email API');
});

app.post('/send', (req, res) => {
  const { name, company, email, message } = req.body;

  const msg = {
    to: 'scottmtinez@gmail.com', 
    from: 'sad@sadco.io', 
    subject: `SAD Co. Website | Contact Form Submission from ${name}`,
    text: `
      Name: ${name}\n
      Company: ${company || 'N/A'}\n
      Email: ${email}\n
      Message: ${message}
    `,
    html: `<p><strong>Name:</strong> ${name}</p>
           <p><strong>Company:</strong> ${company || 'N/A'}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Message:</strong><br/>${message}</p>`
  };

  sgMail.send(msg)
    .then(() => {
      res.status(200).json({ success: true, message: 'Email sent successfully!' });
    })
    .catch((error) => {
      console.error('Error sending email:', error.response.body);
      res.status(500).json({ success: false, message: 'Failed to send the message. Please try again later.' });
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
