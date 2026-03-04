# GoalZone Pro - Booking Platform

A complete enterprise-level SaaS web application for booking five-a-side football fields in Egypt, built taking modern UX/UI practices and performance into extreme consideration.

## 🚀 Tech Stack

- **Frontend:** React (Vite) + TypeScript
- **Styling:** Tailwind CSS + Lucide Icons
- **State Management:** Zustand
- **Routing:** React Router DOM (v6)
- **Forms & Validation:** React Hook Form + Zod
- **Backend & Database:** Firebase (Auth, Firestore, Hosting, Cloud Functions ready)
- **Payment Architecture:** Ready for Stripe, Fawry, and Vodafone Cash

## 📁 Project Structure

```
yallamatch/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   └── layout/         # Navbar, Footer, etc.
│   ├── firebase/           # Firebase configuration and helpers
│   ├── pages/              # Application pages (Home, Auth, Fields, Dashboard)
│   ├── store/              # Zustand state stores
│   ├── types/              # TypeScript definitions for the database schema
│   ├── App.tsx             # Main routing component
│   └── main.tsx            # React entry point
├── firestore.rules         # Firebase access rules
├── index.html              # HTML entry point
├── package.json            # Dependencies and scripts
└── tailwind.config.js      # Custom theme setup (Black + Neon Green)
```

## 🛠 Setup Instructions

1. **Clone & Install**
   ```bash
   npm install
   ```

2. **Environment Variables**
   Create a `.env` file in the root based on your Firebase configuration:
   ```env
   VITE_FIREBASE_API_KEY=your_key
   VITE_FIREBASE_AUTH_DOMAIN=your_domain
   VITE_FIREBASE_PROJECT_ID=your_id
   VITE_FIREBASE_STORAGE_BUCKET=your_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender
   VITE_FIREBASE_APP_ID=your_app_id
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   ```

## 🔐 Database Rules & Scaling
The Firestore schema has been predefined in the `src/types/index.ts` models.
Deploy the `firestore.rules` attached directly to your Firebase Console to lock down the appropriate read/write operations based on User roles.

## 🎨 Theme & UI
- Designed to impress investors: utilizing vibrant Neon Green (`#39FF14`) on a deep Black/Surface Dark background (`#0a0a0a` & `#171717`).
- Implements micro-interactions, skeleton loaders, custom scrollbars, and dynamic state-driven navigation to look extremely premium.
