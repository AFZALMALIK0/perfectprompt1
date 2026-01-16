# PerfectPrompt (Vercel-ready)

A full-stack **Next.js + Prisma** web app:
- Modern minimal landing page
- Sign up / Sign in (email/phone + password)
- OTP login via **SMS / WhatsApp / Email** (dev mode prints OTP in server logs)
- Prompt builder (structured prompt output)
- Save prompts to your account

## Deploy on Vercel (Beginner)
1) Push this project to GitHub
2) Vercel → **New Project** → Import your repo
3) Add a Postgres database (Neon is easiest):
   - Vercel → Storage/Marketplace → Neon → Connect
   - This sets `DATABASE_URL` in your project
4) Set `JWT_SECRET` in Vercel → Project → Settings → Environment Variables
5) Redeploy

### Notes
- This project includes a starter Postgres migration in `prisma/migrations/`.
- Build script runs: `prisma generate && prisma migrate deploy && next build`
