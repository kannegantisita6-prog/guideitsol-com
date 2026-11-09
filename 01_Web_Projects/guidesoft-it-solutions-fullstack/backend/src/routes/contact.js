const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const Contact = require('../models/Contact');
const { isDbConnected } = require('../config/database');

// Configure mail transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'mail.guideitsol.com',
    port: parseInt(process.env.EMAIL_PORT || '587', 10),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER || 'business@guideitsol.com',
      pass: process.env.EMAIL_PASS || ''
    },
    tls: {
      rejectUnauthorized: false
    }
  });
};

// In-memory fallback if MongoDB is not connected
const fallbackSubmissions = [];

// @desc    Submit contact / inquiry form
// @route   POST /api/contact
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Please provide name, email, and message'
      });
    }

    const contactData = {
      name,
      email,
      phone: phone || '',
      subject: subject || 'General Consultation Inquiry',
      message
    };

    let savedContact;
    if (isDbConnected()) {
      try {
        savedContact = await Contact.create(contactData);
      } catch (dbErr) {
        contactData.id = Date.now().toString();
        contactData.createdAt = new Date();
        fallbackSubmissions.push(contactData);
        savedContact = contactData;
      }
    } else {
      contactData.id = Date.now().toString();
      contactData.createdAt = new Date();
      fallbackSubmissions.push(contactData);
      savedContact = contactData;
    }

    // Try sending email notification asynchronously (skip during automated test runs)
    if (process.env.NODE_ENV !== 'test' && process.env.EMAIL_SKIP !== 'true') {
      try {
        const transporter = createTransporter();
        await transporter.sendMail({
          from: `"GuideSoft IT Solutions" <${process.env.EMAIL_USER || 'business@guideitsol.com'}>`,
          to: process.env.EMAIL_NOTIFICATION_RECEIVER || 'business@guideitsol.com',
          replyTo: email,
          subject: `New Inquiry from ${name}: ${subject || 'General Inquiry'}`,
          text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nSubject: ${subject || 'N/A'}\n\nMessage:\n${message}`,
          html: `
            <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
              <h2 style="color: #0284c7;">New Contact Inquiry - GuideSoft IT Solutions</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
              <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
              <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
              <p><strong>Message:</strong></p>
              <p style="background: #f8fafc; padding: 15px; border-radius: 6px; border: 1px solid #cbd5e1;">${message.replace(/\n/g, '<br/>')}</p>
            </div>
          `
        });
      } catch (mailErr) {
        console.warn('Email delivery notice (logged for review):', mailErr.message);
      }
    }

    return res.status(201).json({
      success: true,
      message: 'Thank you for reaching out! Your message has been received, and our team will get back to you within 24 hours.',
      data: savedContact
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'An error occurred while processing your request. Please try again later.'
    });
  }
});

// @desc    Get all inquiries (Admin route)
// @route   GET /api/contact
// @access  Public / Admin
router.get('/', async (req, res) => {
  try {
    let contacts;
    if (isDbConnected()) {
      try {
        contacts = await Contact.find().sort({ createdAt: -1 });
      } catch (e) {
        contacts = fallbackSubmissions;
      }
    } else {
      contacts = fallbackSubmissions;
    }

    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message
    });
  }
});

module.exports = router;
