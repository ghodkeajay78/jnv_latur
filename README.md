# JNV Latur - Modern School Website

A comprehensive, modern, and responsive website for **Jawahar Navodaya Vidyalaya, Latur** built with cutting-edge web technologies. This project showcases a full-stack school website with bilingual support, modern UI components, and a robust architecture.

## 🌟 Overview

JNV Latur is a prestigious residential school established in 1986, providing quality education to talented rural children. This website serves as the digital gateway for students, parents, faculty, and the community to access information about the school's programs, achievements, and campus life.

## ✨ Key Features

### 🌐 **Bilingual Support**
- **English & Marathi** language toggle
- Complete translation system with custom i18n implementation
- Seamless language switching across all pages

### 📱 **Responsive Design**
- **Mobile-first** approach with modern UI/UX
- Optimized for all device sizes (desktop, tablet, mobile)
- Touch-friendly navigation and interactions

### 🎨 **Modern UI/UX**
- Built with **shadcn/ui** components and **Radix UI** primitives
- **Tailwind CSS** for styling with custom design system
- Smooth animations and transitions with **Framer Motion**
- Dark/light theme support

### 📚 **Comprehensive Content**
- **15+ Pages**: Home, About, Academics, Campus, Admissions, Faculty, Achievements, News, Hostel, Alumni, Gallery, Activities, Resources, Contact, Policies, Management
- **Photo Gallery** with lightbox functionality
- **News & Events** management system
- **Faculty Directory** with detailed profiles
- **Achievement Showcase** with categorization

### ⚡ **Performance & SEO**
- **Vite** for lightning-fast development and builds
- **React 18** with modern hooks and concurrent features
- Optimized images and lazy loading
- SEO-friendly structure and meta tags

## 🛠️ Technology Stack

### **Frontend**
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Wouter** - Lightweight client-side routing
- **React Query** - Server state management and caching

### **UI Framework**
- **Radix UI** - Accessible component primitives
- **shadcn/ui** - Beautiful, customizable components
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **Framer Motion** - Animation library

### **Backend**
- **Express.js** - Node.js web framework
- **TypeScript** - Type-safe server development
- **Drizzle ORM** - Type-safe database toolkit
- **PostgreSQL** - Robust relational database
- **Zod** - Schema validation

### **Development Tools**
- **ESBuild** - Fast JavaScript bundler
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing
- **TypeScript** - Static type checking

## 📁 Project Structure

```
JNVLaturSite/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── Common/     # Shared components (LanguageToggle, PhotoGallery, ContactForm)
│   │   │   ├── Layout/     # Layout components (Header, Footer)
│   │   │   └── ui/         # shadcn/ui components
│   │   ├── pages/          # Page components (Home, About, Academics, etc.)
│   │   ├── data/           # Static data and content
│   │   ├── lib/            # Utilities and configurations
│   │   ├── hooks/          # Custom React hooks
│   │   └── types/          # TypeScript type definitions
│   └── index.html          # HTML entry point
├── server/                 # Backend Express application
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   ├── storage.ts         # Database operations
│   └── vite.ts            # Vite integration
├── shared/                 # Shared code between client and server
│   └── schema.ts          # Database schema and types
├── package.json           # Dependencies and scripts
├── vite.config.ts         # Vite configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── drizzle.config.ts      # Database configuration
└── tsconfig.json          # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **PostgreSQL** database (for production)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ghodkeajay78/jnv_latur.git
   cd jnv_latur
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env file in the root directory
   DATABASE_URL=your_postgresql_connection_string
   NODE_ENV=development
   PORT=5000
   ```

4. **Set up the database**
   ```bash
   # Push database schema
   npm run db:push
   ```

### Development

1. **Start the development server**
   ```bash
   npm run dev
   ```

2. **Open your browser**
   - Navigate to `http://localhost:5000`
   - The application will hot-reload on file changes

### Production Build

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Start the production server**
   ```bash
   npm start
   ```

## 📋 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build the application for production |
| `npm start` | Start the production server |
| `npm run check` | Run TypeScript type checking |
| `npm run db:push` | Push database schema changes |

## 🎯 Key Pages & Features

### **Home Page**
- Hero section with school tagline
- Quick links to important sections
- Campus life photo gallery
- Latest news and announcements
- School statistics and achievements

### **About Page**
- School history and mission
- Core values and principles
- Milestones and achievements
- Leadership team information

### **Academics**
- Curriculum overview
- Subject-wise information
- Examination system
- Academic calendar

### **Campus & Facilities**
- Infrastructure details
- Smart classrooms
- Science laboratories
- Library and resources
- Sports facilities

### **Admissions**
- Admission process and criteria
- Application forms
- Important dates
- Fee structure

### **Faculty**
- Teacher profiles and qualifications
- Subject expertise
- Experience and achievements

### **Gallery**
- Interactive photo gallery
- Campus life images
- Event photographs
- Virtual tour

## 🌍 Internationalization

The website supports two languages:
- **English** (EN) - Default language
- **Marathi** (मर) - Regional language

Language switching is available in the header and persists across page navigation.

## 🎨 Design System

### **Color Palette**
- Primary: School brand colors
- Secondary: Complementary colors
- Accent: Highlight colors
- Neutral: Text and background colors

### **Typography**
- Sans-serif fonts for modern look
- Responsive font sizes
- Proper contrast ratios for accessibility

### **Components**
- Consistent button styles
- Card-based layouts
- Modal dialogs
- Form components
- Navigation elements

## 🔧 Configuration

### **Database Setup**
The application uses PostgreSQL with Drizzle ORM. Configure your database connection in the environment variables.

### **Styling**
Tailwind CSS is configured with custom design tokens and components. The configuration can be found in `tailwind.config.ts`.

### **Build Configuration**
Vite is configured for optimal development and production builds. Configuration is in `vite.config.ts`.

## 📱 Browser Support

- **Chrome** (latest)
- **Firefox** (latest)
- **Safari** (latest)
- **Edge** (latest)
- **Mobile browsers** (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact & Support

### **School Information**
- **Phone**: +91-2382-123456
- **Email**: principal@jnvlatur.edu.in
- **Address**: Village Wagholi, Taluka Chakur, District Latur, Maharashtra - 413517

### **Technical Support**
- **Repository**: [https://github.com/ghodkeajay78/jnv_latur](https://github.com/ghodkeajay78/jnv_latur)
- **Issues**: [GitHub Issues](https://github.com/ghodkeajay78/jnv_latur/issues)

## 🙏 Acknowledgments

- **Jawahar Navodaya Vidyalaya System** for the educational mission
- **shadcn/ui** for the beautiful component library
- **Radix UI** for accessible component primitives
- **Tailwind CSS** for the utility-first CSS framework
- **Vite** for the fast build tooling

---

**Built with ❤️ for JNV Latur Community**