# Contact Form Setup Instructions

Your contact form is ready! Just need to set up the email delivery service (Web3Forms - it's free!).

## 🚀 Quick Setup (5 minutes)

### Step 1: Get Your Free Web3Forms Access Key

1. Go to **https://web3forms.com**
2. Enter your email: **charlotte@fallonholdings.com**
3. Click **"Create Access Key"** (or "Get Started")
4. Check your email inbox for the access key
5. Copy the access key (it looks like: `a1b2c3d4-1234-5678-9abc-def012345678`)

### Step 2: Add the Access Key to Your Project

1. Open the file: **`.env.local`** (in the root of `fallon-ai-website` folder)
2. Replace `your_access_key_here` with your actual access key:
   ```
   VITE_WEB3FORMS_ACCESS_KEY=a1b2c3d4-1234-5678-9abc-def012345678
   ```
3. Save the file

### Step 3: Restart Your Dev Server

If your dev server is running, restart it:
```bash
# Stop the server (Ctrl+C)
# Then start it again:
npm run dev
```

### Step 4: Test the Contact Form

1. Visit your website (localhost or live site)
2. Click an **"Enquire"** button on the "Strategy Deep Dive" or "Full Custom Build" cards
3. Fill out the contact form
4. Click **"Send Message"**
5. Check your email at charlotte@fallonholdings.com - you should receive the message!

---

## 📧 What Happens When Someone Submits the Form?

1. User fills in: Name, Email, Message
2. Form sends data to Web3Forms
3. Web3Forms emails the message to: **charlotte@fallonholdings.com**
4. You receive an email with:
   - Subject: "New enquiry from [Name] - Fallon AI Website"
   - Their name, email, and message
   - You can reply directly to their email

---

## 🎨 What Changed on Your Website?

### New Contact Modal
- Pop-up form similar to your booking modal
- Fields: Name, Email, Message
- Beautiful gradient header (teal → lavender → coral)
- Success/error states
- Auto-closes after successful submission

### Updated Buttons
- **"Enquire"** buttons (on Strategy Deep Dive + Full Custom Build) now open the contact form
- **"Book Free Call"** still opens your Cal.com booking
- **"Join Waitlist"** still links to your Google Form

---

## 🔒 Security & Privacy

- ✅ Your access key is stored in `.env.local` (never committed to git)
- ✅ Web3Forms is GDPR compliant
- ✅ No user data stored on their servers
- ✅ They just forward emails to you
- ✅ Free tier includes 250 submissions/month (plenty for your needs!)

---

## 🚀 Deployment (Vercel)

When you push to GitHub, you'll need to add the environment variable to Vercel:

1. Go to your Vercel dashboard
2. Select your **fallon-ai-website** project
3. Go to **Settings** → **Environment Variables**
4. Add a new variable:
   - **Name:** `VITE_WEB3FORMS_ACCESS_KEY`
   - **Value:** (paste your access key)
   - **Environment:** Production (and Preview if you want)
5. Click **Save**
6. Redeploy your site (or push a new commit)

---

## 🎯 Files Changed

- ✅ **New:** `src/components/ContactModal.tsx` - The contact form modal
- ✅ **Updated:** `src/components/Services.tsx` - Added contact modal integration
- ✅ **New:** `.env.local` - Your environment variables (gitignored)
- ✅ **New:** `CONTACT-FORM-SETUP.md` - These instructions

---

## 💡 Tips

**Form submission notifications:**
- Messages come from: `noreply@web3forms.com`
- You can reply directly to the sender's email
- Consider setting up a filter/label in Gmail for "Fallon AI Website" subject

**Customization:**
- Form design matches your brand (teal, coral, lavender gradients)
- Success message shows for 2 seconds then closes
- Error fallback shows your direct email

**Testing:**
- Test the form yourself first before announcing it!
- Make sure emails aren't going to spam
- Try from mobile and desktop

---

## ❓ Troubleshooting

**Form shows error after submission:**
- Check that your access key is correct in `.env.local`
- Make sure you restarted the dev server after adding the key
- Verify the key is active at web3forms.com

**Emails not arriving:**
- Check your spam folder
- Verify the email address in Web3Forms dashboard
- Make sure you have monthly quota remaining (free tier = 250/month)

**Need help?**
- Web3Forms docs: https://docs.web3forms.com
- Their support is super responsive!

---

🎉 **You're all set!** Once you add the access key and restart your dev server, the contact form will work perfectly!
