# HealSync

**HealSync** is a modern, full-stack doctor–patient platform built with the **MERN stack** (MongoDB, Express, React, Node.js).  
It allows patients to easily find, book, and consult verified doctors — either in person or through secure video calls — with real-time scheduling and online payments.

---

## Live Demo

**[https://healsync-mern.vercel.app/](https://healsync-mern.vercel.app/)**

---

## Overview

HealSync simplifies healthcare access by bridging patients and verified medical professionals through a single, intuitive platform.  
The MVP enables patients to search doctors by specialty or location, view availability, book appointments, pay online, and join virtual consultations securely.

---

## Core Features

### For Patients

- Create an account and manage profile
- Search for doctors by specialty, location, or consultation type (video/in-person)
- View doctor profiles with bio, fees, experience, and availability
- Book appointments and make secure payments
- Join live video consultations via Twilio/Agora/WebRTC
- Receive appointment reminders and leave reviews

### For Doctors

- Register and verify credentials
- Create a professional doctor profile with pricing and consultation type
- Manage calendar availability and appointments
- View patient bookings, accept video calls
- Track completed sessions and payout history

---

## Monetization Model

- **Doctors:** Free to join, with a 10–15% commission on first bookings with new patients
- **Patients:** Free to browse; pay the doctor’s fee upfront during booking

---

## Tech Stack

| Layer       | Technology                                          |
| ----------- | --------------------------------------------------- |
| Frontend    | React (Vite) + SCSS                                 |
| Backend     | Node.js + Express (CommonJS)                        |
| Database    | MongoDB + Mongoose                                  |
| Auth        | JWT (Access + Refresh Tokens)                       |
| Payments    | Stripe / Paystack                                   |
| Video Calls | Twilio / Agora / WebRTC                             |
| Deployment  | Vercel (Frontend) + Render / Heroku (Backend)       |
| Testing     | Jest + Supertest (Backend), Vitest + RTL (Frontend) |
| CI/CD       | GitHub Actions (100% test coverage before deploy)   |

---

## Folder Structure

```
healsync-mern/
├── client/                # React (Vite) frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   └── styles/
│   ├── vite.config.js
│   └── package.json
├── server/                # Express backend
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── tests/
│   └── index.js
├── .github/workflows/ci.yml
├── .env.example
├── package.json
└── README.md
```

---

## Environment Variables

Create a `.env` file in the root directory:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLIENT_URL=http://localhost:4000
PORT=5000
STRIPE_SECRET_KEY=your_stripe_secret_key
```

> On Heroku or Render, these should be added under Config Vars.

---

## Scripts

### Root

```bash
npm run dev        # Start both backend & frontend concurrently
npm run server     # Run backend only
npm run client     # Run frontend only
npm test           # Run full test suite
```

### Client

```bash
npm run dev        # Start Vite dev server (port 4000)
npm run build      # Build frontend for production
npm run preview    # Preview production build
```

### Server

```bash
npm start          # Start Express server (port 5000)
npm run test       # Run Jest + Supertest tests
```

---

## Testing

- **Backend:** Jest + Supertest
- **Frontend:** Vitest + React Testing Library
- **CI/CD:** GitHub Actions ensures 100% test coverage before merge or deploy

---

## Deployment

- **Frontend:** Deployed on [Vercel](https://vercel.com/)
- **Backend:** Deployed on [Render](https://render.com/) or [Heroku](https://www.heroku.com/)  
  Ensure `.env` variables are properly configured in production.

---

## Styling

- Global font: **Poppins** (via Google Fonts)
- Styling: **Plain SCSS** (no modules, mobile-first)
- Responsive design with clean, modern layout

```scss
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");

body {
  font-family: "Poppins", sans-serif;
  background-color: #fff;
  color: #222;
  margin: 0;
  padding: 0;
}
```

---

## Security & Best Practices

- CORS enabled (wildcard or restricted via CLIENT_URL)
- JWT authentication for all protected routes
- Environment variables handled via .env
- Helmet/Morgan optional for enhanced security/logging

---

## License

**MIT License**  
© [Kofi Arhin](https://github.com/kofiarhin)

---

## Links

- **GitHub Repository:** [https://github.com/kofiarhin/healsync-mern](https://github.com/kofiarhin/healsync-mern)
- **Live Demo:** [https://healsync-mern.vercel.app/](https://healsync-mern.vercel.app/)
