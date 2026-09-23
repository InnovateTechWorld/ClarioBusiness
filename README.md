# Clario Business

Clario Business is a business platform designed to help African brands, manufacturers, retailers, and growing businesses manage product information, discover commercial opportunities, and make better day-to-day decisions from one place.

The project is built around a simple idea: product information should be clear, trustworthy, and useful for everyone involved in the supply chain. Brands need a better way to present and manage their products. Retailers need better tools for discovering products, tracking inventory, managing orders, and understanding performance. Clario Business brings those experiences together in one focused interface.

> **Project status:** Clario Business is currently a frontend-focused product prototype. The application demonstrates the product experience, information architecture, dashboards, forms, analytics views, and role-based workflows using local and mock data. Backend services, persistent authentication, and production data integrations can be connected as the platform evolves.

## Why Clario Business

Clario Business is being shaped for the realities of modern African commerce, where brands and retailers need better visibility, stronger relationships, and more reliable access to product information.

The platform supports two primary user experiences:

- **Brands and manufacturers** can present products, manage product information, connect with retailers, review feedback, run promotions, and monitor commercial performance.
- **Retailers** can browse product catalogs, manage inventory, review orders, connect with manufacturers, maintain store information, and view sales and store-visit analytics.

The goal is not just to build another dashboard. The goal is to create a practical operating layer between the people who make products and the people who bring those products to customers.

## Core capabilities

### Brand and manufacturer experience

- Product management and catalog organization
- Manufacturer analytics and performance summaries
- Retailer relationship visibility
- Promotions and campaign management views
- Feedback and customer or retailer communication surfaces
- Product performance reporting

### Retailer experience

- Product catalog browsing and search
- Category filtering and product discovery
- Inventory management
- Order history and order tracking views
- Store profile management
- Manufacturer connection workflows
- Sales and store-visit analytics

### Public and onboarding experience

- Marketing landing page focused on trust and product transparency
- Responsive navigation and call-to-action sections
- Multi-step business onboarding
- Brand/manufacturer and retailer account selection
- Business profile setup with location, categories, contact details, and social links
- Waitlist and sign-in entry points

## Architecture

Clario Business is a single-page React application organized around product areas rather than one large page. This keeps the main user journeys easy to reason about and gives each role a clear place to grow as backend services are introduced.

```text
src/
├── main.tsx                 # Application bootstrap and React root
├── router.tsx               # Primary route configuration
├── App.tsx                  # Application-level route composition
├── pages/
│   ├── LandingPage.tsx      # Public marketing experience
│   ├── WaitlistPage.tsx     # Early-access / waitlist flow
│   ├── auth/                # Sign-up, sign-in, and auth layout
│   └── dashboard/
│       ├── retailer/        # Retailer-specific workflows
│       └── manufacturer/     # Brand/manufacturer workflows
├── components/
│   ├── Navbar.tsx           # Public navigation
│   ├── Hero.tsx             # Landing-page hero section
│   ├── Features.tsx         # Product capabilities section
│   ├── About.tsx             # Product story and positioning
│   ├── CTA.tsx               # Conversion and onboarding prompts
│   ├── dashboard/            # Shared dashboard shell and navigation
│   ├── signup/               # Reusable onboarding form sections
│   └── ui/                   # Shared interface primitives
├── data/
│   └── dummyData.ts          # Prototype categories, countries, and sample entities
├── types/
│   └── auth.ts               # Shared authentication and onboarding types
└── styles/
    ├── globals.css           # Global application styles
    └── sparkle.css           # Brand-specific visual styling
```

### Runtime flow

The application starts in `src/main.tsx`, where React renders a `RouterProvider` inside `StrictMode`. The route definitions in `src/router.tsx` map public pages, authentication flows, retailer dashboards, and manufacturer dashboards to their respective page components.

Dashboard experiences use nested routes and shared layouts. `DashboardLayout` provides the shell, sidebar navigation, notification area, and content outlet, while retailer and manufacturer pages own the workflows specific to each business role. This separation allows both experiences to share a consistent product language without forcing their business logic into the same components.

The project also contains an `App.tsx` route composition layer from an earlier routing approach. The current entry point uses `src/router.tsx`; keeping routing consolidated around that entry point would be a useful cleanup as the application moves closer to production.

## Engineering approach

### TypeScript-first development

The project is written almost entirely in TypeScript and uses strict compiler settings, including unused-local and unused-parameter checks. Shared types such as `AccountType`, `SignUpState`, and business registration structures make the intended shape of onboarding data explicit and give future API integration a clear contract to build on.

### Feature-oriented organization

The code is grouped by business capability instead of placing every component in one flat directory. Retailer and manufacturer workflows have their own page areas, while shared UI primitives and dashboard infrastructure remain reusable. This makes it easier to add a new workflow without turning the application into a collection of tightly coupled screens.

### Clear role-based journeys

The route structure makes the two main product roles visible in the code:

- `/dashboard/retailer`
- `/dashboard/manufacturer`

Each role has its own navigation model and feature set. That is a strong foundation for adding authorization rules, API boundaries, and role-specific data fetching later.

### Reusable interface patterns

The project uses shared cards, buttons, form controls, dialogs, toast utilities, dashboard navigation, and form sections. Reusing these patterns improves consistency and means visual or accessibility improvements can be made in fewer places.

### Responsive and motion-aware UI

Tailwind CSS provides the layout and design system foundation, while Framer Motion is used for page transitions, hover states, dashboard card interactions, navigation animation, and progressive form transitions. The UI is designed to work across mobile and desktop layouts rather than treating smaller screens as an afterthought.

### Data visualization

The retailer analytics experience uses Chart.js through `react-chartjs-2` for sales and store-visit charts. Manufacturer analytics currently combines KPI cards and product performance tables, leaving room for richer visual reporting as real data sources are connected.

### Resilience and user feedback

The application includes an error boundary experience for route failures, animated loading and transition states, notifications in the dashboard shell, and confirmation-oriented onboarding screens. These are small but important details that make the product feel intentional rather than purely functional.

## AI and intelligent product direction

AI is a natural extension of Clario Business, but the current repository does **not** yet contain a live AI provider, model integration, or AI-backed API. The present frontend gives the future intelligence layer a useful product context: products, brands, retailers, inventory, orders, feedback, and analytics already exist as recognizable business concepts.

A responsible AI layer could eventually support:

- **Product information assistance:** help brands create clearer descriptions, normalize product attributes, and identify missing catalog information.
- **Retailer discovery:** recommend relevant products and manufacturers based on categories, location, store profile, inventory needs, and past activity.
- **Demand and inventory insights:** identify low-stock risk, unusual sales patterns, and products that may need replenishment.
- **Business analytics summaries:** turn dashboard metrics into concise explanations and highlight meaningful changes instead of forcing users to interpret every chart manually.
- **Feedback intelligence:** group recurring themes from retailer feedback and surface the issues that need the most attention.
- **Trust and quality checks:** flag inconsistent, incomplete, or potentially misleading product information before it is shared across the platform.

The right implementation would keep AI behind explicit service boundaries rather than embedding model calls directly into presentational components. A future architecture could expose typed application services for recommendations, catalog enrichment, analytics summaries, and feedback classification. Every AI-generated result should remain reviewable, explainable where practical, and easy for a business user to correct.

In other words, AI should assist the people using Clario Business, not replace their judgment. The platform's strongest AI use cases are the ones that reduce repetitive work, improve data quality, and make business signals easier to act on.

## Technology stack

- **Language:** TypeScript
- **UI:** React 18
- **Build tool:** Vite
- **Routing:** React Router 6
- **Styling:** Tailwind CSS, PostCSS, and custom CSS
- **Animation:** Framer Motion
- **Forms and validation:** React Hook Form and Zod are included for structured form workflows
- **Charts:** Chart.js and `react-chartjs-2`
- **Icons and UI:** Heroicons, Lucide React, and Headless UI
- **Email / waitlist integration:** EmailJS browser SDK is included for frontend email workflows
- **Quality tooling:** ESLint and TypeScript strict mode

## Getting started

### Requirements

- Node.js 18 or newer
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Vite will print the local development URL in the terminal, usually `http://localhost:5173`.

### Create a production build

```bash
npm run build
```

### Preview the production build locally

```bash
npm run preview
```

### Run linting

```bash
npm run lint
```

## Product routes

### Public routes

- `/` — Landing page
- `/features` — Feature overview
- `/auth/signup` — Business registration flow
- `/auth/signin` — Sign-in screen
- `/auth/waitlist` — Waitlist flow

### Retailer routes

- `/dashboard/retailer` — Retailer dashboard
- `/dashboard/retailer/products` — Product catalog
- `/dashboard/retailer/inventory` — Inventory management
- `/dashboard/retailer/orders` — Order history
- `/dashboard/retailer/profile` — Store profile
- `/dashboard/retailer/ranalytics` — Retailer analytics
- `/dashboard/retailer/manufacturers` — Manufacturer connections

### Manufacturer routes

- `/dashboard/manufacturer` — Manufacturer dashboard
- `/dashboard/manufacturer/analytics` — Performance analytics
- `/dashboard/manufacturer/products` — Product management
- `/dashboard/manufacturer/reports` — Reports
- `/dashboard/manufacturer/promotions` — Promotions
- `/dashboard/manufacturer/feedback` — Feedback

## Current limitations and next steps

The current application is intentionally frontend-led and uses local state, sample datasets, and placeholder actions in several workflows. Before production launch, the next engineering steps would be to:

1. Add a backend API and persistent database for users, products, retailers, orders, inventory, feedback, and analytics.
2. Replace redirect-based demo authentication with secure session management and protected routes.
3. Introduce a typed API client so pages do not own data-access details directly.
4. Move sample dashboard metrics and product records into server-backed queries.
5. Add form validation with clear error states and server-side validation.
6. Add automated unit, component, and end-to-end tests for the main retailer and manufacturer journeys.
7. Consolidate the routing implementation and remove duplicate or legacy route definitions.
8. Connect the analytics views to real event and transaction data.
9. Establish observability for frontend errors, performance, and user-facing failures.
10. Add the AI capabilities described above behind auditable, permission-aware service boundaries.

## Contributing

When contributing to Clario Business, keep the product roles and user journeys in mind. Prefer small, focused components, keep business-specific behavior close to its feature area, and move genuinely shared behavior into reusable components or utilities. New screens should work on mobile and desktop, provide meaningful empty and error states, and avoid hiding important product behavior inside visual-only components.

Before opening a pull request, run:

```bash
npm run lint
npm run build
```

## Vision

Clario Business is being built to make commerce more transparent, connected, and easier to operate. The long-term opportunity is to give African brands and retailers the product intelligence, trusted information, and practical tools they need to grow together.
