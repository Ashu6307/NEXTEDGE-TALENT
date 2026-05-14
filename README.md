# NEXTEDGE-TALENT CONSULTANCY

Premium membership-based job consultancy platform built with a clean separation between frontend UI and backend services.

## Tech stack
- Next.js App Router
- TypeScript
- Tailwind CSS
- ESLint
- Supabase client integration

## Folder structure (summary)
```
app/        # UI routes + API route controllers
backend/    # services, repositories, validators, security
frontend/   # client services, hooks, shared types
components/ # UI components
lib/        # shared utilities
data/       # mock data
docs/       # architecture and security docs
```

## Commands
```
npm install
npm run dev
npm run lint
npm run build
```

## Environment setup
Copy `.env.example` to `.env.local` and fill in values.

Required:
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY
- SUPABASE_SERVICE_ROLE_KEY
- RAZORPAY_KEY_ID
- RAZORPAY_KEY_SECRET
- RAZORPAY_WEBHOOK_SECRET
- EMAIL_PROVIDER_API_KEY
- WHATSAPP_PROVIDER_API_KEY

## Security note
Service role keys are server-only and must never be used in frontend code. All protected workflows go through `/app/api` routes and backend services.
