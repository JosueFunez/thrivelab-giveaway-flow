# Thrivelab Giveaway Flow

Production-oriented multi-step giveaway flow built with a scalable frontend/backend architecture using Next.js, TypeScript, and Supabase.

This implementation was designed following engineering principles commonly applied in fast-moving product environments: modular state management, validation-first form handling, API-driven architecture, persistence strategies, and maintainable component composition.

The project was developed according to the requirements defined in the Thrivelab technical assessment.

---

# Project Overview

The application implements a responsive multi-step user flow that:

- Collects user information across multiple stages
- Preserves draft progress during refresh/navigation
- Applies frontend and backend validation
- Persists submissions into PostgreSQL through Supabase
- Prevents duplicate registrations by email
- Provides user-friendly error handling and feedback

The architecture prioritizes:

- Scalability
- Separation of concerns
- Maintainability
- UX continuity
- Predictable validation flows
- Clean API boundaries

---

# Tech Stack

## Frontend

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- React Hook Form
- Zod
- Zustand

## Backend

- Next.js Route Handlers
- Supabase (PostgreSQL)

## Infrastructure & Tooling

- ESLint
- Prettier
- GitHub
- Vercel-ready deployment structure

---

# Engineering Approach

The implementation was structured as a lightweight but production-conscious system rather than a purely UI-focused exercise.

Key engineering considerations included:

- Decoupled form state management
- Schema-driven validation
- Step isolation
- API abstraction
- Error normalization
- Draft persistence strategy
- Extensible database interaction layer
- UX resilience during accidental refreshes/navigation

The goal was to reflect how a Technical Process Engineer approaches frontend workflows as operational systems instead of isolated screens.

---

# Functional Requirements Covered

## Multi-Step Workflow

Implemented flow:

1. Contact Information
2. Pain Area Selection
3. Treatment Hesitation Selection
4. Interest Level
5. Submission Confirmation

## Validation Rules

- Required field enforcement
- Email format validation
- Duplicate email prevention
- Conditional field rendering
- Multi-select validation
- Input masking for phone numbers

## Persistence

The application persists user progress using local storage to satisfy the requirement that users do not lose progress after refreshes or accidental browser closure.

## Error Handling

Backend responses follow the requested specification:

- `400 Bad Request` → Validation errors
- `409 Conflict` → Duplicate email submission

Frontend error boundaries transform backend responses into user-friendly messaging.

---

# Setup Instructions

## 1. Clone Repository

```bash
git clone https://github.com/JosueFunez/thrivelab-giveaway-flow.git
cd thrivelab-giveaway-flow
```

## 2. Install Dependencies

```bash
npm install
```

## 3. Configure Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

## 4. Run Development Server

```bash
npm run dev
```

Application runs at:

```txt
http://localhost:3000
```

---

# Suggested Database Schema

## giveaway_entries

| Column | Type | Notes |
|---|---|---|
| id | uuid | Primary key |
| first_name | text | Required |
| last_name | text | Required |
| instagram_handle | text | Optional |
| email | text | Unique |
| phone | text | Required |
| pain_area | text | Required |
| pain_area_other | text | Conditional |
| why_not_yet | text[] | Multi-select |
| interest_level | text | Required |
| created_at | timestamptz | Audit field |

## Constraints

- Unique index on `email`
- NOT NULL enforcement for required fields
- Server-side validation before persistence

---

# Architecture Decisions

## Zustand for Workflow State Management

Zustand was selected to centralize multi-step workflow state while keeping the implementation lightweight and predictable.

Benefits:

- Minimal boilerplate
- Easy persistence integration
- Step-independent updates
- Simplified navigation control

## React Hook Form + Zod

Validation is schema-driven instead of component-driven.

This improves:

- Reusability
- Consistency
- Maintainability
- Type safety
- Backend/frontend validation alignment

## Next.js Route Handlers Instead of Separate Backend Service

For the assessment scope, Route Handlers provided sufficient API separation without introducing unnecessary infrastructure complexity.

This decision optimized:

- Development speed
- Deployment simplicity
- Reduced operational overhead

While still preserving:

- DTO validation
- API contracts
- Error normalization
- Backend scalability patterns

## Supabase as Persistence Layer

Supabase was selected because it provides:

- Rapid PostgreSQL provisioning
- Managed infrastructure
- Clean TypeScript support
- Scalable relational persistence
- Minimal operational setup

This aligned well with the time constraints of the assessment while still reflecting realistic production workflows.

---

# UX & Process Engineering Considerations

The implementation intentionally focused on operational UX reliability:

- Disabled progression on invalid states
- Persistent form drafts
- Clear validation feedback
- Responsive layout behavior
- User-safe navigation between steps
- Controlled submission lifecycle
- Predictable loading/error states

Special attention was given to minimizing state loss and preventing inconsistent user progression through the workflow.

---

# Trade-Offs

Due to the intended 6–8 hour implementation window described in the assessment, some production-level features were intentionally deferred.

## Deferred Features

- Authentication/authorization
- Rate limiting
- CAPTCHA protection
- Centralized logging/monitoring
- End-to-end automated testing
- CI/CD pipeline integration
- Advanced accessibility auditing
- Analytics instrumentation

## UI Scope

The implementation prioritizes responsive usability and maintainable component structure over pixel-perfect Figma replication.

---

# Assumptions

- Phone numbers are US-based using `(###) ###-####`
- One submission per email address
- The giveaway flow does not require authenticated sessions
- Users may refresh or temporarily abandon the flow
- Supabase database constraints act as the final data integrity layer

---

# Future Improvements

Given additional implementation time, the next engineering priorities would be:

## Reliability & Quality

- Playwright E2E test suite
- Unit/integration testing
- API contract testing
- Error observability

## Security

- CAPTCHA / anti-bot protection
- Rate limiting
- Input sanitization hardening
- Abuse detection strategies

## Scalability

- Shared validation schemas across frontend/backend
- Service-layer abstraction
- Queue/event-driven submission handling
- Analytics instrumentation

## UX Enhancements

- Accessibility improvements (WCAG)
- Optimistic UI improvements
- Enhanced mobile keyboard handling
- Progressive enhancement strategies

## DevOps & Process Improvements

- CI/CD pipeline
- Automated lint/test validation
- Environment promotion workflows
- Infrastructure-as-Code provisioning

---

# Evaluation Alignment

This implementation was intentionally designed to address the evaluation criteria specified in the technical assessment:

- Code clarity and maintainability
- Component organization
- State management approach
- Error handling
- UX quality
- API design
- DTO validation
- Responsiveness

---

# Deployment

The project structure is fully compatible with Vercel deployment.

Recommended deployment flow:

1. Connect GitHub repository
2. Configure environment variables
3. Deploy using Vercel

---

# Final Notes

This project was approached as a production-oriented engineering exercise rather than only a frontend implementation challenge.

The primary focus was creating a maintainable and scalable workflow architecture that balances:

- User experience
- Validation integrity
- Operational simplicity
- Developer maintainability
- Scalable process design
