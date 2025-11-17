# New Component Plan - Nodemailer Integration

## Component Overview
For my new back-end component, I have chosen *Nodemailer*.  
It will allow the API to send *email notifications* to users - for example, confirming when a participant joins an event.  
This feature adds real-world communication capability to the application and demonstrates integration with an external service.

## Why Nodemailer?
- It's simple to set up and works directly in Node.js.  
- It uses SMTP (e.g., Gmail) and doesn't require external hosting.  
- Great for sending transactional emails (welcome messages, confirmations, etc.).  
- Well-documented and widely used in production environments.

## Environment Variables
To keep credentials secure, these will be stored in a `.env` file.

```env
EMAIL_USER=youraddress@gmail.com
EMAIL_PASS=yourapppassword
