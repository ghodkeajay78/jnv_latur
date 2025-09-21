# Jawahar Navodaya Vidyalaya Latur - School Website

## Overview

This is a modern, responsive school website for Jawahar Navodaya Vidyalaya (JNV) Latur built with React and TypeScript. The website provides comprehensive information about the school including academics, admissions, campus facilities, faculty, achievements, and student life. It features a bilingual interface supporting both English and Marathi languages with a saffron-themed design reflecting the institutional identity.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React 18 + TypeScript**: Modern component-based frontend framework with type safety
- **Vite**: Fast build tool and development server optimized for React applications
- **Wouter**: Lightweight client-side routing library for navigation between pages
- **Tailwind CSS**: Utility-first CSS framework for responsive design and styling
- **Shadcn/UI**: Pre-built UI component library built on Radix UI primitives
- **React Hook Form**: Form handling and validation for contact forms and user inputs

### State Management & Data
- **TanStack React Query**: Server state management for API calls and data caching
- **React Context**: Global state management for language switching and translations
- **TypeScript Interfaces**: Strongly typed data models for school information, news, faculty, etc.
- **Static Content**: School data stored in local TypeScript files for fast loading

### Internationalization
- **Custom i18n System**: React Context-based translation system supporting English and Marathi
- **Language Toggle**: Top-right corner toggle between English (EN) and Marathi (मर) languages
- **Translation Keys**: Structured translation system with namespaced keys for different sections

### UI/UX Components
- **Radix UI Primitives**: Accessible headless components for complex UI patterns
- **Component Library**: Comprehensive set of reusable components (buttons, cards, dialogs, forms)
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Photo Gallery**: Lightbox functionality for campus and event images
- **Contact Forms**: Form validation and submission handling

### Styling System
- **CSS Variables**: Theme system using CSS custom properties for consistent colors
- **Saffron Theme**: Primary color scheme using saffron (#FF9933) as specified for JNV branding
- **Dark Mode Support**: Theme system prepared for light/dark mode switching
- **Animation**: Smooth transitions and hover effects for enhanced user experience

### Backend Architecture
- **Express.js**: Node.js web framework for API endpoints and server-side logic
- **TypeScript**: Full-stack type safety with shared types between client and server
- **Modular Routes**: Organized API route structure with separation of concerns
- **Error Handling**: Centralized error handling middleware for consistent API responses

### Data Storage
- **Drizzle ORM**: Type-safe database queries and schema management
- **PostgreSQL**: Primary database using Neon serverless PostgreSQL
- **Schema Definitions**: Shared database schema between client and server
- **Migration System**: Database migration management using Drizzle Kit

### Development Environment
- **ESM Modules**: Modern JavaScript module system throughout the application
- **Development Server**: Hot module replacement for fast development iterations
- **TypeScript Configuration**: Strict type checking with path mapping for clean imports
- **Build System**: Production optimization with code splitting and asset bundling

## External Dependencies

### Database & Storage
- **Neon Database**: Serverless PostgreSQL database for production deployment
- **Drizzle ORM**: Type-safe database queries and migrations
- **Connect PG Simple**: PostgreSQL session store for user sessions

### UI & Styling
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Radix UI**: Headless component primitives for accessible UI components
- **Lucide React**: Icon library for consistent iconography throughout the application
- **Class Variance Authority**: Utility for creating variant-based component APIs

### Development Tools
- **Vite**: Build tool and development server with hot module replacement
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing for Tailwind and other transformations
- **TSX**: TypeScript execution environment for development server

### Form & Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: Schema validation library for form validation and API data validation
- **Hookform Resolvers**: Integration between React Hook Form and Zod validation

### Carousel & Media
- **Embla Carousel**: Lightweight carousel library for image galleries and content sliders
- **Date-fns**: Modern date utility library for formatting and manipulation

### Fonts & Assets
- **Google Fonts**: Inter font family for modern typography
- **Unsplash Images**: High-quality stock images for demo content and placeholders