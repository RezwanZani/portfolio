import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body || {};
    const trimmedName = typeof name === 'string' ? name.trim() : '';
    const trimmedEmail = typeof email === 'string' ? email.trim() : '';
    const trimmedSubject = typeof subject === 'string' ? subject.trim() : '';
    const trimmedMessage = typeof message === 'string' ? message.trim() : '';

    if (!trimmedName || !trimmedEmail || !trimmedSubject || !trimmedMessage) {
      return res.status(400).json({ error: 'Name, email, subject, and message are required.' });
    }

    if (trimmedName.length > 100 || trimmedEmail.length > 254 || trimmedSubject.length > 120 || trimmedMessage.length > 5000) {
      return res.status(400).json({ error: 'Input exceeds allowed length.' });
    }

    const escapeHtml = (value) =>
      value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');

    const safeName = escapeHtml(trimmedName);
    const safeEmail = escapeHtml(trimmedEmail);
    const safeSubject = escapeHtml(trimmedSubject);
    const safeMessage = escapeHtml(trimmedMessage).replace(/\n/g, '<br />');

    try {
      const data = await resend.emails.send({
        from: `${safeName} by Contact Form <onboarding@resend.dev>`, // Update with your verified domain
        to: ['rezwan.aaub@gmail.com'],
        subject: `Contact Form: ${safeSubject}`,
        html: `
          <div style="font-family: Arial, Helvetica, sans-serif; color: #0f172a;">
            <h2 style="margin: 0 0 12px;">New Contact Form Message</h2>
            <p style="margin: 0 0 10px;"><strong>From:</strong> ${safeName}</p>
            <p style="margin: 0 0 10px;"><strong>Email:</strong> ${safeEmail}</p>
            <p style="margin: 0 0 10px;"><strong>Subject:</strong> ${safeSubject}</p>
            <div style="margin-top: 16px; padding: 12px 14px; border: 1px solid #e2e8f0; border-radius: 8px; background: #f8fafc;">
              <p style="margin: 0 0 8px; font-weight: 600;">Message</p>
              <p style="margin: 0; line-height: 1.5;">${safeMessage}</p>
            </div>
          </div>
        `,
      });

      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ error });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}