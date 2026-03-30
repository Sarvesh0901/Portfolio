# Sarvesh Yadav - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion. Features a secure backend API for contact form submissions with an admin dashboard.

## 🌟 Features

- **Modern UI/UX** - Beautiful gradient designs, smooth animations, and responsive layout
- **Dark Theme** - Optimized dark mode with cyan/blue accent colors
- **Interactive Components** - Built with Radix UI primitives
- **Smooth Animations** - Powered by Framer Motion
- **Type-Safe** - Full TypeScript support
- **Secure Backend** - Next.js API with SQLite database
- **Admin Dashboard** - Password-protected message management
- **Rate Limiting** - Protection against spam and abuse
- **Input Validation** - Zod schemas for form validation
- **Security Headers** - CSP, X-Frame-Options, and more

## 📁 Project Structure

```
app/
├── src/
│   ├── components/     # Reusable UI components
│   ├── sections/       # Page sections (Hero, About, Skills, etc.)
│   ├── hooks/          # Custom React hooks
│   ├── data/           # Portfolio content data
│   ├── lib/            # Utility functions
│   └── App.tsx         # Main application component
├── Backend/            # Next.js backend application
│   ├── src/
│   │   ├── pages/api/  # API endpoints
│   │   ├── lib/        # Database and utilities
│   │   └── pages/      # Admin dashboard
│   └── README.md       # Backend documentation
├── index.html          # HTML template with security headers
├── vite.config.ts      # Vite configuration
└── package.json        # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Frontend Setup

1. **Install dependencies:**
```bash
npm install
```

2. **Run development server:**
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`

3. **Build for production:**
```bash
npm run build
npm preview
```

### Backend Setup

See [Backend/README.md](./Backend/README.md) for detailed setup instructions.

Quick start:
```bash
cd Backend
npm install
cp .env.example .env
# Edit .env and set ADMIN_PASSWORD
npm run dev
```

The backend will be available at `http://localhost:3000`

## 🔧 Configuration

### Environment Variables

#### Frontend
No environment variables required for the frontend.

#### Backend
Required variables in `Backend/.env`:

```env
ADMIN_PASSWORD=your_secure_password
DATABASE_PATH=./database.db
RATE_LIMIT_POINTS=10
RATE_LIMIT_DURATION=60
```

Optional for email notifications:

```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

## 🛡️ Security Features

### Frontend
- ✅ Content Security Policy (CSP)
- ✅ X-Frame-Options (DENY)
- ✅ X-Content-Type-Options (nosniff)
- ✅ Referrer-Policy
- ✅ Input validation with Zod
- ✅ XSS protection via React escaping
- ✅ Secure external resource loading

### Backend
- ✅ Rate limiting (10 req/min per IP)
- ✅ Password authentication (bcrypt)
- ✅ HTTP-only cookies
- ✅ Session management
- ✅ SQL injection prevention
- ✅ Input validation with Zod
- ✅ Security headers
- ✅ IP logging for audit trails

## 📦 Tech Stack

### Frontend
- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Radix UI** - UI primitives
- **Lucide React** - Icons
- **Zod** - Validation

### Backend
- **Next.js 14** - API framework
- **SQLite** - Database
- **Better-SQLite3** - Database driver
- **Bcryptjs** - Password hashing
- **Rate Limiter Flexible** - Rate limiting
- **Zod** - Validation

## 🎨 Customization

### Update Personal Information

Edit `src/data/portfolio.ts`:

```typescript
export const portfolioData = {
  personal: {
    name: 'Your Name',
    title: 'Your Title',
    bio: 'Your bio...',
    email: 'your@email.com',
    phone: '+1234567890',
    location: 'Your Location',
  },
  // ... rest of config
};
```

### Change Color Scheme

Modify Tailwind config in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      // Your custom colors
    }
  }
}
```

### Add New Sections

1. Create new component in `src/sections/`
2. Import in `App.tsx`
3. Add to main layout

## 📱 Sections

- **Hero** - Introduction with animated background
- **About** - Personal information and tagline
- **Skills** - Categorized skill display
- **Experience** - Work history timeline
- **Projects** - Project showcase
- **Contact** - Contact form with backend integration

## 🔐 Admin Dashboard

Access the admin dashboard at `http://localhost:3000`

**Features:**
- View all contact form messages
- See message statistics
- Mark messages as read/unread
- Secure password authentication
- Session management

## 🚢 Deployment

### Frontend (Vercel/Netlify)

1. Push to GitHub
2. Connect to Vercel/Netlify
3. Deploy

### Backend (Vercel)

**Note:** For Vercel deployment, you'll need to switch from SQLite to a cloud database like PostgreSQL or Supabase.

1. Update database code in `Backend/src/lib/db.ts`
2. Push to GitHub
3. Deploy on Vercel
4. Set environment variables

## 📝 Scripts

### Frontend

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Backend

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT © Sarvesh Yadav

## 👤 Author

**Sarvesh Yadav**

- Portfolio: [sarvesh843910.github.io](https://sarvesh843910.github.io)
- GitHub: [@sarvesh843910](https://github.com/sarvesh843910)
- LinkedIn: [Sarvesh Yadav](https://in.linkedin.com/in/sarvesh-yadav-96ab90258)
- Email: sarvesh843910@gmail.com
# Portfolio
