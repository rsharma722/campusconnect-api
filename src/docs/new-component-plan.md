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

## 3. How This Component Works in My Project
When a user joins an event, the API will:

1. Validate and save the participant entry.
2. Fetch event details (title, date, category).
3. Trigger the mailer utility to send an email.

### Endpoint using Nodemailer:
POST /participants/:eventId/join

### Example email content:
- Subject: *“You joined an event!”*
- Body includes:
    - Event title
    - Event date
    - Confirmation message

This makes the feature more user-friendly and realistic.

## 4. Environment Variables
Stored safely inside `.env`:

```env
EMAIL_USER=mygmail@gmail.com
EMAIL_PASS=my_app_password

For Gmail, an App Password is required


5. ###Code Structure for Nodemailer
src/utils/mailer.ts - responsible for sending emails.

src/services/participants.service.ts - calls sendJoinEmail() after a participant joins.

Keeps concerns separated:
Services handle logic
Mailer handles SMTP sending

6. Testing Plan
Manual Testing (Postman)
Create an event.

Send:

POST /participants/<eventId>/join

Future Automated Testing
Use Jest to mock Nodemailer, preventing real emails from being sent during tests.

7. Summary
Adding Nodemailer brings real-world functionality to the API by allowing email confirmations when a user joins an event.
