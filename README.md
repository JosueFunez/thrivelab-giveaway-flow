# Thrivelab Giveaway Flow

## Tech Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- Zustand
- React Hook Form
- Zod
- Supabase

## Setup Instructions

1. Clone repository
2. Install dependencies

npm install

3. Create .env.local

NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

4. Run project

npm run dev

## Architecture Decisions

- Zustand was used for persisted multi-step state management.
- React Hook Form + Zod were used for scalable form validation.
- Next.js Route Handlers were used instead of a separate backend framework to keep the architecture lightweight while maintaining API separation.
- Supabase was selected for rapid PostgreSQL setup and deployment simplicity.

## Trade-offs

- Authentication was intentionally omitted due to project scope.
- Rate limiting and CAPTCHA were not implemented because of time constraints.
- Styling focused on responsiveness and UX rather than pixel-perfect Figma replication.

## Assumptions

- Phone numbers are US-based.
- Users are allowed only one giveaway submission per email address.

## Future Improvements

- Add automated testing (Playwright)
- Add analytics tracking
- Add CAPTCHA / anti-spam protection
- Add accessibility improvements
- Add server-side validation schemas shared with frontend