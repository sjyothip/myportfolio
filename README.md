# Full Stack Developer Portfolio

A responsive React + Vite portfolio with an optional Express/MongoDB contact API.

## Tech stack

- React
- Vite
- Framer Motion
- React Icons
- Node.js
- Express
- MongoDB / Mongoose

## Run the frontend

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Run the backend

Create `.env` from `.env.example`, add your MongoDB connection string, then:

```bash
npm run server
```

The API runs on `http://localhost:5000`.

The frontend contact form will try the API first. If the API is unavailable, it gives a friendly fallback message instead of crashing.

## Customize

Edit:

```text
src/data/portfolioData.js
```

Replace the placeholder name, summary, links, skills, experience, and projects.

Put your resume at:

```text
public/resume.pdf
```

## Build

```bash
npm run build
```

## GitHub

```bash
git init
git add .
git commit -m "Build portfolio"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```
