# Banao MERN Stack - Social Feed (Vite + React + TypeScript + Supabase)

Note: This repo is a frontend application built with Vite, React (TypeScript) and Supabase for backend/auth/data. The project includes UI components (shadcn-style), authentication, post creation, editing, and comments.


---

## Features

Email-based authentication (Sign up / Sign in / Reset password) via Supabase.

Create, edit and delete posts.

Comment on posts.

Feed with post cards and basic interactions.

Uses React Query for data fetching & caching.

UI components from a shadcn-like component library (local src/components/ui).

Tailwind CSS for styling.

Ready for deployment (Vercel / Netlify / static hosting with built build).



---

## Tech Stack

Vite

React + TypeScript

Tailwind CSS

Supabase (Auth + Database + Storage)

@tanstack/react-query

shadcn-style UI components (local components)

Sonner / Toaster for notifications

ESLint + TypeScript



---

## Getting started (Local)

1. Install dependencies



npm install
# or
yarn

2. Environment variables
Create a .env file in the project root:



VITE_SUPABASE_URL="https://<your-project-id>.supabase.co"
VITE_SUPABASE_PUBLISHABLE_KEY="<your-anon-publishable-key>"
VITE_SUPABASE_PROJECT_ID="<your-project-id>"

3. Run development server



npm run dev
# open http://localhost:5173

4. Build for production



npm run build
npm run preview

5. Lint



npm run lint


---

## Project structure

src/
├─ main.tsx
├─ App.tsx
├─ pages/
│  ├─ Index.tsx
│  ├─ Auth.tsx
│  └─ NotFound.tsx
├─ components/
│  ├─ Feed.tsx
│  ├─ CreatePost.tsx
│  ├─ PostCard.tsx
│  ├─ CommentSection.tsx
│  └─ ui/
├─ integrations/
│  └─ supabase/
│     ├─ client.ts
│     └─ types.ts


---

## Supabase integration

src/integrations/supabase/client.ts contains the Supabase client setup.

Replace hard-coded keys with env variables (import.meta.env).

Ensure Row Level Security (RLS) is configured properly.



---

## Database schema (expected)

profiles – user metadata

posts – id, user_id, content, created_at

comments – id, post_id, user_id, content, created_at



---

## Deployment

Deploy to Vercel / Netlify.

Add environment variables in dashboard.

Default build command: npm run build, output directory: dist.



---

## Security Notes

Never commit service role keys.

Use only the public (anon) key.

Configure Supabase RLS for posts and comments.



---

## Next steps

Add likes, profiles, pagination.

Add tests and CI/CD.

Improve validation and sanitization.



