# MediWatch – Remote Patient Monitoring & Smart Alert System

## 📌 What It Is
A remote health monitoring platform that allows:

- **Patients** to submit their health metrics (e.g., BP, heart rate, glucose)
- **Doctors** to monitor patients in real-time
- **Backend** to detect anomalies and send smart alerts
- **AI** to summarize health trends, aiding doctors in diagnosis or care plans

## 🎯 Core Purpose
Automate chronic care and emergency detection for remote or elderly patients with low infrastructure, providing actionable insights to doctors using lightweight AI and live backend systems.

## 👥 Users and Roles

### 🧑‍⚕️ Doctors
- Can view all assigned patients
- Get real-time alerts if patient readings are abnormal
- Can leave notes/suggestions for patients

### 🧑 Patients
- Can log daily health parameters (e.g., BP, sugar, HR)
- View summary of their trends
- Can get auto-generated health feedback (basic AI)

### 🛠 Admin (optional)
- Manages doctor-patient assignments
- Views overall system metrics

## 🧠 AI / Logic Features

### 1. Anomaly Detection Engine (Backend Logic)
- Threshold + pattern-based alerting
- Example: If BP > 140/90 + rising trend over 3 days → alert

### 2. AI Health Summary
- Uses free transformer models like MiniLM or DistilBERT to:
  - Summarize patient vitals over time ("Stable, but BP rising over past week")
  - Extract patterns from input

### 3. Health Feedback Bot
- Suggests actions based on values (rules + AI)
- e.g., "Consider reducing sodium intake" if BP rising

## 🧰 Backend Architecture Overview

```
📦 server/
├── controllers/         # Core logic
├── routes/              # API routing layer
├── models/              # Mongoose/PostgreSQL models
├── services/            # Anomaly detection, AI summaries
├── sockets/             # WebSocket channels
├── utils/               # Time-series helpers, thresholds
├── jobs/                # Cron tasks (daily summaries, notifications)
└── app.js               # Entry point (Express server + Socket.io)
```

## 🔌 Technologies Used

| Layer | Tech Used |
|-------|-----------|
| Frontend | Next.js, Tailwind CSS |
| Auth | NextAuth.js (Email + Google) |
| Backend | Node.js, Express.js, Socket.IO |
| DB | MongoDB or PostgreSQL (via Sequelize/Mongoose) |
| Realtime | Socket.IO – for doctor-patient alert streams |
| AI | @xenova/transformers, natural, custom rules |
| Scheduler | node-cron or Agenda.js |

## 📡 WebSocket Use Cases
- Doctor subscribes to a patient's live health stream
- Doctor receives alert in real-time if anomaly is detected
- Patients' vitals pushed live to dashboard without refresh
- Chat/notes stream (optional)

**Channels:**
- `/doctor/{doctorId}/stream`
- `/patient/{patientId}/status`

## 🔐 Authentication
Implemented via NextAuth.js:
- Email + password-based
- Google OAuth
- Token passed to backend via session
- Role-based routing (middleware restricts routes based on role: "doctor" or role: "patient")

## 🔀 Key API Endpoints (10+)

| API Endpoint | Description |
|--------------|-------------|
| POST /api/vitals/submit | Patient submits vitals |
| GET /api/vitals/patient/:id | Fetch patient vitals (doctor view) |
| GET /api/vitals/summary/:id | AI-generated patient health summary |
| POST /api/alerts/generate | Manually trigger alert generation |
| GET /api/alerts/:id | Fetch alert history for a patient |
| POST /api/doctor/notes/:patientId | Doctor adds note to patient record |
| GET /api/patient/assigned | Doctor fetches assigned patients |
| POST /api/patient/assign/:id | Admin assigns patient to doctor |
| GET /api/profile/me | Authenticated user profile |
| GET /api/stats/anomalies | View system-wide anomaly stats |
| GET /api/vitals/export/:id | Export patient vitals as CSV |

## 🧪 Backend Workflows (What Happens Behind the Scenes)

### 🧾 Vitals Submission
1. Patient submits vitals → stored in DB
2. Trigger anomaly check service
3. If triggered → send WebSocket alert to doctor

### 📊 Daily Summary Cron
- At 8PM daily: summarize all patient trends
- AI summarizer generates trend notes
- Stored in patient summary logs

### 🔔 Alert Logic
- If any reading crosses thresholds + trending upward/downward
- Sends WebSocket to `/doctor/{id}/stream`

## 🧑‍💻 Frontend Pages (~20%)

| Page | Purpose |
|------|---------|
| Landing Page | Product intro, login/register CTA |
| Login / Register | Auth via Google or Email/Password (NextAuth) |
| Patient Dashboard | Enter vitals, see trends, summaries, past logs |
| Doctor Dashboard | See assigned patients, alert feed, write notes |
| Shared Components | Header, Chart.js graphs, AlertCard, VitalInputForm |

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB or PostgreSQL
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sushantgavaraskar/mediwatch.git
cd mediwatch
```

2. Install dependencies:
```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd server
npm install
```

3. Set up environment variables:
```bash
# Create .env.local for frontend
cp .env.example .env.local

# Create .env for backend
cd server
cp .env.example .env
```

4. Start the development servers:
```bash
# Start frontend (from root directory)
npm run dev

# Start backend (from server directory)
cd server
npm run dev
```

## 📝 License
This project is licensed under the MIT License.

## 🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request. 