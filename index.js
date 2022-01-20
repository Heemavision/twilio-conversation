const twilio = require("twilio");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const apiKey = process.env.TWILIO_API_KEY_SID;
const apiKeySecret = process.env.TWILIO_API_KEY_SECRET;
const twilioClient = twilio(apiKey, apiKeySecret, { accountSid: accountSid });
const app = express();
